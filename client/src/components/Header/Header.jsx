import headerStyles from "./header.module.css";
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <>
      <header className={headerStyles.container}>
        <div className={headerStyles.logo}>
          R24
        </div>


        <div className={headerStyles.headerOptions}>
          <p> Log In </p>
          <p> Sign Up </p>

          <div className={headerStyles.icon}>
            <Icon
              icon="pepicons-pencil:line-y"
              color="white"
              width="20"
              height="20"
            />
            <Icon icon="ri:github-fill" color="white" width="20" height="20" className={headerStyles.githubIcon} />
          </div>
        </div>
      </header>
    </>
  );
}
