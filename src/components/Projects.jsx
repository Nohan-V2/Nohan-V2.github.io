const projects = [
  {
    id: 1,
    title: "VALOROULETTE",
    image: "/valoroulette.png",
    languages: ["TypeScript", "CSS"],
    live: "https://valoroulette-six.vercel.app/",
    code: "https://github.com/Nohan-V2/Valoroulette",
  },
  {
    id: 2,
    title: "TP CONNECT FOR GAME",
    image: "/puissance4.png",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "https://nohan-v2.github.io/TP-connect-for-game",
    code: "https://github.com/Nohan-V2/TP-connect-for-game",
  },
  {
    id: 3,
    title: "CS2 API",
    image: "/cs2-api.png",
    languages: ["JavaScript"],
    live: "https://cs2-api.onrender.com/",
    code: "https://github.com/Nohan-V2/CS2-API",
  },
  {
    id: 4,
    title: "ROUND TO 8PX",
    image: "/round-to-8px.png",
    languages: ["TypeScript"],
    live: "https://github.com/Nohan-V2/nohan.round-to-8px-0.0.1/releases/tag/vsix",
    code: "https://github.com/Nohan-V2/nohan.round-to-8px-0.0.1",
  },
  {
    id: 5,
    title: "SPEED DRAW",
    image: "/speed-draw.png",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "https://nohan-v2.github.io/Speed-Draw",
    code: "https://github.com/Nohan-V2/Speed-Draw",
  },
  {
    id: 6,
    title: "ARC MAIL",
    image: "/arc-mail.png",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "https://nohan-v2.github.io/ARC-Mail",
    code: "https://github.com/Nohan-V2/ARC-Mail",
  },
];

function Projects() {
  return (
    <div className="projects-container flex flex-col items-center gap-10 md:gap-20 pt-10 w-11/12 max-w-[1440px]">
      <div className="header-projects-wrapper flex justify-between w-full">
        <h2 className="title-header-projects text-white text-4xl md:text-7xl lg:text-[88px] font-bold leading-10 md:leading-[88px] tracking-[-1.136px] md:tracking-[-2.5px]">
          Projects
        </h2>
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-transparent border-none p-0 text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px] hover:text-green-400"
          aria-label="Aller à la section contact"
        >
          CONTACT ME
        </button>
      </div>
      <ul className="projects-list grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project) => (
          <li className="project-item flex flex-col group" key={project.id}>
            <div className="relative">
              <div className="project-image-wrapper md:h-80 w-full overflow-hidden mb-5">
                <img
                  className="project-image w-full h-full object-cover group-hover:opacity-25 transition-opacity duration-300"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white text-base font-bold leading-6 tracking-[2.286px] hover:text-green-400 active:text-gray-400"
                >
                  VIEW PROJECT
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-cta-link text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px] hover:text-green-400 mt-8"
                >
                  VIEW CODE
                </a>
              </div>
            </div>
            <div className="project-description-wrapper flex flex-col">
              <h3 className="project-title mb-2 text-white text-2xl font-bold leading-8">
                {project.title}
              </h3>
              <ul className="project-tags flex gap-4 mb-5 font-medium leading-7 text-gray-400">
                {project.languages.map((language) => (
                  <li className="project-tag" key={language}>
                    {language}
                  </li>
                ))}
              </ul>
              <ul className="project-cta-wrapper flex gap-8 md:hidden">
                <li className="project-cta-item">
                  <a
                    className="project-cta-link text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px] hover:text-green-400 active:text-gray-400"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW PROJECT
                  </a>
                </li>
                <li className="project-cta-.item">
                  <a
                    className="project-cta-link text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px] hover:text-green-400 active:text-gray-400"
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW CODE
                  </a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
