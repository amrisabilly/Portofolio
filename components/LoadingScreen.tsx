import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Memuat...");

  useEffect(() => {
    const loadingMessages = [
      "Memuat Portofolio...",
      "Menyiapkan Proyek...",
      "Mengonfigurasi Tampilan...",
      "Hampir Selesai...",
    ];

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (Math.random() * 2 + 1);

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    // Loading text animation
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0a0e12 0%, #14181a 50%, #1e252a 100%)",
        }}
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.98,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {/* Clean Static Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(0, 168, 205, 0.1) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative text-center z-10 max-w-md mx-auto px-8">
          {/* Simple Professional Logo */}
          <motion.div
            className="mb-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <motion.div className="relative mx-auto w-32 h-32">
              {/* Simple Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: "#00A8CD30",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Circle */}
              <motion.div
                className="absolute inset-4 rounded-full flex items-center justify-center border"
                style={{
                  background: "radial-gradient(circle, #00A8CD15, transparent)",
                  borderColor: "#00A8CD40",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 168, 205, 0.1)",
                    "0 0 30px rgba(0, 168, 205, 0.2)",
                    "0 0 20px rgba(0, 168, 205, 0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div className="text-center">
                  <motion.span
                    className="block text-3xl font-bold text-white mb-1"
                    style={{
                      textShadow: "0 0 10px rgba(0, 168, 205, 0.3)",
                      fontFamily: "system-ui, sans-serif",
                      letterSpacing: "1px",
                    }}
                  >
                    AS
                  </motion.span>
                  <motion.span
                    className="block text-xs tracking-wide"
                    style={{ color: "#00A8CD", opacity: 0.8 }}
                  >
                    PORTFOLIO
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Simple Orbiting Dot */}
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "#00A8CD",
                  left: "50%",
                  top: "50%",
                  transformOrigin: "0 -40px",
                  opacity: 0.8,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Professional Name and Title */}
          <motion.div
            className="space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <motion.h1
              className="text-3xl font-light tracking-wide"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00A8CD 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Amri Sabilly
            </motion.h1>

            <motion.p
              className="text-slate-400 text-sm tracking-wider uppercase"
              style={{ letterSpacing: "2px" }}
            >
              Web Developer
            </motion.p>
          </motion.div>

          {/* Clean Progress Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex justify-between items-center">
              <motion.span
                className="text-sm text-slate-400 tracking-wide"
                key={loadingText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {loadingText}
              </motion.span>
              <motion.span
                className="text-sm font-mono tabular-nums"
                style={{ color: "#00A8CD" }}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>

            {/* Simple Progress Bar */}
            <div className="relative">
              <div 
                className="w-full h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: "#1e252a" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #00A8CD, #00c4ff)",
                    boxShadow: "0 0 4px rgba(0, 168, 205, 0.3)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Simple Loading Dots */}
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Static Glow Effects */}
        <div
          className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0, 168, 205, 0.05), transparent)",
          }}
        />

        <div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0, 196, 255, 0.03), transparent)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
