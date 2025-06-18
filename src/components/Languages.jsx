const languages = [
  {
    langue: "HTML",
    experience: "1 Years Experience",
  },
  {
    langue: "CSS",
    experience: "1 Years Experience",
  },
  {
    langue: "Javascript",
    experience: "1 Years Experience",
  },
  {
    langue: "Accessibility",
    experience: "1 Years Experience",
  },
  {
    langue: "React",
    experience: "1 Years Experience",
  },
  {
    langue: "Tailwind",
    experience: "1 Years Experience",
  },
];

function Component() {
  return (
    <ul className="language-list flex flex-col items-center gap-6 border-t border-b w-[calc(100%-32px)] min-w-[344px] max-w-[1110px] py-10">
      {languages.map((language) => (
        <li
          className="language-item flex flex-col items-center"
          key={language.id}
        >
          <span className="language-text">{language.langue}</span>
          <span className="experience-text">{language.experience}</span>
        </li>
      ))}
    </ul>
  );
}

export default Component;
