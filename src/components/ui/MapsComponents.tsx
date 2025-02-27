"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const position: [number, number] = [-6.2344914, 106.9334927];

  useEffect(() => {
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
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 pb-3">
        <h3 className="text-2xl font-semibold mb-2">Lokasi Kami</h3>
        <p className="text-gray-600 mb-4">
          Kunjungi kantor kami di Jakarta Timur
        </p>
      </div>
      <div className="flex-grow relative z-10 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          className="z-10">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup className="text-sm">
              <strong>New Universe H2H</strong> <br />
              Jl. Lembah Nyiur 3 No.9 Blok L7, RT.4/RW.9, <br />
              Pd. Klp., Kec. Duren Sawit, <br />
              Kota Jakarta Timur, DKI Jakarta 13450
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="p-4 border-t">
        <address className="not-italic text-sm text-gray-600">
          <strong className="font-medium">New Universe H2H</strong>
          <br />
          Jl. Lembah Nyiur 3 No.9 Blok L7
          <br />
          Jakarta Timur, 13450
          <br />
          <span className="mt-2 block">Phone: +62 123-456-7890</span>
        </address>
      </div>
    </div>
  );
};

export default MapComponent;
