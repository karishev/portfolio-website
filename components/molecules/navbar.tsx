import { useContext } from "react";
import { NavbarDesktop } from "../atoms/navbarDesktop";
import { NavbarMobile } from "../atoms/navbarMobile";
import styles from "./navbar.module.css";
import ScrollContext from "../context/scrollContext";

interface INavBar {
  // handleClick: (target: string) => void;
}

const NavBar = ({} : INavBar) => {
  // const nav_elements = ["about", "experience", "projects", "contact"];
  const nav_elements = ["about", "experience", "projects"];

  const {handleClick} = useContext(ScrollContext)

  return (
    <header className={styles.header}>
      <h1>
        <a onClick={() => handleClick('hero')} aria-label="Hero section">kvrishev</a>
      </h1>
      <NavbarDesktop elements={nav_elements} />
      <NavbarMobile elements={nav_elements} />
    </header>
  );
};

export default NavBar;
