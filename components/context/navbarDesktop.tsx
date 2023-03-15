import { useContext } from "react";
import styles from "../molecules/navbar.module.css";
import StyleContext from "./styleContext";

export interface INavbar {
  elements: string[];
}

export const NavbarDesktop = ({ elements }: INavbar) => {
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <ul className={styles.header__menu}>
        {elements.map((name, index) => {
          return (
            <li key={index}>
              <a href={"#" + name}>{"<" + name + ">"}</a>
            </li>
          );
        })}
      </ul>
      <button className={styles.header__contact}>resume</button>
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
