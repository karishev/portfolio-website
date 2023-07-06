import ExpWidget from "../molecules/experience-widget";
import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./experience.module.css";

const Experience = forwardRef((_props, ref) => {
  const expRef = useRef<HTMLElement>(null);

  // Expose the bannerRef to the parent component
  useImperativeHandle(ref, () => expRef.current);
  return (
    <section ref={expRef} className={styles.experience}>
      <div className={styles.container}>
        <h2>{"<experience>"}</h2>
        <ExpWidget />
        <h2>{"</experience>"}</h2>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
