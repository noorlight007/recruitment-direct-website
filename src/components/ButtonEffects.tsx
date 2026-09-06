"use client";

import { useEffect } from 'react';

export default function ButtonEffects() {
  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const btn = target.closest('.btn-saas') as HTMLElement;
      if (!btn) return;

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.transform = `translateY(-3px) scale(1.01) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const btn = target.closest('.btn-saas') as HTMLElement;
      if (btn) {
        if (rafId) cancelAnimationFrame(rafId);
        btn.style.transform = '';
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return null;
}
