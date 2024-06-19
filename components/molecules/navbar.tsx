import { useContext } from "react";
import { NavbarDesktop } from "../atoms/navbarDesktop";
import { NavbarMobile } from "../atoms/navbarMobile";
import styles from "./navbar.module.css";
import ScrollContext from "../context/scrollContext";

interface INavBar {
  // handleClick: (target: string) => void;
  withoutProjects?: boolean;
}

const NavBar = ({ withoutProjects }: INavBar) => {
  // const nav_elements = ["about", "experience", "projects", "contact"];
  const nav_elements = ["about", "experience", "projects"];

  const { handleClick } = useContext(ScrollContext);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <a
            onClick={
              withoutProjects
                ? () => (window.location.href = "https://www.karishev.com")
                : () => handleClick("hero")
            }
            aria-label="Hero section"
          >
            kvrishev
          </a>
        </h1>
        <NavbarDesktop
          withoutProjects={withoutProjects}
          elements={withoutProjects ? [] : nav_elements}
        />
        <NavbarMobile elements={withoutProjects ? [] : nav_elements} />
      </div>
    </header>
  );
};

export default NavBar;
