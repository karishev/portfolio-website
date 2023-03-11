

export const MainPart = () => {
  return (
    <section id="main">
      <div className="main_left">
        <h1 className="main__introduction">Hi, I am Shyngys Karishev</h1>
        <div className="main__line"></div>
        <p className="main__description">
          Front End Developer / Software Developer
        </p>
        <ul className="main__socials">
          <li>
            <a href="https://www.instagram.com/kvrishev/">
              <i className="uil uil-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shyngys-karishev/">
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/karishev">
              <i className="uil uil-telegram-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/karishev/">
              <i className="uil uil-github-alt"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="main_right">
        <img className="main_right-pic" src="./cheena.gif" />
      </div>
    </section>
  );
};
