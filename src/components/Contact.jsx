"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Sorry, invalid format here";
    if (!formData.email) {
      newErrors.email = "Sorry, invalid format here";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Sorry, invalid format here";
    }
    if (!formData.message) newErrors.message = "Sorry, invalid format here";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        setStatus("missing-env");
        return;
      }

      setStatus("loading");
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY })
        .then(() => {
          setFormData({ name: "", email: "", message: "" });
          setStatus("success");
        })
        .catch(() => {
          setStatus("error");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isLoading = status === "loading";

  return (
    <div
      id="contact"
      className="contact-container flex flex-col items-center bg-[#242424] w-full py-16 px-4 md:px-8 lg:px-0"
    >
      <div className="contact-wrapper z-1 flex flex-col items-center w-11/12 max-w-[1440px]">
        <div className="contact-container-wrapper flex flex-col items-center text-center text-pretty lg:flex-row lg:justify-between w-full">
          <div className="title-contact-wrapper flex flex-col gap-5 text-center text-pretty mb-12 md:text-left w-full lg:max-w-[445px]">
            <h2 className="title-contact text-white text-4xl md:text-7xl lg:text-[88px] font-bold leading-10 md:leading-[88px] tracking-[-1.136px] md:tracking-[-2.5px]">
              Contact
            </h2>
            <p className="description-contact text-gray-400 font-medium leading-6 md:text-lg md:leading-8">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="formulaire-contact flex flex-col gap-8 mb-20 w-full lg:max-w-[445px]"
          >
            {/* Name Input */}
            <div className="w-full">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`contact-name pl-6 pb-4 border-b border-white outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50 bg-transparent w-full ${
                    errors.name
                      ? "border-red-500"
                      : "border-white focus:border-green-400"
                  }`}
                  placeholder="NAME"
                />
                {errors.name && (
                  <img
                    src="/icon-error.svg"
                    alt="Error"
                    className="absolute right-2 top-0 h-5 w-5"
                  />
                )}
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs text-right mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="w-full">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`contact-email pl-6 pb-4 border-b border-white outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50 bg-transparent w-full ${
                    errors.email
                      ? "border-red-500"
                      : "border-white focus:border-green-400"
                  }`}
                  placeholder="EMAIL"
                />
                {errors.email && (
                  <img
                    src="/icon-error.svg"
                    alt="Error"
                    className="absolute right-2 top-0 h-5 w-5"
                  />
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs text-right mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="w-full">
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`contact-message pl-6 pb-4 border-b border-solid border-white outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50 bg-transparent w-full ${
                    errors.message
                      ? "border-red-500"
                      : "border-white focus:border-green-400"
                  }`}
                  placeholder="MESSAGE"
                  rows="4"
                ></textarea>
                {errors.message && (
                  <img
                    src="/icon-error.svg"
                    alt="Error"
                    className="absolute right-2 top-0 h-5 w-5"
                  />
                )}
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs text-right mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="contact-submit cursor-pointer self-end uppercase text-white font-bold text-base tracking-[2.286px] pb-2 border-b-2 border-green-400 hover:text-green-400 active:text-green-400 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isLoading}
            >
              {isLoading ? "Envoi..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="mt-4 text-right text-sm text-green-400">
                Merci ! Votre message a bien été envoyé.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-right text-sm text-red-500">
                Une erreur est survenue. Merci de réessayer plus tard.
              </p>
            )}
            {status === "missing-env" && (
              <p className="mt-4 text-right text-sm text-yellow-400">
                Configuration EmailJS manquante côté serveur.
              </p>
            )}
          </form>
        </div>

        <div className="social-contact-wrapper flex flex-col items-center gap-5 border-t border-white pt-10 w-full md:flex-row md:justify-between">
          <span className="footer-title text-white font-bold text-2xl leading-8 tracking-[-0.333px]">
            Nohan-V2
          </span>
          <ul className="footer-social-list flex gap-6">
            <li className="footer-social-item">
              <a
                href="https://github.com/Nohan-V2"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <svg
                  className="footer-image-social group"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white group-hover:fill-green-400 transition-colors duration-200"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.84282 0.800049C4.40466 0.800049 0 5.20471 0 10.6429C0 14.9983 2.81751 18.6771 6.73003 19.9812C7.22217 20.0674 7.40672 19.7721 7.40672 19.5137C7.40672 19.2799 7.39442 18.5048 7.39442 17.6805C4.92141 18.1357 4.28163 17.0776 4.08477 16.524C3.97404 16.241 3.4942 15.3674 3.07588 15.1337C2.73138 14.9491 2.23924 14.4939 3.06358 14.4816C3.8387 14.4693 4.39236 15.1952 4.57691 15.4905C5.46277 16.9792 6.87767 16.5609 7.44363 16.3025C7.52976 15.6627 7.78813 15.2321 8.07111 14.986C5.88109 14.7399 3.59263 13.891 3.59263 10.1261C3.59263 9.05571 3.97404 8.16986 4.60152 7.48086C4.50309 7.23479 4.15859 6.2259 4.69995 4.87252C4.69995 4.87252 5.52428 4.61414 7.40672 5.8814C8.19415 5.65994 9.03079 5.54921 9.86743 5.54921C10.7041 5.54921 11.5407 5.65994 12.3281 5.8814C14.2106 4.60184 15.0349 4.87252 15.0349 4.87252C15.5763 6.2259 15.2318 7.23479 15.1333 7.48086C15.7608 8.16986 16.1422 9.04341 16.1422 10.1261C16.1422 13.9033 13.8415 14.7399 11.6514 14.986C12.0082 15.2936 12.3158 15.8842 12.3158 16.8069C12.3158 18.1234 12.3035 19.1815 12.3035 19.5137C12.3035 19.7721 12.4881 20.0797 12.9802 19.9812C14.9341 19.3216 16.632 18.0657 17.8349 16.3906C19.0378 14.7153 19.6851 12.7051 19.6856 10.6429C19.6856 5.20471 15.281 0.800049 9.84282 0.800049Z"
                  />
                </svg>
              </a>
            </li>
            <li className="footer-social-item">
              <a
                href="https://www.linkedin.com/in/nolann-seck-727873398/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <svg
                  className="footer-image-social group"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white group-hover:fill-green-400 transition-colors duration-200"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.84099 2.64336C3.92927 2.64336 3.18753 3.38413 3.18753 4.29466C3.18753 5.20579 3.92927 5.94704 4.84099 5.94704C5.75093 5.94704 6.49121 5.20579 6.49121 4.29466C6.49121 3.38413 5.75093 2.64336 4.84099 2.64336ZM3.41319 7.19855V16.3612H6.26328L6.26436 7.19855H3.41319ZM8.05167 7.19771V16.3603L10.8953 16.3614L10.8964 11.8276C10.8964 10.6639 11.0991 9.47431 12.6027 9.47431C14.0834 9.47431 14.0834 10.8781 14.0834 11.9032V16.3603L16.9303 16.3592V11.3351C16.9303 9.06782 16.5164 6.96979 13.5143 6.96979C12.1042 6.96979 11.1815 7.7668 10.8197 8.4494H10.7797L10.7797 7.19771H8.05167ZM18.3483 19.2H1.98544C1.20474 19.2 0.56958 18.5784 0.56958 17.8144V1.38454C0.56958 0.621101 1.20474 0 1.98544 0H18.3483C19.132 0 19.7696 0.621101 19.7696 1.38454V17.8144C19.7696 18.5784 19.132 19.2 18.3483 19.2Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
