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
  // Zoom levels bumped ~+0.35 across the board (~27% larger, 2^0.35) so the UK/Ireland
  // landmass fills the panel with far less surrounding sea, while still keeping every
  // named hub (Inverness/Aberdeen down to Dublin/London) inside the frame.
  // Zoom levels slightly adjusted down on mobile viewports to prevent vertical cropping after height reduction.
  let zoom = 5.15;
  if (currentWidth < 360) zoom = 3.65;
  else if (currentWidth < 480) zoom = 3.9;
  else if (currentWidth < 600) zoom = 4.1;
  else if (currentWidth < 768) zoom = 4.3;
  else if (currentWidth < 992) zoom = 4.5;
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

    let cleanupMap: (() => void) | null = null;

    // Lazy-load: the Mapbox instance (style, sources, tile requests, animation loop) is only
    // created once this section actually scrolls into (or near) the viewport, rather than
    // eagerly on mount — everything below runs exactly once, on first intersection.
    const initMap = (): (() => void) | undefined => {
      if (!mapContainerRef.current || !canvasRef.current) return undefined;

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

    interface MicroPulse extends RouteTraveler {
      baseAlpha: number;
    }

    // Primary white light pulses — fast, continuous, varying speeds (~1.0-2.0s per city-to-city
    // hop) so several are always visible travelling the network at once (fibre-optic effect).
    const primaryPulses: RouteTraveler[] = [
      { currentPathIndex: 0, progress: 0.0, speed: 0.0167, size: 3.4 }, // ~1.0s/hop
      { currentPathIndex: 2, progress: 0.5, speed: 0.0119, size: 3.4 }, // ~1.4s/hop
      { currentPathIndex: 5, progress: 0.2, speed: 0.0093, size: 3.4 }, // ~1.8s/hop
      { currentPathIndex: 7, progress: 0.8, speed: 0.0139, size: 3.4 }, // ~1.2s/hop
      { currentPathIndex: 10, progress: 0.35, speed: 0.0104, size: 3.4 }, // ~1.6s/hop
      { currentPathIndex: 13, progress: 0.65, speed: 0.0083, size: 3.4 }, // ~2.0s/hop
    ];

    // Secondary gold micro-pulses — small, dim, continuous ambient traffic on every route
    // segment (no city bursts) so the whole network feels permanently, quietly alive.
    const microPulses: MicroPulse[] = networkPaths.map((_, i) => ({
      currentPathIndex: i,
      progress: (i * 0.37) % 1,
      speed: 0.0104 + (i % 5) * 0.0016,
      size: 1.3 + (i % 3) * 0.2,
      baseAlpha: 0.32 + (i % 4) * 0.08,
    }));

    // Maintain city glow timers to briefly brighten a pin when a pulse passes through
    const cityGlows = new Float32Array(offices.length);

    // Brief gold "electrical burst" animations fired when a primary white pulse reaches a hub
    interface HubBurst {
      officeIdx: number;
      startTime: number;
      duration: number; // ms (~0.2s - 0.4s)
      angles: number[];
    }
    const hubBursts: HubBurst[] = [];

    // Detect lower-powered devices (few CPU cores and/or a small mobile viewport) so the
    // nationwide network can automatically scale down its node/mesh/tail complexity.
    const isLowPowerDevice =
      (typeof navigator !== "undefined" && !!navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (typeof window !== "undefined" && window.innerWidth < 480);

    // 5.5 Nationwide Gold Network Nodes (hundreds of subtle, low-brightness gold nodes spread
    // across the whole UK/Ireland landmass, not just the named cities) plus an ultra-thin white
    // nearest-neighbour mesh connecting them, so the network reads as one dense, live system.
    interface DustParticle {
      lng: number;
      lat: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
      warmth: number; // 0 = deep amber, 1 = pale warm gold
    }

    const DUST_TARGET_COUNT = isLowPowerDevice ? 180 : 380; // "hundreds of subtle gold nodes"
    const DUST_MAX_ATTEMPTS = 9000;
    const MESH_NEIGHBOURS = isLowPowerDevice ? 1 : 2;
    let dustParticles: DustParticle[] = [];
    let meshLines: [number, number, number, number][] = [];

    // Scatter candidate screen points, keep only the ones that land on the UK/Ireland
    // landmass (i.e. NOT on the "water-fill" layer) using Mapbox's own vector
    // tile data, so every node is strictly clipped to the map's outline. Then connect each
    // node to its nearest neighbour(s) to build a lightweight, organic-looking mesh.
    const generateDustParticles = () => {
      const width = mapContainerRef.current?.clientWidth || 0;
      const height = mapContainerRef.current?.clientHeight || 0;
      if (!width || !height || !map.getLayer("water-fill")) return;

      const generated: DustParticle[] = [];
      let attempts = 0;

      while (generated.length < DUST_TARGET_COUNT && attempts < DUST_MAX_ATTEMPTS) {
        attempts++;
        const px = Math.random() * width;
        const py = Math.random() * height;

        let onWater = true;
        try {
          const hits = map.queryRenderedFeatures([px, py], { layers: ["water-fill"] });
          onWater = hits.length > 0;
        } catch (e) {
          onWater = true;
        }
        if (onWater) continue;

        try {
          const lngLat = map.unproject([px, py]);
          generated.push({
            lng: lngLat.lng,
            lat: lngLat.lat,
            radius: 0.9 + Math.random() * 1.7,
            baseAlpha: 0.14 + Math.random() * 0.4,
            twinkleSpeed: 0.35 + Math.random() * 1.1,
            twinklePhase: Math.random() * Math.PI * 2,
            warmth: Math.random(),
          });
        } catch (e) {
          // Ignore unprojectable points
        }
      }

      dustParticles = generated;

      // Build a nearest-neighbour mesh (once, at generation time — cheap even at O(n^2) for
      // a few hundred nodes) so the nodes read as one connected nationwide network.
      const lines: [number, number, number, number][] = [];
      const connected = new Set<string>();
      for (let i = 0; i < generated.length; i++) {
        const bestIdx: number[] = [];
        const bestDist: number[] = [];
        for (let j = 0; j < generated.length; j++) {
          if (i === j) continue;
          const dx = generated[i].lng - generated[j].lng;
          const dy = generated[i].lat - generated[j].lat;
          const d = dx * dx + dy * dy;
          if (bestIdx.length < MESH_NEIGHBOURS) {
            bestIdx.push(j);
            bestDist.push(d);
          } else {
            let worst = 0;
            for (let k = 1; k < bestDist.length; k++) {
              if (bestDist[k] > bestDist[worst]) worst = k;
            }
            if (d < bestDist[worst]) {
              bestIdx[worst] = j;
              bestDist[worst] = d;
            }
          }
        }
        bestIdx.forEach((j) => {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!connected.has(key)) {
            connected.add(key);
            lines.push([generated[i].lng, generated[i].lat, generated[j].lng, generated[j].lat]);
          }
        });
      }
      meshLines = lines;
    };

    // Pre-render a soft radial glow sprite once; drawing it via drawImage for every particle
    // is far cheaper per-frame than recomputing a gradient or using shadowBlur thousands of times.
    const dustSpriteSize = 30;
    const dustSprite = document.createElement("canvas");
    dustSprite.width = dustSpriteSize;
    dustSprite.height = dustSpriteSize;
    const spriteCtx = dustSprite.getContext("2d");
    if (spriteCtx) {
      const grad = spriteCtx.createRadialGradient(
        dustSpriteSize / 2, dustSpriteSize / 2, 0,
        dustSpriteSize / 2, dustSpriteSize / 2, dustSpriteSize / 2
      );
      grad.addColorStop(0, "rgba(255, 246, 220, 1)");
      grad.addColorStop(0.35, "rgba(255, 199, 110, 0.75)");
      grad.addColorStop(1, "rgba(255, 176, 60, 0)");
      spriteCtx.fillStyle = grad;
      spriteCtx.fillRect(0, 0, dustSpriteSize, dustSpriteSize);
    }

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

      // Layered electric-blue coastline glow hugging the coastline precisely:
      // - Core edge: #00F0FF (bright electric blue)
      // - Main glow: #1F51FF (rich sapphire blue)
      // - Outer shadow: #0B1E5B fading into the dark sea.
      // Built using 4 soft layers plus a core edge.

      // Layer 1: Atmospheric bloom (120–160px at very low opacity)
      map.addLayer(
        {
          id: "coastline-glow-bloom",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#0B1E5B",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 120, 10, 160],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 90, 10, 120],
            "line-opacity": 0.08,
          },
        },
        firstLabelLayerId
      );

      // Layer 2: Outer glow (60–90px)
      map.addLayer(
        {
          id: "coastline-glow-outer",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#1F51FF",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 60, 10, 90],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 45, 10, 70],
            "line-opacity": 0.16,
          },
        },
        firstLabelLayerId
      );

      // Layer 3: Mid glow (25–35px)
      map.addLayer(
        {
          id: "coastline-glow-mid",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#1F51FF",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 25, 10, 35],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 18, 10, 28],
            "line-opacity": 0.28,
          },
        },
        firstLabelLayerId
      );

      // Layer 4: Inner glow (8–12px)
      map.addLayer(
        {
          id: "coastline-glow-inner",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#00F0FF",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 8, 10, 12],
            "line-blur": ["interpolate", ["linear"], ["zoom"], 4, 6, 10, 9],
            "line-opacity": 0.48,
          },
        },
        firstLabelLayerId
      );

      // Layer 5: Core edge (bright electric blue line)
      map.addLayer(
        {
          id: "coastline-glow-core",
          type: "line",
          source: "composite",
          "source-layer": "water",
          paint: {
            "line-color": "#00F0FF",
            "line-width": ["interpolate", ["linear"], ["zoom"], 4, 1.5, 10, 2.5],
            "line-opacity": 0.80,
          },
        },
        firstLabelLayerId
      );

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

      // Soft cool-white ambient backdrop beneath connection lines (subtle, not gold — gold is
      // now reserved for the travelling burst/micro-pulse effects)
      map.addLayer(
        {
          id: "network-glow",
          type: "line",
          source: "coverage-network",
          paint: {
            "line-color": "#BFE9FF",
            "line-width": 3.5,
            "line-blur": 4,
            "line-opacity": 0.07,
          },
        },
        firstLabelLayerId
      );

      // Thin, understated white coverage lines between the named hubs. Kept deliberately
      // restrained — movement/impact comes entirely from the travelling light pulses, never
      // from flashing or thickening these base lines.
      map.addLayer(
        {
          id: "network-line",
          type: "line",
          source: "coverage-network",
          paint: {
            "line-color": "#F2F6FF",
            "line-width": 1,
            "line-opacity": 0.32,
          },
        },
        firstLabelLayerId
      );

      // Start animations
      tick();

      // Give the vector tiles a moment to finish loading before hit-testing for land vs. water
      setTimeout(generateDustParticles, 900);
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

      // A.-2 Ultra-thin white nationwide mesh connecting the gold network nodes (drawn first,
      // underneath the nodes themselves, so it reads as wiring beneath the lights)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.10)";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < meshLines.length; i++) {
        const [lng1, lat1, lng2, lat2] = meshLines[i];
        try {
          const p1 = map.project([lng1, lat1]);
          const p2 = map.project([lng2, lat2]);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        } catch (e) {
          // Ignore projection edge cases
        }
      }

      // A.-1 Ambient Golden Dust (nationwide gold network nodes, gently twinkling, land-clipped)
      const dustTime = Date.now() / 1000;
      for (let i = 0; i < dustParticles.length; i++) {
        const p = dustParticles[i];
        try {
          const pt = map.project([p.lng, p.lat]);
          if (pt.x < -20 || pt.x > width + 20 || pt.y < -20 || pt.y > height + 20) continue;
          const twinkle = 0.5 + 0.5 * Math.sin(dustTime * p.twinkleSpeed + p.twinklePhase);
          const alpha = p.baseAlpha * (0.45 + 0.55 * twinkle);
          const size = p.radius * (2.8 + p.warmth * 1.8);
          ctx.globalAlpha = alpha;
          ctx.drawImage(dustSprite, pt.x - size / 2, pt.y - size / 2, size, size);
        } catch (e) {
          // Ignore projection edge cases
        }
      }
      ctx.globalAlpha = 1;

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

      // B. Shimmer Coastline Glow Opacity (subtle 2–3s shimmer/breathing travelling around the coastline)
      const nowSec = Date.now() / 1000;
      const bloomShimmer = Math.sin(nowSec * (2 * Math.PI / 3.0));
      const outerShimmer = Math.sin(nowSec * (2 * Math.PI / 2.5) + 1.0);
      const midShimmer = Math.sin(nowSec * (2 * Math.PI / 2.2) + 2.0);
      const innerShimmer = Math.sin(nowSec * (2 * Math.PI / 2.0) + 3.0);
      const coreShimmer = Math.sin(nowSec * (2 * Math.PI / 2.8) + 0.5);

      if (map.getLayer("coastline-glow-bloom")) {
        map.setPaintProperty("coastline-glow-bloom", "line-opacity", 0.06 + bloomShimmer * 0.02);
      }
      if (map.getLayer("coastline-glow-outer")) {
        map.setPaintProperty("coastline-glow-outer", "line-opacity", 0.12 + outerShimmer * 0.04);
      }
      if (map.getLayer("coastline-glow-mid")) {
        map.setPaintProperty("coastline-glow-mid", "line-opacity", 0.22 + midShimmer * 0.06);
      }
      if (map.getLayer("coastline-glow-inner")) {
        map.setPaintProperty("coastline-glow-inner", "line-opacity", 0.40 + innerShimmer * 0.08);
      }
      if (map.getLayer("coastline-glow-core")) {
        map.setPaintProperty("coastline-glow-core", "line-opacity", 0.70 + coreShimmer * 0.10);
      }

      // B.5 Decay city glow states
      for (let i = 0; i < cityGlows.length; i++) {
        if (cityGlows[i] > 0) {
          cityGlows[i] -= 0.055; // Decay over ~18 frames (~0.3s), matching the hub burst duration
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
            
            // Briefly intensify the amber bloom and scale the pin when reached by a network pulse
            const pinEl = markerEl.querySelector(".gold-pin-custom") as HTMLDivElement;
            if (pinEl) {
              const glow = cityGlows[idx];
              if (glow > 0.01) {
                const intensity = glow * 25;
                pinEl.style.boxShadow = `0 0 ${10 + intensity * 1.2}px 3px rgba(244, 180, 0, 1), 0 0 ${28 + intensity * 2.4}px 8px rgba(244, 180, 0, 0.75), 0 0 ${48 + intensity * 3}px 14px rgba(244, 180, 0, 0.4)`;
                pinEl.style.transform = `scale(${1 + glow * 0.35})`;
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

      // D. Render Primary White Light Pulses (fast, fibre-optic style, continuous along the network)
      primaryPulses.forEach((traveler) => {
        traveler.progress += traveler.speed;
        if (traveler.progress >= 1) {
          traveler.progress = 0;

          // Trigger a brief gold electrical burst + pin bloom when the pulse reaches its hub
          const arrivedPath = networkPaths[traveler.currentPathIndex];
          cityGlows[arrivedPath.end] = 1.0;
          const sparkCount = 5 + Math.floor(Math.random() * 3);
          hubBursts.push({
            officeIdx: arrivedPath.end,
            startTime: Date.now(),
            duration: 220 + Math.random() * 160, // ~0.22s - 0.38s
            angles: Array.from({ length: sparkCount }, () => Math.random() * Math.PI * 2),
          });

          traveler.currentPathIndex = (traveler.currentPathIndex + 1) % networkPaths.length;
        }

        // Draw comet tail (shorter on lower-powered devices to cut per-frame draw calls)
        const tailLength = isLowPowerDevice ? 4 : 8;
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
              ctx.shadowColor = "#BFE9FF"; // Cool white-blue fibre-optic glow
              ctx.shadowBlur = 16;
            } else {
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.85})`; // White comet tail
              ctx.shadowColor = "#BFE9FF";
              ctx.shadowBlur = 10;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
          } catch (e) {
            // Ignore projection edge cases
          }
        }
      });

      // D.5 Render Secondary Gold Micro-Pulses (dim, continuous ambient traffic, no bursts)
      microPulses.forEach((traveler) => {
        traveler.progress += traveler.speed;
        if (traveler.progress >= 1) {
          traveler.progress = 0;
          traveler.currentPathIndex = (traveler.currentPathIndex + 1) % networkPaths.length;
        }

        const path = networkPaths[traveler.currentPathIndex];
        const startLoc = offices[path.start].coords;
        const endLoc = offices[path.end].coords;
        const lng = startLoc[0] + (endLoc[0] - startLoc[0]) * traveler.progress;
        const lat = startLoc[1] + (endLoc[1] - startLoc[1]) * traveler.progress;

        try {
          const pt = map.project([lng, lat]);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, traveler.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 193, 7, ${traveler.baseAlpha})`;
          ctx.shadowColor = "#FFC107";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        } catch (e) {
          // Ignore projection edge cases
        }
      });

      // D.75 Render brief gold electrical bursts at hubs a white pulse has just reached
      const burstNow = Date.now();
      for (let i = hubBursts.length - 1; i >= 0; i--) {
        const burst = hubBursts[i];
        const elapsed = burstNow - burst.startTime;
        if (elapsed >= burst.duration) {
          hubBursts.splice(i, 1);
          continue;
        }

        const t = elapsed / burst.duration;
        const fade = 1 - t;
        const office = offices[burst.officeIdx];

        try {
          const pt = map.project(office.coords);

          // Expanding ring
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 6 + t * 26, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 209, 102, ${fade * 0.85})`;
          ctx.lineWidth = 1.6;
          ctx.shadowColor = "#FFC107";
          ctx.shadowBlur = 10;
          ctx.stroke();

          // Radiating electrical spark lines
          burst.angles.forEach((angle) => {
            const r1 = 3 + t * 6;
            const r2 = 8 + t * 22;
            const x1 = pt.x + Math.cos(angle) * r1;
            const y1 = pt.y + Math.sin(angle) * r1;
            const x2 = pt.x + Math.cos(angle) * r2;
            const y2 = pt.y + Math.sin(angle) * r2;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(255, 236, 179, ${fade})`;
            ctx.lineWidth = 1.1;
            ctx.shadowColor = "#FFD873";
            ctx.shadowBlur = 8;
            ctx.stroke();
          });

          ctx.shadowBlur = 0;
        } catch (e) {
          // Ignore projection edge cases
        }
      }

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

    // Only stand up the Mapbox instance once the section actually scrolls into (or near) view.
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
            background: linear-gradient(180deg, #030303 0%, #030303 80%, #08152c 100%); /* 80% matte black to 20% deep navy-blue */
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
            border: 1px solid rgba(212, 175, 55, 0.5); /* Very thin metallic-gold border */
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55), /* grounding shadow so the map appears to float above the page */
                        0 0 34px rgba(10, 30, 70, 0.30), /* subtle navy outer glow */
                        inset 0 0 20px rgba(212, 175, 55, 0.08); /* restrained inner gold highlight */
            animation: floatMap 12s ease-in-out infinite;
            background: linear-gradient(135deg, #000000 0%, #000000 80%, #0A1B3D 100%); /* 80% matte black to 20% deep navy-blue */
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

          /* Premium Gold Marker Pins — pure white core with warm amber (#F4B400) bloom */
          @keyframes pinPulse {
            0% { box-shadow: 0 0 6px 2px rgba(244, 180, 0, 0.9), 0 0 18px 6px rgba(244, 180, 0, 0.5), 0 0 34px 10px rgba(244, 180, 0, 0.25); }
            50% { box-shadow: 0 0 10px 3px rgba(244, 180, 0, 1), 0 0 26px 8px rgba(244, 180, 0, 0.65), 0 0 46px 14px rgba(244, 180, 0, 0.32); }
            100% { box-shadow: 0 0 6px 2px rgba(244, 180, 0, 0.9), 0 0 18px 6px rgba(244, 180, 0, 0.5), 0 0 34px 10px rgba(244, 180, 0, 0.25); }
          }

          .gold-pin-custom {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #ffffff; /* bright white central core */
            border: 1.5px solid #D4AF37; /* metallic gold ring */
            animation: pinPulse 1.6s ease-in-out infinite; /* soft gold halo, slow breathing glow */
            transition: transform 0.25s ease;
          }

          .gold-pin-custom:hover {
            transform: scale(1.3) !important;
          }

          /* Thin white radial connections — four fine spokes, not a thick starburst */
          @keyframes starburstPulse {
            0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) rotate(45deg) scale(0.9); }
            50% { opacity: 0.65; transform: translate(-50%, -50%) rotate(45deg) scale(1.1); }
          }

          .gold-pin-custom::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 40px;
            height: 40px;
            transform: translate(-50%, -50%) rotate(45deg);
            pointer-events: none;
            animation: starburstPulse 1.6s ease-in-out infinite;
            background:
              linear-gradient(to right, transparent 0%, transparent 48.3%, rgba(255, 255, 255, 0.55) 49.5%, rgba(255, 255, 255, 0.55) 50.5%, transparent 51.7%, transparent 100%),
              linear-gradient(to bottom, transparent 0%, transparent 48.3%, rgba(255, 255, 255, 0.55) 49.5%, rgba(255, 255, 255, 0.55) 50.5%, transparent 51.7%, transparent 100%);
          }

          /* Concentric golden rings of varying opacity & thickness, fading outward — radar pulse */
          @keyframes pingSlow {
            0% { transform: scale(1); opacity: 0.85; }
            100% { transform: scale(4.5); opacity: 0; }
          }
          .animate-ping-slow {
            animation: pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
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
              aspect-ratio: 4 / 4.2 !important; /* Slightly wider to reduce vertical space */
              max-height: 480px !important; 
              min-height: 340px !important; 
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
              aspect-ratio: 3 / 2.8 !important; /* Reduced vertical space inside the map container */
              max-height: 420px !important; 
              min-height: 300px !important; 
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
              right: 8px !important;
            }

            .label-right {
              left: 8px !important;
            }
          }

          @media (max-width: 480px) {
            #map-container { 
              height: auto !important; 
              aspect-ratio: 3 / 2.8 !important; /* Reduced vertical space inside the map container */
              max-height: 400px !important; 
              min-height: 280px !important; 
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
          <div id="map-container" style={{ background: "linear-gradient(135deg, #000000 0%, #000000 80%, #0A1B3D 100%)" }}>
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
                {/* City hub: white core, metallic gold ring, thin white radial spokes, radar-like concentric rings fading outward */}
                <div className="gold-pin-custom relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full animate-ping-slow pointer-events-none" style={{ border: "1.75px solid rgba(244, 180, 0, 0.6)", animationDelay: "0s" }} />
                  <div className="absolute inset-0 rounded-full animate-ping-slow pointer-events-none" style={{ border: "1.25px solid rgba(244, 180, 0, 0.42)", animationDelay: "0.8s" }} />
                  <div className="absolute inset-0 rounded-full animate-ping-slow pointer-events-none" style={{ border: "0.75px solid rgba(244, 180, 0, 0.28)", animationDelay: "1.6s" }} />
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
                  {office.name.includes("Edinburgh") && (
                    <span className="city-label-suffix"> (Head Office)</span>
                  )}
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

          {/* Minimal Nationwide Recruitment CTA */}
          <div className="nationwide-cta mt-16">
            <div className="nationwide-divider" />
            <span className="nationwide-heading">Nationwide Recruitment</span>
            <a href="tel:03450678022" className="nationwide-phone">
              0345 067 8022
            </a>
            <div className="nationwide-divider" />
          </div>

        </div>
      </section>
    </>
  );
}
