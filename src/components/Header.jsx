function Header() {
  return (
    <header className="header-container flex flex-col items-center gap-5 pt-5 px-4 w-full max-w-[1110px] md:flex-row md:justify-between md:px-8 lg:px-0 lg:pt-10 z-10">
      <span className="text-white header-title font-bold text-2xl md:text-3xl leading-8 tracking-[-0.333px] md:tracking-[-0.444px]">
        Nohan-V2
      </span>
      <nav className="header-nav">
        <ul className="nav-list flex gap-6">
          <li className="nav-item">
            <a
              href="https://github.com/Nohan-V2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="image-nav-item hover:brightness-200 active:brightness-150"
                src="/akar-icons_github-fill.svg"
                alt="Github"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img
                className="image-nav-item hover:brightness-200 active:brightness-150"
                src="/simple-icons_frontendmentor.svg"
                alt="My site"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="image-nav-item hover:brightness-200 active:brightness-150"
                src="/LinkedIn.svg"
                alt="LinkedIn"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="image-nav-item hover:brightness-200 active:brightness-150"
                src="/akar-icons_twitter-fill.svg"
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
