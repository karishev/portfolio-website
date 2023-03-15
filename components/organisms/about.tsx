import styles from "./about.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2>{"<about>"}</h2>
        <div className={styles.info}>
          <img
            alt="Pixeled portrait of Shyngys Karishev"
            width="200px"
            src="cheena_pixel.png"
          ></img>
          <p>
            Hello! My name is Shyngys and I enjoy creating things that live on
            the internet. I am 20 years old Junior at New York University Abu
            Dhabi, majoring in Computer Science and Interactive Media. My main
            focus these days is building accessible, inclusive products and
            digital experiences for a variety of clients. I enjoy playing
            volleyball and chess. In my free time, I like to play video games or
            workout. Technology stack:
          </p>
        </div>
        <h2>{"</about>"}</h2>
      </div>
    </section>
  );
};
