"use client";

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { cities, CityPageData } from "@/data/cities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

// Interface for office location config
interface OfficeLocation {
  name: string;
  coords: [number, number]; // [lng, lat]
  url: string;
  labelPos: "left" | "right";
}

// ======================================================
// FLAGSHIP MAP LOCATIONS (12 ONLY)
// SEO pages for Liverpool, Sheffield, Nottingham,
// Leicester and Bristol remain live but are NOT shown
// on the homepage map.
// ======================================================

const offices: OfficeLocation[] = [
  {
    name: "London",
    coords: [-0.1278, 51.5074],
    url: "/locations/england/london",
    labelPos: "right",
  },
  {
    name: "Cardiff",
    coords: [-3.1791, 51.4816],
    url: "/locations/wales/cardiff",
    labelPos: "left",
  },
  {
    name: "Birmingham",
    coords: [-1.8904, 52.4862],
    url: "/locations/england/birmingham",
    labelPos: "right",
  },
  {
    name: "Manchester",
    coords: [-2.2426, 53.4808],
    url: "/locations/england/manchester",
    labelPos: "left",
  },
  {
    name: "Leeds",
    coords: [-1.5491, 53.8008],
    url: "/locations/england/leeds",
    labelPos: "right",
  },
  {
    name: "Newcastle",
    coords: [-1.6178, 54.9783],
    url: "/locations/england/newcastle",
    labelPos: "right",
  },
  {
    name: "Edinburgh (HO)",
    coords: [-3.1883, 55.9533],
    url: "/locations/scotland/edinburgh",
    labelPos: "right",
  },
  {
    name: "Glasgow",
    coords: [-4.2518, 55.8642],
    url: "/locations/scotland/glasgow",
    labelPos: "left",
  },
  {
    name: "Inverness",
    coords: [-4.2247, 57.4778],
    url: "/locations/scotland/inverness",
    labelPos: "left",
  },
  {
    name: "Aberdeen",
    coords: [-2.0981, 57.1497],
    url: "/locations/scotland/aberdeen",
    labelPos: "right",
  },
  {
    name: "Belfast",
    coords: [-5.9301, 54.5973],
    url: "/locations/ireland/belfast",
    labelPos: "left",
  },
  {
    name: "Dublin",
    coords: [-6.2603, 53.3498],
    url: "/locations/ireland/dublin",
    labelPos: "left",
  },
];

// Helper to format the tooltip name
const formatTooltipName = (name: string) => {
  if (name.includes("(Head Office)") || name.includes("(HO)")) {
    return `Edinburgh<br/><span style="font-size: 12px; font-weight: 500; opacity: 0.8; display: block; margin-top: 2px;">(Head Office)</span>`;
  }
  return name;
};

// Handcrafted responsive center and zoom defaults to frame the UK perfectly inside the smaller container
// Increased map scale by 20% (zoom +0.26) and re-centered to make the UK more dominant and keep Scotland, Cardiff, and London visible.
const getMapDefaults = (width?: number) => {
  const currentWidth = width ?? (typeof window !== "undefined" ? window.innerWidth : 1024);
  let zoom = 5.41;
  let center: [number, number] = [-3.8, 55.00];
  if (currentWidth < 360) zoom = 3.91;
  else if (currentWidth < 480) zoom = 4.16;
  else if (currentWidth < 600) zoom = 4.36;
  else if (currentWidth < 768) zoom = 4.56;
  else if (currentWidth < 992) zoom = 4.76;
  else if (currentWidth < 1200) zoom = 5.20;
  return {
    center,
    zoom,
  };
};

interface UKCoverageMapProps {
  isEmbed?: boolean;
}

const getCityData = (officeName: string): CityPageData | null => {
  const cleanName = officeName.replace(" (HO)", "").replace(" (Head Office)", "").trim();
  return cities.find((c) => c.city.toLowerCase() === cleanName.toLowerCase()) || null;
};

