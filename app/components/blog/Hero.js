import Heading from "../common/Heading";
import styles from "./Hero.module.css";

export default function HeroBlogs() {
  return (
    <div className={styles.blogsHero}>
      <Heading>
        Exploring the <span>Latest</span> Trends and Expertise
      </Heading>
    </div>
  );
}
