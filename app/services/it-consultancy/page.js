import FooterData from "@/app/components/cloud/FooterData";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import TextSection from "@/app/components/solutions/TextSection";
import React from "react";

const itConsultancyBannerData = {
  id: "1",
  img: "/services/itConsultancy/itConsultancy.webp",
  text: "IT systems and Infrastructure",
  subText: "Consultancy",
  description: "",
};

const itConsultancyHeaderData = {
  id: "1",
  name: "it-consultancy",
  title: "IT Consultancy",
  textSection: [
    {
      id: "1",
      title: "",
      description: `<p>At IVO Solutions, we believe that every business is unique, and there is no one-size-fits-all approach to IT consultancy. Our approach is cantered around collaboration, expertise, and industry best practices.
      </p>`,
    },
  ],
};

const itConsultancyTextData = {
  id: "1",
  textSection: [
    {
      id: "1",
      title: "",
      description: `<p><strong>1. Needs Assessment:</strong>
       We begin by conducting a comprehensive assessment of your current IT infrastructure, processes, and goals. Working closely with your team to understand your unique requirements, pain points, and growth objectives.</p>
       <br /><p><strong>2. Strategic Planning:</strong> Based on the assessment, we develop a strategic IT roadmap that aligns your technology investments with your business objectives. Our consultants leverage their industry knowledge and expertise to recommend solutions that drive efficiency, innovation, and growth.</p>
       <br /><p><strong>3. Technology Selection and Implementation:</strong> With a deep understanding of the latest technologies and trends, we help you choose the right solutions that address your specific needs. From hardware and software selection to procurement and implementation, we guide you through the entire process.</p>
       <br /><p><strong>4. Digital Transformation:</strong>We assist you in leveraging emerging technologies to digitally transform your business. Whether it's implementing cloud solutions, adopting advanced analytics, or embracing automation, we help you unlock new opportunities and stay ahead in the digital age.</p>
       <br /><p><strong>5. Vendor Management:</strong> We simplify the vendor selection and management process by providing insights and recommendations on reputable technology vendors and service providers. Our goal is to ensure you have the right partners to support your IT initiatives.</p>
       <br /><p><strong>6. IT Governance and Compliance:</strong> We help you establish robust IT governance frameworks and ensure compliance with industry regulations and standards. Our consultants provide guidance on data privacy, security, and risk management to protect your business and build trust with your stakeholders.</p>`,
    },
  ],
};

const itConsultancyFooterData = [
  {
    id: "1",
    title: "Our Approach",
    description: "",
    content: [
      {
        id: "1",
        title: "Comprehensive Analysis:",
        subContent: [
          {
            id: "1",
            description:
              "Our consultancy process begins with a thorough evaluation of your existing IT infrastructure, systems, and workflows. We identify strengths, weaknesses, and opportunities for improvement.",
          },
        ],
      },
      {
        id: "2",
        title: "Customized Solutions:",
        subContent: [
          {
            id: "1",
            description:
              "Based on the analysis, we craft personalized IT strategies aligned with your business objectives. Our solutions focus on maximizing efficiency, security, and scalability.",
          },
        ],
      },
      {
        id: "3",
        title: "Implementation Guidance:",
        subContent: [
          {
            id: "1",
            description:
              "Our team collaborates closely with yours to ensure a seamless integration of recommended solutions. We provide guidance throughout the implementation phase to achieve optimal results.",
          },
        ],
      },
      {
        id: "4",
        title: "Ongoing Support:",
        subContent: [
          {
            id: "1",
            description:
              "Our commitment extends beyond implementation. We offer continuous support, monitoring, and fine-tuning to adapt to evolving business needs and technological advancements.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Areas of Expertise",
    description: "",
    content: [
      {
        id: "1",
        title: "Technology Roadmapping:",
        subContent: [
          {
            id: "1",
            description:
              "Developing a clear technology roadmap to align IT initiatives with your business goals for long-term success.",
          },
        ],
      },
      {
        id: "2",
        title: "IT Infrastructure Optimization:",
        subContent: [
          {
            id: "1",
            description:
              "Designing and optimizing robust IT infrastructures that support growth, scalability, and seamless operations.",
          },
        ],
      },
      {
        id: "3",
        title: "Digital Transformation Strategies:",
        subContent: [
          {
            id: "1",
            description:
              "Assisting businesses in embracing digital transformation, leveraging emerging technologies for enhanced efficiency and competitiveness.",
          },
        ],
      },
      {
        id: "4",
        title: "Cybersecurity Consulting:",
        subContent: [
          {
            id: "1",
            description:
              "Providing comprehensive cybersecurity strategies and protocols to safeguard your data and systems from threats.",
          },
        ],
      },
      {
        id: "5",
        title: "Compliance and Regulatory Guidance:",
        subContent: [
          {
            id: "1",
            description:
              "Ensuring adherence to industry regulations and standards, minimizing risks and vulnerabilities.",
          },
        ],
      },
      {
        id: "6",
        title: "Vendor Selection and Management:",
        subContent: [
          {
            id: "1",
            description:
              "Assisting in selecting suitable technology vendors and managing vendor relationships for optimal outcomes.",
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
      <ServiceHeader data={itConsultancyBannerData} />
      <div style={{ marginTop: "20px" }}>
        {itConsultancyHeaderData.textSection.map((data) => (
          <TextSection key={data?.id} {...data} />
        ))}
      </div>
      {itConsultancyTextData.textSection.map((data) => (
        <TextSection key={data?.id} {...data} />
      ))}
      <div style={{ display: "flex", flexDirection: "column", rowGap: "80px" }}>
        {itConsultancyFooterData.map((data) => (
          <FooterData key={data?.id} data={data} />
        ))}
      </div>
      <WorkTogether />
    </main>
  );
}
