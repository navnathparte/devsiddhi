import React, { FormEvent, useEffect, useState } from "react";
import "../index.css";
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
import PageTransition from "../components/PageTransition";

const ContactSplit: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission logic
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
    <PageTransition>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="flex-1 flex flex-col items-center px-6 py-10">
          <div className="w-full max-w-2xl flex flex-col gap-10 space-y-4">
            {/* Title */}
            <h1 className="animate-bounce text-4xl text-center text-[#B68842] font-bold">
              Get in touch
            </h1>

            {/* Details */}
            <div className="grid grid-cols-2 gap-15 m-2 p-4">
              <div className="relative bg-[#B68842] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-[#B68842] text-xl">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <p className="text-black font-bold text-lg mt-0">Phone</p>
                <a
                  href="tel:+919875033195"
                  className="mt-1 block text-sm font-medium text-white hover:text-[#ccafaf] transition-colors duration-200"
                >
                  +91 98750 33195
                </a>
              </div>

              {/* Card 2 */}
              <div className="relative bg-[#B68842] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-[#B68842] text-xl">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p className="text-black font-bold text-lg mt-0">Email</p>
                <a
                  href="mailto:9nath.parte@gmail.com"
                  className="mt-1 block text-sm font-semibold text-white hover:text-[#ccafaf] transition-colors duration-200"
                >
                  9nath.parte@gmail.com
                </a>
              </div>

              {/* Card 3 */}
              <div className="relative bg-[#B68842] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-[#B68842] text-xl">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <p className="text-black font-bold text-lg mt-0.5">Address</p>
                <a
                  href="https://www.google.com/maps?q=Metro-Rail+station,+Devsiddhi+falicia,+opp.+Randesan,+Randesan,+Gandhinagar,+Gujarat+382421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm font-semibold text-white hover:text-[#ccafaf] transition-colors duration-200"
                >
                  Metro-Rail station, Devsiddhi falicia, opp. Randesan,
                  Randesan, Gandhinagar, Gujarat 382421
                </a>
              </div>

              {/* Card 4 */}
              <div className="relative bg-[#B68842] text-white rounded-3xl pt-14 pb-6 px-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#1f1f1f] border-4 border-black rounded-full flex items-center justify-center text-[#B68842] text-xl">
                  <FontAwesomeIcon icon={faShareAlt} />
                </div>
                <p className="text-black font-bold text-lg mt-2">Follow Me</p>
                <div className="mt-3 flex justify-center space-x-6 text-white text-3xl">
                  <a
                    href="https://www.linkedin.com/company/devsiddhi-group10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="hover:text-[#AB5B55] transition-colors duration-200"
                      icon={faLinkedin}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/devsiddhigroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="hover:text-[#AB5B55]"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/devsiddhi.group.10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="hover:text-[#AB5B55]"
                      icon={faFacebookF}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="hover:text-[#AB5B55]"
                      icon={faYoutube}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-start">
          <div className="hidden md:block w-px h-[70%] bg-[#B68842]" />
        </div>

        <div className="flex-1 flex flex-col items-center px-0 py-0">
          <div className="w-full max-w-3xl mx-auto px-4 py-2 flex flex-col gap-8">
            <div className="text-center space-y-2 py-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[#B68842]">
                Schedule a call now
              </h1>
              <h4 className="text-base md:text-sm font-bold text-[#D12023] max-w-xl mx-auto">
                Start your offshore web & mobile app team with a free
                consultation from our solutions engineer.
              </h4>
            </div>

            {/* Form Container */}
            <div className="bg-white border border-[#B68842] rounded-xl shadow-lg px-6 py-8 w-full max-w-md mx-auto">
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
        </div>
      </div>
    </PageTransition>
  );
};
export default ContactSplit;
