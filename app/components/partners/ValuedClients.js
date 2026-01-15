import Heading from "../common/Heading";
import styles from "./ValuedClients.module.css";
import { useRef, useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
export default function ValuedClients() {
  // const swiperRef = useRef(null);

   const containerRef = useRef(null);

   // once mounted, find the .swiper element and force overflow visible
   useEffect(() => {
     if (containerRef.current) {
       const swiperEl = containerRef.current.querySelector(".swiper");
       if (swiperEl) swiperEl.style.overflow = "visible";
     }
   }, []);
  

  
  return (
    // <div className={styles.valuedClients} data-aos='fade-up'>
    <div ref={containerRef} className={styles.valuedClients} data-aos='fade-up'>
      <Heading>
        Our <span>Valued</span> Clients
      </Heading>
      <div className={styles.clientContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          // ref={swiperRef}
          spaceBetween={0}
          slidesPerView='auto'
          navigation={false}
          pagination
          loop
          centeredSlides={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            450: { slidesPerView: 1, spaceBetween: 0 },
            600: { slidesPerView: 2, spaceBetween: 24 },
            760: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className={styles.slide}>
                <img
                  // height="40"
                  // width="238.4"
                  key={client.id}
                  src={client.logoUrl}
                  alt='client logo'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// const clients = [
//   { id: "1", logoUrl: "/clients/client_01.svg", websiteUrl: "" },
//   { id: "2", logoUrl: "/clients/client_02.svg", websiteUrl: "" },
//   { id: "3", logoUrl: "/clients/client_03.svg", websiteUrl: "" },
//   { id: "4", logoUrl: "/clients/client_04.svg", websiteUrl: "" },
// ];

const clients = [
  { id: "1", logoUrl: "/clients/exim.svg", websiteUrl: "" },
  { id: "2", logoUrl: "/clients/chemicotex.svg", websiteUrl: "" },
  { id: "3", logoUrl: "/clients/mgen.svg", websiteUrl: "" },
  { id: "4", logoUrl: "/clients/mantrac.svg", websiteUrl: "" },
  { id: "5", logoUrl: "/clients/assemble.svg", websiteUrl: "" },
  { id: "6", logoUrl: "/clients/dcb_bank.svg", websiteUrl: "" },
  { id: "7", logoUrl: "/clients/mcb_bank.svg", websiteUrl: "" },
  { id: "8", logoUrl: "/clients/dasheng_bank.svg", websiteUrl: "" },
  { id: "9", logoUrl: "/clients/tib_bank.svg", websiteUrl: "" },
];
