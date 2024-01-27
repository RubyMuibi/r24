import styles from "./marquee.module.css"


export default function Marquee () {
    const marqueeText = "Hacker News \u00B7\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0".repeat(10); 

  return (
    <>
            <div className={styles.container}>
            <h1 className={styles.text}>{marqueeText}</h1>
        </div>
    </>
  );
};
