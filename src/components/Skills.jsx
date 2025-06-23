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

function Component() {
  return (
    <ul className="skill-list flex flex-col gap-6 border-t border-b border-solid w-full min-w-[344px] max-w-[1110px] py-10 mb-20">
      {skills.map((skill) => (
        <li className="skill-item flex flex-col" key={skill.id}>
          <span className="skill-text text-white text-center text-3xl font-bold leading-10 tracking-[-1px]">
            {skill.langue}
          </span>
          <span className="experience-text text-center text-base text-gray-400 font-medium leading-6">
            {skill.experience} Years Experience
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Component;
