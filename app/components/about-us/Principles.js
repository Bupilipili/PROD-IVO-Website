import { principlesData } from "@/data/aboutUs";
import Heading from "../common/Heading";
import CardWImage from "./CardWImage";
import styles from "./Principles.module.css";

export default function Principles() {
  return (
    <section className={styles.principleSection}>
      <div className={styles.titleSection}>
        <Heading>
          Our Guiding <span>Principles</span> Mission and Vision
        </Heading>
      </div>
      <div className={styles.bottomSection} style={{ overflow: "hidden" }}>
        <img
          src='/shapes/about-principle-bg.svg'
          alt=''
          className={styles.bgImage}
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-back'
          data-aos-delay='100'
          data-aos-offset='0'
        />
        <img
          src='/shapes/about-principle-bg-mobile.svg'
          alt=''
          className={styles.mobileBgImage}
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-back'
          data-aos-delay='100'
          data-aos-offset='0'
        />
        <div className={styles.cardSectionContainer}>
          {principlesData.map((pd) => (
            <CardWImage
              src={pd.src}
              header={pd.header}
              text={pd.text}
              key={pd.header}
              alt=''
            />
          ))}
        </div>
      </div>
    </section>
  );
}
