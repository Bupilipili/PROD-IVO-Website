import WorkTogether from "@/app/components/common/WorkTogether";
import BackButton from "@/app/components/common/BackButton";
import SolutionsHeader from "@/app/components/solutions/SolutionsHeader";
import TextSection from "@/app/components/solutions/TextSection";
import { solutionsData } from "@/data/solutions";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import CloudSection from "@/app/components/cloud/CloudSection";
import FooterData from "@/app/components/cloud/FooterData";
import PartnerSection from "@/app/components/cloud/PartnerSection";

const networkHeaderData = {
  id: "1",
  img: "/solutions/network/network.webp",
  text: "Comprehensive, scalable and customised",
  subText: "Network Solutions",
  description: "Explore our very own high-level and broad solutions",
};

const networkSectionData = [
  {
    id: "1",
    img: "/solutions/network/network_a.webp",
    title: "Network Management",
    description:
      "Your network is crucial to your business, but managing its components can be time-consuming and inefficient. Offloading these tasks to IVO Solutions can free up your internal IT resources and improve network efficiency and reliability through proactive monitoring and maintenance.",
  },
  {
    id: "2",
    img: "/solutions/network/network_b.webp",
    title: "Enterprise Network Security",
    description:
      "IVO Solutions and our partners provide comprehensive enterprise network security assessments to keep your network safe. Our approach reduces complexity, offering superior visibility, continuous control, and advanced threat protection.\n We cover all aspects of security, including firewall, VPN, and Intrusion Prevention Security, with end-to-end services.",
  },
  {
    id: "3",
    img: "/solutions/network/network_c.webp",
    title: "WAN/LAN",
    description:
      "Whether you are looking to upgrade your existing enterprise network infrastructure or implement a new network, IVO Solutions can assist with the design, provisioning, implementation and management of traditional LAN, WAN and campus network solutions that will meet your needs today and easily expand as your business grows.",
  },
  {
    id: "4",
    img: "/solutions/network/network_d.webp",
    title: "Software Defined Networking (SDN)",
    description:
      "IVO Solutions and our partners provide comprehensive enterprise network security assessments to keep your network safe. Our approach reduces complexity, offering superior visibility, continuous control, and advanced threat protection. We cover all aspects of security, including firewall, VPN, and Intrusion Prevention Security, with end-to-end services.",
  },
  {
    id: "5",
    img: "/solutions/network/network_e.webp",
    title: "SD-WAN",
    description:
      "IVO Solutions and our partners provide comprehensive enterprise network security assessments to keep your network safe. Our approach reduces complexity, offering superior visibility, continuous control, and advanced threat protection.\n We cover all aspects of security, including firewall, VPN, and Intrusion Prevention Security, with end-to-end services.",
  },
  {
    id: "6",
    img: "/solutions/network/network_f.webp",
    title: "Virtualization",
    description:
      "IVO Solutions knows network virtualization helps enterprises simplify their environment and achieve major advances in speed, agility, management and security.\nLeveraging our enterprise network virtualization experience, we can help design and implement the right network virtualization architecture to deliver a consistent, high-quality network experience to connected users, helping you meet your business objectives.",
  },
  {
    id: "7",
    img: "/solutions/network/network_g.webp",
    title: "Wireless Network Solutions",
    description:
      "IVO Solutions knows network virtualization helps enterprises simplify their environment and achieve major advances in speed, agility, management and security.\n Leveraging our enterprise network virtualization experience, we can help design and implement the right network virtualization architecture to deliver a consistent, high-quality network experience to connected users, helping you meet your business objectives.",
  },
];

const networkTextData = {
  id: "1",
  textSection: [
    {
      id: "1",
      title: "",
      description: `<p>IVO Solutions offers end-to-end wireless services, including:</p>`,
    },
    {
      id: "2",
      title: "",
      description: `<ul>
        <li>Wireless site surveys and wireless design service.</li>
        <li>Wireless access points and LAN controller installation.</li>
        <li>Wireless network management solutions.</li>
        <li>Cloud-managed wireless network solutions</li>
        </ul>`,
    },
  ],
};

const networkFooterData = [
  {
    id: "1",
    title: "Managed Network Services",
    description:
      "We offer managed network services to accelerate network transformation while meeting the needs of the business. As traditional network infrastructure converges with newer technologies, it’s creating huge challenges for IT teams.\n What Are the Benefits of Managed Network Services?",
    content: [
      {
        id: "1",
        title: "Cost Savings",
        subContent: [
          {
            id: "1",
            description:
              "Managed network services can help businesses save money on IT costs, such as hardware, software, and personnel costs.",
          },
        ],
      },
      {
        id: "2",
        title: "Scalability",
        subContent: [
          {
            id: "1",
            description:
              "Managed network services can be scaled up or down as needed, giving businesses the flexibility to adjust their IT infrastructure to meet their changing needs.",
          },
        ],
      },
      {
        id: "3",
        title: "Reliability",
        subContent: [
          {
            id: "1",
            description:
              "Managed network services are monitored 24/7, meaning businesses can trust that their networks are reliable and secure.",
          },
        ],
      },
      {
        id: "4",
        title: "Expertise",
        subContent: [
          {
            id: "1",
            description:
              "Managed network services offer access to expert technicians who can provide guidance, advice and support when needed.",
          },
        ],
      },
    ],
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

export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={networkHeaderData} />
      <div style={{ marginTop: "20px" }}>
        {solutionsData[2].textSections.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      {networkSectionData?.map((section) => (
        <CloudSection key={section.id} data={section} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "column",
          gap: "16px",
          marginBlock: "80px",
        }}
      >
        {networkTextData?.textSection?.map((data) => (
          <TextSection key={data?.id} {...data} />
        ))}
        {networkFooterData?.map((data) => (
          <FooterData key={data?.id} data={data} />
        ))}
      </div>
      <PartnerSection data={networkPartnerData} />
      <WorkTogether />
    </main>
  );
}
