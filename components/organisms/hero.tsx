import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./hero.module.css";

const Hero = forwardRef((props, ref) => {
  // console.log(ref)
  const heroRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => heroRef.current);

  return (
    <section ref={heroRef} className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main_left}>
          <h1>Shyngys Karishev</h1>
          <p></p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.containerBio}>
          {/* <h2>{"<about>"}</h2> */}
          <div className={styles.info}>
            <div>
              <p>
                I am a Software Developer and a recent graduate of New York
                University Abu Dhabi, majoring in Computer Science and
                Interactive Media.
                <br />
                <br />
                As a software developer, I enjoy building innovative solutions
                to complex problems using my skills and expertise. I am
                passionate about technology and constantly seek to improve my
                knowledge and skills in various programming languages and
                frameworks. My love for coding drives me to constantly
                experiment and explore new technologies to stay ahead of the
                curve.
                <br />
                <br />
                Outside of the scope of coding, I enjoy playing volleyball,
                football, tennis, and chess.
                <br />
                <br />
                Technology stack:
              </p>
              <ul className={styles.skills}>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>ReactQuery</li>
              </ul>
            </div>
          </div>
          {/* <h2>{"</about>"}</h2> */}
        </div>
        {/* <div className={styles.main_right}>
          <img width="9rem" alt="Pixelated Shyngys waving" src="./cheena.gif" />
        </div> */}
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
