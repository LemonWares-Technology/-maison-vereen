"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-charcoal">{children}</main>
      <Footer />
    </>
  );
}
