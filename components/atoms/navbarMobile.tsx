import { useContext } from "react";
import styles from "../molecules/navbar.module.css";
import { INavbar } from "./navbarDesktop";
import StyleContext from "../context/styleContext";

export const NavbarMobile = ({elements} : INavbar) => {
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  return (
    <aside
      className={
        menuOpen
          ? `${styles.header__menumobile} ${styles.display}`
          : `${styles.header__menumobile}`
      }
    >
      <ul className={styles.header__mobilelist}>
        {elements.map((name, index) => {
          return (
            <li key={index}>
              <a href={"#" + name}>{"<" + name + ">"}</a>
            </li>
          );
        })}
        <button>resume</button>
      </ul>
    </aside>
  );
};
