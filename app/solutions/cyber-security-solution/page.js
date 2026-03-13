"use client";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import BestService from "@/app/components/common/BestService";
import WhyIvo from "@/app/components/common/WhyIvo";
import ClientFeedback from "@/app/components/common/ClientFeedback";
import StayUpdated from "@/app/components/common/StayUpdated";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import SolutionContentSection from "@/app/components/solutions/SolutionContentSection";

const cyberSecurityHeaderData = {
  id: "1",
  img: "/solutions/cyber/cyber.webp",
  text: "Cybersecurity",
  subText: "Consulting",
  description:
    "Our Cyber Security Consultation Service is dedicated to protecting your business systems from cybercriminals with cutting-edge resources and extensive expertise.",
  btnText: "Let's Talk",
};

const bestServiceDescription =
  "Our Cyber Security Consultation Service is dedicated to protecting your business systems from cybercriminals. We understand that a comprehensive defence strategy is critical, and that's why we combine our extensive cybersecurity expertise with cutting-edge resources to shield your data, applications, networks, and cloud infrastructure from attackers.";

const identitySecurityData = {
  subtitle: "Cyber Security Solution",
  title: "Identity Security",
  description:
    "We Provide Comprehensive Identity Protection Through Multi-Factor Authentication (MFA), Privileged Access Management (PAM), And Endpoint Privilege Management (EPM) To Safeguard Your Organization's Critical Identities And Access Points.",
  solutionsTitle: "Our Identity Security Solutions",
  solutions: [
    "Multi-Factor Authentication (MFA) with adaptive risk-based requirements",
    "Privileged Access Management (PAM) for securing critical identities",
    "Endpoint Privilege Management (EPM) for workstation-level control",
  ],
  image: "/solutions/cyber/cyber_a.webp",
};

const networkSecurityData = {
  subtitle: "Cyber Security Solution",
  title: "Network Security",
  description:
    "As Cybersecurity Experts, We Architect, Implement, And Manage Advanced Technologies To Fortify Network Security, Delivering Robust Perimeter Defenses Against Cyber Threats. Network Security Encompasses All The Steps Taken To Protect The Integrity Of A Computer Network And The Data Within It.",
  solutionsTitle: "Our Network Security Solutions",
  solutions: [
    "Next-Generation Firewalls (NGFW)",
    "Network Access Control (NAC)",
    "Network Detection & Response (NDR)",
    "Secure SD-WAN & SASE",
  ],
  image: "/solutions/cyber/cyber_b.webp",
  bottomDescription:
    "IVO's Role: We architect, integrate, and manage the solutions and processes that bring Zero Trust to life.",
};

const databaseSecurityData = {
  subtitle: "Cyber Security Solution",
  title: "Database Security",
  description:
    "Our Solutions Secure Sensitive Data, Maintain Database Integrity, And Ensure Compliance. Services Include Database Activity Monitoring (DAM), Transparent DB Encryption (TDE), Database Vault, Dataguard, Key Vault, And Zero Data Loss Capabilities.",
  solutionsTitle: "Our Database Security Solutions",
  solutions: [
    "Database Activity Monitoring (DAM)",
    "Transparent DB Encryption (TDE)",
    "Database Security Assessment Tool (DBSAT)",
    "Database Vault",
    "Dataguard",
    "Key Vault",
    "Zero Data Loss",
  ],
  image: "/solutions/cyber/cyber_c.webp",
};

const endpointSecurityData = {
  subtitle: "Cyber Security Solution",
  title: "Endpoint Security",
  description:
    "Protecting Workstations, Servers, And Devices, Our Endpoint Detection And Response (EDR) And Extended Detection And Response (XDR) Solutions Detect, Contain, And Remediate Threats In Real Time.",
  solutionsTitle: "Our Endpoint Security Solutions",
  solutions: [
    "Antivirus",
    "Endpoint Detection and Response (EDR)",
    "Extended Detection and Response (XDR)",
  ],
  image: "/solutions/cyber/cyber_e.webp",
  bottomDescription:
    "The Endpoint Detection And Response (EDR) Is A Solution That Can Record And Store Endpoint System-Level Behaviors, Use Various Data Analytics Techniques To Detect Suspicious System Behavior, Provide Contextual Information, Block Malicious Activity, And Provide Remediation Suggestions To Restore Affected Systems.",
};

const applicationSecurityData = {
  subtitle: "Cyber Security Solution",
  title: "Application Security",
  description:
    "We Secure Applications Against External Threats With Web Application Firewalls (WAF), Anti-DDoS, Application Delivery Controllers (ADC), And Load Balancers, Safeguarding Sensitive Data And Ensuring Compliance.",
  solutionsTitle: "Our Application Security Solutions",
  solutions: [
    "Web Application Firewall (WAF)",
    "Anti-DDoS",
    "Application Delivery Controllers (ADC)",
    "Load Balancers",
  ],
  image: "/solutions/cyber/cyber_f.webp",
};

const dataSecurityData = {
  subtitle: "Cyber Security Solution",
  title: "Data Security",
  description:
    "Our Data Protection Solutions Include Data Loss Prevention (DLP), Data Classification, Encryption, And Email Security, Ensuring Sensitive Information Remains Secure Throughout Its Lifecycle.",
  solutionsTitle: "Our Data Security Solutions",
  solutions: [
    "Data Loss Protection (DLP)",
    "Data Classification",
    "Data Encryption",
    "Email Security",
  ],
  image: "/solutions/cyber/cyber_d.webp",
};

const whyIvoCards = [
  {
    title: "NIST Frameworks:",
    description:
      "Aligning with both the Cybersecurity Framework (CSF) and SP 800-207 (Zero Trust Architecture).",
  },
  {
    title: "ISO 27001 Implementation:",
    description: "Formalizing our ISMS to govern the Zero Trust controls.",
  },
  {
    title: "Data Protection Compliance:",
    description:
      "Certified as a Data Protection Processor/Controller under Tanzania's Data Protection Act, 2022.",
  },
];

export default function CyberSecurityPage() {
  return (
    <main className="body-wrapper">
      <BackButton backUrl="/solutions" />
      <ServiceHeader data={cyberSecurityHeaderData} />

      <BestService description={bestServiceDescription} />

      <SolutionContentSection {...identitySecurityData} />

      <SolutionContentSection {...networkSecurityData} reverse />

      <WhyIvo
        subtitle="Cyber Security Solution"
        title="Why Ivo For Your Zero?"
        description="We Implement Zero Trust Using Industry Best Practices:"
        cards={whyIvoCards}
      />

      <SolutionContentSection {...databaseSecurityData} />

      <SolutionContentSection {...endpointSecurityData} reverse />

      <SolutionContentSection {...applicationSecurityData} />

      <SolutionContentSection {...dataSecurityData} reverse />

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
