"use client";

import React from "react";

interface FindStaffButtonProps {
  location?: string;
  sector?: string;
  className?: string;
  children: React.ReactNode;
}

export default function FindStaffButton({
  location = "",
  sector = "",
  className = "",
  children,
}: FindStaffButtonProps): React.JSX.Element {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("open-find-staff", {
        detail: { location, sector },
      })
    );
  };

  return (
    <button onClick={handleClick} className={className} type="button">
      {children}
    </button>
  );
}
