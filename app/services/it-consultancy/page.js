"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const itConsultancyBannerData = {
  id: "1",
  img: "/services/itConsultancy/itConsultancy.webp",
  text: "IT systems and Infrastructure",
  subText: "Consultancy",
  description:
    "At IVO Solutions, we believe that every business is unique, and there is no one-size-fits-all approach to IT consultancy.",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "Our approach is centred around collaboration, expertise, and industry best practices. We begin by conducting a comprehensive assessment of your current IT infrastructure, processes, and goals, working closely with your team to understand your unique requirements, pain points, and growth objectives.";

const strategyData = {
  subtitle: "IT Service",
  title: "Strategic Planning & Assessment",
  description:
    "We begin by conducting a comprehensive assessment of your current IT infrastructure, processes, and goals. Based on the assessment, we develop a strategic IT roadmap that aligns your technology investments with your business objectives.",
  solutionsTitle: "Our Approach",
  solutions: [
    "Comprehensive Needs Assessment",
    "Strategic IT Roadmapping",
    "Technology Selection and Implementation",
    "Digital Transformation Strategies",
  ],
  image: "/services/itConsultancy/itConsultancy_a.webp",
};

const expertiseData = {
  subtitle: "IT Service",
  title: "Areas of Expertise",
  description:
    "Our consultants leverage their industry knowledge and expertise to recommend solutions that drive efficiency, innovation, and growth across your organization.",
  solutionsTitle: "Expertise Areas",
  solutions: [
    "IT Infrastructure Optimization",
    "Cybersecurity Consulting",
    "Vendor Selection and Management",
    "IT Governance and Compliance",
    "Digital Transformation",
    "Compliance and Regulatory Guidance",
  ],
  image: "/services/itConsultancy/itConsultancy_b.webp",
};

const whyIvoCards = [
  {
    title: "Comprehensive Analysis:",
    description:
      "Our consultancy process begins with a thorough evaluation of your existing IT infrastructure, systems, and workflows.",
  },
  {
    title: "Customized Solutions:",
    description:
      "Based on the analysis, we craft personalized IT strategies aligned with your business objectives for maximum efficiency.",
  },
  {
    title: "Ongoing Support:",
    description:
      "Our commitment extends beyond implementation. We offer continuous support, monitoring, and fine-tuning.",
  },
];

export default function ITConsultancyPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/services" />
      <ServiceHeader data={itConsultancyBannerData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...strategyData} />

      <SolutionContentSection {...expertiseData} reverse />

      <WhyIvo
        subtitle="IT Service"
        title="Why Ivo For IT Consultancy?"
        description="We deliver tailored IT consultancy solutions with proven expertise:"
        cards={whyIvoCards}
      />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
