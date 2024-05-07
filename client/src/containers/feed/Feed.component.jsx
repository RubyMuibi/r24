import styles from "./feed.module.css";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

export default function Feed({ articles }) {
  return (
    <>
      <article className={styles.container}>
        {articles &&
          articles.map((article) => {
            return (
              <div className={styles.block} key={article._id}>
                <div className={styles.content}>
                  <div className={styles.dot}></div>
                  <Link to={article.source} className={styles.metadata}>
                    <p className={styles.title}> {article.title} </p>
                    <p className={styles.category}> [{article.category}] </p>
                  </Link>
                </div>

                <div className={styles.reaction}>
                  <Icon icon="bx:upvote" width="16" className={styles.icon} />
                  <p> {article.upvotes} </p>
                </div>
              </div>
            );
          })}
      </article>
    </>
  );
}
