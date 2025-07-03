import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface CertificationType {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: StaticImageData;
  description: string;
}

interface ResponsiveCarouselProps {
  certifications: CertificationType[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  onCertificationClick: (cert: CertificationType) => void;
}

const ResponsiveCarousel: React.FC<ResponsiveCarouselProps> = ({
  certifications,
  currentSlide,
  setCurrentSlide,
  onCertificationClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
        setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      }
    };

    checkScreenSize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  const getVisibleCards = () => {
    if (!isClient) return 3; // Default for SSR
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const getCardWidth = () => {
    const visibleCards = getVisibleCards();
    return 100 / visibleCards;
  };

  const getMaxSlide = () => {
    const visibleCards = getVisibleCards();
    return Math.max(0, certifications.length - visibleCards);
  };

  const nextSlide = () => {
    const maxSlide = getMaxSlide();
    setCurrentSlide(currentSlide >= maxSlide ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    const maxSlide = getMaxSlide();
    setCurrentSlide(currentSlide <= 0 ? maxSlide : currentSlide - 1);
  };

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="relative">
        {/* Skeleton loading state for SSR */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gray-700 animate-pulse"></div>
          <div className="flex-1 flex gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-1 bg-gray-700 rounded-xl h-64 animate-pulse"
              ></div>
            ))}
          </div>
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gray-700 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Navigation + Carousel */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Previous Button */}
        <motion.button
          onClick={prevSlide}
          className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl backdrop-blur-md border shadow-xl transition-all duration-300 group relative overflow-hidden flex-shrink-0"
          style={{
            backgroundColor: "rgba(20, 24, 26, 0.85)",
            borderColor: "rgba(0, 168, 205, 0.4)",
            boxShadow: "0 8px 25px rgba(0, 168, 205, 0.15)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentSlide === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-7 md:h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Carousel */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * getCardWidth()}%)`,
            }}
            drag="x"
            dragConstraints={{
              left: -(getMaxSlide() * getCardWidth()),
              right: 0,
            }}
            dragElastic={0.1}
            onDragEnd={(event, info) => {
              const threshold = 60;
              const velocity = Math.abs(info.velocity.x);

              if (
                (info.offset.x > threshold || velocity > 500) &&
                currentSlide > 0
              ) {
                prevSlide();
              } else if (
                (info.offset.x < -threshold || velocity > 500) &&
                currentSlide < getMaxSlide()
              ) {
                nextSlide();
              }
            }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${getCardWidth()}%` }}
              >
                <motion.div
                  className="backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group shadow-lg h-full"
                  style={{
                    backgroundColor: "#14181A60",
                    borderColor: "#00A8CD30",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => onCertificationClick(cert)}
                >
                  <div className="relative overflow-hidden h-40 md:h-52">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-70 group-hover:opacity-60 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(to top, #14181A, #14181A60, transparent)",
                      }}
                    />

                    <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="px-3 py-1.5 md:px-4 md:py-2 text-white rounded-lg font-medium shadow-lg text-sm md:text-base"
                        style={{ backgroundColor: "#00A8CD" }}
                      >
                        Lihat Detail
                      </span>
                    </motion.div>

                    <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                      <h3
                        className="text-sm md:text-lg font-semibold mb-1 text-white line-clamp-2"
                        style={{ color: "#00A8CD" }}
                      >
                        {cert.title}
                      </h3>
                      <p className="text-slate-200 text-xs md:text-sm line-clamp-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div
                    className="p-3 md:p-4 border-t"
                    style={{ borderColor: "#00A8CD30" }}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className="text-xs md:text-sm font-medium"
                        style={{ color: "#00A8CD" }}
                      >
                        {cert.date}
                      </p>
                      <div
                        className="h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#00A8CD30" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 md:h-4 md:w-4"
                          style={{ color: "#00A8CD" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextSlide}
          className="w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl backdrop-blur-md border shadow-xl transition-all duration-300 group relative overflow-hidden flex-shrink-0"
          style={{
            backgroundColor: "rgba(20, 24, 26, 0.85)",
            borderColor: "rgba(0, 168, 205, 0.4)",
            boxShadow: "0 8px 25px rgba(0, 168, 205, 0.15)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentSlide >= getMaxSlide()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-7 md:h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Progress Elements */}
      <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
        <div className="flex justify-center items-center space-x-2 md:space-x-3">
          {Array.from({ length: getMaxSlide() + 1 }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`relative overflow-hidden transition-all duration-300 ${
                currentSlide === i
                  ? "w-6 md:w-10 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
                  : "w-2 md:w-3 h-2 md:h-3 bg-gray-600 hover:bg-gray-500 rounded-full"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {currentSlide === i && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
