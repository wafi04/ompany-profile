"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export function ThumbnailTrusting() {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState({
    people: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const targetCounts = {
    people: 250,
    projects: 200000,
    years: 2,
    satisfaction: 98,
  };

  // Format number with K, M notation
  const formatNumber = (number: number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return number.toString();
  };

  // Better parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = counterRef.current;
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const sectionTop = rect.top;
        const windowHeight = window.innerHeight;

        const distanceFromCenter = sectionTop - windowHeight / 2;

        setScrollPosition(distanceFromCenter * -0.2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationDuration = 2000;

  const startCountAnimation = useCallback(() => {
    const startTime = Date.now();
    const endTime = startTime + animationDuration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / animationDuration, 1);

      setCounts({
        people: Math.floor(targetCounts.people * progress),
        projects: Math.floor(targetCounts.projects * progress),
        satisfaction: Math.floor(targetCounts.satisfaction * progress),
        years: Math.floor(targetCounts.years * progress),
      });

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
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
    <section
      className="w-full py-[20vh] relative overflow-hidden"
      ref={counterRef}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          transform: `translateY(${scrollPosition}px)`,
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <Image
          src="https://res.cloudinary.com/dikf91ikq/image/upload/v1740669934/workspaces/image-build_nl0lwu.avif"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Dipercaya oleh Banyak Mitra
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* People Counter */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {formatNumber(counts.people)}
              <span className="text-orange-500">+</span>
            </div>
            <p className="text-gray-700 font-medium">Mitra Aktif</p>
          </div>

          {/* Projects Counter */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {formatNumber(counts.projects)}
              <span className="text-orange-500">+</span>
            </div>
            <p className="text-gray-700 font-medium">Transaksi Harian</p>
          </div>

          {/* Years Counter */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">
              {counts.years}
              <span className="text-orange-500">+</span>
            </div>
            <p className="text-gray-700 font-medium">Tahun Pengalaman</p>
          </div>

          {/* Satisfaction Counter */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md text-center">
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
