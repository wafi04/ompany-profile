"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapComponent = () => {
  const position: [number, number] = [-6.2344914, 106.9334927];

  return (
    <div className="map-container max-w-md">
      <h2 className="text-2xl font-bold text-[#1a4171] mb-4">Lokasi Kami</h2>
      <div
        style={{
          height: "400px",
          width: "100%",
          position: "relative",
          zIndex: 10,
        }}>
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              New Universe H2H <br />
              Jl. Lembah Nyiur 3 No.9 Blok L7, RT.4/RW.9, Pd. Klp., Kec. Duren
              Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13450
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
