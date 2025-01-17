import React from "react";

const FormContact = () => {
  return (
    <div className="w-full bg-gradient-to-r from-transparent via-[#525151]/10 to-[#525151]/20  py-5 sm:pt-5 md:pt-8 mb-[1em] md:mb-[3em] lg:mb-[3em]" data-aos="fade-up">
      <form
        action="https://formsubmit.co/amrsabill@gmail.com" 
        method="POST"
        target="_blank" 
        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-5 md:gap-10 text-white text-[12px] md:text-[16px] px-8 md:px-16 lg:px-24"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full bg-transparent border-b-2 border-[#00A8CD] focus:outline-none p-2"
          required
          data-aos="fade-up"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="w-full bg-transparent border-b-2 border-[#00A8CD] focus:outline-none p-2"
          required
          data-aos="fade-up"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full bg-transparent border-b-2 border-[#00A8CD] focus:outline-none p-2"
          required
          data-aos="fade-up"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full bg-transparent border-b-2 border-[#00A8CD] focus:outline-none p-2"
          data-aos="fade-up"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="md:col-span-2 w-full bg-transparent border border-[#00A8CD] rounded-sm p-2 focus:outline-none h-[8em] text-start resize-none"
          required
          data-aos="fade-up"
        />
        <div className="md:col-span-2 flex justify-center" data-aos="fade-up">
          <button
            type="submit"
            className="bg-primary px-8 py-2 w-[10em] rounded-sm hover:scale-105 transition duration-300 mb-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
