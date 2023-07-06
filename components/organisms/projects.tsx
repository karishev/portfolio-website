import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./projects.module.css";

const Projects = forwardRef((_props, ref) => {
  const expRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => expRef.current);
  return (
    <section ref={expRef} className={styles.projects}>
      <div className={styles.container}>
        <h2>{"<projects>"}</h2>
        <h2>{"</projects>"}</h2>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;