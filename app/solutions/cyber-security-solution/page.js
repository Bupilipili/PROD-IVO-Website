import CloudSection from "@/app/components/cloud/CloudSection";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import TextSection from "@/app/components/solutions/TextSection";
import { solutionsData } from "@/data/solutions";
const cyberSecurityHeaderData = {
  id: "1",
  img: "/solutions/cyber/cyber.webp",
  text: "Cybersecurity",
  subText: "Consulting",
};

const cyberSecuritySectionData = [
  {
    id: "1",
    img: "/solutions/cyber/cyber_a.webp",
    title: "Managed Network Security Service",
    description: `Our engineers are highly skilled on all Palo Alto Networks, FortiGate and Cisco firewalls, and have deployed firewalls for customers in the Banking, Insurance, education sector and the logistics, mining, retail, and warehousing industries, among others. 

      We are proficient in building modern, agile, and resilient business networks to connect your workforces and workloads across branches, campuses, data centres, and cloud, hybrid, and virtualised environments. We provide end-to-end support, from setting up your physical and virtual infrastructure to optimising your resources for maximum uptime and minimal disruption. `,
  },
  {
    id: "2",
    img: "/solutions/cyber/cyber_b.webp",
    title: `Privileged Access Management
    (PAM)`,
    description: `Our advanced Privileged Access Management (PAM) solution is a crucial component of our comprehensive security portfolio. With our PAM offerings, you can effectively control, monitor, and secure privileged access within your organization. We enable you to mitigate the risks associated with unauthorized access to critical systems and data. 

      Our PAM solutions encompass features like privileged user authentication, session monitoring, and privileged credential management. By implementing our PAM solutions, you'll enhance your security posture, meet compliance requirements, and safeguard sensitive information.`,
  },
  {
    id: "3",
    img: "/solutions/cyber/cyber_c.webp",
    title: `Database Access Management and Database Firewall solutions (DAM)`,
    description: `Discover the power of our cutting-edge Database Access Management and Database Firewall solutions, featuring industry leaders like Oracle Audit Vault and Database Firewall (AVDF) and Imperva Database Access Management (DAM). Our AVDF and Imperva DAM offerings provide robust protection for your critical databases, allowing you to maintain control, visibility, and security over your sensitive data. 

      With AVDF, you gain real-time monitoring, auditing, and alerting to detect and respond to threats, while Imperva DAM enables precise access control, privileged user management, and comprehensive data activity monitoring. Together, these solutions bolster your database security strategy, ensuring compliance with data protection regulations and safeguarding your organization's most valuable assets.`,
  },
  {
    id: "4",
    img: "/solutions/cyber/cyber_d.webp",
    title: "SD-WAN & SASE ",
    description: `At IVO Solutions, we can help both SMEs and large enterprise organisations to build the perfect WAN solution that fits their specific needs and budget, unlocking their network's full potential. 

      Our SD-WAN & Virtualisation solutions enable seamless connectivity for remote workers and allow us to build custom fabric solutions to support virtualised machines.
       
      These solutions come with a range of benefits, including reducing latency, minimising packet loss, and ensuring high availability for always-on employees. 
      `,
  },
  {
    id: "5",
    img: "/solutions/cyber/cyber_e.webp",
    title: "MANAGED  XDR",
    description: `Managed Extended Detection and Response (MXDR) is a cybersecurity solution that helps organisations detect and respond to security threats in real-time. 

      It combines multiple security technologies, such as security operations centre (SoC), endpoint detection and response (EDR), network detection and response (NDR), and security information and event management (SIEM), with advanced analytics and machine learning capabilities to provide a comprehensive security posture for an organization. 
      `,
  },
  {
    id: "6",
    img: "/solutions/cyber/cyber_f.webp",
    title: "DLP, Email and Application Security",
    description: `we safeguard your business with Data Loss Prevention (DLP), Email Security, and Application Security. Our DLP solutions protect sensitive data from unauthorized access and breaches, ensuring compliance and reputation protection. 

    Email Security shields you from phishing attacks, malware, and email threats, securing your communications and data. Meanwhile, Application Security keeps your software safe from vulnerabilities and attacks. Together, these solutions seamlessly integrate to offer holistic protection, as demonstrated by our case studies and testimonials.     
      `,
  },
];
export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={cyberSecurityHeaderData} />
      <div style={{ marginTop: "40px" }}>
        {solutionsData[4].textSections.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      {cyberSecuritySectionData?.map((data) => (
        <CloudSection key={data?.id} data={data} />
      ))}
      <WorkTogether />
    </main>
  );
}
