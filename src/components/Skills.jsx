const skills = [
  {
    id: 1,
    skill: "HTML",
    experience: 4,
  },
  {
    id: 2,
    skill: "CSS",
    experience: 4,
  },
  {
    id: 3,
    skill: "Javascript",
    experience: 3,
  },
  {
    id: 4,
    skill: "PHP",
    experience: 2,
  },
  {
    id: 5,
    skill: "MySQL",
    experience: 2,
  },
  {
    id: 6,
    skill: "Git",
    experience: 2,
  },
  {
    id: 7,
    skill: "Docker",
    experience: 2,
  },
  {
    id: 8,
    skill: "React",
    experience: 3,
  },
  {
    id: 9,
    skill: "Tailwind",
    experience: 3,
  },
  {
    id: 10,
    skill: "Laravel",
    experience: 2,
  },
  {
    id: 11,
    skill: "Node.js",
    experience: 1,
  },
  {
    id: 12,
    skill: "Accessibility",
    experience: 3,
  },
];

function Skills() {
  return (
    <ul className="skill-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-14 border-t border-b border-white max-w-[1440px] py-10 w-11/12 md:border-b-0">
      {skills.map((skill) => (
        <li
          className="skill-item flex flex-col items-center md:items-start"
          key={skill.id}
        >
          <span className="skill-text text-white text-center text-pretty md:text-left text-3xl md:text-5xl font-bold leading-10 md:leading-[56px] tracking-[-1px] md:tracking-[-1.5px]">
            {skill.skill}
          </span>
          <span className="experience-text text-center text-pretty md:text-left text-base text-gray-400 font-medium leading-6">
            {skill.experience} Years Experience
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Skills;
