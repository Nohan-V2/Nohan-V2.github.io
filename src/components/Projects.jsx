const projects = [
  {
    id: 1,
    title: "DESIGN PORTFOLIO",
    image: "/image-portfolio-1.webp",
    languages: ["HTML", "CSS"],
    live: "#",
    code: "https://github.com/Nohan-V2/design-portfolio",
  },
  {
    id: 2,
    title: "E-LEARNING LANDING PAGE",
    image: "/image-portfolio-2.webp",
    languages: ["HTML", "CSS"],
    live: "#",
    code: "https://github.com/Nohan-V2/e-learning-landing-page",
  },
  {
    id: 3,
    title: "TODO WEB APP",
    image: "/image-portfolio-3.webp",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/Nohan-V2/todo-web-app",
  },
  {
    id: 4,
    title: "ENTERTAINMENT WEB APP",
    image: "/image-portfolio-4.webp",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/Nohan-V2/entertainment-web-app",
  },
  {
    id: 5,
    title: "MEMORY GAME",
    image: "/image-portfolio-5.webp",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/Nohan-V2/memory-game",
  },
  {
    id: 6,
    title: "ART GALLERY SHOWCASE",
    image: "/image-portfolio-6.webp",
    languages: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/Nohan-V2/art-gallery-showcase",
  },
];

function Projects() {
  return (
    <div className="projects-container flex flex-col items-center gap-10 md:gap-20 pt-10 w-11/12 max-w-[1110px]">
      <div className="header-projects-wrapper flex justify-between w-full">
        <h2 className="title-header-projects text-white text-4xl md:text-7xl lg:text-[88px] font-bold leading-10 md:leading-[88px] tracking-[-1.136px] md:tracking-[-2.5px]">
          Projects
        </h2>
        <a href="#contact" className="button-header-projects text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px] hover:text-green-400">
          CONTACT ME
        </a>
      </div>
      <ul className="projects-list grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {projects.map((project) => (
          <li className="project-item flex flex-col group" key={project.id}>
            <div class="relative">
              <img
                className="project-image w-full object-cover mb-5 group-hover:opacity-25 transition-opacity duration-300"
                src={project.image}
                alt={project.title}
              />
              <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
