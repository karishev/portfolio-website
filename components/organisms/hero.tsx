import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./hero.module.css";

export const Hero = forwardRef((props, ref) => {
  // console.log(ref)
  const heroRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => heroRef.current);

  const socials = [
    [
      "instagram",
      "https://www.instagram.com/kvrishev/",
      "Shyngys Karishev Instagram",
    ],
    [
      "linkedin-alt",
      "https://www.linkedin.com/in/shyngys-karishev/",
      "Shyngys Karishev LinkedIn",
    ],
    ["telegram-alt", "https://t.me/karishev", "Shyngys Karishev Telegram"],
    [
      "github-alt",
      "https://www.github.com/karishev/",
      "Shyngys Karishev Github",
    ],
  ];
  return (
    <section ref={heroRef} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main_left}>
          <h1>Hi, I am Shyngys Karishev</h1>
          <div className={styles.line}></div>
          <p>Front End Developer / Software Developer</p>
          <ul className={styles.main__socials}>
            {socials.map((name, index) => {
              return (
                <li key={index}>
                  <a target={"_blank"} aria-label={name[2]} href={name[1]}>
                    <i className={`uil uil-${name[0]}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.main_right}>
          <img width="9rem" alt="Pixelated Shyngys waving" src="./cheena.gif" />
        </div>
      </div>
    </section>
  );
});