export default function UKCoverageMap({ isEmbed = true }: UKCoverageMapProps) {
  const router = useRouter();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const activePopupRef = useRef<mapboxgl.Popup | null>(null);

  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation | null>(null);
  const [selectedCityData, setSelectedCityData] = useState<CityPageData | null>(null);

  // Handle clicking on the interactive sidebar city buttons
  const handleCityClick = (office: OfficeLocation) => {
    router.push(office.url);
  };

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  // Reset map view to fit defaults
  const handleResetView = () => {
    if (!mapRef.current) return;

    // Clear active popup
    if (activePopupRef.current) {
      activePopupRef.current.remove();
    }

    const containerWidth = mapContainerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1024);
    const defaults = getMapDefaults(containerWidth);
    mapRef.current.flyTo({
      center: defaults.center,
      zoom: defaults.zoom,
      pitch: 0,
      bearing: 0,
      duration: 1500,
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current || !canvasRef.current) return;

    let cleanupMap: (() => void) | null = null;

    // Lazy-load: the Mapbox instance (style, sources, tile requests, animation loop) is only
    // created once this section actually scrolls into (or near) the viewport, rather than
    // eagerly on mount — everything below runs exactly once, on first intersection.
    const initMap = (): (() => void) | undefined => {
      if (!mapContainerRef.current || !canvasRef.current) return undefined;

      const initialWidth = mapContainerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1024);
      const defaults = getMapDefaults(initialWidth);

      // 1. Initialize Mapbox using standard Dark-v11 style in a flat 2D projection
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      projection: { name: "mercator" } as any, // Force flat Mercator projection so Scotland is not distorted by Globe curvature
      center: defaults.center,
      zoom: defaults.zoom,
      pitch: 0,
      bearing: 0,
      interactive: !isEmbed,
      attributionControl: false,
    });

    mapRef.current = map;

    // 2. Configure navigation controls/behaviors based on isEmbed
    if (isEmbed) {
      map.scrollZoom.disable();
      map.boxZoom.disable();
      map.dragRotate.disable();
      map.dragPan.disable();
      map.keyboard.disable();
      map.doubleClickZoom.disable();
      map.touchZoomRotate.disable();
    } else {
      map.scrollZoom.enable();
      map.boxZoom.enable();
      map.dragPan.enable();
      map.keyboard.enable();
      map.doubleClickZoom.enable();
      map.touchZoomRotate.enable();
      map.dragRotate.disable(); // Lock orientation
      map.touchZoomRotate.disableRotation(); // Lock rotation on pinch
      
      // Fit UK & Ireland bounds initially
      const ukBounds: [[number, number], [number, number]] = [
        [-10.5, 49.8],
        [2.5, 58.6]
      ];
      map.fitBounds(ukBounds, {
        padding: {
          top: typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 100,
          bottom: typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 100,
          left: typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 100,
          right: typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 100
        },
        animate: false
      });
      
      // Background click resets city selection
      map.on("click", (e) => {
        const target = e.originalEvent.target as HTMLElement;
        if (!target.closest("[id^='marker-']")) {
          setSelectedOffice(null);
          setSelectedCityData(null);
          map.fitBounds(ukBounds, {
            padding: {
              top: typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 100,
              bottom: typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 100,
              left: typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 100,
              right: typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 100
            },
            duration: 1000
          });
        }
      });
    }

    // 3. Initialize ResizeObserver to dynamically update map layout
    const resizeObserver = new ResizeObserver((entries) => {
      if (mapRef.current) {
        mapRef.current.resize();
        if (isEmbed) {
          for (let entry of entries) {
            const width = entry.contentRect.width;
            const newDefaults = getMapDefaults(width);
            mapRef.current.setZoom(newDefaults.zoom);
            baseCenter = newDefaults.center;
          }
        } else {
          const ukBounds: [[number, number], [number, number]] = [
            [-10.5, 49.8],
            [2.5, 58.6]
          ];
          mapRef.current.fitBounds(ukBounds, {
            padding: {
              top: typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 100,
              bottom: typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 100,
              left: typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 100,
              right: typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 100
            },
            duration: 500
          });
        }
      }
    });
    resizeObserver.observe(mapContainerRef.current);

    // 3.5 Performance: Pause animations when off-screen using IntersectionObserver
    let isIntersecting = true;
    let isRunning = true;
    const observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        const wasIntersecting = isIntersecting;
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !wasIntersecting && !isRunning) {
          isRunning = true;
          tick();
        }
      }
    }, { threshold: 0.05 });
    observer.observe(mapContainerRef.current);

    // 5. Initialize Data Flow Packets along office connections
    interface RouteTraveler {
      currentPathIndex: number;
      progress: number;
      speed: number;
      size: number;
    }

    const cityIndexMap: Record<string, number> = {};
    offices.forEach((office, idx) => {
      const cleanName = office.name.replace(" (HO)", "").replace(" (Head Office)", "").trim();
      cityIndexMap[cleanName] = idx;
    });

    const networkRouteNames = [
      { start: "Inverness", end: "Aberdeen" },
      { start: "Inverness", end: "Glasgow" },
      { start: "Aberdeen", end: "Edinburgh" },
      { start: "Glasgow", end: "Edinburgh" },
      { start: "Edinburgh", end: "Newcastle" },
      { start: "Newcastle", end: "Leeds" },
      { start: "Leeds", end: "Manchester" },
      { start: "Manchester", end: "Birmingham" },
      { start: "Birmingham", end: "London" },
      { start: "Cardiff", end: "London" },
      { start: "Glasgow", end: "Belfast" },
      { start: "Belfast", end: "Dublin" },
      { start: "Belfast", end: "Manchester" },
      { start: "Dublin", end: "Manchester" },
      { start: "Dublin", end: "Cardiff" }
    ];

    const networkPaths = networkRouteNames.map(route => {
      const startIdx = cityIndexMap[route.start];
      const endIdx = cityIndexMap[route.end];
      return { start: startIdx, end: endIdx };
    }).filter(p => p.start !== undefined && p.end !== undefined);

    // Background particles config
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }> = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        size: 1 + Math.random(), // 1-2px
        speed: 0.05 + Math.random() * 0.05,
        opacity: 0.02 + Math.random() * 0.06, // max 0.08
      });
    }

    // Maintain city glow timers to briefly brighten a pin when a pulse passes through
    const cityGlows = new Float32Array(offices.length);

    // Primary white light pulses — fast, continuous, varying speeds, staggered starting positions
    const primaryPulses: RouteTraveler[] = networkPaths.map((_, i) => ({
      currentPathIndex: i,
      progress: Math.random(),
      speed: 0.015 + Math.random() * 0.010, // Fast speed
      size: 1.5
    }));

    let animationFrameId: number;
    const cameraStartTime = Date.now();
    let pulseStep = 0;
    let baseCenter = defaults.center;

    // 6. Setup Custom Layers and Animations on map load
    map.on("load", () => {
      const allLayers = map.getStyle().layers;

      // Add NASA Black Marble raster source and layer to show city lights at night
      map.addSource("black-marble", {
        type: "raster",
        tiles: [
          "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg"
        ],
        tileSize: 256,
        attribution: "NASA GIBS"
      });

      const firstLayerId = allLayers[0]?.id;
      map.addLayer(
        {
          id: "black-marble-layer",
          type: "raster",
          source: "black-marble",
          paint: {
            "raster-opacity": 0.85
          }
        },
        firstLayerId
      );

      // D. HIDE ALL BUILT-IN MAP LABELS (CITIES, TOWNS, STATES, COUNTRIES, POIs, ROADS, ETC.) TO KEEP THE MAP CLEAN
      if (allLayers) {
        allLayers.forEach((layer) => {
          if (layer.type === "symbol") {
            try {
              map.setLayoutProperty(layer.id, "visibility", "none");
            } catch (e) {
              // Ignore layers that don't support visibility modifications
            }
          }
        });
      }

      // Find the first symbol layer to insert glow layers beneath labels
      let firstLabelLayerId: string | undefined;
      if (allLayers) {
        for (let i = 0; i < allLayers.length; i++) {
          if (
            allLayers[i].type === "symbol" &&
            allLayers[i].layout &&
            "text-field" in (allLayers[i].layout as Record<string, unknown>)
          ) {
            firstLabelLayerId = allLayers[i].id;
            break;
          }
        }
      }

      // Force the land tone to #070707 and water to #031226
      if (allLayers) {
        allLayers.forEach((layer) => {
          try {
            if (layer.type === "background") {
              map.setPaintProperty(layer.id, "background-color", "#070707");
            } else if (
              layer.type === "fill" &&
              /land|park/i.test(layer.id) &&
              !/water/i.test(layer.id)
            ) {
              map.setPaintProperty(layer.id, "fill-color", "#070707");
            }
          } catch (e) {
            // Ignore layers that don't support these paint properties
          }
        });
      }

      // Sea fill: #031226 at 0.90 opacity to blend with the container background navy gradient
      map.addLayer(
        {
          id: "water-fill",
          type: "fill",
          source: "composite",
          "source-layer": "water",
          paint: {
            "fill-color": "#031226",
            "fill-opacity": 0.90,
          },
        },
        firstLabelLayerId
      );

      // Coastline Outer Shadow: #1E6DFF, blur 40px, opacity 0.18
      map.addLayer(
        {
          id: "coastline-outer-shadow",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#1E6DFF",
            "line-width": 40,
            "line-blur": 40,
            "line-opacity": 0.18,
          },
        },
        firstLabelLayerId
      );

      // Coastline Outer Glow: #39B8FF, blur 10px, opacity 0.35
      map.addLayer(
        {
          id: "coastline-outer-glow",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#39B8FF",
            "line-width": 10,
            "line-blur": 10,
            "line-opacity": 0.35,
          },
        },
        firstLabelLayerId
      );

      // Coastline Core Line: #FFFFFF, width 1.6px
      map.addLayer(
        {
          id: "coastline-core",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#FFFFFF",
            "line-width": 1.6,
            "line-opacity": 1.0,
          },
        },
        firstLabelLayerId
      );
      // Start animations
      tick();
    });

    // 8. Animation Loop (Traveling light packets, camera drift)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let lastCameraState = { zoom: -1, lng: 0, lat: 0 };
    interface ActiveWave {
      cityIdx: number;
      startTime: number;
      duration: number;
      maxRadius: number;
    }
    const activeWaves: ActiveWave[] = [];
    let lastWaveTriggerTime = 0;
    let nextCityWaveIdx = 0;
    const waveInterval = 2200; // Trigger staggered city waves every 2.2 seconds

    const tick = () => {
      if (!ctx || !canvas || !mapRef.current) return;

      // Performance: Pause requesting frame updates if map is off-screen
      if (!isIntersecting) {
        isRunning = false;
        return;
      }

      // Adjust Canvas size for High DPI
      const width = mapContainerRef.current?.clientWidth || 0;
      const height = mapContainerRef.current?.clientHeight || 0;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        // Reset cached positions on resize to force re-projection
        lastCameraState = { zoom: -1, lng: 0, lat: 0 };
      }

      ctx.clearRect(0, 0, width, height);

      const zoom = mapRef.current.getZoom();
      const center = mapRef.current.getCenter();
      const cameraChanged = lastCameraState.zoom !== zoom ||
        lastCameraState.lng !== center.lng ||
        lastCameraState.lat !== center.lat;

      if (cameraChanged) {
        lastCameraState = { zoom, lng: center.lng, lat: center.lat };
      }

      // Keep map static, stable, and flat (pitch: 0, bearing: 0) to ensure accurate proportions.
      if (isEmbed) {
        map.setCenter(baseCenter);
      }
      map.setPitch(0);
      map.setBearing(0);

      const now = Date.now();
      const nowSec = now / 1000;

      // Draw background particles
      ctx.fillStyle = "#6EC1FF";
      particles.forEach((p) => {
        // Slow float upwards
        p.y -= p.speed * 0.003;
        if (p.y < 0) p.y = 1;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0; // reset

      // B. Shimmer Coastline Glow Opacity very subtly every 4 seconds
      const shimmerVal = Math.sin(nowSec * (2 * Math.PI / 4.0));
      if (map.getLayer("coastline-outer-shadow")) {
        map.setPaintProperty("coastline-outer-shadow", "line-opacity", 0.18 + shimmerVal * 0.02);
      }
      if (map.getLayer("coastline-outer-glow")) {
        map.setPaintProperty("coastline-outer-glow", "line-opacity", 0.35 + shimmerVal * 0.04);
      }
      if (map.getLayer("coastline-core")) {
        map.setPaintProperty("coastline-core", "line-opacity", 0.95 + shimmerVal * 0.05);
      }

      // B.5 Decay city glow states
      for (let i = 0; i < cityGlows.length; i++) {
        if (cityGlows[i] > 0) {
          cityGlows[i] -= 0.055; // Decay over ~18 frames (~0.3s)
          if (cityGlows[i] < 0) cityGlows[i] = 0;
        }
      }

      // C. Update custom HTML markers positions dynamically
      offices.forEach((office, idx) => {
        const markerId = `marker-${office.name.replace(/[^a-zA-Z0-9]/g, "-")}`;
        const markerEl = document.getElementById(markerId);
        if (markerEl && mapRef.current) {
          try {
            const pt = mapRef.current.project(office.coords);
            markerEl.style.transform = `translate(-50%, -50%) translate(${pt.x}px, ${pt.y}px)`;
            
            // Briefly scale the node slightly when reached by a network pulse
            const nodeEl = markerEl.querySelector(".rd-city-node") as SVGSVGElement | null;
            if (nodeEl) {
              const glow = cityGlows[idx];
              if (glow > 0.01) {
                nodeEl.style.transform = `scale(${1 + glow * 0.25})`;
              } else {
                nodeEl.style.transform = "";
              }
            }
          } catch (e) {
            markerEl.style.transform = `translate(-50%, -50%) translate(-9999px, -9999px)`;
          }
        }
      });

      // D. Draw permanent fine white route lines with subtle blue shadow
      networkPaths.forEach((path) => {
        try {
          const ptStart = mapRef.current!.project(offices[path.start].coords);
          const ptEnd = mapRef.current!.project(offices[path.end].coords);

          ctx.beginPath();
          ctx.moveTo(ptStart.x, ptStart.y);
          ctx.lineTo(ptEnd.x, ptEnd.y);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.28)"; // Opacity 0.28
          ctx.lineWidth = 1.0; // Width 1px
          ctx.shadowColor = "rgba(56, 189, 248, 0.35)"; // Blue shadow
          ctx.shadowBlur = 4; // Blur 4px
          ctx.stroke();
          ctx.shadowBlur = 0; // reset shadow
        } catch (e) {
          // ignore projection boundary cases
        }
      });

      // E. Render high-speed white light streaks (fibre-optic comets)
      primaryPulses.forEach((traveler) => {
        traveler.progress += traveler.speed;
        if (traveler.progress >= 1) {
          traveler.progress = 0;
          const arrivedPath = networkPaths[traveler.currentPathIndex];
          cityGlows[arrivedPath.end] = 1.0; // Trigger hub bloom
          traveler.speed = 0.015 + Math.random() * 0.010; // Randomize next hop speed (Fast)
        }

        const path = networkPaths[traveler.currentPathIndex];
        const start = offices[path.start].coords;
        const end = offices[path.end].coords;

        try {
          const ptStart = mapRef.current!.project(start);
          const ptEnd = mapRef.current!.project(end);

          const dx = ptEnd.x - ptStart.x;
          const dy = ptEnd.y - ptStart.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // tail length in progress units (14px tail)
          const tailProg = dist > 0 ? (14 / dist) : 0.1;
          const tailProgress = Math.max(0, traveler.progress - tailProg);

          const headX = ptStart.x + dx * traveler.progress;
          const headY = ptStart.y + dy * traveler.progress;

          const tailX = ptStart.x + dx * tailProgress;
          const tailY = ptStart.y + dy * tailProgress;

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(headX, headY);

          // Draw comets with gradient fading backwards
          const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
          grad.addColorStop(0, "rgba(255, 255, 255, 0)");
          grad.addColorStop(1, "rgba(255, 255, 255, 1.0)"); // White packets only

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2.0; // Width 2px
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 5; // Blur 5px
          ctx.stroke();
          ctx.shadowBlur = 0; // reset shadow
        } catch (e) {
          // ignore projection boundary cases
        }
      });

      animationFrameId = requestAnimationFrame(tick);
    };

      return () => {
        resizeObserver.disconnect();
        observer.disconnect();
        cancelAnimationFrame(animationFrameId);
        if (activePopupRef.current) {
          activePopupRef.current.remove();
        }
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    };

    // Eagerly mount the map if it's the dedicated page, else lazy-load it on scroll.
    if (!isEmbed) {
      cleanupMap = initMap() ?? null;
      return () => {
        if (cleanupMap) cleanupMap();
      };
    } else {
      const lazyLoadObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            cleanupMap = initMap() ?? null;
            lazyLoadObserver.disconnect();
          }
        },
        { threshold: 0.01, rootMargin: "200px 0px" }
      );
      lazyLoadObserver.observe(mapContainerRef.current);

      return () => {
        lazyLoadObserver.disconnect();
        if (cleanupMap) cleanupMap();
      };
    }
  }, [isEmbed]);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Premium UK Coverage Map Styles - Mapbox GL JS */
           .uk-map-section {
            position: relative;
            width: 100%;
            min-height: 800px;
            overflow: hidden;
            background: linear-gradient(180deg, #020202 0%, #04070D 50%, #071A33 100%);
            padding: 100px 24px;
          }

          /* Dedicated Locations Full Page Wrapper */
          .locations-page-section {
            position: relative;
            width: 100%;
            height: calc(100vh - 56px); /* minus top bar on mobile */
            overflow: hidden;
            background: linear-gradient(180deg, #020202 0%, #04070D 50%, #071A33 100%);
          }

          @media (min-width: 992px) {
            .locations-page-section {
              height: auto;
              min-height: 850px;
              padding: 60px 24px 100px;
              background: linear-gradient(180deg, #020202 0%, #04070D 50%, #071A33 100%);
            }
          }

          /* Ensure full screen map container when not embedded */
          .locations-page-section #map-container {
            width: 100%;
            height: 100%;
            border-radius: 0;
            box-shadow: none;
            animation: none;
            background: linear-gradient(180deg, #020202 0%, #04070D 50%, #071A33 100%);
          }

          @media (min-width: 992px) {
            .locations-page-section #map-container {
              height: 800px;
              border-radius: 24px;
              box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(0, 175, 255, 0.18);
              animation: floatMap 12s ease-in-out infinite;
              background: linear-gradient(180deg, #020202 0%, #04070D 50%, #071A33 100%);
            }
          }

          /* Invisible Touch Target for Markers */
          .city-marker-touch-target {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Homepage Mobile overlay to catch taps */
          .mobile-map-overlay {
            display: none;
            position: absolute;
            inset: 0;
            z-index: 30;
            cursor: pointer;
            background: transparent;
          }

          @media (max-width: 991px) {
            .mobile-map-overlay {
              display: block;
            }
          }

          .background-gradient {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(20, 120, 255, 0.10) 0%, transparent 60%);
            pointer-events: none;
            z-index: 1;
          }

          .map-wrapper {
            max-width: 1100px; /* Expanded from 800px to 1100px for a premium wide-screen look */
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          #map-container {
            position: relative;
            width: 100%;
            height: 800px; /* Increased from 640px to 800px to establish hero presence */
            border-radius: 24px;
            overflow: hidden;
            border: none; /* Removed gold border to blend naturally */
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), /* Deeper shadow for borderless blend */
                        0 0 45px rgba(0, 175, 255, 0.18); /* Rich electric blue outer glow */
            animation: floatMap 12s ease-in-out infinite;
            background: linear-gradient(180deg, #020202 0%, #04070D 50%, #071A33 100%);
          }

          #map {
            width: 100%;
            height: 100%;
          }

          /* Floating Map Animation */
          @keyframes floatMap {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }

          /* Premium Gold City Nodes */
          .rd-city-node {
            display: block;
            width: 38px;
            height: 38px;
            overflow: visible;
            transform-origin: center;
            animation: rd-gold-pulse 4.5s ease-in-out infinite;
          }

          .rd-city-node__outer {
            fill: rgba(212, 175, 55, 0.35);
            filter: blur(6px); /* 12px blur diameter */
          }

          .rd-city-node__ring {
            fill: none;
            stroke: url(#metallic-gold-grad);
            stroke-width: 1.5px;
          }

          .rd-city-node__centre {
            fill: #ffffff;
          }

          @keyframes rd-gold-pulse {
            0% {
              transform: scale(1.00);
            }
            50% {
              transform: scale(1.10);
            }
            100% {
              transform: scale(1.00);
            }
          }

          /* Mapbox Popup Overrides */
          .mapboxgl-popup {
            z-index: 100;
          }

          .mapboxgl-popup-content {
            background: #060606 !important;
            color: #ffffff !important;
            padding: 12px 18px !important;
            border-radius: 10px !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            border: 1px solid rgba(255, 255, 255, 0.10) !important;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.45) !important;
            text-align: center !important;
          }

          .mapboxgl-popup-tip {
            border-top-color: #060606 !important;
          }

          /* Mapbox Controls Hidden */
          .mapboxgl-ctrl {
            display: none !important;
          }

          /* Minimal Nationwide Recruitment CTA — gold heading, white number, thin gold dividers */
          .nationwide-cta {
            padding: 0 20px;
            text-align: center;
          }

          .nationwide-divider {
            width: 180px;
            height: 1px;
            margin: 0 auto;
            background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          }

          .nationwide-heading {
            display: block;
            font-size: 11px;
            font-weight: 600;
            color: #D4AF37;
            letter-spacing: 0.40em;
            text-transform: uppercase;
            margin: 18px 0 10px;
            font-family: var(--font-sans), Inter, sans-serif;
          }

          .nationwide-phone {
            display: block;
            font-size: 32px;
            font-weight: 800;
            text-decoration: none;
            color: #ffffff;
            letter-spacing: 0.5px;
            margin-bottom: 18px;
            transition: opacity 0.25s ease;
          }

          .nationwide-phone:hover {
            opacity: 0.8;
          }

          /* Spacing and divider style for City links */
          .city-links-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 12px 18px;
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
          }

          .city-link {
            font-size: 17px;
            font-weight: 600;
            color: #ffffff;
            text-decoration: none;
            transition: color 0.25s, transform 0.25s;
            position: relative;
            padding-bottom: 3px;
          }

          .city-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1.5px;
            bottom: 0;
            left: 0;
            background-color: #ffffff;
            transition: width 0.25s ease;
          }

          .city-link:hover {
            color: #ffffff;
          }

          .city-link:hover::after {
            width: 100%;
          }

          .city-divider {
            color: rgba(255, 255, 255, 0.4);
            font-weight: 400;
            user-select: none;
          }

          /* Responsive City Selector Panel */
          .city-selector-panel {
            transition: all 0.3s ease-in-out;
          }

          /* Permanent city label responsiveness — clean white, small, premium and consistent */
          .city-label-text {
            font-size: 12px;
            color: #ffffff;
            font-weight: 600;
            transition: font-size 0.25s ease, left 0.25s ease, right 0.25s ease;
          }

          /* Edinburgh shows "(Head Office)" where space allows, collapsing to just the city
             name on narrow mobile widths to avoid overlap */
          .city-label-suffix {
            display: inline;
            font-weight: 500;
            opacity: 0.75;
          }

          @media (max-width: 768px) {
            .city-label-suffix {
              display: none;
            }
          }

          .label-left {
            right: 30px;
            top: 50%;
            transform: translateY(-50%);
          }

          .label-right {
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 9 / 13 !important; /* Taller aspect ratio */
              max-height: 720px !important; 
              min-height: 480px !important;
            }
          }

          @media (max-width: 992px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 9 / 12 !important; /* Taller aspect ratio */
              max-height: 640px !important; 
              min-height: 420px !important; 
              border-radius: 18px;
            }
            .nationwide-heading { font-size: 13px; }
            .nationwide-phone { font-size: 28px; }

            /* Reposition selector panel to a horizontal scrolling bar on tablet & mobile */
            .city-selector-panel {
              left: 16px !important;
              right: 16px !important;
              top: auto !important;
              bottom: 16px !important;
              transform: none !important;
              flex-direction: row !important;
              gap: 12px !important;
              padding: 8px 8px !important;
              border-radius: 12px !important;
              width: auto !important;
              max-width: none !important;
              align-items: center !important;
              overflow-x: auto !important;
              white-space: nowrap !important;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .city-selector-panel::-webkit-scrollbar {
              display: none;
            }
            .city-selector-panel > div {
              flex-shrink: 0 !important;
            }

            .city-selector-panel span {
              display: inline-block !important;
              font-size: 10px !important;
            }
          }

          @media (max-width: 768px) {
            .uk-map-section { padding: 40px 18px; min-height: auto; } /* ~16-20px side margins so the map nearly fills the mobile panel */
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 3.8 !important; /* Taller aspect ratio for mobile viewports */
              max-height: 560px !important; 
              min-height: 380px !important; 
              border-radius: 14px;
            }
            .nationwide-heading { font-size: 12px; margin: 14px 0 8px; }
            .nationwide-phone { font-size: 24px; }
            .city-link { font-size: 15px; }

            .city-selector-panel {
              left: 10px !important;
              right: 10px !important;
              bottom: 10px !important;
              padding: 6px 12px !important;
              gap: 10px !important;
              border-radius: 10px !important;
            }

            .city-selector-panel span {
              font-size: 9px !important;
            }

            .city-label-text {
              font-size: 8.5px !important;
              font-weight: 600 !important; /* Semi-bold weight */
            }

            .label-left {
              right: 26px !important;
            }

            .label-right {
              left: 26px !important;
            }
          }

          @media (max-width: 480px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 3.8 !important; /* Taller aspect ratio for mobile viewports */
              max-height: 520px !important; 
              min-height: 340px !important; 
            }
            .nationwide-heading { font-size: 11px; }
            .nationwide-phone { font-size: 20px; }
            .city-links-container { gap: 8px 12px; }
            .city-link { font-size: 14px; }

            .city-selector-panel {
              left: 8px !important;
              right: 8px !important;
              bottom: 8px !important;
              padding: 6px 10px !important;
              gap: 8px !important;
            }

            .city-selector-panel span {
              font-size: 8.5px !important;
            }

            .city-label-text {
              font-size: 7.5px !important;
              font-weight: 600 !important; /* Semi-bold weight */
            }

            .label-left {
              right: 24px !important;
            }

            .label-right {
              left: 24px !important;
            }
          }
        `,
      }} />

      <svg className="absolute hidden" width="0" height="0">
        <defs>
          <linearGradient id="metallic-gold-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF2BF" stopOpacity="1" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#8E6A16" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* DEDICATED FULL PAGE LAYOUT (only when isEmbed={false}) */}
      {!isEmbed && (
        <>
          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* Mobile Top Bar */}
          <div className="lg:hidden h-14 w-full bg-[#020B1A]/85 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 z-20 relative select-none">
            <button 
              onClick={handleBack}
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors py-2"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <h1 className="text-white font-bold text-base tracking-wide absolute left-1/2 -translate-x-1/2">
              Locations
            </h1>
            <div className="w-10" />
          </div>
        </>
      )}

      <section className={isEmbed ? "uk-map-section" : "locations-page-section flex flex-col justify-between"}>
        {/* Desktop Page Title if not embedded */}
        {!isEmbed && (
          <div className="hidden lg:block max-w-7xl mx-auto px-4 mb-4 text-center pt-24">
            <h1 className="text-white text-4xl font-extrabold tracking-tight">Our Locations</h1>
            <p className="text-white/60 text-base mt-2">Explore our recruitment services across flagship cities in the UK and Ireland</p>
          </div>
        )}

        <div className="background-gradient"></div>
        <div className="map-wrapper w-full flex-1 lg:flex-initial relative flex flex-col justify-center">
          <div id="map-container" style={{ background: "linear-gradient(135deg, #000000 0%, #000000 80%, #0A1B3D 100%)" }}>
            <div ref={mapContainerRef} id="map" />
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }} />

            {/* Mobile tap overlay (only when isEmbed={true} and on mobile) */}
            {isEmbed && (
              <div 
                className="mobile-map-overlay"
                onClick={() => router.push("/locations")}
              />
            )}

            {/* Custom Projected React-rendered Markers positioned directly via JS projection in the animation loop */}
            {offices.map((office) => (
              <div
                key={office.name}
                id={`marker-${office.name.replace(/[^a-zA-Z0-9]/g, "-")}`}
                className="absolute z-10 cursor-pointer group city-marker-touch-target"
                style={{
                  left: 0,
                  top: 0,
                  transform: "translate(-50%, -50%) translate(-9999px, -9999px)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(office.url);
                }}
              >
                {/* City hub: Refined Champagne-Gold Node */}
                <svg width="38" height="38" viewBox="0 0 38 38" className="rd-city-node relative select-none pointer-events-none" style={{ transition: "transform 0.15s ease-out" }}>
                  <circle className="rd-city-node__outer" cx="19" cy="19" r="12" />
                  <circle className="rd-city-node__ring" cx="19" cy="19" r="7" />
                  <circle className="rd-city-node__centre" cx="19" cy="19" r="3.5" />
                </svg>
                
                {/* Premium Floating Tooltip on Hover */}
                <div className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-[#060606] text-white text-[12px] font-semibold py-1.5 px-3 rounded-lg border border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-center">
                  {office.name.includes("Edinburgh") ? (
                    <>
                      Edinburgh
                      <span className="block text-[10px] font-normal text-white/70 mt-0.5">(Head Office)</span>
                    </>
                  ) : (
                    office.name
                  )}
                  {/* Tooltip Tip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#060606]" />
                </div>

                {/* Permanent City Label */}
                <span 
                  className={`absolute font-bold text-white text-[12px] tracking-wide pointer-events-none select-none city-label-text ${office.labelPos === "left" ? "label-left" : "label-right"}`}
                  style={{
                    fontFamily: "var(--font-sans), Inter, sans-serif",
                    textShadow: "0 2px 4px rgba(0,0,0,1), 0 0 4px rgba(0,0,0,1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {office.name.replace(" (HO)", "").replace(" (Head Office)", "")}
                  {office.name.includes("Edinburgh") && (
                    <span className="city-label-suffix"> (Head Office)</span>
                  )}
                </span>
              </div>
            ))}
          </div>



          {/* Minimal Nationwide Recruitment CTA (Only on homepage or desktop locations view) */}
          {(isEmbed || !isEmbed) && (
            <div className={`nationwide-cta mt-16 ${!isEmbed ? "hidden lg:block" : ""}`}>
              <div className="nationwide-divider" />
              <span className="nationwide-heading">Nationwide Recruitment</span>
              <a href="tel:03450678022" className="nationwide-phone">
                0345 067 8022
              </a>
              <div className="nationwide-divider" />
            </div>
          )}
        </div>

        {/* Desktop Footer */}
        {!isEmbed && (
          <div className="hidden lg:block w-full">
            <Footer />
          </div>
        )}
      </section>
    </>
  );
}
