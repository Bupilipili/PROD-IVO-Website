"use client";
import ServiceHeader from "../components/services/ServiceHeader";
import ServicesPoints from "../components/services/ServicesPoints";
import ServiceSection from "../components/services/ServiceSection";
import WorkTogether from "../components/common/WorkTogether";
import BestService from "../components/common/BestService";
import ClientFeedback from "../components/common/ClientFeedback";
import StayUpdated from "../components/common/StayUpdated";
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

export default function ServicesPage() {
  return (
    <main className="body-wrapper">
      <ServiceHeader data={headerData} />

      <BestService
        description="We provide comprehensive IT services including managed services, database management, IT consultancy, and vulnerability assessment. Our certified team delivers enterprise-grade solutions backed by industry partnerships and a commitment to excellence."
      />

      <ServicesPoints />

      {servicesData?.map((data) => (
        <ServiceSection key={data?.id} {...data} />
      ))}

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
