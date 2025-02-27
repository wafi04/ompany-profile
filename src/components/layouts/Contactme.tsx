"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FormContact } from "../ui/formcontact";

export function ContactMe() {
  const MapPlaceholder = () => (
    <div
      className="flex items-center justify-center bg-gray-100 rounded-lg animate-pulse"
      style={{ height: "400px", width: "100%" }}>
      <p className="text-gray-500">Loading map...</p>
    </div>
  );

  const DynamicMap = dynamic(() => import("../ui/MapsComponents"), {
    ssr: false,
    loading: MapPlaceholder,
  });

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Kontak Kami</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hubungi kami untuk informasi lebih lanjut atau kunjungi lokasi kami
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <DynamicMap />
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <FormContact />
        </div>
      </div>
    </section>
  );
}
