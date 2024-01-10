import homeStyles from "./home.module.css";
import HomeMarquee from "../../components/HomeMarquee/HomeMarquee";
import Rums from "../../components/Rums/Rums";

export default function Home() {
  return (
    <>
      <main className={ homeStyles.container } >
        <HomeMarquee />
        <Rums/>
      </main>
    </>
  );
}
