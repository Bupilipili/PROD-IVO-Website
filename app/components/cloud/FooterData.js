import React from "react";
import styles from "./FooterData.module.css";

const FooterData = ({ key, data }) => {
  return (
    <section key={key}>
      {data.title && (
        <h5 data-aos='fade-right' className={styles.titleSection}>
          {data.title}
        </h5>
      )}
      <p className={styles.descriptionSection} style={{ marginBottom: "20px" }}>
        {data.description.split("\n").map((line, index) => (
          <span key={index} style={{ display: "block", marginBottom: "24px" }}>
            {line}
          </span>
        ))}
      </p>

      <div className={styles.contentSection}>
        {data.content.map((item) => {
          return (
            <div key={item.id}>
              <p className={styles.contentDescription}>{item.title}</p>
              <ul>
                {item.subContent.map((subItem) => {
                  return (
                    <div
                      key={subItem.id}
                      className={`${styles.descriptionSection} ${styles.subContentSection}`}
                      style={{
                        marginTop: !subItem.title ? "-24px" : "0",
                        marginLeft: !subItem.title ? "0" : "20px",
                      }}
                    >
                      {subItem.title && (
                        <li key={subItem.id}>{subItem.title}</li>
                      )}
                      <p>{subItem.description}</p>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FooterData;
