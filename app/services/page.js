"use client";
import ServiceHeader from "../components/services/ServiceHeader";
import ServicesPoints from "../components/services/ServicesPoints";
import ServiceSection from "../components/services/ServiceSection";
import WorkTogether from "../components/common/WorkTogether";
import { servicesData } from "@/data/serviceSectionData";
const headerData = {
  id: "1",
  img: "/banners/serviceHeaderBanner.webp",
  title: "SERVICES",
  text: "Comprehensive Services for Your",
  subText: " Business Needs",
  description: `We offer IT consulting, network infrastructure, cloud solutions,
  cybersecurity, and technical support to meet your requirements.`,
  btnText: "Let's Talk",
};
export default function page() {
  return (
    <main className='body-wrapper'>
      <ServiceHeader data={headerData} />
      <ServicesPoints />
      {servicesData?.map((data) => (
        <ServiceSection key={data?.id} {...data} />
      ))}
      <WorkTogether />
    </main>
  );
}
