function Component() {
  return (
    <div className="presentation-container flex flex-col items-center">
      <img src="" alt="" className="profil-image" />
      <div className="presentation-text-wrapper flex flex-col items-center gap-6 mx-4 mb-20">
        <h1 className="presentation-title text-center text-white font-bold text-5xl leading-10 tracking-[-1.136px]">
          Nice to meet you! I’m{" "}
          <span className="special-presentation-title underline decoration-green-400">
            Nohan
          </span>
        </h1>
        <p className="presentation-description text-gray-400 font-medium leading-6 text-center">
          Based in the FR, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <button className="presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px]">
          CONTACT ME
        </button>
      </div>
    </div>
  );
}

export default Component;
