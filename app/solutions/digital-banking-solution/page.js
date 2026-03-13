"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const digitalBankingHeaderData = {
  id: "1",
  img: "/solutions/cyber/cyber.webp",
  text: "Digital Banking",
  subText: "Solutions",
  description:
    "Empowering financial institutions with cutting-edge digital banking technology and secure infrastructure solutions.",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "IVO Solutions delivers comprehensive digital banking solutions designed to modernize financial services. We help banks and financial institutions leverage technology to enhance customer experience, streamline operations, and ensure regulatory compliance in an increasingly digital landscape.";

const coreBankingData = {
  subtitle: "Digital Banking Solution",
  title: "Core Banking Systems",
  description:
    "We implement and manage modern core banking platforms that enable seamless transaction processing, account management, and real-time banking operations for financial institutions of all sizes.",
  solutionsTitle: "Our Core Banking Solutions",
  solutions: [
    "Core Banking Platform Implementation",
    "Transaction Processing Systems",
    "Account Management Solutions",
    "Real-time Banking Operations",
  ],
  image: "/solutions/cyber/cyber_a.webp",
};

const digitalChannelsData = {
  subtitle: "Digital Banking Solution",
  title: "Digital Channels & Payments",
  description:
    "Enable your customers to bank anytime, anywhere with our mobile banking, internet banking, and digital payment solutions that deliver exceptional user experiences.",
  solutionsTitle: "Digital Channel Solutions",
  solutions: [
    "Mobile Banking Applications",
    "Internet Banking Platforms",
    "Digital Payment Processing",
    "API Banking & Open Banking",
  ],
  image: "/solutions/cyber/cyber_b.webp",
};

const securityComplianceData = {
  subtitle: "Digital Banking Solution",
  title: "Security & Compliance",
  description:
    "Protect your financial operations with enterprise-grade security solutions and ensure compliance with banking regulations and data protection standards.",
  solutionsTitle: "Security & Compliance Solutions",
  solutions: [
    "Banking Cybersecurity Solutions",
    "Regulatory Compliance Management",
    "Fraud Detection & Prevention",
    "Data Protection & Privacy",
    "HL7 International Standards Compliance",
  ],
  image: "/solutions/cyber/cyber_c.webp",
};

const whyIvoCards = [
  {
    title: "Industry Expertise:",
    description:
      "Deep understanding of banking regulations, compliance requirements, and financial technology trends.",
  },
  {
    title: "Secure Solutions:",
    description:
      "Enterprise-grade security with ISO 27001 certification and data protection compliance built into every solution.",
  },
  {
    title: "End-to-End Support:",
    description:
      "From initial consultation and planning through implementation, training, and ongoing managed services.",
  },
];

export default function DigitalBankingSolutionPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/solutions" />
      <ServiceHeader data={digitalBankingHeaderData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...coreBankingData} />

      <SolutionContentSection {...digitalChannelsData} reverse />

      <SolutionContentSection {...securityComplianceData} />

      <WhyIvo
        subtitle="Digital Banking Solution"
        title="Why Ivo For Digital Banking?"
        description="We deliver secure, compliant digital banking solutions:"
        cards={whyIvoCards}
      />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
