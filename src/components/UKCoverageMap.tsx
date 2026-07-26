"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/navigation";

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
    url: "/location/london",
    labelPos: "right",
  },
  {
    name: "Cardiff",
    coords: [-3.1791, 51.4816],
    url: "/location/cardiff",
    labelPos: "left",
  },
  {
    name: "Birmingham",
    coords: [-1.8904, 52.4862],
    url: "/location/birmingham",
    labelPos: "right",
  },
  {
    name: "Manchester",
    coords: [-2.2426, 53.4808],
    url: "/location/manchester",
    labelPos: "left",
  },
  {
    name: "Leeds",
    coords: [-1.5491, 53.8008],
    url: "/location/leeds",
    labelPos: "right",
  },
  {
    name: "Newcastle",
    coords: [-1.6178, 54.9783],
    url: "/location/newcastle",
    labelPos: "right",
  },
  {
    name: "Edinburgh (HO)",
    coords: [-3.1883, 55.9533],
    url: "/location/edinburgh",
    labelPos: "right",
  },
  {
    name: "Glasgow",
    coords: [-4.2518, 55.8642],
    url: "/location/glasgow",
    labelPos: "left",
  },
  {
    name: "Inverness",
    coords: [-4.2247, 57.4778],
    url: "/location/inverness",
    labelPos: "left",
  },
  {
    name: "Aberdeen",
    coords: [-2.0981, 57.1497],
    url: "/location/aberdeen",
    labelPos: "right",
  },
  {
    name: "Belfast",
    coords: [-5.9301, 54.5973],
    url: "/location/belfast",
    labelPos: "left",
  },
  {
    name: "Dublin",
    coords: [-6.2603, 53.3498],
    url: "/location/dublin",
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
// This keeps London fully visible and pushes mainland Europe (France) off-screen
const getMapDefaults = (width?: number) => {
  const currentWidth = width ?? (typeof window !== "undefined" ? window.innerWidth : 1024);
  let zoom = 4.8;
  if (currentWidth < 360) zoom = 3.5;
  else if (currentWidth < 480) zoom = 3.8;
  else if (currentWidth < 600) zoom = 4.0;
  else if (currentWidth < 768) zoom = 4.2;
  else if (currentWidth < 992) zoom = 4.4;
  return {
    center: [-2.4, 53.75] as [number, number],
    zoom,
  };
};

export default function UKCoverageMap() {
  const router = useRouter();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const activePopupRef = useRef<mapboxgl.Popup | null>(null);

  // Handle clicking on the interactive sidebar city buttons
  const handleCityClick = (office: OfficeLocation) => {
    router.push(office.url);
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
      pitch: 25,
      bearing: 0,
      duration: 1500,
    });
  };

  useEffect(() => {
    if (!mapContainerRef.current || !canvasRef.current) return;

    const initialWidth = mapContainerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1024);
    const defaults = getMapDefaults(initialWidth);

    // 1. Initialize Mapbox using standard Dark-v11 style
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: defaults.center,
      zoom: defaults.zoom,
      pitch: 25,
      bearing: 0,
      interactive: false,
      attributionControl: false,
    });

    mapRef.current = map;

    // 2. Disable default navigation controls/behaviors
    map.scrollZoom.disable();
    map.boxZoom.disable();
    map.dragRotate.disable();
    map.dragPan.disable();
    map.keyboard.disable();
    map.doubleClickZoom.disable();
    map.touchZoomRotate.disable();

    // 3. Initialize ResizeObserver to dynamically update map layout
    const resizeObserver = new ResizeObserver((entries) => {
      if (mapRef.current) {
        mapRef.current.resize();
        for (let entry of entries) {
          const width = entry.contentRect.width;
          const newDefaults = getMapDefaults(width);
          mapRef.current.setZoom(newDefaults.zoom);
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

    // Connect sequentially in a loop: London → Cardiff → Birmingham → Manchester → Leeds → Newcastle → Edinburgh → Glasgow → Inverness → Aberdeen → Edinburgh → Glasgow → Belfast → Dublin → Cardiff → London
    const networkPaths = [
      { start: 0, end: 1 }, // London -> Cardiff
      { start: 1, end: 2 }, // Cardiff -> Birmingham
      { start: 2, end: 3 }, // Birmingham -> Manchester
      { start: 3, end: 4 }, // Manchester -> Leeds
      { start: 4, end: 5 }, // Leeds -> Newcastle
      { start: 5, end: 6 }, // Newcastle -> Edinburgh (HO)
      { start: 6, end: 7 }, // Edinburgh (HO) -> Glasgow
      { start: 7, end: 8 }, // Glasgow -> Inverness
      { start: 8, end: 9 }, // Inverness -> Aberdeen
      { start: 9, end: 6 }, // Aberdeen -> Edinburgh (HO)
      { start: 6, end: 7 }, // Edinburgh -> Glasgow
      { start: 7, end: 10 }, // Glasgow -> Belfast
      { start: 10, end: 11 }, // Belfast -> Dublin
      { start: 11, end: 1 }, // Dublin -> Cardiff
      { start: 1, end: 0 }, // Cardiff -> London
    ];

    // Running 5 pulses simultaneously with smooth continuous speeds (increased speed by ~50%)
    const routeTravelers: RouteTraveler[] = [
      { currentPathIndex: 0, progress: 0.0, speed: 0.022, size: 3.2 },
      { currentPathIndex: 3, progress: 0.4, speed: 0.024, size: 3.2 },
      { currentPathIndex: 6, progress: 0.1, speed: 0.02, size: 3.2 },
      { currentPathIndex: 9, progress: 0.7, speed: 0.026, size: 3.2 },
      { currentPathIndex: 12, progress: 0.3, speed: 0.022, size: 3.2 },
    ];

    // Maintain city glow timers to briefly brighten a pin when a pulse passes through
    const cityGlows = new Float32Array(offices.length);

    let animationFrameId: number;
    const cameraStartTime = Date.now();
    let baseCenter = defaults.center;

    // 6. Setup Custom Layers and Animations on map load
    map.on("load", () => {
      const allLayers = map.getStyle().layers;

      // D. DYNAMICALLY CONVERT ALL MAP LABELS TO CRISP WHITE TEXT WITH BLACK HALO FOR HIGH VISIBILITY
      // AND HIDE ALL OTHER MAP LABELS (CITIES, TOWNS, STATES, POIs, ROADS, ETC.) TO KEEP THE MAP CLEAN
      if (allLayers) {
        allLayers.forEach((layer) => {
          if (layer.type === "symbol") {
            try {
              if (layer.id.includes("country")) {
                map.setPaintProperty(layer.id, "text-color", "#ffffff");
                map.setPaintProperty(layer.id, "text-halo-color", "#000000");
                map.setPaintProperty(layer.id, "text-halo-width", 1.5);

                // Keep only the "UNITED KINGDOM" country label
                const originalTextField = map.getLayoutProperty(layer.id, "text-field") || ["coalesce", ["get", "name:en"], ["get", "name_en"], ["get", "name"], ""];
                map.setLayoutProperty(layer.id, "text-field", [
                  "case",
                  ["==", ["downcase", ["coalesce", ["get", "name:en"], ["get", "name_en"], ["get", "name"], ""]], "united kingdom"],
                  originalTextField,
                  ""
                ]);
              } else {
                // Hide all other symbol layers (other countries, cities like Amsterdam/Brussels, states, roads, water names, POIs)
                map.setLayoutProperty(layer.id, "visibility", "none");
              }
            } catch (e) {
              // Ignore layers that don't support layout/paint modifications
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

      // Connect every office with white coverage lines
      map.addSource("coverage-network", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              offices[0].coords, // London
              offices[1].coords, // Cardiff
              offices[2].coords, // Birmingham
              offices[3].coords, // Manchester
              offices[4].coords, // Leeds
              offices[5].coords, // Newcastle
              offices[6].coords, // Edinburgh (HO)
              offices[7].coords, // Glasgow
              offices[8].coords, // Inverness
              offices[9].coords, // Aberdeen
              offices[6].coords, // Edinburgh (HO)
              offices[7].coords, // Glasgow
              offices[10].coords, // Belfast
              offices[11].coords, // Dublin
              offices[1].coords, // Cardiff
              offices[0].coords, // London
            ],
          },
        },
      });

      // White Glow beneath connection lines
      map.addLayer(
        {
          id: "network-glow",
          type: "line",
          source: "coverage-network",
          paint: {
            "line-color": "#ffffff",
            "line-width": 6,
            "line-blur": 5,
            "line-opacity": 0.4,
          },
        },
        firstLabelLayerId
      );

      // Base elegant white coverage lines
      map.addLayer(
        {
          id: "network-line",
          type: "line",
          source: "coverage-network",
          paint: {
            "line-color": "#ffffff",
            "line-width": 1.5,
            "line-opacity": 0.8,
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
      }

      ctx.clearRect(0, 0, width, height);

      // A. Automatic Camera Float (subtle elliptical path around the baseCenter)
      const elapsed = (Date.now() - cameraStartTime) / 1000;
      const cameraCycle = (elapsed % 12) / 12 * Math.PI * 2; // 12 seconds cycle
      const lngOffset = Math.sin(cameraCycle) * 0.04;
      const latOffset = Math.cos(cameraCycle) * 0.02;
      const pitch = 25 + Math.sin(cameraCycle) * 1.5;
      const bearing = Math.sin(cameraCycle) * 1.0;

      map.setCenter([baseCenter[0] + lngOffset, baseCenter[1] + latOffset]);
      map.setPitch(pitch);
      map.setBearing(bearing);

      // B. Decay city glow states
      for (let i = 0; i < cityGlows.length; i++) {
        if (cityGlows[i] > 0) {
          cityGlows[i] -= 0.04; // Decay over 25 frames (~0.4s)
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
            
            // Briefly brighten and scale the pin when reached by a network pulse
            const pinEl = markerEl.querySelector(".red-pin-custom") as HTMLDivElement;
            if (pinEl) {
              const glow = cityGlows[idx];
              if (glow > 0.01) {
                const intensity = glow * 25;
                pinEl.style.boxShadow = `0 0 ${10 + intensity}px rgba(255, 59, 48, 1), 0 0 ${20 + intensity * 2}px rgba(255, 59, 48, 0.8), 0 0 8px #ffffff`;
                pinEl.style.transform = `scale(${1 + glow * 0.3})`;
              } else {
                pinEl.style.boxShadow = "";
                pinEl.style.transform = "";
              }
            }
          } catch (e) {
            markerEl.style.transform = `translate(-50%, -50%) translate(-9999px, -9999px)`;
          }
        }
      });

      // D. Render Traveling Route Lights (Continuous light along the complete route)
      routeTravelers.forEach((traveler) => {
        // Increment progress
        traveler.progress += traveler.speed;
        if (traveler.progress >= 1) {
          traveler.progress = 0;
          
          // Trigger a pulse glow when the network pulse reaches the city
          const path = networkPaths[traveler.currentPathIndex];
          cityGlows[path.end] = 1.0;

          traveler.currentPathIndex = (traveler.currentPathIndex + 1) % networkPaths.length;
        }

        const path = networkPaths[traveler.currentPathIndex];
        const startLoc = offices[path.start].coords;
        const endLoc = offices[path.end].coords;

        // Draw Comet tail
        const tailLength = 8;
        for (let i = tailLength; i >= 0; i--) {
          const prog = traveler.progress - i * 0.018;
          let currentPathIdx = traveler.currentPathIndex;
          let currentProg = prog;

          // If prog is negative, go back to previous path(s) to draw the tail continuously!
          if (currentProg < 0) {
            currentPathIdx = (currentPathIdx - 1 + networkPaths.length) % networkPaths.length;
            currentProg = 1 + currentProg;
          }

          const tailPath = networkPaths[currentPathIdx];
          const tailStart = offices[tailPath.start].coords;
          const tailEnd = offices[tailPath.end].coords;

          // Interpolated geographic coordinates
          const lng = tailStart[0] + (tailEnd[0] - tailStart[0]) * currentProg;
          const lat = tailStart[1] + (tailEnd[1] - tailStart[1]) * currentProg;

          try {
            const pt = map.project([lng, lat]);
            const opacity = (1 - i / tailLength) * 0.9;
            const size = traveler.size * (1 - i / tailLength * 0.45);

            ctx.beginPath();
            ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
            if (i === 0) {
              ctx.fillStyle = "#ffffff";
              ctx.shadowColor = "#ffffff";
              ctx.shadowBlur = 10;
            } else {
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.75})`;
              ctx.shadowColor = "#ffffff";
              ctx.shadowBlur = 6;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
          } catch (e) {
            // Ignore projection edge cases
          }
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
  }, []);

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
            background: linear-gradient(180deg, #040404 0%, #07192d 100%);
            padding: 100px 24px; /* Spacious vertical padding for premium breathing room */
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
            height: 640px; /* Increased from 520px to 640px to establish hero presence */
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 0 60px rgba(0, 95, 255, 0.10),
                        0 0 120px rgba(0, 95, 255, 0.04);
            animation: floatMap 12s ease-in-out infinite;
            background: linear-gradient(90deg, #000000 0%, #000000 80%, #151C62 20%);
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

          /* Premium Red Marker Pins Style */
          @keyframes pinPulse {
            0% { box-shadow: 0 0 10px rgba(255, 59, 48, 0.85), 0 0 20px rgba(255, 59, 48, 0.45); }
            50% { box-shadow: 0 0 18px rgba(255, 59, 48, 1), 0 0 36px rgba(255, 59, 48, 0.65); }
            100% { box-shadow: 0 0 10px rgba(255, 59, 48, 0.85), 0 0 20px rgba(255, 59, 48, 0.45); }
          }

          .red-pin-custom {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ff3b30;
            border: 2px solid #ffffff;
            animation: pinPulse 1.2s ease-in-out infinite;
            transition: transform 0.25s ease, box-shadow 0.1s ease;
          }

          .red-pin-custom:hover {
            transform: scale(1.3) !important;
          }

          /* Custom Slow Ping Animation */
          @keyframes pingSlow {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2.4); opacity: 0; }
          }
          .animate-ping-slow {
            animation: pingSlow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
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

          /* Telephone CTA Section */
          .telephone {
            padding: 0px 20px;
            text-align: center;
          }

          .telephone h2 {
            font-size: 38px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
          }

          .telephone a {
            font-size: 34px;
            font-weight: 800;
            text-decoration: none;
            color: #ffffff;
            transition: color 0.3s, text-shadow 0.3s;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
          }

          .telephone a:hover {
            color: #d6b25e;
            text-shadow: 0 0 20px rgba(214, 178, 94, 0.4);
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

          /* Permanent city label responsiveness */
          .city-label-text {
            font-size: 12px;
            color: #ffffff;
            font-weight: 700;
            transition: font-size 0.25s ease, left 0.25s ease, right 0.25s ease;
          }

          .label-left {
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
          }

          .label-right {
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 4 / 5 !important;
              max-height: 540px !important; /* Increased by ~28% */
              min-height: 380px !important;
            }
          }

          @media (max-width: 992px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 4 / 5 !important;
              max-height: 520px !important; /* Increased by ~30% */
              min-height: 380px !important;
              border-radius: 18px; 
            }
            .telephone h2 { font-size: 30px; }
            .telephone a { font-size: 28px; }

            /* Reposition selector panel to a horizontal scrolling bar on tablet & mobile */
            .city-selector-panel {
              left: 16px !important;
              right: 16px !important;
              top: auto !important;
              bottom: 16px !important;
              transform: none !important;
              flex-direction: row !important;
              gap: 12px !important;
              padding: 8px 14px !important;
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
            .uk-map-section { padding: 40px 15px; min-height: auto; }
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 4 !important;
              max-height: 550px !important; /* Increased by ~25% */
              min-height: 360px !important;
              border-radius: 14px; 
            }
            .telephone h2 { font-size: 24px; margin-bottom: 8px; }
            .telephone a { font-size: 24px; }
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
              font-size: 9px !important;
            }

            .label-left {
              right: 8px !important;
            }

            .label-right {
              left: 8px !important;
            }
          }

          @media (max-width: 480px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 4 !important;
              max-height: 580px !important; /* Taller height on mobile */
              min-height: 340px !important;
            }
            .telephone h2 { font-size: 20px; }
            .telephone a { font-size: 20px; }
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
              font-size: 8px !important;
            }

            .label-left {
              right: 6px !important;
            }

            .label-right {
              left: 6px !important;
            }
          }
        `,
      }} />

      <section className="uk-map-section">
        <div className="background-gradient"></div>
        <div className="map-wrapper">
          <div id="map-container" style={{ background: "linear-gradient(90deg, #000000 0%, #000000 80%, #151C62 20%)" }}>
            <div ref={mapContainerRef} id="map" />
            <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3 }} />

            {/* Custom Projected React-rendered Markers positioned directly via JS projection in the animation loop */}
            {offices.map((office) => (
              <div
                key={office.name}
                id={`marker-${office.name.replace(/[^a-zA-Z0-9]/g, "-")}`}
                className="absolute z-10 cursor-pointer group"
                style={{
                  left: 0,
                  top: 0,
                  transform: "translate(-50%, -50%) translate(-9999px, -9999px)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCityClick(office);
                }}
              >
                {/* Red Pin Badge */}
                <div className="red-pin-custom relative flex items-center justify-center">
                  {/* Outer Pulsing Ripple Ring */}
                  <div className="absolute inset-0 rounded-full border border-[#ff3b30]/60 scale-[2.5] animate-ping-slow pointer-events-none" />
                </div>
                
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
                </span>
              </div>
            ))}

            {/* Vertical City Selector Panel (Exactly matching the 5 circular gold selectors in the provided image, updated to red glow) */}
            {/* <div className="city-selector-panel absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20 bg-black/40 p-2 rounded-lg border border-white/10 backdrop-blur-md shadow-2xl">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="flex items-center gap-1.5 group cursor-pointer"
                  onClick={() => handleCityClick(office)}
                >
                  
                  <div className="w-4 h-4 rounded-full border border-[#ff3b30] bg-[#060606]/85 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_#ff3b30] group-hover:bg-[#ff3b30]/10 relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shadow-[0_0_6px_#ff3b30] transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_8px_#ffffff]" />
                    
                    <div className="absolute inset-0 rounded-full border border-[#ff3b30]/30 scale-150 animate-pulse pointer-events-none" />
                  </div>

                  
                  <span className="text-[10px] font-semibold text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 whitespace-nowrap">
                    {office.name.replace(" (HO)", "").replace(" (Head Office)", "")}
                  </span>
                </div>
              ))}

              
              <div
                className="flex items-center gap-1.5 group cursor-pointer mt-0"
                onClick={handleResetView}
                title="Reset Map View"
              >
                <div className="w-4 h-4 rounded-full border border-white/20 bg-[#060606]/85 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-[#ff3b30] group-hover:bg-[#ff3b30]/10">
                  <span className="text-[8px] font-bold text-white/50 group-hover:text-[#ff3b30] transition-colors duration-300">↺</span>
                </div>
                <span className="text-[10px] font-semibold text-white/50 group-hover:text-[#ff3b30] group-hover:translate-x-0.5 transition-all duration-300 whitespace-nowrap">
                  Reset View
                </span>
              </div>
            </div> */}
          </div>

          {/* Premium Contact Card & Accreditation Trust Logos */}
          <div className="mt-16 bg-[linear-gradient(to_right,#000000_0%,#000000_80%,#151C62_100%)] rounded-3xl p-8 max-w-xl mx-auto text-center shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative overflow-hidden z-10">
            <div className="relative z-10 space-y-5">
              <div className="space-y-2">
                <span className="text-white text-xs font-bold uppercase tracking-[0.25em] block opacity-80">
                  DIRECT CONTACT LINE
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Nationwide Recruitment
                </h2>
                <a
                  href="tel:03450678022"
                  className="text-3xl md:text-4xl font-black text-white hover:text-[#d6b25e] transition-all duration-300 block tracking-tight hover:scale-105 active:scale-95"
                >
                  0345 067 8022
                </a>
              </div>

              <div className="flex items-center justify-center gap-8 pt-5 border-t border-white/10">
                <img
                  src="/assets/compliance/constructionline-gold.png"
                  alt="Constructionline Gold"
                  className="h-8 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: "32px" }}
                />
                <img
                  src="/assets/compliance/rec-member.png"
                  alt="REC"
                  className="h-8 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: "32px" }}
                />
                <img
                  src="/assets/compliance/cqs-iso9001.png"
                  alt="ISO 9001"
                  className="h-8 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ maxHeight: "32px" }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
