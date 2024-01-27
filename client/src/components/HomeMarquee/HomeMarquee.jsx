
import homeMarqueeStyles from "./home-marquee.module.css";

export default function HomeMarquee() {
    const marqueeText = "Discover creative websites and developers \u00B7\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0".repeat(3); 
    return (
        <div className={homeMarqueeStyles.container}>
            <h1 className={homeMarqueeStyles.text}>{marqueeText}</h1>
        </div>
    );
}
