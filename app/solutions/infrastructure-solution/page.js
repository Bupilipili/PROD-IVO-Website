"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const infrastructureBannerData = {
  id: "1",
  img: "/solutions/infrastructure/infrastructure.webp",
  text: "Reliable, Secure, Scalable and efficient",
  subText: "Infrastructure Solutions",
  description: "Deploy carefully planned solutions suited for your needs",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "ICT infrastructure solutions are crucial for digital transformation and innovation in various industries. They enable the development and deployment of new technologies and support the improvement of existing processes. ICT infrastructure solutions encompass products and services that enable the creation, operation, and management of ICT systems.";

const hardwareData = {
  subtitle: "Infrastructure Solution",
  title: "Hardware Solutions",
  description:
    "IVO Solutions prioritizes hardware solutions, including servers and SAN/NAS storage, to align with a business's operations and growth goals. These solutions handle data processing, storage, and transmission in accordance with organizational needs and policies.",
  solutionsTitle: "Our Hardware Solutions",
  solutions: [
    "Server Infrastructure (Rack, Blade, Tower)",
    "SAN/NAS Storage Solutions",
    "Data Center Equipment",
    "Networking Hardware",
  ],
  image: "/solutions/infrastructure/infrastructure_a.webp",
};

const softwareData = {
  subtitle: "Infrastructure Solution",
  title: "Software Solutions",
  description:
    "We specialize in provisioning & deploying business-operations-oriented & enterprise-level software solutions that run on top of hardware infrastructure. These solutions act as a bridge between hardware resources & end-users.",
  solutionsTitle: "Our Software Solutions",
  solutions: [
    "Virtualization Solutions",
    "Automation & Orchestration",
    "Enterprise Software Deployment",
    "Performance Optimization Tools",
  ],
  image: "/solutions/infrastructure/infrastructure_b.webp",
};

const backupData = {
  subtitle: "Infrastructure Solution",
  title: "Back-Up Solutions",
  description:
    "ICT Solutions play a crucial role in ensuring Business Continuity. Back-Up solutions are essential for any organization, serving as a fallback plan. They provide a structured approach to resume operations from the nearest and healthiest checkpoint in case of an incident.",
  solutionsTitle: "Our Back-Up Solutions",
  solutions: [
    "Disaster Recovery Planning",
    "Automated Backup Solutions",
    "Cloud Backup Services",
    "Business Continuity Planning",
  ],
  image: "/solutions/infrastructure/infrastructure_c.webp",
};

const monitoringData = {
  subtitle: "Infrastructure Solution",
  title: "Monitoring and Reporting",
  description:
    "In today's ICT Infrastructure, visibility, transparency, and information-guided activities are crucial. Data gathering and analytics are essential for incident response, customer service evaluation, and future planning.",
  solutionsTitle: "Our Monitoring Solutions",
  solutions: [
    "Infrastructure Performance Monitoring",
    "Real-time Analytics & Dashboards",
    "Incident Response & Alerting",
    "Capacity Planning Reports",
  ],
  image: "/solutions/infrastructure/infrastructure_d.webp",
};

const whyIvoCards = [
  {
    title: "End-to-End Service:",
    description:
      "From planning and design to implementation and ongoing support, we provide complete infrastructure lifecycle management.",
  },
  {
    title: "Proven Expertise:",
    description:
      "Our team has extensive experience deploying infrastructure solutions across multiple industries and environments.",
  },
  {
    title: "Business Alignment:",
    description:
      "We ensure your infrastructure investments align with your business objectives for maximum ROI and efficiency.",
  },
];

export default function InfrastructureSolutionPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/solutions" />
      <ServiceHeader data={infrastructureBannerData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...hardwareData} />

      <SolutionContentSection {...softwareData} reverse />

      <SolutionContentSection {...backupData} />

      <SolutionContentSection {...monitoringData} reverse />

      <WhyIvo
        subtitle="Infrastructure Solution"
        title="Why Ivo For Your Infrastructure?"
        description="We deliver reliable infrastructure solutions built on industry best practices:"
        cards={whyIvoCards}
      />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
