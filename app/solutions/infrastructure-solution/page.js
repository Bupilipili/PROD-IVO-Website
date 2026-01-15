import WorkTogether from "@/app/components/common/WorkTogether";
import BackButton from "@/app/components/common/BackButton";
import TextSection from "@/app/components/solutions/TextSection";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import CloudSection from "@/app/components/cloud/CloudSection";

const infrastructureBannerData = {
  id: "1",
  img: "/solutions/infrastructure/infrastructure.webp",
  text: "Reliable, Secure, Scalable and efficient",
  subText: "Infrastructure Solutions",
  description: "Deploy carefully planned solutions suited for your needs",
};

const infrastructureHeaderData = {
  id: "1",
  name: "infrastructure-solution",
  title: "Infrastructure Solution",
  textSection: [
    {
      id: "1",
      title: "",
      description: `<p>ICT infrastructure solutions are crucial for digital transformation and innovation in various industries. They enable the development and deployment of new technologies and support the improvement of existing processes. Careful planning, design, implementation, and management are required to ensure alignment with user, business, and stakeholder needs.
      </p>`,
    },
    {
      id: "2",
      title: "",
      description: `<p>ICT infrastructure solutions encompass products and services that enable the creation, operation, and management of ICT systems, aiming to provide reliable, secure, scalable, and efficient systems that meet user and stakeholder needs.</p>`,
    },
    {
      id: "3",
      title: "",
      description: `<p>Components of ICT Infrastructure Solutions:</p>`,
    },
  ],
};

const infrastructureSectionData = [
  {
    id: "1",
    img: "/solutions/infrastructure/infrastructure_a.webp",
    title: "Hardware Solutions",
    description:
      "IVO Solutions prioritizes hardware solutions, including servers and SAN/NAS storage, to align with a business's operations and growth goals. These solutions handle data processing, storage, and transmission in accordance with organizational needs and policies. By selecting hardware that fits their needs, businesses can enhance productivity and adapt to evolving ICT trends.",
  },
  {
    id: "2",
    img: "/solutions/infrastructure/infrastructure_b.webp",
    title: "Software Solutions",
    description:
      "We specialize in provisioning & deploying business-operations-oriented & enterprise-level software solutions that run on top of hardware infrastructure. These solutions act as a bridge between hardware resources & end-users, offering functionalities like virtualization, automation, orchestration, optimization, and security. By collaborating with multiple OEM vendors, IVO Solutions ensures that software maximizes hardware and human resources, delivering optimal performance to achieve customers' business goals and strategies.",
  },
  {
    id: "3",
    img: "/solutions/infrastructure/infrastructure_c.webp",
    title: "Back-Up Solutions",
    description:
      "ICT Solutions play a crucial role in ensuring Business Continuity. Back-Up solutions are essential for any organization, serving as a fallback plan. They provide a structured approach to resume operations from the nearest and healthiest checkpoint in case of an incident. IVO Solutions offers consultancy, project implementation, and operational support for organizations' back-up solutions and business continuity policies, promoting, planning, deploying, and maintaining these critical components.",
  },
  {
    id: "4",
    img: "/solutions/infrastructure/infrastructure_d.webp",
    title: "Monitoring and Reporting",
    description:
      "In today's ICT Infrastructure, visibility, transparency, and information-guided activities are crucial. Data gathering and analytics are essential for incident response, customer service evaluation, and future planning. IVO Solutions Ltd provides ICT Infrastructure Administrators, Business Managers, and Stakeholders with deep, transparent insights into their data to facilitate strategic decision-making and boost operational efficiency.",
  },
];

export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={infrastructureBannerData} />
      <div style={{ marginTop: "20px", marginBottom: "-40px" }}>
        {infrastructureHeaderData.textSection.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      {infrastructureSectionData.map((section) => (
        <CloudSection key={section.id} data={section} />
      ))}
      <WorkTogether />
    </main>
  );
}
