function Component() {
  return (
    <header className="header-container flex flex-col items-center gap-5 pt-5 px-2.5 min-w-[174px] max-w-[1110px] mb-12">
      <span className="text-white header-title font-serif font-bold text-2xl leading-8 tracking-[-0.333px]">
        Nohan-V2
      </span>
      <nav className="header-nav">
        <ul className="nav-list flex gap-6">
          <li className="nav-item">
            <a href="#">
              <img
                className="image-nav-item"
                src="/src/images/akar-icons_github-fill.svg"
                alt="Github"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img
                className="image-nav-item"
                src="/src/images/simple-icons_frontendmentor.svg"
                alt="My site"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img
                className="image-nav-item"
                src="/src/images/LinkedIn.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img
                className="image-nav-item"
                src="/src/images/akar-icons_twitter-fill.svg"
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Component;
