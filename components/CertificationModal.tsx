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

interface CertificationModalProps {
  certification: CertificationType;
  onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({
  certification,
  onClose,
}) => {
  return (
    <motion.div
      className="fixed inset-0 backdrop-blur-md z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "#14181AE6" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="rounded-2xl border p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
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
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <p className="text-sm font-medium" style={{ color: "#00A8CD" }}>
              {certification.date}
            </p>
            <h3
              className="text-2xl font-bold"
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
            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
            style={{
              backgroundColor: "#14181A80",
              color: "#ffffff",
            }}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          className="relative mb-6 rounded-xl overflow-hidden border shadow-lg"
          style={{ borderColor: "#00A8CD40" }}
        >
          <Image
            src={certification.image}
            alt={certification.title}
            className="w-full h-64 object-cover"
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
            className="absolute bottom-4 left-4 px-4 py-1 rounded-lg shadow-lg"
            style={{ backgroundColor: "#00A8CD" }}
          >
            <p className="text-white font-medium">{certification.issuer}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div
              className="p-2 rounded-lg"
              style={{
                backgroundColor: "#00A8CD20",
                color: "#00A8CD",
              }}
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-slate-200">
              Dikeluarkan: {certification.date}
            </span>
          </div>

          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: "#14181A50",
              borderColor: "#00A8CD40",
            }}
          >
            <h4
              className="text-lg font-semibold mb-2"
              style={{ color: "#00A8CD" }}
            >
              Deskripsi
            </h4>
            <p className="text-slate-200 leading-relaxed">
              {certification.description}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: "#00A8CD",
                boxShadow: "0 10px 25px #00A8CD20",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
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
};

export default CertificationModal;
