import { dataHeader } from "@/constants";
import Link from "next/link";
import { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="bg-[#0d2240] py-16 text-white">
      {/* Container */}
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div className="space-y-4 flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex items-center">
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                  UniverseH2H
                </h1>
              </div>
              <p className="text-gray-300 mt-4">
                Dengan layanan solutif dan produk digital terbaru, kami hadir
                untuk mendukung perkembangan bisnis Anda.
              </p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} VazzStore. All rights
                reserved.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:mx-auto">
            <h2 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded"></span>
            </h2>
            <ul className="space-y-4">
              {dataHeader.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="text-orange-500">•</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-6 relative inline-block">
              <span className="relative z-10">Connect With Us</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded"></span>
            </h2>

            {/* Contact Information */}
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(+62) 81299609896</span>
              </p>
              <p className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>universeh2h@universeh2h.com</span>
              </p>
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="leading-tight">
                  Jl. Lembah Nyiur 3 No.9 Blok L7, RT.4/RW.9, Pd. Klp., Kec.
                  Duren Sawit, Jakarta Timur, DKI Jakarta 13450
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
