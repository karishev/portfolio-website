import styles from "./mainPart.module.css";

export const MainPart = () => {
  const socials = [
    ["instagram", "https://www.instagram.com/kvrishev/"],
    ["linkedin-alt", "https://www.linkedin.com/in/shyngys-karishev/"],
    ["telegram-alt", "https://t.me/karishev"],
    ["github-alt", "https://www.github.com/karishev/"],
  ];
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main_left}>
          <h1>Hi, I am Shyngys Karishev</h1>
          <div className={styles.line}></div>
          <p>Front End Developer / Software Developer</p>
          <ul className={styles.main__socials}>
            {socials.map((name, index) => {
              return (
                <li key={index}>
                  <a href={name[1]}>
                    <i className={`uil uil-${name[0]}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.main_right}>
          <img src="./cheena.gif" />
        </div>
      </div>
    </section>
  );
};
