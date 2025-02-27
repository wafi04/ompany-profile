import React from "react";
import { TextPrimary } from "@/components/ui/textPrimary";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeaderAboutUs() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-24">
        {/* Left Content - Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
          <div className="relative">
            {/* Decorative circle */}
            <div className="absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 rounded-full bg-orange-500 opacity-20"></div>
            {/* Header left */}
            <h1 className="relative">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primari">
                  Get To
                </span>
                <TextPrimary
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 hover:text-subPrimary transition-colors duration-300"
                  after="bg-primari"
                  before="bg-orange-500">
                  Know
                </TextPrimary>
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primari">
                  Us.
                </span>
              </div>
            </h1>
          </div>
          {/* Description left */}
          <p className="mt-6 md:mt-8 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            We're passionate about Topup{" "}
            <span className="text-orange-500 font-medium">
              exceptional experiences
            </span>
            . Our team combines creativity with expertise to deliver solutions
            that exceed expectations. Learn about our journey, values, and the
            people behind our success.
          </p>

          {/* button more than */}
          <Button className="bg-primari mt-8 hover:bg-opacity-90 text-white font-semibold py-4 sm:py-6 px-6 sm:px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
            Our Story
          </Button>
        </div>

        {/* Right Content - Image Section */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Decorative squares */}
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-primari rounded-lg opacity-80 shadow-lg"></div>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-orange-500 rounded-lg opacity-70 shadow-lg"></div>

            {/* Image container */}
            <div className="absolute inset-0 overflow-hidden rounded-lg shadow-2xl border-4 border-white">
              <Image
                src="/image.avif"
                alt="Universe Works Together"
                width={500}
                height={500}
                className="rounded-lg transition-transform duration-700 hover:scale-105 w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
