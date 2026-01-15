import WorkTogether from "@/app/components/common/WorkTogether";
import BackButton from "@/app/components/common/BackButton";
import TextSection from "@/app/components/solutions/TextSection";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import FooterData from "@/app/components/cloud/FooterData";
import PartnerSection from "@/app/components/cloud/PartnerSection";

const databaseBannerData = {
  id: "1",
  img: "/services/database/database.webp",
  text: "Unlock the Power of Data with Our",
  subText: "Database Services",
  description: "Elevate Your Data Potential with IVO Solutions",
};

const databaseHeaderData = {
  id: "1",
  name: "database-service",
  title: "Database Service",
  textSection: [
    {
      id: "1",
      title: "",
      description: `<p>At IVO Solutions, we are more than just a Database Services provider – we are your partners in unleashing the true power within your data. Backed by our unwavering commitment to excellence, we offer a suite of tailored services designed to amplify your database capabilities and drive your business forward.
      </p>`,
    },
  ],
};

const databaseFooterData = [
  {
    id: "1",
    title: "Why Partner with IVO Solutions?",
    description: "",
    content: [
      {
        id: "1",
        title: "Invaluable Partnerships",
        subContent: [
          {
            id: "1",
            description:
              "As proud affiliates of industry giants like Oracle, Microsoft, Imperva, and RedHat, we harness their cutting-edge technologies to craft innovative solutions for your database needs.",
          },
        ],
      },
      {
        id: "2",
        title: "Tailored Precision",
        subContent: [
          {
            id: "1",
            description:
              "We carefully create our services to match your specific business goals, making sure your database systems work well and help your business run smoothly.",
          },
        ],
      },
      {
        id: "3",
        title: "Simplified Complexity",
        subContent: [
          {
            id: "1",
            description:
              "Navigate the labyrinth of licensing intricacies effortlessly with our expertise, saving time and resources while ensuring compliance and cost efficiency.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Discover Our Dynamic Database Services",
    description: "",
    content: [
      {
        id: "2",
        title: "Setup and Configuration",
        subContent: [
          {
            id: "1",
            description:
              "From standalone to clustered environments, we handle installations in line with industry standards.",
          },
        ],
      },
      {
        id: "3",
        title: "Upgrade & Patching Excellence",
        subContent: [
          {
            id: "1",
            description:
              "Stay ahead with flawless upgrades and industry-leading patching strategies across all database versions.",
          },
        ],
      },
      {
        id: "4",
        title: "Licensing Consultancy",
        subContent: [
          {
            id: "1",
            description:
              "Gain insights and strategies to streamline licensing according to your budget and operational needs.",
          },
        ],
      },
      {
        id: "5",
        title: "Performance Optimization",
        subContent: [
          {
            id: "1",
            description:
              "Elevate database efficiency with fine-tuning, query optimization, and cutting-edge technologies, ensuring enhanced user experiences.",
          },
        ],
      },
      {
        id: "6",
        title: "Security Enhancement",
        subContent: [
          {
            id: "1",
            description:
              "Safeguard your data with ironclad security measures encompassing encryption, access controls, and vulnerability assessments.",
          },
        ],
      },
      {
        id: "7",
        title: "Data Safeguarding",
        subContent: [
          {
            id: "1",
            description:
              "Ensure your critical data's protection with robust backup and recovery solutions, providing accessibility and resilience during unforeseen incidents.",
          },
        ],
      },
      {
        id: "8",
        title: "Database Migrations",
        subContent: [
          {
            id: "1",
            description:
              "Our end-to-end migration services, including cloud transitions across multiple providers, ensure a smooth and secure transfer.",
          },
        ],
      },
    ],
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

export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={databaseBannerData} />
      <div style={{ marginTop: "20px" }}>
        {databaseHeaderData.textSection.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "80px" }}>
        {databaseFooterData.map((data) => (
          <FooterData key={data?.id} data={data} />
        ))}
        <PartnerSection data={databasePartnerData} />
      </div>
      <WorkTogether />
    </main>
  );
}
