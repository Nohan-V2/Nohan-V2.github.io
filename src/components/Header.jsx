function Component() {
  return (
    <header className="header-container flex flex-col items-center gap-5 pt-5 px-2.5 w-[calc(100%-200px)] min-w-[174px] max-w-[1110px] mb-12">
      <h1 className="text-white header-title font-serif font-bold text-2xl leading-8 tracking-[-0.333px]">
        Nohan-V2
      </h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">
              <img className="image-nav-item" src="" alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img className="image-nav-item" src="" alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img className="image-nav-item" src="" alt="" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img className="image-nav-item" src="" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Component;
