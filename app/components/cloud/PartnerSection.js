import React from "react";
import Heading from "../common/Heading";
import styles from "./PartnerSection.module.css";

const PartnerSection = ({ data }) => {
  return (
    <div className={styles.partnerContainer}>
      <div className={styles.partnerName}>
        <Heading>
          Our <span>{data.partner}</span> Partners
        </Heading>
      </div>
      <div className={styles.partnerImageContainer}>
        {data.img.map((img, index) => (
          <img src={img} alt={img} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
