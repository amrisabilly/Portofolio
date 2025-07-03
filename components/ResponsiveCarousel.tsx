import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  setCurrentSlide: (slide: number) => void;
  onCertificationClick: (certification: CertificationType) => void;
}

const ResponsiveCarousel = ({
  certifications,
  currentSlide,
  setCurrentSlide,
  onCertificationClick,
}: ResponsiveCarouselProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Reset current slide when items per page changes
  useEffect(() => {
    const newTotalPages = Math.ceil(certifications.length / itemsPerPage);
    if (currentSlide >= newTotalPages) {
      setCurrentSlide(0);
    }
  }, [itemsPerPage, certifications.length, currentSlide, setCurrentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalPages - 1 : currentSlide - 1);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentPageItems = () => {
    const startIndex = currentSlide * itemsPerPage;
    return certifications.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {getCurrentPageItems().map((certification, index) => (
              <motion.div
                key={certification.id}
                className="group relative backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 shadow-lg cursor-pointer"
                style={{
                  backgroundColor: "#14181A60",
                  borderColor: "#00A8CD30",
                }}
                onClick={() => onCertificationClick(certification)}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  borderColor: "#00A8CD",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to top, #14181A, transparent)",
                    }}
                  />

                  {/* Date Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-1 text-xs font-medium rounded-full shadow-lg text-white"
                      style={{ backgroundColor: "#00A8CD" }}
                    >
                      {certification.date}
                    </span>
                  </div>

                  {/* View Details Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="px-4 py-2 rounded-lg font-medium shadow-lg text-white"
                      style={{ backgroundColor: "#00A8CD" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Lihat Detail
                    </motion.button>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300"
                    style={{ color: "#00A8CD" }}
                  >
                    {certification.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">
                    {certification.issuer}
                  </p>
                  <p className="text-slate-300 text-sm line-clamp-3">
                    {certification.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: "#00A8CD" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 gap-4">
          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full border transition-all duration-300"
            style={{
              backgroundColor: "#14181A80",
              borderColor: "#00A8CD30",
              color: "#00A8CD",
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "#00A8CD",
              backgroundColor: "#00A8CD20",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Page Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    currentSlide === index ? "#00A8CD" : "#00A8CD30",
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full border transition-all duration-300"
            style={{
              backgroundColor: "#14181A80",
              borderColor: "#00A8CD30",
              color: "#00A8CD",
            }}
            whileHover={{
              scale: 1.1,
              borderColor: "#00A8CD",
              backgroundColor: "#00A8CD20",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </motion.button>
        </div>
      )}

      {/* Slide Counter */}
      {totalPages > 1 && (
        <div className="text-center mt-4">
          <span className="text-slate-400 text-sm">
            {currentSlide + 1} dari {totalPages}
          </span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveCarousel;
