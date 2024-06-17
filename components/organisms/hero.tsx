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
            <div className={styles.info_wrapper}>
              <p>
                I am a software developer that enjoys building stuff. Right now
                I am working on my personal project at{" "}
                <span
                  className={styles.highlight}
                  onClick={() => {
                    window.open("https://buildspace.so", "_blank");
                  }}
                >
                  @buildspace
                </span>{" "}
                with{" "}
                <span
                  className={styles.highlight}
                  onClick={() => {
                    window.open("https://twitter.com/zhetpisbekov", "_blank");
                  }}
                >
                  @zhetpisbekov.
                </span>{" "}
                Part of{" "}
                <span
                  className={styles.highlight}
                  onClick={() => {
                    window.open("https://x.com/_nightsweekends", "_blank");
                  }}
                >
                  @n&w
                </span>{" "}
                s5.
              </p>
              <div className={styles.skills_wrapper}>
                <p>Technology stack:</p>
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
