"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const cxCommunicationBannerData = {
  id: "1",
  img: "/solutions/3cxCommunication/3cxCommunication.webp",
  text: "Work without limits using",
  subText: "3CX Communication",
  description: "The ultimate business communication solution with 3CX!",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "3CX is a robust, fully equipped communications system, which allows you to communicate with your colleagues and customers - anywhere, anytime. You can trial a fully equipped 3CX System today! Our team will gladly give you a quick demo and answer any questions!";

const communicationData = {
  subtitle: "Collaboration Solution",
  title: "3CX Communication Platform",
  description:
    "3CX is a complete unified communications solution that includes telephony, video conferencing, live chat, and SMS capabilities - all integrated into one powerful platform.",
  solutionsTitle: "Key Features",
  solutions: [
    "Telephony - Web client and mobile apps for remote working",
    "Video Conferencing - Included in your system, no add-ons needed",
    "Live Chat - Talk with customers via your website or WhatsApp",
    "SMS - Allow your customers to interact with you instantly",
    "CRM & Microsoft 365 Integrations",
  ],
  image: "/solutions/3cxCommunication/3cxCommunication.webp",
};

const deploymentData = {
  subtitle: "Collaboration Solution",
  title: "Flexible Deployment",
  description:
    "3CX offers flexible deployment options to suit your business needs. Whether you prefer on-premise, cloud, or hybrid solutions, we have you covered.",
  solutionsTitle: "Deployment Options",
  solutions: [
    "On-premise hosting (MiniPC, Hyper-V, VMware, KVM)",
    "Cloud-hosted solution",
    "Hybrid deployment",
    "Keep your existing numbers and providers",
  ],
  image: "/solutions/3cxCommunication/3cxCommunication.webp",
};

const whyIvoCards = [
  {
    title: "Low Cost:",
    description:
      "Save on your phone bills, add-ons and hardware with an all-in-one communication platform.",
  },
  {
    title: "Secure & Reliable:",
    description:
      "3CX includes advanced security features and is backed by 600,000+ customers globally.",
  },
  {
    title: "Expert Support:",
    description:
      "Backed by the vendor, supported by us - get the best of both worlds with our certified 3CX expertise.",
  },
];

export default function CollaborationSolutionPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/solutions" />
      <ServiceHeader data={cxCommunicationBannerData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...communicationData} />

      <SolutionContentSection {...deploymentData} reverse />

      <WhyIvo
        subtitle="Collaboration Solution"
        title="Why Ivo For Your Communication?"
        description="We deliver enterprise-grade communication solutions:"
        cards={whyIvoCards}
      />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
