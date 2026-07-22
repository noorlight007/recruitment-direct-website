"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useRouter } from "next/navigation";

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
const getMapDefaults = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return {
    center: [-2.4, 53.75] as [number, number],
    zoom: isMobile ? 3.9 : 4.6, // Adjusted to fit the new smaller map container
  };
};

export default function UKCoverageMap() {
  const router = useRouter();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const activePopupRef = useRef<maplibregl.Popup | null>(null);

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

    const defaults = getMapDefaults();
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

    const defaults = getMapDefaults();

    // 1. Initialize MapLibre using OpenFreeMap Dark style
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://tiles.openfreemap.org/styles/dark",
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
    const resizeObserver = new ResizeObserver(() => {
      if (mapRef.current) {
        mapRef.current.resize();
      }
    });
    resizeObserver.observe(mapContainerRef.current);

    // 4. Initialize particles (WGS84 Coordinates)
    interface Particle {
      lng: number;
      lat: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const particleCount = 120;
    const particles: Particle[] = [];

    // UK bounding box for spawning particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        lng: -7.5 + Math.random() * 9.0,
        lat: 50.5 + Math.random() * 8.0,
        vx: (Math.random() - 0.5) * 0.001,
        vy: (Math.random() - 0.5) * 0.001,
        radius: 1.5 + Math.random() * 2,
        opacity: 0.25 + Math.random() * 0.55,
        pulseSpeed: 0.01 + Math.random() * 0.03,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // 5. Initialize Data Flow Packets along office connections
    interface RouteTraveler {
      currentPathIndex: number;
      progress: number;
      speed: number;
      size: number;
    }

    // Connect sequentially in a loop: London → Cardiff → Birmingham → Manchester → Leeds → Newcastle → Edinburgh → Glasgow → Inverness → Aberdeen → Edinburgh → London
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
      { start: 6, end: 0 }, // Edinburgh (HO) -> London
    ];

    // Moving white light travelling continuously around the route
    const routeTravelers: RouteTraveler[] = [
      { currentPathIndex: 0, progress: 0.0, speed: 0.006, size: 3.5 },
      { currentPathIndex: 5, progress: 0.0, speed: 0.006, size: 3.5 },
    ];

    let animationFrameId: number;
    const cameraStartTime = Date.now();
    let pulseStep = 0;
    let baseCenter = defaults.center;

    // 6. Setup Custom Layers and Animations on map load
    map.on("load", () => {
      // A. HIDE ALL CLUTTER LAYERS (Hides roads, residential areas, forests, and other grey map elements)
      const clutterLayers = [
        "landuse_residential",
        "landcover_wood",
        "landuse_park",
        "building",
        "landcover_glacier",
        "landcover_ice_shelf",
        "aeroway-taxiway",
        "aeroway-runway-casing",
        "aeroway-area",
        "aeroway-runway",
        "road_area_pier",
        "road_pier",
        "highway_path",
        "highway_minor",
        "highway_major_casing",
        "highway_major_inner",
        "highway_major_subtle",
        "highway_motorway_casing",
        "highway_motorway_inner",
        "highway_motorway_subtle",
        "railway_transit",
        "railway_transit_dashline",
        "railway_minor",
        "railway_minor_dashline",
        "railway",
        "railway_dashline",
      ];

      clutterLayers.forEach((layerId) => {
        if (map.getLayer(layerId)) {
          map.setLayoutProperty(layerId, "visibility", "none");
        }
      });

      // B. STYLING THE BASE MAP (Set land to carbon black and water to deep navy)
      if (mapContainerRef.current) {
        mapContainerRef.current.style.background = "linear-gradient(90deg, #000000 0%, #000000 80%, #151C62 100%)";
      }
      if (map.getLayer("background")) {
        map.setPaintProperty("background", "background-color", "rgba(2, 2, 3, 0.15)");
      }
      if (map.getLayer("water")) {
        map.setPaintProperty("water", "fill-color", "rgba(7, 19, 36, 0.35)");
      }

      // C. STYLE POLITICAL BOUNDARY LINES
      const boundaryLayers = ["boundary_state", "boundary_country_z0-4", "boundary_country_z5-"];
      boundaryLayers.forEach((layerId) => {
        if (map.getLayer(layerId)) {
          map.setPaintProperty(layerId, "line-color", "#2E7DFF");
          map.setPaintProperty(layerId, "line-opacity", 0.35);
        }
      });

      // D. DYNAMICALLY CONVERT ALL MAP LABELS TO CRISP WHITE TEXT WITH BLACK HALO FOR HIGH VISIBILITY
      const allLayers = map.getStyle().layers;
      if (allLayers) {
        allLayers.forEach((layer) => {
          if (layer.type === "symbol") {
            try {
              map.setPaintProperty(layer.id, "text-color", "#ffffff");
              map.setPaintProperty(layer.id, "text-halo-color", "#000000");
              map.setPaintProperty(layer.id, "text-halo-width", 1.5);
            } catch (e) {
              // Ignore layers that don't support text-color or paint properties
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

      // Add Coastline Glow layers (Reduced by 25% to look more premium and allow gold markers to stand out)
      // Layer 1: Wide ambient outer electric blue glow
      map.addLayer(
        {
          id: "coastline-glow-outer",
          type: "line",
          source: "openmaptiles",
          "source-layer": "water",
          paint: {
            "line-color": "#005FFF",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 15, 10, 30],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 12, 10, 20],
            "line-opacity": 0.25,
          },
        },
        firstLabelLayerId
      );

      // Layer 2: Intense inner cyan glow
      map.addLayer(
        {
          id: "coastline-glow-inner",
          type: "line",
          source: "openmaptiles",
          "source-layer": "water",
          paint: {
            "line-color": "#00D2FF",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 4.5, 10, 11],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 3, 10, 6],
            "line-opacity": 0.45,
          },
        },
        firstLabelLayerId
      );

      // Layer 3: Sharp core electric blue coastline line
      map.addLayer(
        {
          id: "coastline-core",
          type: "line",
          source: "openmaptiles",
          "source-layer": "water",
          paint: {
            "line-color": "#2E7DFF",
            "line-width": 1.5,
            "line-opacity": 0.7,
          },
        },
        firstLabelLayerId
      );

      // 6. Connect every office with white coverage lines
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

    // 8. Animation Loop (Particles, Traveling light packets, camera drift, coastline pulse)
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const tick = () => {
      if (!ctx || !canvas || !mapRef.current) return;

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

      // B. Pulse Coastline Glow Opacity (Reduced by 25%)
      pulseStep += 0.025;
      const basePulse = Math.sin(pulseStep);
      const outerOpacity = 0.15 + (basePulse + 1) * 0.06;
      const innerOpacity = 0.3 + (basePulse + 1) * 0.09;

      if (map.getLayer("coastline-glow-outer")) {
        map.setPaintProperty("coastline-glow-outer", "line-opacity", outerOpacity);
      }
      if (map.getLayer("coastline-glow-inner")) {
        map.setPaintProperty("coastline-glow-inner", "line-opacity", innerOpacity);
      }

      // C. Update custom HTML markers positions dynamically
      offices.forEach((office) => {
        const markerId = `marker-${office.name.replace(/[^a-zA-Z0-9]/g, "-")}`;
        const markerEl = document.getElementById(markerId);
        if (markerEl && mapRef.current) {
          try {
            const pt = mapRef.current.project(office.coords);
            markerEl.style.transform = `translate(-50%, -50%) translate(${pt.x}px, ${pt.y}px)`;
          } catch (e) {
            markerEl.style.transform = `translate(-50%, -50%) translate(-9999px, -9999px)`;
          }
        }
      });

      // D. Render Particle Plexus (Digital Network)
      // Update particles
      particles.forEach((p) => {
        p.lng += p.vx;
        p.lat += p.vy;

        // Reset if boundary exceeded
        if (p.lng < -8.5 || p.lng > 2.5 || p.lat < 49.5 || p.lat > 59.5) {
          p.lng = -7.5 + Math.random() * 9.0;
          p.lat = 50.5 + Math.random() * 8.0;
        }
      });

      // Project coordinates and calculate pulse
      const projected = particles.map((p) => {
        try {
          const pt = map.project([p.lng, p.lat]);
          const currentPulse = Math.sin(pulseStep * 1.5 + p.pulseOffset);
          const opacity = Math.max(0.1, p.opacity + currentPulse * 0.15);
          return { x: pt.x, y: pt.y, radius: p.radius, opacity };
        } catch (e) {
          return null;
        }
      });

      // Draw particle connections (Plexus/Neural Net)
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        if (!p1 || p1.x < 0 || p1.x > width || p1.y < 0 || p1.y > height) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          if (!p2 || p2.x < 0 || p2.x > width || p2.y < 0 || p2.y > height) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 65;
          const maxDistSq = maxDist * maxDist;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * 0.12 * Math.min(p1.opacity, p2.opacity);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(214, 178, 94, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      projected.forEach((p) => {
        if (!p || p.x < 0 || p.x > width || p.y < 0 || p.y > height) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 178, 94, ${p.opacity})`;
        ctx.shadowColor = "#D6B25E";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // E. Render Traveling Route Lights (Continuous light along the complete route)
      routeTravelers.forEach((traveler) => {
        // Increment progress
        traveler.progress += traveler.speed;
        if (traveler.progress >= 1) {
          traveler.progress = 0;
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
          /* Premium UK Coverage Map Styles - MapLibre GL JS */
          .uk-map-section {
            position: relative;
            width: 100%;
            min-height: 600px;
            overflow: hidden;
            background: linear-gradient(180deg, #040404 0%, #07192d 100%);
            padding: 50px 20px; /* Reduced vertical padding for better spacing */
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
            max-width: 800px; /* Reduced to balance the page and fit screen layout */
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }

          #map-container {
            position: relative;
            width: 100%;
            height: 400px; /* Reduced to prevent dominating content fold */
            border-radius: 24px;
            overflow: hidden;
            // border: 1px solid rgba(255, 255, 255, 0.08);
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
            0% { box-shadow: 0 0 8px rgba(255, 59, 48, 0.8), 0 0 16px rgba(255, 59, 48, 0.4); }
            50% { box-shadow: 0 0 14px rgba(255, 59, 48, 1), 0 0 28px rgba(255, 59, 48, 0.6); }
            100% { box-shadow: 0 0 8px rgba(255, 59, 48, 0.8), 0 0 16px rgba(255, 59, 48, 0.4); }
          }

          .red-pin-custom {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ff3b30;
            border: 2px solid #ffffff;
            animation: pinPulse 2s ease-in-out infinite;
            transition: transform 0.25s ease;
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
            animation: pingSlow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          /* MapLibre Popup Overrides */
          .maplibregl-popup {
            z-index: 100;
          }

          .maplibregl-popup-content {
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

          .maplibregl-popup-tip {
            border-top-color: #060606 !important;
          }

          /* MapLibre Controls Hidden */
          .maplibregl-ctrl {
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

          /* Responsive Styles */
          @media (max-width: 1200px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 4 / 5 !important;
              max-height: 420px !important;
              min-height: 320px !important;
            }
          }

          @media (max-width: 992px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 4 / 5 !important;
              max-height: 400px !important;
              min-height: 320px !important;
              border-radius: 18px; 
            }
            .telephone h2 { font-size: 30px; }
            .telephone a { font-size: 28px; }

            /* Reposition selector panel to the bottom-left corner on tablet & mobile */
            .city-selector-panel {
              left: 16px !important;
              top: auto !important;
              bottom: 16px !important;
              transform: none !important;
              flex-direction: column !important;
              gap: 6px !important;
              padding: 8px 12px !important;
              border-radius: 10px !important;
              width: auto !important;
              max-width: 240px !important;
              align-items: flex-start !important;
            }

            .city-selector-panel span {
              display: inline-block !important;
              font-size: 9.5px !important;
            }
          }

          @media (max-width: 768px) {
            .uk-map-section { padding: 40px 15px; min-height: auto; }
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 4 !important;
              max-height: 370px !important;
              min-height: 300px !important;
              border-radius: 14px; 
            }
            .telephone h2 { font-size: 24px; margin-bottom: 8px; }
            .telephone a { font-size: 24px; }
            .city-link { font-size: 15px; }

            .city-selector-panel {
              left: 8px !important;
              bottom: 8px !important;
              padding: 6px 10px !important;
              gap: 4px !important;
              border-radius: 8px !important;
            }

            .city-selector-panel span {
              font-size: 8.5px !important;
            }
          }

          @media (max-width: 480px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 4 !important;
              max-height: 320px !important;
              min-height: 260px !important;
            }
            .telephone h2 { font-size: 20px; }
            .telephone a { font-size: 20px; }
            .city-links-container { gap: 8px 12px; }
            .city-link { font-size: 14px; }
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
                  className="absolute font-semibold text-white/95 text-[10px] tracking-wide pointer-events-none select-none"
                  style={{
                    fontFamily: "var(--font-sans), Inter, sans-serif",
                    textShadow: "0 1px 4px rgba(0,0,0,0.95), 0 0 2px rgba(0,0,0,0.95)",
                    whiteSpace: "nowrap",
                    ...(office.labelPos === "left" 
                      ? { right: "12px", top: "50%", transform: "translateY(-50%)" } 
                      : { left: "12px", top: "50%", transform: "translateY(-50%)" })
                  }}
                >
                  {office.name.replace(" (HO)", "").replace(" (Head Office)", "")}
                </span>
              </div>
            ))}

            {/* Vertical City Selector Panel (Exactly matching the 5 circular gold selectors in the provided image, updated to red glow) */}
            <div className="city-selector-panel absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20 bg-black/40 p-2 rounded-lg border border-white/10 backdrop-blur-md shadow-2xl">
              {offices.map((office) => (
                <div
                  key={office.name}
                  className="flex items-center gap-1.5 group cursor-pointer"
                  onClick={() => handleCityClick(office)}
                >
                  {/* Glowing circular badge selector */}
                  <div className="w-4 h-4 rounded-full border border-[#ff3b30] bg-[#060606]/85 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_#ff3b30] group-hover:bg-[#ff3b30]/10 relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shadow-[0_0_6px_#ff3b30] transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_8px_#ffffff]" />
                    {/* Pulsing glow ring */}
                    <div className="absolute inset-0 rounded-full border border-[#ff3b30]/30 scale-150 animate-pulse pointer-events-none" />
                  </div>

                  {/* Permanently visible label text next to circle */}
                  <span className="text-[10px] font-semibold text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300 whitespace-nowrap">
                    {office.name.replace(" (HO)", "").replace(" (Head Office)", "")}
                  </span>
                </div>
              ))}

              {/* Reset View Button */}
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
            </div>
          </div>

          {/* Premium Glassmorphic Telephone CTA & City Links Container */}
          <div className="mt-12 bg-[linear-gradient(to_right,#000000_0%,#000000_80%,#151C62_100%)] rounded-3xl p-8 max-w-4xl mx-auto text-center shadow-[0_20px_50px_rgba(0,0,0,0.45)] relative overflow-hidden z-10">
            {/* Ambient Background Glows */}
            {/* <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#d6b25e]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-[#2e7dff]/8 rounded-full blur-3xl pointer-events-none" /> */}

            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <span className="text-white text-xs font-bold uppercase tracking-[0.25em] block opacity-80">
                  Direct Contact Line
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Nationwide Recruitment
                </h2>
                <a
                  href="tel:03450678022"
                  className="text-4xl md:text-5xl font-black text-white hover:text-[#d6b25e] transition-all duration-300 block tracking-tight hover:scale-105 active:scale-95"
                >
                  0345 067 8022
                </a>
              </div>

              <div className="w-16 h-[1px] bg-white/10 mx-auto" />

              <div className="space-y-3">
                <span className="text-white text-xs font-semibold uppercase tracking-wider block opacity-70">
                  Explore Regional Offices
                </span>
                <div className="city-links-container">
                  {offices.map((office, idx) => (
                    <React.Fragment key={office.name}>
                      {idx > 0 && <span className="city-divider">│</span>}
                      <a href={office.url} className="city-link">
                        {office.name}
                      </a>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
