import { useContext } from "react";
import { NavbarDesktop } from "../atoms/navbarDesktop";
import { NavbarMobile } from "../atoms/navbarMobile";
import StyleContext from "../context/styleContext";
import styles from "./navbar.module.css";

const NavBar = () => {
  const nav_elements = ["about", "work", "projects", "contact"];
  const { menuOpen, setMenuOpen } = useContext(StyleContext);

  return (
    <header className={styles.header}>
      <h1>
        <a href="#">kvrishev</a>
      </h1>
      <NavbarDesktop elements={nav_elements} />
      <NavbarMobile elements={nav_elements} />
    </header>
  );
};

export default NavBar;
