import React, { useState } from "react";
import { motion } from "framer-motion";

const FormContact = () => {
  const [formState, setFormState] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // After form submission is complete
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
    // Form will still submit normally via formsubmit.co
  };

  return (
    <div
      className="w-full backdrop-blur-md rounded-2xl border p-8 shadow-xl"
      style={{
        backgroundColor: "#14181A50",
        borderColor: "#00A8CD30",
      }}
      data-aos="fade-up"
    >
      <form
        action="https://formsubmit.co/amrsabill@gmail.com"
        method="POST"
        target="_blank"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 text-white text-[14px] md:text-[16px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Nama Depan"
            className="w-full bg-transparent border-b-2 focus:outline-none p-3 transition-all duration-300"
            style={{
              borderColor: "#00A8CD70",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD70";
            }}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <input
            type="text"
            name="last_name"
            value={formState.last_name}
            onChange={handleChange}
            placeholder="Nama Belakang"
            className="w-full bg-transparent border-b-2 focus:outline-none p-3 transition-all duration-300"
            style={{
              borderColor: "#00A8CD70",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD70";
            }}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Alamat Email"
            className="w-full bg-transparent border-b-2 focus:outline-none p-3 transition-all duration-300"
            style={{
              borderColor: "#00A8CD70",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD70";
            }}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <input
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="Nomor Telepon/WhatsApp"
            className="w-full bg-transparent border-b-2 focus:outline-none p-3 transition-all duration-300"
            style={{
              borderColor: "#00A8CD70",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD70";
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2"
        >
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Ceritakan tentang proyek atau ide Anda..."
            className="w-full bg-transparent border-2 rounded-lg p-4 focus:outline-none h-32 text-start resize-none transition-all duration-300"
            style={{
              borderColor: "#00A8CD50",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#00A8CD50";
            }}
            required
          />
        </motion.div>
        <motion.div
          className="md:col-span-2 flex flex-col items-center justify-center mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto min-w-[200px] relative overflow-hidden text-white"
            style={{
              backgroundColor: "#00A8CD",
              boxShadow: "0 10px 25px #00A8CD30",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0088AA";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#00A8CD";
            }}
          >
            <span
              className={`flex items-center justify-center transition-all duration-300 ${
                isSubmitting ? "opacity-0" : "opacity-100"
              }`}
            >
              Kirim Pesan
            </span>

            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
              </div>
            )}
          </button>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center"
              style={{ color: "#00A8CD" }}
            >
              Pesan berhasil dikirim! Saya akan segera merespons.
            </motion.div>
          )}
        </motion.div>
      </form>
    </div>
  );
};

export default FormContact;
