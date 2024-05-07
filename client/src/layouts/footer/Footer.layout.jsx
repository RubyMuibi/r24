import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.left}>
          <p> &copy; {currentYear} R24 </p>

          <a
            href="https://twitter.com/rubymuibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> TWITTER </p>
          </a>

          <a
            href="https://github.com/rubymuibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p> GITHUB </p>
          </a>
        </div>

        <div className={styles.right}>
          <a
            href="mailto:hi@rubymuibi.com"
          >
            <p> CONTACT </p>
          </a>
          <p> TERMS & CONDITIONS </p>
        </div>
      </footer>
    </>
  );
}
