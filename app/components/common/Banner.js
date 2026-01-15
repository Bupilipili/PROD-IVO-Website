"use client";
import Heading from "./Heading";
import { dmSans } from "@/app/layout";
import { useRouter } from "next/navigation";
import styles from "./Banner.module.css";

export default function Banner({
  title,
  subtext,
  buttonText,
  bannerUrl,
  width,
  href,
}) {
  const router = useRouter();

  return (
    <div className="bannerContainer">
      <div className={styles.bannerContent} style={{ maxWidth: width }}>
        <Heading>{title}</Heading>
        <p data-aos="fade-up">{subtext}</p>
        <button
          data-aos="fade-up"
          className={`${dmSans.className} main-button`}
          onClick={() => router.push(href)}
        >
          {buttonText}
        </button>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="videoBackground"
      >
        <source src={bannerUrl} type="video/mp4" />
      </video>

      <style jsx>
        {`
          .bannerContainer {
            width: 100vw;
            height: 100vh;
            display: grid;
            place-items: center;
            position: relative;
          }

          .videoBackground {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }
        `}
      </style>
    </div>
  );
}
