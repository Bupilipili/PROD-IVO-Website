import CloudSection from "@/app/components/cloud/CloudSection";
import FooterData from "@/app/components/cloud/FooterData";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import TextSection from "@/app/components/solutions/TextSection";
import { solutionsData } from "@/data/solutions";
const azureHeaderData = {
  id: "1",
  img: "/solutions/azure/azure.webp",
  text: "Explore new capabilities in",
  subText: " Microsoft’s latest services",
  description: "Dive into Microsoft’s superior quality services",
};

const awsSectionData = [
  {
    id: "1",
    img: "/solutions/azure/azure_a.webp",
    title: "Azure Cloud Solutions",
    description:
      "Leverage the scalability and flexibility of Azure's cloud infrastructure for seamless operations. From virtual machines to storage solutions, we offer a complete suite of Azure cloud services to elevate your business to new heights.",
  },
  {
    id: "2",
    img: "/solutions/azure/azure_b.webp",
    title: "Microsoft 365 Integration",
    description:
      "Optimize productivity with Microsoft 365 integration services. Collaborate efficiently, enhance communication, and ensure seamless workflow with expert integration solutions.",
  },
  {
    id: "3",
    img: "/solutions/azure/azure_c.webp",
    title: "Azure Security Solutions",
    description:
      "Protect your valuable data with robust Azure security solutions. From threat detection to identity management, we provide comprehensive security services to safeguard your digital assets.",
  },
  {
    id: "4",
    img: "/solutions/azure/azure_d.webp",
    title: "Azure Consulting & Support",
    description:
      "Our team of certified professionals are dedicated to providing top-notch consulting and support services. Whether you are exploring Azure for the first time or seeking to enhance your existing infrastructure, we are here to guide you at every step.",
  },
];

const azureSectionData = [
  {
    id: "1",
    title: "Azure Backup and Recovery",
    description:
      "Secure your critical data with Azure Backup and Recovery, an integral part of our Azure services at IVO Solutions (T) LTD. Azure Backup and Recovery service provides automated backups, secure cloud storage, and efficient recovery options, ensuring the resilience and availability of your crucial information.",
    content: [
      {
        id: "1",
        title: "Key Features:",
        subContent: [
          {
            id: "1",
            title: "Automated Backup:",
            description:
              "Schedule regular, automated backups to protect your data without manual intervention.",
          },
          {
            id: "2",
            title: "Secure Cloud Storage:",
            description:
              "Utilize Azure's secure and redundant cloud storage for robust data protection.",
          },
          {
            id: "3",
            title: "Point-in-Time Recovery:",
            description:
              "Recover your data to specific points in time, providing flexibility and granularity.",
          },
          {
            id: "4",
            title: "Scalability:",
            description:
              "Scale your backup and recovery solutions as your business data grows and evolves.",
          },
        ],
      },
      {
        id: "2",
        title: "Benefits:",
        subContent: [
          {
            id: "1",
            title: "Data Protection:",
            description:
              "Ensure the integrity and availability of your critical data through regular, automated backups.",
          },
          {
            id: "2",
            title: "Quick Recovery:",
            description:
              "Minimize downtime with swift and efficient data recovery in case of data loss or system failures.",
          },
          {
            id: "3",
            title: "Scalable Solutions:",
            description:
              "Grow your backup and recovery capabilities alongside your business, adapting to changing data needs.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Disaster Recovery Sites as Part of Azure Services",
    description:
      "Disruptions are inevitable, but with Disaster Recovery Sites as part of Azure services, provide a robust solution to ensure the continuity of your operations. Leveraging Azure Site Recovery, facilitates continuous replication, automated failover, and comprehensive monitoring to seamlessly recover workloads in the cloud during disasters or disruptive events.",
    content: [
      {
        id: "1",
        title: "Key Features:",
        subContent: [
          {
            id: "1",
            title: "Continuous Replication:",
            description:
              "Maintain an up-to-date replica of your workloads in Azure, minimizing data loss during a disaster.",
          },
          {
            id: "2",
            title: "Automated Failover:",
            description:
              "Swiftly switch to replicated workloads in Azure, ensuring minimal downtime in the event of a disaster.",
          },
          {
            id: "3",
            title: "Testing Capabilities:",
            description:
              "Safely test your disaster recovery plan without impacting your production environment to enhance preparedness.",
          },
          {
            id: "4",
            title: "Comprehensive Monitoring:",
            description:
              "Monitor the health and readiness of your disaster recovery environment for added peace of mind.",
          },
        ],
      },
      {
        id: "2",
        title: "Benefits:",
        subContent: [
          {
            id: "1",
            title: "Minimized Downtime:",
            description:
              "Ensure business continuity by rapidly recovering workloads in the cloud without prolonged downtime.",
          },
          {
            id: "2",
            title: "Cost-Effective:",
            description:
              "Optimize costs by paying only for the resources consumed during the actual disaster recovery process.",
          },
          {
            id: "3",
            title: "Scalable and Reliable:",
            description:
              "Utilize Azure's scalable and reliable infrastructure to build a robust disaster recovery solution tailored to your business needs.",
          },
        ],
      },
    ],
  },
];
export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={azureHeaderData} />
      <div style={{ marginTop: "40px" }}>
        {solutionsData[5].textSections.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      {awsSectionData?.map((data) => (
        <CloudSection key={data?.id} data={data} />
      ))}
      <div style={{ marginTop: "40px" }}>
        <h2
          data-aos='fade-right'
          style={{ fontSize: "40", fontWeight: "700", marginBottom: "24px" }}
        >
          Azure Cloud Solutions
        </h2>
        {solutionsData[6].textSections.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {azureSectionData?.map((data) => (
          <FooterData key={data?.id} data={data} />
        ))}
      </div>
      <WorkTogether />
    </main>
  );
}
