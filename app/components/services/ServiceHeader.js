"use client";
import { useRouter } from "next/navigation";
import Heading from "../common/Heading";
import styles from "./ServiceHeader.module.css";
import { dmSans } from "@/app/layout";

export default function ServiceHeader({ data }) {
  const router = useRouter();
  return (
    <section
      className={styles.serviceHeader}
      style={{ backgroundImage: `url('${data.img}')` }}
    >
      <div className={styles.textContainer}>
        <h5 data-aos='fade-right'>{data?.title}</h5>
        <Heading>
          {data.text}
          <br />
          <span>{data.subText}</span>
        </Heading>
        <p data-aos='fade-up'>{data?.description}</p>
      </div>
      {data.btnText && (
        <div>
          <button
            data-aos='fade-left'
            onClick={() => router.push("/contact")}
            className={`${dmSans.className} main-button`}
          >
            {data.btnText}
          </button>
        </div>
      )}
    </section>
  );
}
