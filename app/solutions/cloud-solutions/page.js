"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const cloudHeaderData = {
  id: "1",
  img: "/solutions/aws/aws.webp",
  text: "Cloud Infrastructure",
  subText: "Solutions",
  description:
    "All infrastructure, platforms, software, or technologies that users access through the internet without requiring additional software downloads can be considered cloud computing services.",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "IVO Solutions services include hosted and managed platform, application, and data services that accelerate time to value and reduce the operational cost and complexity of delivering cloud-native applications. Organizations can confidently build and scale applications with a streamlined experience across services and hybrid cloud environments.";

const awsData = {
  subtitle: "Cloud Solution",
  title: "Amazon Web Services (AWS)",
  description:
    "We provide cloud consulting services that help you migrate, optimize, and manage applications on the AWS platform. We help you leverage the full potential of the cloud to streamline and automate your business processes, reduce operational costs, and gain a competitive edge.",
  solutionsTitle: "Our AWS Solutions",
  solutions: [
    "Infrastructure-as-a-Service (IaaS)",
    "Platforms-as-a-Service (PaaS)",
    "Software-as-a-Service (SaaS)",
    "Function-as-a-Service (FaaS)",
    "Cloud Migration & Optimization",
  ],
  image: "/solutions/aws/aws_a.webp",
  bottomDescription:
    "Transform your business with the cloud trusted by top brands. AWS delivers infrastructure cost savings and more efficient IT infrastructure management. Our experienced team is here to help you get the most out of your cloud investment.",
};

const azureData = {
  subtitle: "Cloud Solution",
  title: "Microsoft Azure",
  description:
    "We take pride in being a leading Managed Services and IT Solutions Provider. With a commitment to excellence and innovation, we have strategically partnered with Microsoft to bring cutting-edge Azure and Microsoft services to the market.",
  solutionsTitle: "Our Azure Solutions",
  solutions: [
    "Azure Sentinel (SIEM)",
    "Azure Active Directory / Microsoft Entra ID",
    "Azure Information Protection",
    "Azure Security Center",
    "Azure Intune",
    "Azure Cloud Migration",
  ],
  image: "/solutions/azure/azure_a.webp",
  bottomDescription:
    "This partnership enables us to deliver world-class Azure services tailored to meet the unique needs of businesses and organizations. As an authorized Azure services provider, we bring you the power of Microsoft's cloud technology.",
};

const whyIvoCards = [
  {
    title: "Certified Experts:",
    description:
      "Our team holds AWS and Azure certifications, ensuring expert guidance for your cloud journey.",
  },
  {
    title: "Cost Optimization:",
    description:
      "We help reduce infrastructure costs by an average of 31% through efficient cloud resource management.",
  },
  {
    title: "24/7 Support:",
    description:
      "Continuous monitoring and support to ensure your cloud infrastructure runs smoothly and securely.",
  },
];

export default function CloudSolutionsPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/solutions" />
      <ServiceHeader data={cloudHeaderData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...awsData} />

      <SolutionContentSection {...azureData} reverse />

      <WhyIvo
        subtitle="Cloud Solution"
        title="Why Ivo For Your Cloud?"
        description="We deliver enterprise-grade cloud solutions with industry best practices:"
        cards={whyIvoCards}
      />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
