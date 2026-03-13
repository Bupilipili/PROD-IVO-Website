"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const managedServicesBannerData = {
  id: "1",
  img: "/banners/serviceHeaderBanner.webp",
  text: "Proactive and Reliable",
  subText: "Managed Services",
  description:
    "Let us manage your IT infrastructure so you can focus on growing your business.",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "Managed IT services encompass a range of offerings, from general to specific, depending on your needs. Common services include the monitoring and maintenance of equipment, IT systems management, remote monitoring and management of servers, network monitoring, and other support services. Cloud-based managed services enable rapid scalability and access to resources.";

const proactiveMonitoringData = {
  subtitle: "Managed Service",
  title: "Proactive Monitoring & Maintenance",
  description:
    "Our managed services team provides 24/7 monitoring of your IT infrastructure, ensuring issues are detected and resolved before they impact your business operations.",
  solutionsTitle: "Monitoring Services",
  solutions: [
    "24/7 Infrastructure Monitoring",
    "Proactive Maintenance & Patching",
    "Performance Optimization",
    "Incident Response & Resolution",
  ],
  image: "/services/services_02.webp",
};

const cloudManagedData = {
  subtitle: "Managed Service",
  title: "Cloud Managed Services",
  description:
    "Cloud-based managed services enable rapid scalability and access to resources. We manage both your infrastructure and workloads, while cloud services focus on vendor-managed components.",
  solutionsTitle: "Cloud Services",
  solutions: [
    "Cloud Infrastructure Management",
    "Workload Migration & Management",
    "Cost Optimization & Governance",
    "Multi-Cloud Strategy",
  ],
  image: "/services/services_01.webp",
};

const supportData = {
  subtitle: "Managed Service",
  title: "IT Support & Help Desk",
  description:
    "Our dedicated support team provides comprehensive help desk services, ensuring your employees have the technical support they need to stay productive.",
  solutionsTitle: "Support Services",
  solutions: [
    "Tiered Help Desk Support (L1/L2/L3)",
    "Remote & On-site Support",
    "Service Level Agreement (SLA) Management",
    "User Training & Documentation",
  ],
  image: "/services/services_03.webp",
};

const whyIvoCards = [
  {
    title: "Cost-Effective:",
    description:
      "Reduce IT overhead with predictable monthly costs and eliminate the need for large capital expenditures.",
  },
  {
    title: "Expert Team:",
    description:
      "Access a team of certified professionals with expertise across multiple technology platforms.",
  },
  {
    title: "Scalable Solutions:",
    description:
      "Easily scale your IT services up or down based on your business needs without long-term commitments.",
  },
];

export default function ManagedServicesPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/services" />
      <ServiceHeader data={managedServicesBannerData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...proactiveMonitoringData} />

      <SolutionContentSection {...cloudManagedData} reverse />

      <SolutionContentSection {...supportData} />

      <WhyIvo
        subtitle="Managed Service"
        title="Why Ivo For Managed Services?"
        description="We deliver comprehensive managed services with proven expertise:"
        cards={whyIvoCards}
      />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
