"use client";

import { useEffect } from 'react';

export default function ButtonEffects() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.btn-saas') as HTMLElement;
      
      if (btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Match the user's provided logic exactly
        btn.style.transform = `translateY(-3px) scale(1.01) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.btn-saas') as HTMLElement;
      
      if (btn) {
        btn.style.transform = '';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return null;
}
