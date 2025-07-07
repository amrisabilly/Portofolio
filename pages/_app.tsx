import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router"; // import useRouter
import "@/styles/globals.css"; // CSS global Anda (opsional)
import "aos/dist/aos.css"; // Import CSS AOS
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter(); // Menggunakan useRouter untuk mendapatkan pathname

  useEffect(() => {
    // Dynamically import New Relic browser agent only on client
    if (typeof window !== "undefined") {
      import("@newrelic/browser-agent/loaders/browser-agent");
    }
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      offset: 100, // Jarak sebelum elemen terlihat untuk memulai animasi
      easing: "ease-in-out", // Efek easing untuk animasi
      once: false, // False agar animasi diputar setiap kali elemen muncul
      mirror: true, // Animasi juga diputar saat scroll ke atas
    });
  }, []);
  return (
    <>
      <Head>
        <title>Amri Sabilly - Web Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio website Amri Sabilly - Web Developer yang berpengalaman dalam React, Next.js, dan teknologi web modern. Menawarkan layanan pengembangan website profesional."
        />
        <meta
          name="keywords"
          content="web developer, react developer, next.js, portfolio, frontend developer, fullstack developer, amri sabilly"
        />
        <meta name="author" content="Amri Sabilly" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Amri Sabilly - Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio website Amri Sabilly - Web Developer yang berpengalaman dalam React, Next.js, dan teknologi web modern."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.amrsabilly.my.id/" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:site_name" content="Amri Sabilly Portfolio" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Amri Sabilly - Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Portfolio website Amri Sabilly - Web Developer yang berpengalaman dalam React, Next.js, dan teknologi web modern."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.amrsabilly.my.id/" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={router.pathname} // Animasi berdasarkan perubahan halaman dengan router.pathname
        >
          <Component {...pageProps} />
        </motion.main>
      </div>
    </>
  );
}

export default MyApp;
