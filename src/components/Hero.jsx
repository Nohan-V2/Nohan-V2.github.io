function Component() {
  return (
    <div className="hero-container flex flex-col items-center gap-10 w-[calc(100%-32px)] min-w-[344px] max-w-[1110px]">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39"
        alt="Shrek"
        className="profil-image w-[calc(100%-168px)] min-w-[174px] max-w-[444px] object-cover"
      />
      <div className="hero-text-wrapper flex flex-col items-center gap-6 mx-4 mb-20">
        <h1 className="hero-title text-center text-white font-bold text-5xl leading-10 tracking-[-1.136px]">
          Nice to meet you! I’m{" "}
          <span className="special-hero-title underline decoration-green-400">
            Nohan
          </span>
        </h1>
        <p className="hero-description text-gray-400 font-medium leading-6 text-center text-base">
          Based in the FR, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <button className="cursor-pointer hero-button uppercase decoration-green-400 underline underline-offset-[10px] text-white text-base font-bold leading-6 tracking-[2.286px]">
          CONTACT ME
        </button>
      </div>
    </div>
  );
}

export default Component;
