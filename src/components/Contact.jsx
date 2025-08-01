import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            // Optionally, reset the form and show a success message
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error.text);
            // Optionally, show an error message to the user
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div
      id="contact"
      className="contact-container flex flex-col items-center bg-gray-800 w-full py-16 px-4 md:px-8 lg:px-0"
    >
      <img
        src="/pattern-rings.svg"
        alt=""
        className="absolute right-0 bottom-20"
      />
      <div className="contact-wrapper flex flex-col items-center w-11/12 max-w-[1110px]">
        <div className="contact-container-wrapper flex flex-col items-center text-center lg:flex-row lg:justify-between w-full">
          <div className="title-contact-wrapper flex flex-col gap-5 text-center mb-12 md:text-left w-full lg:max-w-[445px]">
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
                  className={`contact-name pl-6 pb-4 border-b outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50 bg-transparent w-full ${
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
                  className={`contact-email pl-6 pb-4 border-b outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50 bg-transparent w-full ${
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
                  className={`contact-message pl-6 pb-4 border-b border-solid outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50 bg-transparent w-full ${
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
              className="contact-submit self-end uppercase text-white font-bold text-base tracking-[2.286px] pb-2 border-b-2 border-green-400 hover:text-green-400 active:text-green-400"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="social-contact-wrapper flex flex-col items-center gap-5 border-t border-gray-600 pt-10 w-full md:flex-row md:justify-between">
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
                <img
                  src="/akar-icons_github-fill.svg"
                  alt="Github"
                  className="footer-image-social hover:brightness-200 active:brightness-150"
                />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img
                  src="/simple-icons_frontendmentor.svg"
                  alt="My site"
                  className="footer-image-social hover:brightness-200 active:brightness-150"
                />
              </a>
            </li>
            <li className="footer-social-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <img
                  src="/LinkedIn.svg"
                  alt="LinkedIn"
                  className="footer-image-social hover:brightness-200 active:brightness-150"
                />
              </a>
            </li>
            <li className="footer-social-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <img
                  src="/akar-icons_twitter-fill.svg"
                  alt="Twitter"
                  className="footer-image-social hover:brightness-200 active:brightness-150"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
