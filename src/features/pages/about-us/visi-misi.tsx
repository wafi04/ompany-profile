import { Misi, visi } from "@/data/visi-misi";
import React from "react";

export function VisiMisi() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Visi & Misi</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Visi Card */}
            <div className="bg-blue-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Visi</h3>
              <p className="text-gray-700 leading-relaxed">{visi}</p>
            </div>

            {/* Misi Card */}
            <div className="bg-blue-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Misi</h3>
              <ul className="space-y-4">
                {Misi.map((item) => (
                  <li className="flex" key={item}>
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
