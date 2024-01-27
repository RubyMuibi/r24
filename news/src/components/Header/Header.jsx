import styles from "./header.module.css";

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <>
      <header className={styles.container}>

              
        <Link to="/" className={styles.logo}>
          R24  
        </Link>


        <div className={styles.headerOptions}>
          <Link to="/auth" className={styles.noStyle }>
            <p> RUMs</p>
          </Link>
          <Link to="/auth" className={styles.noStyle }>
            <p> HNs </p>
          </Link>

          <div className={styles.icon}>
            <Icon
              icon="pepicons-pencil:line-y"
              color="white"
              width="20"
              height="20"
            />
            <a 
            href="https://github.com/rubymuibi"
            target="_blank"
            >
              <Icon icon="ri:github-fill" color="white" width="20" height="20" className={styles.githubIcon} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
