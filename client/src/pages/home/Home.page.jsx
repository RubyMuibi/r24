import styles from "./home.module.css";
import Hero from "@/components/hero/Hero.component";
import Feed from "@/containers/feed/Feed.container";

export default function Home() {
  return (
    <>
      <main className={ styles.container }>
        <Hero />
        <Feed />
      </main>
    </>
  );
}
