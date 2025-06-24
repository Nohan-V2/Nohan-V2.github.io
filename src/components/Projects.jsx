const projects = [
  {
    id: 1,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39",
    title: "Project 1",
    description: "Description 1",
    tags: ["HTML", "CSS"],
  },
  {
    id: 2,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39",
    title: "Project 2",
    description: "Description 2",
    tags: ["HTML", "CSS"],
  },
  {
    id: 3,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39",
    title: "Project 3",
    description: "Description 3",
    tags: ["HTML", "CSS"],
  },
  {
    id: 4,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39",
    title: "Project 1",
    description: "Description 1",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39",
    title: "Project 1",
    description: "Description 1",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F5660511.jpg&f=1&nofb=1&ipt=bfbb12dd846f98c0f1010b85115b7087d2d5e661060bced04a8383bf96739d39",
    title: "Project 1",
    description: "Description 1",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

function Component() {
  return (
    <div className="projects-container flex flex-col gap-5 pt-10 w-full max-w-[1110px] mx-4">
      <div className="header-projects-wrapper flex justify-between w-full">
        <h2 className="title-header-projects text-white text-4xl font-bold leading-10 tracking-[-1.136px]">
          Projects
        </h2>
        <button className="button-header-projects text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px]">
          CONTACT ME
        </button>
      </div>
      <ul className="projects-list flex flex-col gap-10 w-full">
        {projects.map((project) => (
          <li className="project-item flex flex-col" key={project.id}>
            <img
              className="project-image w-full object-cover mb-5"
              src={project.image}
              alt={project.title}
            />
            <div className="project-description-wrapper flex flex-col">
              <h3 className="project-title mb-2 text-white text-2xl font-bold leading-8">
                {project.title}
              </h3>
              <ul className="project-tags flex gap-4 mb-5 font-medium leading-7 text-gray-400">
                {project.tags.map((tag) => (
                  <li className="project-tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <ul className="project-cta-wrapper flex gap-8">
                <li className="project-cta-item">
                  <a
                    className="project-cta-link text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px]"
                    href={project.link}
                  >
                    VIEW PROJECT
                  </a>
                </li>
                <li className="project-cta-item">
                  <a
                    className="project-cta-link text-base cursor-pointer presentation-button uppercase decoration-green-400 underline underline-offset-[10px] text-white font-bold leading-6 tracking-[2.286px]"
                    href={project.github}
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

export default Component;
