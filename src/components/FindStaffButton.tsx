"use client";

import React from "react";
import Link from "next/link";

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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If user clicks in browser, open the modal overlay if available
    window.dispatchEvent(
      new CustomEvent("open-find-staff", {
        detail: { location, sector },
      })
    );
  };

  return (
    <Link href="/find-staff" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
