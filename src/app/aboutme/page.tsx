import React from "react";
import { HeaderAboutUs } from "@/features/pages/about-us/header";
import ListProfile from "@/features/pages/about-us/list";

export default function AboutMePage() {
  return (
    <main className="w-full min-h-screen">
      <HeaderAboutUs />
      <ListProfile />
    </main>
  );
}
