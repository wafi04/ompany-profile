import React from "react";
import { HeaderAboutUs } from "@/features/pages/about-us/header";
import ListProfile from "@/features/pages/about-us/list";
import { Metadata } from "next";
import { VisiMisi } from "@/features/pages/about-us/visi-misi";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Dengan layanan solutif dan produk digital terbaru, kami hadir untuk mendukung perkembangan bisnis Anda. Universe H2H hadir memberikan solusi untuk masyarakat bisa melakukan transaksi digital seperti topup game,membeli voucher ,dan masih banayak lagi.",
};

export default function AboutMePage() {
  return (
    <main className="w-full min-h-screen">
      <HeaderAboutUs />
      <VisiMisi />
      <ListProfile />
    </main>
  );
}
