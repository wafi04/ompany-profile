"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { historyData } from "@/data/historyData";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ListProfile() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Function to go to next slide
  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveYearIndex((prev) =>
      prev < historyData.length - 1 ? prev + 1 : prev
    );
  }, []);

  // Function to go to previous slide
  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveYearIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  return (
    <section id="company-timeline" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Perjalanan Sejarah Kami
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Timeline Content */}
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeYearIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full">
              <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row md:h-96">
                  {/* Image Section */}
                  <div className="md:w-1/2 relative h-64 md:h-full">
                    <Image
                      src={historyData[activeYearIndex].imageUrl}
                      alt={`${historyData[activeYearIndex].title} image`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Content Section */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col md:h-full overflow-y-auto">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                        <span>{historyData[activeYearIndex].icon}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Tahun</span>
                        <h3 className="text-xl font-bold text-gray-800">
                          {historyData[activeYearIndex].year}
                        </h3>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {historyData[activeYearIndex].title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {historyData[activeYearIndex].content}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">
                        Milestone {activeYearIndex + 1} dari{" "}
                        {historyData.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows with Index */}
        <div className="flex justify-center mt-8 space-x-4">
          {/* Previous Button */}
          <Button
            onClick={goToPrev}
            disabled={activeYearIndex === 0}
            className={`px-4 py-2 rounded border ${
              activeYearIndex === 0
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}>
            ←
          </Button>

          {/* Slide Index */}
          <div className="flex items-center justify-center text-gray-700 font-medium">
            {activeYearIndex + 1} / {historyData.length}
          </div>

          {/* Next Button */}
          <Button
            onClick={goToNext}
            disabled={activeYearIndex === historyData.length - 1}
            className={`px-4 py-2 rounded border ${
              activeYearIndex === historyData.length - 1
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}>
            →
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ListProfile;
