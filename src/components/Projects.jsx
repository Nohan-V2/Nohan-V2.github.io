const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    tags: ["Tag 1", "Tag 2"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    tags: ["Tag 3", "Tag 4"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description 3",
    tags: ["Tag 5", "Tag 6"],
  },
];

function Component() {
  return (
    <div
      className="projects-container flex flex-col
    items-center gap-5 pt-10 w-[calc(100%-32px)] min-w-[344px] max-w-[1110px] mb-20"
    >
      <div className="header-projects-wrapper flex items-center justify-between w-full">
        <h2 className="title-header-projects text-white text-4xl font-bold leading-10 tracking-[-1.136px]">
          Projects
        </h2>
        <button className="button-header-projects text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px]">
          CONTACT ME
        </button>
      </div>
      <ul className="projects-list flex flex-col items-center gap-5 w-full">
        {projects.map((project) => (
          <li
            className="project-item flex flex-col items-center gap-2.5 w-full"
            key={project.id}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-description-wrapper">
              <h3 className="project-title text-white text-2xl font-bold leading-8 tracking-[-0.333px]">
                {project.title}
              </h3>
              <ul className="project-tags flex gap-2.5">
                {project.tags.map((tag) => (
                  <li
                    className="project-tag text-gray-400 font-medium leading-6 text-base"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <ul className="project-cta">
                <li>
                  <a href={project.link}>VIEW PROJECT</a>
                </li>
                <li>
                  <a href={project.github}>VIEW CODE</a>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Component;
