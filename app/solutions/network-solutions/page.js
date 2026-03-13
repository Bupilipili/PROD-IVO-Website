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

const networkHeaderData = {
  id: "1",
  img: "/solutions/network/network.webp",
  text: "Comprehensive, scalable and customised",
  subText: "Network Solutions",
  description: "Explore our very own high-level and broad solutions",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "Enterprise networks provide the connectivity essential for every organization. But, with the onset of hybrid IT and cloud solutions, the enterprise network is more critical and more complex than ever. IVO Solutions provides end-to-end network solutions designed to optimize performance and reliability.";

const networkManagementData = {
  subtitle: "Network Solution",
  title: "Network Management",
  description:
    "Your network is crucial to your business, but managing its components can be time-consuming and inefficient. Offloading these tasks to IVO Solutions can free up your internal IT resources and improve network efficiency and reliability through proactive monitoring and maintenance.",
  solutionsTitle: "Our Network Management Solutions",
  solutions: [
    "Network Performance Monitoring",
    "Proactive Maintenance & Support",
    "Network Configuration Management",
    "Capacity Planning & Optimization",
  ],
  image: "/solutions/network/network_a.webp",
};

const enterpriseSecurityData = {
  subtitle: "Network Solution",
  title: "Enterprise Network Security",
  description:
    "IVO Solutions and our partners provide comprehensive enterprise network security assessments to keep your network safe. Our approach reduces complexity, offering superior visibility, continuous control, and advanced threat protection.",
  solutionsTitle: "Our Security Solutions",
  solutions: [
    "Firewall & VPN Security",
    "Intrusion Prevention Systems",
    "Network Access Control",
    "Security Assessments & Audits",
  ],
  image: "/solutions/network/network_b.webp",
};

const wanLanData = {
  subtitle: "Network Solution",
  title: "WAN/LAN Solutions",
  description:
    "Whether you are looking to upgrade your existing enterprise network infrastructure or implement a new network, IVO Solutions can assist with the design, provisioning, implementation and management of traditional LAN, WAN and campus network solutions.",
  solutionsTitle: "Our WAN/LAN Solutions",
  solutions: [
    "Enterprise LAN Design & Implementation",
    "WAN Optimization",
    "Campus Network Solutions",
    "Network Infrastructure Upgrades",
  ],
  image: "/solutions/network/network_c.webp",
};

const sdnData = {
  subtitle: "Network Solution",
  title: "Software Defined Networking (SDN)",
  description:
    "IVO Solutions provides advanced SDN solutions that reduce complexity, offer superior visibility, continuous control, and advanced network management capabilities for modern enterprise environments.",
  solutionsTitle: "Our SDN Solutions",
  solutions: [
    "SD-WAN Implementation",
    "Network Virtualization",
    "Wireless Network Solutions",
    "Cloud-Managed Networks",
  ],
  image: "/solutions/network/network_d.webp",
};

const whyIvoCards = [
  {
    title: "Cost Savings:",
    description:
      "Managed network services can help businesses save money on IT costs, such as hardware, software, and personnel costs.",
  },
  {
    title: "Scalability:",
    description:
      "Managed network services can be scaled up or down as needed, giving businesses the flexibility to adjust their IT infrastructure.",
  },
  {
    title: "24/7 Reliability:",
    description:
      "Managed network services are monitored 24/7, meaning businesses can trust that their networks are reliable and secure.",
  },
];

const networkPartnerData = {
  id: "1",
  partner: "Network Solution",
  img: [
    "/solutions/network/cisco_logo.webp",
    "/solutions/network/huwaei_logo.webp",
    "/solutions/network/fortnet_logo.webp",
  ],
};

export default function NetworkSolutionsPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/solutions" />
      <ServiceHeader data={networkHeaderData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...networkManagementData} />

      <SolutionContentSection {...enterpriseSecurityData} reverse />

      <SolutionContentSection {...wanLanData} />

      <SolutionContentSection {...sdnData} reverse />

      <WhyIvo
        subtitle="Network Solution"
        title="Why Ivo For Your Network?"
        description="We offer managed network services to accelerate network transformation:"
        cards={whyIvoCards}
      />

      <PartnerSection data={networkPartnerData} />
      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
