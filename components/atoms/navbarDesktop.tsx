import { useContext } from "react";
import styles from "../molecules/navbar.module.css";
import StyleContext from "../context/styleContext";
import ScrollContext from "../context/scrollContext";
import { useTheme } from "../context/themeContext";

export interface INavbar {
  elements: string[];
  withoutProjects?: boolean;
}

export const NavbarDesktop = ({ elements, withoutProjects }: INavbar) => {
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  const { handleClick } = useContext(ScrollContext);
  const { toggleTheme } = useTheme();
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <ul className={styles.header__menu}>
        {elements.map((name, index) => {
          return (
            <li key={index}>
              <a aria-label={name} onClick={() => handleClick(name)}>
                {"<" + name + ">"}
              </a>
            </li>
          );
        })}
      </ul>

      {withoutProjects ? (
        <button onClick={toggleTheme} className={styles.header__contact}>
          toggle color
        </button>
      ) : (
        <a aria-label="Shyngys Karishev Resume" href="ShyngysKarishev_CV.pdf">
          <button className={styles.header__contact}>resume</button>
        </a>
      )}
      <div
        className={
          menuOpen
            ? `${styles.icon_one} ${styles.active}`
            : `${styles.icon_one}`
        }
        onClick={() => {
          openMenu();
        }}
      >
        <div className={`${styles.hamburger} ${styles.hamburger_one}`}></div>
      </div>
    </>
  );
};
