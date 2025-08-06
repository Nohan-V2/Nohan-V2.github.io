const skills = [
  {
    id: 1,
    langue: "HTML",
    experience: 1,
  },
  {
    id: 2,
    langue: "CSS",
    experience: 1,
  },
  {
    id: 3,
    langue: "Javascript",
    experience: 1,
  },
  {
    id: 4,
    langue: "Accessibility",
    experience: 1,
  },
  {
    id: 5,
    langue: "React",
    experience: 1,
  },
  {
    id: 6,
    langue: "Tailwind",
    experience: 1,
  },
];

function Skills() {
  return (
    <ul className="skill-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-14 border-t border-b border-white max-w-[1110px] py-10 w-11/12 md:border-b-0">
      {skills.map((skill) => (
        <li
          className="skill-item flex flex-col items-center md:items-start"
          key={skill.id}
        >
          <span className="skill-text text-white text-center text-pretty md:text-left text-3xl md:text-5xl font-bold leading-10 md:leading-[56px] tracking-[-1px] md:tracking-[-1.5px]">
            {skill.langue}
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
