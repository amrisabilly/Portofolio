import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Memuat...");
  const [currentPhase, setCurrentPhase] = useState(0);

  // Pre-calculate random values to avoid re-renders
  const particleData = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: i * 0.2,
    }));
  }, []);

  const orbitingElements = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      distance: 30 + i * 8,
      duration: 4 + i * 0.8,
      delay: i * 0.3,
    }));
  }, []);

  useEffect(() => {
    const loadingMessages = [
      "Memuat Portofolio...",
      "Menyiapkan Proyek...",
      "Mengonfigurasi Tampilan...",
      "Hampir Selesai...",
    ];

    // Progress animation with phases
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (Math.random() * 3 + 1);

        // Update phase based on progress
        if (newProgress >= 25 && currentPhase < 1) setCurrentPhase(1);
        if (newProgress >= 50 && currentPhase < 2) setCurrentPhase(2);
        if (newProgress >= 75 && currentPhase < 3) setCurrentPhase(3);

        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 1000);
          return 100;
        }
        return newProgress;
      });
    }, 80);

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
  }, [currentPhase, onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0e12 0%, #14181a 50%, #1e252a 100%)",
        }}
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Professional Grid Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(0, 168, 205, 0.3) 1px, transparent 0)
              `,
              backgroundSize: "30px 30px",
            }}
          />
          <div
            className="absolute inset-0 opacity-8"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 168, 205, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 168, 205, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particleData.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.width,
                height: particle.height,
                backgroundColor: "#00A8CD",
                opacity: 0.1,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-20, 20, -20],
                opacity: [0.05, 0.15, 0.05],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="relative text-center z-10 max-w-md mx-auto px-8">
          {/* Enhanced Logo Animation */}
          <motion.div
            className="mb-16"
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
          >
            <motion.div className="relative mx-auto w-48 h-48">
              {/* Outer Professional Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: "#00A8CD20",
                  borderStyle: "solid",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle Accent Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed"
                style={{ borderColor: "#00A8CD30" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Professional Circle */}
              <motion.div
                className="absolute inset-10 rounded-full flex items-center justify-center border"
                style={{
                  background:
                    "radial-gradient(circle, #00A8CD15, #00A8CD08, transparent)",
                  borderColor: "#00A8CD25",
                  backdropFilter: "blur(20px)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(0, 168, 205, 0.2)",
                    "0 0 50px rgba(0, 168, 205, 0.4)",
                    "0 0 30px rgba(0, 168, 205, 0.2)",
                  ],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="text-center"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.span
                    className="block text-4xl font-bold text-white mb-1"
                    style={{
                      textShadow: "0 0 20px rgba(0, 168, 205, 0.6)",
                      fontFamily: "system-ui, sans-serif",
                      letterSpacing: "2px",
                    }}
                  >
                    AS
                  </motion.span>
                  <motion.span
                    className="block text-xs tracking-widest"
                    style={{ color: "#00A8CD", opacity: 0.8 }}
                  >
                    PORTFOLIO
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Professional Orbiting Elements */}
              {orbitingElements.map((element) => (
                <motion.div
                  key={element.id}
                  className="absolute rounded-full"
                  style={{
                    width: element.size,
                    height: element.size,
                    backgroundColor: "#00A8CD",
                    left: "50%",
                    top: "50%",
                    transformOrigin: `0 -${element.distance}px`,
                    filter: "blur(0.5px)",
                    opacity: 0.6,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: element.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: element.delay,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Name and Title */}
          <motion.div
            className="space-y-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <motion.h1
              className="text-3xl font-light tracking-wide"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #00A8CD 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Amri Sabilly
            </motion.h1>

            <motion.p
              className="text-slate-400 text-sm tracking-wider uppercase"
              style={{ letterSpacing: "3px" }}
            >
              Web Developer
            </motion.p>
          </motion.div>

          {/* Professional Progress Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <div className="flex justify-between items-center">
              <motion.span
                className="text-sm text-slate-400 tracking-wide"
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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

            {/* Enhanced Progress Bar */}
            <div className="relative">
              <div
                className="w-full h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: "#1e252a" }}
              >
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: "linear-gradient(90deg, #00A8CD, #00c4ff)",
                    boxShadow: "0 0 8px rgba(0, 168, 205, 0.4)",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute right-0 top-0 bottom-0 w-2 rounded-full"
                    style={{
                      background: "#ffffff",
                      opacity: 0.8,
                      boxShadow: "0 0 4px rgba(255, 255, 255, 0.6)",
                    }}
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Professional Loading Indicators */}
            <motion.div
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#00A8CD" }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Ambient Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 168, 205, 0.08), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 196, 255, 0.06), transparent)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
