import { useContext, useState } from "react";
import StyleContext from "../context/styleContext";
import styles from "./navbar.module.css";

const NavBar = () => {
  const nav_elements = ["about", "work ", "projects", "contact"];
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <h1>
        <a href="#">kvrishev</a>
      </h1>
      <ul className={styles.header__menu}>
        {nav_elements.map((name, index) => {
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
      <aside
        className={
          menuOpen
            ? `${styles.header__menumobile} ${styles.display}`
            : `${styles.header__menumobile}`
        }
      >
        <ul className={styles.header__mobilelist}>
          {nav_elements.map((name, index) => {
            return (
              <li key={index}>
                <a href={"#" + name}>{"<" + name + ">"}</a>
              </li>
            );
          })}
          <button>resume</button>
        </ul>
      </aside>
    </header>
  );
};

export default NavBar;
