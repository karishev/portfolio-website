import { useContext } from "react";
import styles from "../molecules/navbar.module.css";
import { INavbar } from "./navbarDesktop";
import StyleContext from "../context/styleContext";
import ScrollContext from "../context/scrollContext";

export const NavbarMobile = ({ elements }: INavbar) => {
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  const {handleClick} = useContext(ScrollContext)
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
              <a aria-label={name} onClick={() => handleClick(name)}>
                {"<" + name + ">"}
              </a>
            </li>
          );
        })}
        <a aria-label="Shyngys Karishev Resume" href="ShyngysKarishev_CV.pdf">
          <button>resume</button>
        </a>
      </ul>
    </aside>
  );
};
