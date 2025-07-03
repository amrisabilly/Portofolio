import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  useEffect(() => {
    // Simplifikasi dengan timer yang lebih pendek
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 3000); // Durasi 3 detik

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0a0e12, #14181a, #1e252a)",
        }}
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.05,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {/* Subtle Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                backgroundColor: "#00A8CD",
                opacity: 0.15,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: "0 0 8px rgba(0, 168, 205, 0.3)",
              }}
              animate={{
                y: [-15, 15, -15],
                x: [-10, 10, -10],
                opacity: [0.05, 0.2, 0.05],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}

          {/* Very subtle floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`extra-${i}`}
              className="absolute"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                backgroundColor: "#00c4ff",
                opacity: 0.1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: "50%",
                filter: "blur(0.5px)",
              }}
              animate={{
                y: [-12, 12, -12],
                x: [-8, 8, -8],
                opacity: [0.05, 0.15, 0.05],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            />
          ))}
        </div>

        <div className="relative text-center z-10">
          {/* Logo Animation */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
          >
            <motion.div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-dashed"
                style={{ borderColor: "#00A8CD40" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle Ring */}
              <motion.div
                className="absolute inset-3 rounded-full border-2"
                style={{ borderColor: "#00A8CD30" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner Circle */}
              <motion.div
                className="absolute inset-6 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, #00A8CD20, #00A8CD10, transparent)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 168, 205, 0.2)",
                    "0 0 40px rgba(0, 168, 205, 0.4)",
                    "0 0 20px rgba(0, 168, 205, 0.2)",
                  ],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-white"
                  style={{
                    textShadow: "0 0 15px rgba(0, 168, 205, 0.6)",
                  }}
                >
                  AS
                </span>
              </motion.div>

              {/* Orbiting Dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#00A8CD",
                    left: "50%",
                    top: "50%",
                    transformOrigin: `0 -${20 + i * 8}px`,
                    boxShadow: "0 0 8px rgba(0, 168, 205, 0.6)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <motion.h2
              className="text-xl md:text-2xl font-semibold"
              style={{
                background: `linear-gradient(135deg, #ffffff, #00A8CD, #ffffff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Amri Sabilly
            </motion.h2>

            <motion.p
              className="text-slate-400 text-sm md:text-base"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              Web Developer
            </motion.p>
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#00A8CD" }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Subtle Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 168, 205, 0.08), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 196, 255, 0.06), transparent)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
