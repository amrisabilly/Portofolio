import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { NavItem } from "./Asset/assets.js";
import ArrowOpen from "../public/Images/ArrowOpen.svg";
import ArrowClose from "../public/Images/ArrowClose.svg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle hash changes
  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      setActiveSection(currentHash);
    }
  }, [router.pathname]);

  // Intersection Observer for sections
  useEffect(() => {
    const sections = NavItem.map((item) => {
      // Handle home link
      if (item.href === "#") {
        return document.querySelector("body");
      }
      return document.querySelector(item.href);
    });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.tagName === "BODY") {
              setActiveSection("#");
            } else {
              setActiveSection(`#${entry.target.id}`);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const isActive = (href: string) => activeSection === href;

  // Handle scroll events for navbar visibility and background
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state - for background transparency
      setScrolled(window.scrollY > 20);

      // Handle navbar visibility
      if (!isOpen) {
        if (window.scrollY > prevScrollY && window.scrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setPrevScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={router.pathname}
      className="z-50"
    >
      <motion.div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          showNavbar || isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundColor: scrolled ? "#14181AF2" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 4px 20px #00A8CD20" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-5">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="group flex items-center gap-2">
                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: "#00A8CD" }}
                  >
                    A
                  </div>
                  <motion.div
                    className="absolute -inset-1 rounded-lg blur-sm -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: "#00A8CD50" }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
                <span
                  className="font-semibold text-xl text-white transition-colors duration-300"
                  style={{ color: isOpen ? "#00A8CD" : "#ffffff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00A8CD";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  Sabilly
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex flex-row gap-8">
                {NavItem.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <motion.li key={item.id} className="relative">
                      <Link
                        href={item.href}
                        className={`relative px-2 py-1 text-sm font-medium transition duration-300`}
                        style={{
                          color: active ? "#00A8CD" : "#ffffff",
                        }}
                        onMouseEnter={(e) => {
                          if (!active) e.currentTarget.style.color = "#00A8CD";
                        }}
                        onMouseLeave={(e) => {
                          if (!active) e.currentTarget.style.color = "#ffffff";
                        }}
                      >
                        {item.name}
                        {active && (
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 rounded-full"
                            style={{ backgroundColor: "#00A8CD" }}
                            layoutId="navbar-indicator"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact Button */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="px-6 py-2 rounded-lg text-white font-medium shadow-lg transition-all duration-300"
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
                Hubungi Saya
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "#14181A70",
                borderColor: "#00A8CD30",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00A8CD";
                e.currentTarget.style.backgroundColor = "#14181A90";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#00A8CD30";
                e.currentTarget.style.backgroundColor = "#14181A70";
              }}
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={isOpen ? ArrowClose : ArrowOpen}
                alt="Menu Toggle"
                className="w-5 h-5"
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full right-0 left-0 backdrop-blur-md border-t shadow-lg"
              style={{
                backgroundColor: "#14181AF2",
                borderColor: "#00A8CD30",
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-6 py-4">
                <ul className="flex flex-col gap-4">
                  {NavItem.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-b pb-2"
                        style={{ borderColor: "#00A8CD20" }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-2 py-2 transition duration-300 flex items-center justify-between"
                          style={{
                            color: active ? "#00A8CD" : "#ffffff",
                          }}
                        >
                          <span>{item.name}</span>
                          {active && (
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: "#00A8CD" }}
                            ></span>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: NavItem.length * 0.05 }}
                  >
                    <Link
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="block mt-2 text-center px-6 py-2 rounded-lg text-white font-medium shadow-lg"
                      style={{ backgroundColor: "#00A8CD" }}
                    >
                      Hubungi Saya
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
