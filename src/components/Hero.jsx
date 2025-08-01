import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const words = ["Nohan", "Dev Front-End", "Gamer", "Artist", "Otaku"];

function Hero() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    const textEl = textRef.current;
    const cursorEl = cursorRef.current;

    // Blinking cursor animation
    const cursorTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    cursorTimeline
      .to(cursorEl, { opacity: 1, duration: 0 })
      .to(cursorEl, { opacity: 0, duration: 0, delay: 0.8 });

    // Typing animation timeline
    const mainTimeline = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      // Typing effect
      mainTimeline
        .to(textEl, {
          duration: word.length * 0.15, // Typing speed
          text: word,
          ease: "none",
        })
        .to(textEl, { duration: 1.5 }); // Pause after typing

      // Create a backspace effect by removing one character at a time
      for (let i = word.length; i >= 0; i--) {
        mainTimeline.to(textEl, {
          duration: 0.1, // Speed of each backspace
          text: word.substring(0, i),
          ease: "none",
        });
      }

      // Pause after deleting
      mainTimeline.to(textEl, { duration: 0.5 });
    });

    return () => {
      cursorTimeline.kill();
      mainTimeline.kill();
    };
  }, []);

  return (
    <div className="hero-container flex flex-col items-center gap-10 w-11/12 max-w-[1110px] md:flex-row-reverse md:justify-between relative pt-10 md:pt-0">
      <img
        src="https://avatars.githubusercontent.com/u/181266553"
        alt="Nohan"
        className="profil-image w-[174px] md:w-[322px] lg:w-[445px] object-contain z-10 rounded-full"
      />
      <div className="hero-text-wrapper flex flex-col gap-6 w-11/12 md:w-full md:items-start z-10 relative">
        <h1 className="hero-title text-center text-white font-bold text-[40px] leading-10 tracking-[-1.14px] md:text-7xl md:leading-[88px] md:tracking-[-2.5px] lg:text-[88px] md:text-left">
          Nice to meet you! I’m{" "}
          <span className="special-hero-title underline decoration-green-400">
            <span ref={textRef}></span>
            <span ref={cursorRef} className="opacity-0">
              |
            </span>
          </span>
        </h1>
        <p className="hero-description text-gray-400 font-medium leading-6 text-center text-base md:text-lg md:leading-8 md:text-left md:max-w-[445px]">
          Based in the FR, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <a
          href="#contact"
          className="cursor-pointer contact-me-button uppercase decoration-green-400 underline underline-offset-[10px] text-white text-base font-bold leading-6 tracking-[2.286px] hover:text-green-400 active:text-gray-400 self-center md:self-start"
        >
          CONTACT ME
        </a>
      </div>
      <img
        src="/pattern-rings.svg"
        alt=""
        className="absolute top-20 -left-2/4 md:left-0"
      />
    </div>
  );
}

export default Hero;
