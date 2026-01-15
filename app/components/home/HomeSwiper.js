"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Banner from "../common/Banner";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./HomeSwiper.module.css";

export default function HomeSwiper() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <Swiper
      loop
      pagination={false}
      modules={[Pagination, Autoplay]}
      className='mySwiper'
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
    >
      {data.map((d) => (
        <SwiperSlide key={d.id}>
          <Banner {...d} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const data = [
  {
    id: "1",
    title: (
      <>
        IT Consulting Solutions For Your <span>Business</span>
      </>
    ),
    subtext: "Reach everywhere. Interconnect everyone. Integrate everything.",
    buttonText: "Our Solutions",
    bannerUrl: "/banners/homeBanner.mp4",
    width: 786,
    href: "/solutions",
  },
  {
    id: "2",
    title: (
      <>
        Cultivating a <span>Diverse Network</span> of Global Partnerships
      </>
    ),
    subtext:
      "Our solutions have been utilized by numerous companies, and we take pride in their satisfaction with the services we offer.",
    buttonText: "Our Partners",
    bannerUrl: "/banners/partnerBanner.mp4",
    width: 950,
    href: "/partners",
  },
  {
    id: "3",
    title: (
      <>
        Comprehensive Services for Your <span>Business Needs</span>
      </>
    ),
    subtext:
      "We offer IT consulting, network infrastructure, cloud solutions, cybersecurity, and technical support to meet your requirements.",
    buttonText: "Our Services",
    bannerUrl: "/banners/serviceBanner.mp4",
    width: 850,
    href: "/services",
  },
  {
    id: "4",
    title: (
      <>
        Exploring the <span>Latest</span> Trends and Expertise
      </>
    ),
    subtext:
      "Stay Informed with Our In-Depth Blog Articles Covering a Range of Topics",
    buttonText: "Our Blogs",
    bannerUrl: "/banners/blogsBanner.mp4",
    width: 652,
    href: "/blogs",
  },
  // {
  //   id: "4",
  //   title: (
  //     <>
  //       Lorem <span>Ipsum</span> is simply dummy text of
  //     </>
  //   ),
  //   subtext:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   buttonText: "Get Started",
  //   bannerUrl: "/banners/blogsBanner.mp4",
  //   width: 682,
  //   href: "/portal/login",
  // },
];
