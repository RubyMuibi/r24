import styles from "./header.module.css";

import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Header() {
  const route = "65b2c1554f0beeccb643f2bd"
  return (
    <>
      <header className={styles.container}>
        <Link to="/" className={styles.logo}>
          R24
        </Link>

        <div className={styles.headerOptions}>
          <NavLink
            exact to="/"
            className={( {isActive} ) => !isActive ? styles.noStyle : styles.stylish}
          >
            <p> RUMS </p>
          </NavLink>

          <NavLink
            to={route}
            className={( {isActive} ) => !isActive ? styles.noStyle : styles.stylish}
          >
            <p> Center </p>
          </NavLink>

          <div className={styles.icon}>
            <Icon
              icon="pepicons-pencil:line-y"
              color="white"
              width="20"
              height="20"
            />
            <Link to="/auth">
              <Icon
                icon="ri:github-fill"
                color="white"
                width="20"
                height="20"
                className={styles.githubIcon}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
