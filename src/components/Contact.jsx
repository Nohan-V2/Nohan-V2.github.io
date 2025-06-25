function Component() {
  return (
    <div className="contact-container flex flex-col items-center bg-gray-800 w-full py-16">
      <div className="contact-wrapper flex flex-col items-center w-11/12 max-w-[1110px]">
        <div className="contact-container-wrapper flex flex-col items-center text-center lg:flex-row lg:justify-between">
          <div className="title-contact-wrapper flex flex-col gap-5 text-center mb-12 md:text-left w-full">
            <h2 className="title-contact text-white text-4xl font-bold leading-10 tracking-[-1.136px]">
              Contact
            </h2>
            <p className="description-contact text-gray-400 font-medium leading-6">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            action=""
            className="formulaire-contact flex flex-col gap-8 mb-20 w-full"
          >
            <input
              type="text"
              className="contact-name pl-6 pb-4 border-b outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50"
              placeholder="NAME"
            />
            <input
              type="text"
              className="contact-email pl-6 pb-4 border-b outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50"
              placeholder="EMAIL"
            />
            <textarea
              className="contact-message pl-6 pb-20 border-b border-solid outline-none text-white font-medium leading-6 tracking-[-0.222px] placeholder:opacity-50"
              placeholder="MESSAGE"
            ></textarea>
            <button
              type="submit"
              className="contact-submit text-right text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="social-contact-wrapper flex flex-col items-center gap-5 border-t border-solid pt-10 w-full">
          <span className="footer-title text-white font-bold text-2xl leading-8 tracking-[-0.333px]">
            Nohan-V2
          </span>
          <ul className="footer-social-list flex gap-6">
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img
                  src="//akar-icons_github-fill.svg"
                  alt="Github"
                  className="footer-image-social"
                />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img
                  src="//simple-icons_frontendmentor.svg"
                  alt="My site"
                  className="footer-image-social"
                />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img
                  src="//LinkedIn.svg"
                  alt="LinkedIn"
                  className="footer-image-social"
                />
              </a>
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <img
                  src="//akar-icons_twitter-fill.svg"
                  alt="Twitter"
                  className="footer-image-social"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Component;
