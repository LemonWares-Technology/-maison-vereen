"use client";

import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface BlankBoxProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
  minHeight?: string;
  children?: React.ReactNode;
  src?: string;
}

export default function BlankBox({
  aspectRatio = "4/5",
  className = "",
  label,
  minHeight,
  children,
  src,
}: BlankBoxProps) {
  if (children) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-linear-to-b from-[#121110] via-[#0B0A0A] to-[#060505] border border-[#23201C] group rounded-xs shadow-2xl ${className}`}
        style={{
          aspectRatio: aspectRatio,
          minHeight: minHeight,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <ImagePlaceholder
      src={src}
      label={label}
      aspect={`aspect-[${aspectRatio}]`}
      className={className}
    />
  );
}
