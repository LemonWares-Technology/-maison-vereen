"use client";

import React from "react";

interface BlankBoxProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export default function BlankBox({
  aspectRatio = "4/5",
  className = "",
  label = "IMAGE PLACEHOLDER",
  minHeight,
  children,
}: BlankBoxProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-linear-to-b from-[#121110] via-[#0B0A0A] to-[#060505] border border-[#23201C] group rounded-xs shadow-2xl ${className}`}
      style={{
        aspectRatio: aspectRatio,
        minHeight: minHeight,
      }}
    >
      {/* Subtle background luxury glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Subtle fine crosshair lines in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-linear-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      {/* Corner tick accents (Luxury framing) */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold/40" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold/40" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold/40" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold/40" />

      {/* Content or minimal label display */}
      {children ? (
        children
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center mb-3 group-hover:border-gold/60 transition-colors">
            <span className="font-serif text-gold text-xs italic">M</span>
          </div>
          {label && (
            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#5A5248] font-light">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
