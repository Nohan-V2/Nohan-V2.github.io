const languages = [
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
    <ul className="language-list flex flex-col items-center gap-6 border-t border-b border-solid w-[calc(100%-32px)] min-w-[344px] max-w-[1110px] py-10 mb-20">
      {languages.map((language) => (
        <li
          className="language-item flex flex-col items-center"
          key={language.id}
        >
          <span className="language-text text-white text-center text-3xl font-bold leading-10 tracking-[-1px]">
            {language.langue}
          </span>
          <span className="experience-text text-center text-base text-gray-400 font-medium leading-6">
            {language.experience} Years Experience
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Component;
