import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./about.module.css";

const About = forwardRef((_props, ref) => {
  const aboutRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => aboutRef.current);
  return (
    <section ref={aboutRef} className={styles.about}>
      <div className={styles.container}>
        <h2>{"<about>"}</h2>
        <div className={styles.info}>
          <img
            alt="Pixeled portrait of Shyngys Karishev"
            src="cheena_pixel.png"
          ></img>
          <div>
            <p>
              I am a Junior at New York University Abu Dhabi, majoring in
              Computer Science and Interactive Media.
              <br />
              <br />
              As a software developer, I enjoy building innovative solutions to
              complex problems using my skills and expertise. I am passionate
              about technology and constantly seek to improve my knowledge and
              skills in various programming languages and frameworks. My love
              for coding drives me to constantly experiment and explore new
              technologies to stay ahead of the curve.
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
        <h2>{"</about>"}</h2>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
