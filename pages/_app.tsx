import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router"; // import useRouter
import '@/styles/globals.css'; // CSS global Anda (opsional)
import 'aos/dist/aos.css';    // Import CSS AOS
import { useEffect } from 'react';
import AOS from 'aos';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter(); // Menggunakan useRouter untuk mendapatkan pathname

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      offset: 100,    // Jarak sebelum elemen terlihat untuk memulai animasi
      easing: 'ease-in-out', // Efek easing untuk animasi
      once: false,    // False agar animasi diputar setiap kali elemen muncul
      mirror: true,   // Animasi juga diputar saat scroll ke atas
    });
  }, []);
  return (
    <>
      <Head>
        <title>amri sabilly</title>
        <meta name="description" content="Deskripsi aplikasi Anda" />
        <link rel="icon" href="/next.svg" />
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
