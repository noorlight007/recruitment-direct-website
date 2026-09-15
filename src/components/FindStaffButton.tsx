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
  const params = new URLSearchParams();
  if (location) params.set("location", location);
  if (sector) params.set("sector", sector);
  const href = params.toString() ? `/find-staff?${params.toString()}` : "/find-staff";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

