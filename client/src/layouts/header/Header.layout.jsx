import styles from "./header.module.css";
import { useState, useEffect, createContext, useContext } from "react";
import useMode from "@/hooks/useTheme.hook";

import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Header() {
  const { isLightMode, toggleLightMode } = useMode();

  return (
    <>
      <header className={styles.container}>
        <Link to="/" className={styles.logo}>
          R24
        </Link>

        <div>
          <Icon icon="gg:dark-mode" width="32" onClick={toggleLightMode}  className="cursor-pointer"/>

          <nav className={styles.nav}>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                !isActive ? styles.noStyle : styles.stylish
              }
            >
              <p> Feed </p>
            </NavLink>

            <NavLink
              to="/account"
              className={({ isActive }) =>
                !isActive ? styles.noStyle : styles.stylish
              }
            >
              <p> Account </p>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
