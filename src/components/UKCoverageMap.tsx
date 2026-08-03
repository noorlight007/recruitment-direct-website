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

// Configurable office locations
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
  {
    name: "Liverpool",
    coords: [-2.9916, 53.4084],
    url: "/locations/england/liverpool",
    labelPos: "left",
  },
  {
    name: "Sheffield",
    coords: [-1.4701, 53.3811],
    url: "/locations/england/sheffield",
    labelPos: "right",
  },
  {
    name: "Nottingham",
    coords: [-1.1581, 52.9548],
    url: "/locations/england/nottingham",
    labelPos: "right",
  },
  {
    name: "Leicester",
    coords: [-1.1398, 52.6369],
    url: "/locations/england/leicester",
    labelPos: "left",
  },
  {
    name: "Bristol",
    coords: [-2.5879, 51.4545],
    url: "/locations/england/bristol",
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
      { start: "Leeds", end: "Sheffield" },
      { start: "Manchester", end: "Liverpool" },
      { start: "Manchester", end: "Birmingham" },
      { start: "Sheffield", end: "Nottingham" },
      { start: "Nottingham", end: "Leicester" },
      { start: "Birmingham", end: "Leicester" },
      { start: "Birmingham", end: "Bristol" },
      { start: "Birmingham", end: "London" },
      { start: "Bristol", end: "Cardiff" },
      { start: "Bristol", end: "London" },
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

    // Maintain city glow timers to briefly brighten a pin when a pulse passes through
    const cityGlows = new Float32Array(offices.length);

    // Primary white light pulses — fast, continuous, varying speeds, staggered starting positions
    const primaryPulses: RouteTraveler[] = networkPaths.map((_, i) => ({
      currentPathIndex: i,
      progress: Math.random(),
      speed: 0.009 + Math.random() * 0.006, // fast speed
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

      // Force the land tone to dark charcoal (never light grey), regardless of the default
      // style's own landuse/background colouring, by recolouring any land-ish base layers.
      if (allLayers) {
        allLayers.forEach((layer) => {
          try {
            if (layer.type === "background") {
              map.setPaintProperty(layer.id, "background-color", "#141414");
            } else if (
              layer.type === "fill" &&
              /land|park/i.test(layer.id) &&
              !/water/i.test(layer.id)
            ) {
              map.setPaintProperty(layer.id, "fill-color", "#161616");
            }
          } catch (e) {
            // Ignore layers that don't support these paint properties
          }
        });
      }

      // Near-black water fill with a rich navy undertone (matches the reference image's ocean
      // tone) — sits beneath the coastline shadow, and doubles as the land/water hit-test mask
      // used when scattering the golden dust particles further down.
      map.addLayer(
        {
          id: "water-fill",
          type: "fill",
          source: "composite",
          "source-layer": "water",
          paint: {
            "fill-color": "#020B1A", // Dark navy sea background
            "fill-opacity": 0.96,
          },
        },
        firstLabelLayerId
      );

      // Layered Electric Pearl-White Coastline & Sapphire Blue Sea Shadow:
      // - Core edge: #F6F8FC (subtle refined pearl-white line, 2-3px)
      // - Soft outer white glow: #F6F8FC at very low opacity
      // - Deep sapphire-blue sea shadow/glow fading smoothly outwards.

      // Layer 1: Deepest sapphire-blue sea shadow (120–160px at very low opacity)
      map.addLayer(
        {
          id: "coastline-glow-bloom",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#078cff", // very deep sapphire shadow -> pure electric blue
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 120, 10, 160],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 90, 10, 120],
            "line-opacity": 0.15,
          },
        },
        firstLabelLayerId
      );

      // Layer 2: Deep sapphire-blue outer sea shadow (60–90px)
      map.addLayer(
        {
          id: "coastline-glow-outer",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#078cff", // deep sapphire -> pure electric blue
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 60, 10, 90],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 45, 10, 70],
            "line-opacity": 0.25,
          },
        },
        firstLabelLayerId
      );

      // Layer 3: Mid sapphire-blue sea glow (reflected light on water) (25–35px)
      map.addLayer(
        {
          id: "coastline-glow-mid",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#168fff", // vivid sapphire -> pure electric blue
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 25, 10, 35],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 18, 10, 28],
            "line-opacity": 0.35,
          },
        },
        firstLabelLayerId
      );

      // Layer 4: Soft outer white glow (8–12px)
      map.addLayer(
        {
          id: "coastline-glow-inner",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#ffffff", // pearl-white soft glow -> white glow
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 8, 10, 12],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 6, 10, 9],
            "line-opacity": 0.45,
          },
        },
        firstLabelLayerId
      );

      // Layer 5: Core edge (subtle refined pearl-white line)
      map.addLayer(
        {
          id: "coastline-glow-core",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#ffffff", // pearl-white core -> solid white core
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 1.2, 10, 2.2], // refined thin line
            "line-opacity": 0.95, // crisp white line
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

      // B. Shimmer Coastline Glow Opacity (subtle 2–3s shimmer/breathing travelling around the coastline)
      const bloomShimmer = Math.sin(nowSec * (2 * Math.PI / 3.0));
      const outerShimmer = Math.sin(nowSec * (2 * Math.PI / 2.5) + 1.0);
      const midShimmer = Math.sin(nowSec * (2 * Math.PI / 2.2) + 2.0);
      const innerShimmer = Math.sin(nowSec * (2 * Math.PI / 2.0) + 3.0);
      const coreShimmer = Math.sin(nowSec * (2 * Math.PI / 2.8) + 0.5);

      if (map.getLayer("coastline-glow-bloom")) {
        map.setPaintProperty("coastline-glow-bloom", "line-opacity", 0.15 + bloomShimmer * 0.02);
      }
      if (map.getLayer("coastline-glow-outer")) {
        map.setPaintProperty("coastline-glow-outer", "line-opacity", 0.25 + outerShimmer * 0.04);
      }
      if (map.getLayer("coastline-glow-mid")) {
        map.setPaintProperty("coastline-glow-mid", "line-opacity", 0.35 + midShimmer * 0.06);
      }
      if (map.getLayer("coastline-glow-inner")) {
        map.setPaintProperty("coastline-glow-inner", "line-opacity", 0.45 + innerShimmer * 0.05);
      }
      if (map.getLayer("coastline-glow-core")) {
        map.setPaintProperty("coastline-glow-core", "line-opacity", 0.95 + coreShimmer * 0.08);
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

      // D. Draw permanent fine white route lines with subtle AI-blue shadow
      networkPaths.forEach((path) => {
        try {
          const ptStart = mapRef.current!.project(offices[path.start].coords);
          const ptEnd = mapRef.current!.project(offices[path.end].coords);

          ctx.beginPath();
          ctx.moveTo(ptStart.x, ptStart.y);
          ctx.lineTo(ptEnd.x, ptEnd.y);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.24)";
          ctx.lineWidth = 1.0;
          ctx.shadowColor = "rgba(7, 140, 255, 0.4)";
          ctx.shadowBlur = 5;
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
          traveler.speed = 0.009 + Math.random() * 0.006; // Randomize next hop speed
        }

        const path = networkPaths[traveler.currentPathIndex];
        const start = offices[path.start].coords;
        const end = offices[path.end].coords;

        // Streak segment from progress - tailLength to progress
        const tailLength = 0.18;
        const tailProgress = Math.max(0, traveler.progress - tailLength);

        const headLng = start[0] + (end[0] - start[0]) * traveler.progress;
        const headLat = start[1] + (end[1] - start[1]) * traveler.progress;

        const tailLng = start[0] + (end[0] - start[0]) * tailProgress;
        const tailLat = start[1] + (end[1] - start[1]) * tailProgress;

        try {
          const ptHead = mapRef.current!.project([headLng, headLat]);
          const ptTail = mapRef.current!.project([tailLng, tailLat]);

          ctx.beginPath();
          ctx.moveTo(ptTail.x, ptTail.y);
          ctx.lineTo(ptHead.x, ptHead.y);

          // Draw comets with gradient fading backwards
          const grad = ctx.createLinearGradient(ptTail.x, ptTail.y, ptHead.x, ptHead.y);
          grad.addColorStop(0, "rgba(255, 255, 255, 0)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0.95)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.6;
          ctx.shadowColor = "#ffffff";
          ctx.shadowBlur = 6;
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
            background: linear-gradient(180deg, #030303 0%, #030303 80%, #08152c 100%); /* 80% matte black to 20% deep navy-blue */
            padding: 100px 24px; /* Spacious vertical padding for premium breathing room */
          }

          /* Dedicated Locations Full Page Wrapper */
          .locations-page-section {
            position: relative;
            width: 100%;
            height: calc(100vh - 56px); /* minus top bar on mobile */
            overflow: hidden;
            background: #020B1A;
          }

          @media (min-width: 992px) {
            .locations-page-section {
              height: auto;
              min-height: 850px;
              padding: 60px 24px 100px;
              background: linear-gradient(180deg, #030303 0%, #030303 80%, #08152c 100%);
            }
          }

          /* Ensure full screen map container when not embedded */
          .locations-page-section #map-container {
            width: 100%;
            height: 100%;
            border-radius: 0;
            box-shadow: none;
            animation: none;
            background: #020B1A;
          }

          @media (min-width: 992px) {
            .locations-page-section #map-container {
              height: 800px;
              border-radius: 24px;
              box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 45px rgba(0, 175, 255, 0.18);
              animation: floatMap 12s ease-in-out infinite;
              background: #050505;
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
            background: radial-gradient(circle at top, rgba(0, 95, 255, 0.08), transparent 60%),
                        radial-gradient(circle at bottom, rgba(0, 65, 180, 0.10), transparent 65%);
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
            background: #050505; /* Matches deep black background of the section */
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

          /* Refined Gold City Nodes */
          :root {
            --rd-gold: #d8b45b;
            --rd-gold-light: #ffe5a2;
            --rd-gold-dark: #9b7428;
          }

          .rd-city-node {
            display: block;
            width: 38px;
            height: 38px;
            overflow: visible;
          }

          .rd-city-node__outer {
            fill: rgba(216, 180, 91, 0.11);
            stroke: rgba(216, 180, 91, 0.56);
            stroke-width: 1.5px;
            filter: url("#rd-gold-node-glow");
            transform-origin: center;
            animation: rd-gold-breathe 3.4s ease-in-out infinite;
          }

          .rd-city-node__ring {
            fill: rgba(3, 12, 26, 0.9);
            stroke: var(--rd-gold);
            stroke-width: 2.2px;
            filter: url("#rd-gold-ring-glow");
          }

          .rd-city-node__centre {
            fill: var(--rd-gold-light);
            stroke: #ffffff;
            stroke-width: 1px;
            filter: url("#rd-gold-centre-glow");
          }

          @keyframes rd-gold-breathe {
            0% {
              transform: scale(0.92);
              opacity: 0.85;
            }
            50% {
              transform: scale(1.08);
              opacity: 1.0;
            }
            100% {
              transform: scale(0.92);
              opacity: 0.85;
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
            width: 64px;
            height: 1px;
            margin: 0 auto;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.7), transparent);
          }

          .nationwide-heading {
            display: block;
            font-size: 15px;
            font-weight: 700;
            color: #D4AF37;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            margin: 18px 0 10px;
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
          <filter id="rd-gold-node-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="rd-gold-ring-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="rd-gold-centre-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.0" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
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
                  if (isEmbed) {
                    handleCityClick(office);
                  } else {
                    const cityData = getCityData(office.name);
                    setSelectedOffice(office);
                    setSelectedCityData(cityData);
                    if (mapRef.current) {
                      mapRef.current.flyTo({
                        center: office.coords,
                        zoom: 6.8,
                        duration: 1000,
                        pitch: 0,
                        bearing: 0
                      });
                    }
                  }
                }}
              >
                {/* City hub: Refined Champagne-Gold Node */}
                <svg width="38" height="38" viewBox="0 0 38 38" className="rd-city-node relative select-none pointer-events-none" style={{ transition: "transform 0.15s ease-out" }}>
                  <circle className="rd-city-node__outer" cx="19" cy="19" r="14" />
                  <circle className="rd-city-node__ring" cx="19" cy="19" r="7.2" />
                  <circle className="rd-city-node__centre" cx="19" cy="19" r="3.0" />
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

          {/* Premium Floating Info Card (shown when isEmbed is false on Locations page) */}
          {!isEmbed && (
            <div className="absolute bottom-6 left-4 right-4 lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 lg:w-[480px] z-20 bg-[#030c1b]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl transition-all duration-300">
              {selectedOffice && selectedCityData ? (
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-white text-xl font-bold tracking-wide flex items-center gap-2">
                      {selectedCityData.city}
                      <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full">
                        {selectedCityData.country}
                      </span>
                    </h3>
                    <p className="text-white/70 text-xs mt-1.5 leading-relaxed line-clamp-2">
                      {selectedCityData.metaDescription}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/job-search?q=${encodeURIComponent(selectedCityData.city)}`}
                      className="flex-1 bg-gradient-to-r from-[#0A7CFF] to-[#2563EB] hover:from-[#2563EB] hover:to-[#0A7CFF] text-white text-xs font-bold py-3 px-4 rounded-xl text-center shadow-[0_4px_12px_rgba(10,124,255,0.3)] transition-all active:scale-[0.98] duration-200"
                    >
                      View Jobs
                    </Link>
                    <Link
                      href={selectedCityData.path}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold py-3 px-4 rounded-xl text-center transition-all active:scale-[0.98] duration-200"
                    >
                      View City Page
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 flex flex-col items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]" />
                  <p className="text-white/60 text-sm font-medium tracking-wide text-center">
                    Tap a city to explore recruitment services
                  </p>
                </div>
              )}
            </div>
          )}

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
