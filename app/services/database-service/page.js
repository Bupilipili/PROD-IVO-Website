"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";
import PartnerSection from "@/app/components/cloud/PartnerSection";

const databaseBannerData = {
  id: "1",
  img: "/services/database/database.webp",
  text: "Unlock the Power of Data with Our",
  subText: "Database Services",
  description: "Elevate Your Data Potential with IVO Solutions",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "At IVO Solutions, we are more than just a Database Services provider \u2013 we are your partners in unleashing the true power within your data. Backed by our unwavering commitment to excellence, we offer a suite of tailored services designed to amplify your database capabilities and drive your business forward.";

const setupData = {
  subtitle: "Database Service",
  title: "Setup, Configuration & Management",
  description:
    "From standalone to clustered environments, we handle installations in line with industry standards. Our team ensures your databases are configured for optimal performance and reliability.",
  solutionsTitle: "Our Database Services",
  solutions: [
    "Setup and Configuration",
    "Upgrade & Patching Excellence",
    "Licensing Consultancy",
    "Performance Optimization",
  ],
  image: "/services/database/database_a.webp",
};

const securityData = {
  subtitle: "Database Service",
  title: "Security & Data Protection",
  description:
    "Safeguard your data with ironclad security measures encompassing encryption, access controls, and vulnerability assessments. Ensure your critical data's protection with robust backup and recovery solutions.",
  solutionsTitle: "Security Solutions",
  solutions: [
    "Security Enhancement & Encryption",
    "Data Safeguarding & Backup",
    "Database Migrations",
    "Cloud Transitions & Multi-provider Support",
  ],
  image: "/services/database/database_b.webp",
};

const whyIvoCards = [
  {
    title: "Invaluable Partnerships:",
    description:
      "As proud affiliates of Oracle, Microsoft, Imperva, and RedHat, we harness their cutting-edge technologies for your database needs.",
  },
  {
    title: "Tailored Precision:",
    description:
      "We carefully create our services to match your specific business goals, making sure your database systems work well and help your business run smoothly.",
  },
  {
    title: "Simplified Complexity:",
    description:
      "Navigate the labyrinth of licensing intricacies effortlessly with our expertise, saving time and resources while ensuring compliance.",
  },
];

const databasePartnerData = {
  id: "1",
  partner: "Database",
  img: [
    "/services/database/oracle_logo.webp",
    "/services/database/microsoft_logo.webp",
    "/services/database/redhat_logo.webp",
    "/services/database/imperva_logo.webp",
  ],
};

export default function DatabaseServicePage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/services" />
      <ServiceHeader data={databaseBannerData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...setupData} />

      <SolutionContentSection {...securityData} reverse />

      <WhyIvo
        subtitle="Database Service"
        title="Why Ivo For Your Database?"
        description="We deliver enterprise-grade database solutions with industry best practices:"
        cards={whyIvoCards}
      />

      <PartnerSection data={databasePartnerData} />
      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
