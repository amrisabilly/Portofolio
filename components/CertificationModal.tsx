import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";

interface CertificationType {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: StaticImageData;
  description: string;
}

const CertificationModal = ({
  certification,
  onClose,
}: {
  certification: CertificationType;
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-2 md:p-4"
    style={{ backgroundColor: "#14181AE6" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="rounded-xl md:rounded-2xl border p-4 md:p-8 max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto shadow-2xl"
      style={{
        backgroundColor: "#14181A",
        borderColor: "#00A8CD40",
      }}
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 10 }}
      transition={{ type: "spring", damping: 25 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <div className="space-y-1 flex-1 pr-2">
          <p className="text-xs md:text-sm font-medium" style={{ color: "#00A8CD" }}>
            {certification.date}
          </p>
          <h3
            className="text-lg md:text-2xl font-bold leading-tight"
            style={{
              background: `linear-gradient(to right, #ffffff, #00A8CD)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {certification.title}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl transition-all duration-300 group relative overflow-hidden flex-shrink-0"
          style={{
            backgroundColor: "rgba(20, 24, 26, 0.8)",
            color: "#ffffff",
            border: "2px solid rgba(0, 168, 205, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 168, 205, 0.15)";
            e.currentTarget.style.borderColor = "#00A8CD";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(20, 24, 26, 0.8)";
            e.currentTarget.style.borderColor = "rgba(0, 168, 205, 0.3)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {/* Glowing background effect */}
          <div
            className="absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(0, 168, 205, 0.1), rgba(0, 168, 205, 0.05))",
            }}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 group-hover:text-cyan-300 transition-colors duration-300 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        className="relative mb-4 md:mb-6 rounded-lg md:rounded-xl overflow-hidden border shadow-lg"
        style={{ borderColor: "#00A8CD40" }}
      >
        <Image
          src={certification.image}
          alt={certification.title}
          className="w-full h-48 md:h-64 object-cover"
          loading="lazy"
          quality={85}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: "linear-gradient(to top, #14181A, transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-2 md:bottom-4 left-2 md:left-4 px-2 md:px-4 py-1 rounded-md md:rounded-lg shadow-lg"
          style={{ backgroundColor: "#00A8CD" }}
        >
          <p className="text-white font-medium text-sm md:text-base">{certification.issuer}</p>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        <div className="flex items-center gap-2">
          <div
            className="p-1.5 md:p-2 rounded-md md:rounded-lg"
            style={{
              backgroundColor: "#00A8CD20",
              color: "#00A8CD",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-slate-200 text-sm md:text-base">
            Dikeluarkan: {certification.date}
          </span>
        </div>

        <div
          className="p-3 md:p-4 rounded-lg md:rounded-xl border"
          style={{
            backgroundColor: "#14181A50",
            borderColor: "#00A8CD40",
          }}
        >
          <h4
            className="text-base md:text-lg font-semibold mb-2"
            style={{ color: "#00A8CD" }}
          >
            Deskripsi
          </h4>
          <p className="text-slate-200 leading-relaxed text-sm md:text-base">
            {certification.description}
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg text-sm md:text-base"
            style={{
              backgroundColor: "#00A8CD",
              boxShadow: "0 10px 25px #00A8CD20",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0088AA";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00A8CD";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="text-white">Unduh Sertifikat</span>
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default CertificationModal;
