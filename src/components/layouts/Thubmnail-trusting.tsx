"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export function ThumbnailTrusting() {
  const counterRef = useRef(null);
  const [counts, setCounts] = useState({
    people: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  });

  const targetCounts = {
    people: 250,
    projects: 39000,
    years: 2,
    satisfaction: 98,
  };

  const animationDuration = 2000;
  const frameDuration = 16;
  const startCountAnimation = useCallback(() => {
    const steps = Math.floor(animationDuration / frameDuration);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setCounts({
        people: Math.floor(targetCounts.people * progress),
        projects: Math.floor(targetCounts.projects * progress),
        satisfaction: Math.floor(targetCounts.satisfaction * progress),
        years: Math.floor(targetCounts.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, frameDuration);
  }, [
    targetCounts.people,
    targetCounts.projects,
    targetCounts.satisfaction,
    targetCounts.years,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCountAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startCountAnimation]);

  return (
    <section className="w-full py-16 bg-gray-50" ref={counterRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1a4171] mb-12">
          Dipercaya oleh Banyak Mitra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* People Counter */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {counts.people}
              <span className="text-orange-500">+</span>
            </div>
            <p className="text-gray-700 font-medium">Mitra Aktif</p>
          </div>

          {/* Projects Counter */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {counts.projects}
              <span className="text-orange-500">+</span>
            </div>
            <p className="text-gray-700 font-medium">Transaksi Harian</p>
          </div>

          {/* Years Counter */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {counts.years}
              <span className="text-orange-500">+</span>
            </div>
            <p className="text-gray-700 font-medium">Tahun Pengalaman</p>
          </div>

          {/* Satisfaction Counter */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {counts.satisfaction}
              <span className="text-orange-500">%</span>
            </div>
            <p className="text-gray-700 font-medium">Tingkat Kepuasan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThumbnailTrusting;
