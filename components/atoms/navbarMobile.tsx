import { useContext } from "react";
import styles from "../molecules/navbar.module.css";
import { INavbar } from "./navbarDesktop";
import StyleContext from "../context/styleContext";
import ScrollContext from "../context/scrollContext";
import { useTheme } from "../context/themeContext";

export const NavbarMobile = ({ elements }: INavbar) => {
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  const { handleClick } = useContext(ScrollContext);
  const { theme, toggleTheme } = useTheme();
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
        <li>
          <a aria-label="Shyngys Karishev Resume" href="ShyngysKarishev_CV.pdf">
            <button>resume</button>
          </a>
        </li>

        <div className={`theme_button ${styles.btn}`} onClick={toggleTheme}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="circle-svg"
          >
            <circle
              cx="30"
              cy="30"
              r="28"
              fill="transparent"
              stroke="var(--txtClr)"
              strokeWidth="2"
              strokeDasharray="5,10"
            />
          </svg>
          <i className={`uil uil-${theme === "light" ? "moon" : "sun"}`}></i>
        </div>
      </ul>
    </aside>
  );
};
