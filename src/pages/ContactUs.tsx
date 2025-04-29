"use client";

import React, { FormEvent, useEffect, useState } from "react";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ContactSplit: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Form submitted!");
      setIsSubmitting(false);
    }, 2000);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden w-full">
        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center justify-center px-6 py-10"
        >
          <div className="w-full flex flex-col gap-20 space-y-4">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl text-center text-[#B68842] font-bold"
            >
              Get in touch
            </motion.h1>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 m-2 p-4">
              {/* Card List */}
              {[
                {
                  icon: faPhone,
                  label: "Phone",
                  value: "+91 98750 33195",
                  href: "tel:+919875033195",
                },
                {
                  icon: faEnvelope,
                  label: "Email",
                  value: "9nath.parte@gmail.com",
                  href: "mailto:9nath.parte@gmail.com",
                },
                {
                  icon: faMapMarkerAlt,
                  label: "Address",
                  value:
                    "Metro-Rail station, Devsiddhi falicia, opp. Randesan, Gandhinagar, Gujarat 382421",
                  href: "https://www.google.com/maps?q=Metro-Rail+station,+Devsiddhi+falicia,+opp.+Randesan,+Randesan,+Gandhinagar,+Gujarat+382421",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-[#B68842] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg w-[100%]"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-[#B68842] text-xl">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <p className="text-black font-bold text-lg mt-2">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="mt-1 block text-sm font-medium text-white hover:text-[#ccafaf] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}

              {/* Follow Me Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-[#B68842] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-[#B68842] text-xl">
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>
                <p className="text-black font-bold text-lg mt-2">Follow Me</p>
                <div className="mt-3 flex justify-center space-x-6 text-white text-2xl">
                  <a
                    href="https://www.linkedin.com/company/devsiddhi-group10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#AB5B55]"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://www.instagram.com/devsiddhigroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#AB5B55]"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://www.facebook.com/devsiddhi.group.10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#AB5B55]"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#AB5B55]"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block w-px bg-[#B68842] origin-top"
        ></motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center items-center px-6 py-10"
        >
          <div className="w-full max-w-md flex flex-col gap-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-[#B68842]">
                Schedule a call now
              </h1>
              <h4 className="text-sm font-bold text-[#D12023] max-w-xs mx-auto">
                Start your offshore web & mobile app team with a free
                consultation from our solutions engineer.
              </h4>
            </div>

            <div className="bg-white border border-[#B68842] rounded-xl shadow-lg px-6 py-8">
              <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
                <div>
                  <label className="text-[#B68842] text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full mt-1 p-3 pl-4 rounded-md bg-red-50 text-[#B68842] text-base focus:outline-none border border-[#B68842]"
                    required
                  />
                </div>

                <div>
                  <label className="text-[#B68842] text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 p-3 pl-4 rounded-md bg-red-50 text-[#B68842] text-base focus:outline-none border border-[#B68842]"
                    required
                  />
                </div>

                <div>
                  <label className="text-[#B68842] text-sm font-medium">
                    Write your message here
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full mt-1 p-3 pl-4 rounded-md bg-red-50 text-[#B68842] text-base resize-none focus:outline-none border border-[#B68842]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-button inline-flex py-2 px-6 text-sm items-center justify-center rounded-full bg-[linear-gradient(110deg,#AB5B55,45%,#EADCF7,55%,#AB5B55)] bg-[length:200%_100%] font-bold text-white gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit now"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSplit;
