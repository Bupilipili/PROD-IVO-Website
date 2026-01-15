import Heading from "../common/Heading";
import styles from "./Collaboration.module.css";
import { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";

// export default function Collaboration() {
//   return (
//     <div className={styles.collaborationContainer}>
//       <Heading>
//         Strategic <span>Global</span> Collaborations
//       </Heading>
//       <div className={styles.slider}>
//         <div className={styles.slideTrack}>
//           {[...clients, ...clients, ...clients].map((client, index) => (
//             <div className={styles.slide} key={index}>
//               <img src={client.logoUrl} alt="logo" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Collaboration() {
  const swiperRef = useRef(null);

  return (
    <div className={styles.collaborationContainer}>
      <Heading>
        Strategic <span>Global</span> Collaborations
      </Heading>
      <div className={styles.slider} data-aos="fade-up">
        <Swiper
          modules={[Navigation, Autoplay]}
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView="auto"
          navigation={false}
          pagination
          loop
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            450: { slidesPerView: 1, spaceBetween: 0 },
            600: { slidesPerView: 2, spaceBetween: 24 },
            760: { slidesPerView: 3, spaceBetween: 24 },
            888: { slidesPerView: 4, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {clients?.map((data) => (
            <SwiperSlide key={data}>
              <div className={styles.slide}>
                <img
                  src={`/collaboration/collaboration_${data}.svg`}
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className={styles.navigationContainer}>
        <div className={styles.navigationIcons}>
          <img
            src="/icons/next-icon.svg"
            alt=""
            style={{ transform: "rotate(180deg)" }}
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          />
          <img
            src="/icons/next-icon.svg"
            alt=""
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          />
        </div>
      </div> */}
    </div>
  );
}

const clients = [
  "01",
  "02",
  "03",
  // "04",
  "05",
  // "06",
  "07",
  "08",
  // "09",
  // "10",
  "11",
  "12",
  // "13",
  "14",
  "15",
  // "16",
  // "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];
