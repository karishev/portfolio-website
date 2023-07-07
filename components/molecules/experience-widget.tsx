import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { experience } from "@/db/experience";
import { useEffect, useState } from "react";
import styles from "./experience-widget.module.css";

interface Job {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
}

const ExpWidget = () => {
  const [activeJob, setActiveJob] = useState<Job>(experience[0]);
  const [animate, setAnimate] = useState<Boolean>(false)

  const toggleJob = (job: Job) => {
    setActiveJob(job);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600);
  };

  return (
    <article className={styles.widget}>
      <ul className={styles.list}>
        {experience.map((item) => (
          <li
            key={item.id}
            className={
              activeJob == item
                ? `${styles.expLink} ${styles.activeLink}`
                : styles.expLink
            }
            onClick={() => toggleJob(item)}
          >
            {item.company}
          </li>
        ))}
      </ul>
      <div className={`${styles.exp_info}  ${animate ? styles.animation : ''}`}>
        <div className={styles.cont}>
          <h1 className={styles.h1}>
            {`${activeJob.position} `}
            <span className="">{`@${activeJob.company}`}</span>
          </h1>
          <p className={styles.p}>{activeJob.period}</p>
          <ul className={styles.points}>
            {activeJob.description.map((item) => (
              <li key={item} className={styles.point}>
                <PaperAirplaneIcon className={styles.icon} />
                <p className={styles.point_item}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExpWidget;
