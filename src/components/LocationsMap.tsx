"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useRouter } from "next/navigation";

interface Location {
  name: string;
  slug: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface LocationsMapProps {
  locations: Location[];
  country: string;
}

const countryCenters: Record<string, { center: [number, number]; zoom: number }> = {
  scotland: { center: [-4.2026, 56.4907], zoom: 6.2 },
  england: { center: [-1.1743, 52.6], zoom: 5.6 },
  wales: { center: [-3.7837, 52.1307], zoom: 7.2 },
  "northern-ireland": { center: [-6.4923, 54.7877], zoom: 7.8 },
  "republic-of-ireland": { center: [-8.2439, 53.4129], zoom: 6.8 },
};

export default function LocationsMap({ locations, country }: LocationsMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const { center, zoom } = countryCenters[country] || { center: [-3.8, 55.0], zoom: 5.0 };

    // Initialize Maplibre GL map
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center,
      zoom,
      attributionControl: false,
    });

    mapRef.current = map;

    // Add navigation controls (zoom, compass)
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    // Add markers
    const markers: maplibregl.Marker[] = [];
    locations.forEach((loc) => {
      if (!loc.longitude || !loc.latitude) return;

      // Create a custom element for the marker (gold dot)
      const el = document.createElement("div");
      el.className = "custom-map-marker";
      el.style.width = "14px";
      el.style.height = "14px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = "#d6b25e";
      el.style.border = "2px solid #071424";
      el.style.cursor = "pointer";
      el.style.boxShadow = "0 0 10px rgba(214, 178, 94, 0.6)";
      el.style.transition = "transform 0.2s ease, background-color 0.2s ease";

      // Hover animation
      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.3)";
        el.style.backgroundColor = "#ffffff";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        el.style.backgroundColor = "#d6b25e";
      });

      // Tooltip / Popup showing name
      const popup = new maplibregl.Popup({
        offset: 10,
        closeButton: false,
        closeOnClick: false,
      }).setHTML(`<div style="color: #ffffff; background-color: #071424; font-weight: 700; font-size: 13px; font-family: sans-serif; padding: 2px 6px; border-radius: 4px;">${loc.name}</div>`);

      el.addEventListener("mouseenter", () => {
        popup.setLngLat([loc.longitude, loc.latitude]).addTo(map);
      });
      el.addEventListener("mouseleave", () => {
        popup.remove();
      });

      // Click to navigate
      el.addEventListener("click", () => {
        router.push(`/locations/${country}/${loc.slug}/`);
      });

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([loc.longitude, loc.latitude])
        .addTo(map);

      markers.push(marker);
    });

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, [locations, country, router]);

  return (
    <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
