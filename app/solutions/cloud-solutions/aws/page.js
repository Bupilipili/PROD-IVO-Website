import CloudSection from "@/app/components/cloud/CloudSection";
import BackButton from "@/app/components/common/BackButton";
import WorkTogether from "@/app/components/common/WorkTogether";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import TextSection from "@/app/components/solutions/TextSection";
import { solutionsData } from "@/data/solutions";
const awsHeaderData = {
  id: "1",
  img: "/solutions/aws/aws.webp",
  text: "Accelerate Business Transformation with",
  subText: " Cloud Consulting Services",
  description: "Get the most out of your cloud with Amazon Web Service",
};

const awsSectionData = [
  {
    id: "1",
    img: "/solutions/aws/aws_a.webp",
    title: "Cloud Consulting Services",
    description:
      "At IVO Solutions, we understand your business model now, but more importantly, we can realize where you are going.",
  },
  {
    id: "2",
    img: "/solutions/aws/aws_b.webp",
    title: "Cloud Migration ",
    description:
      "Don't have enough space to keep up with Data Surge? Interested in adoption of Public Cloud? Is OPEX cost becoming a concern.",
  },
  {
    id: "3",
    img: "/solutions/aws/aws_c.webp",
    title: "Cloud laaS",
    description:
      "IVO Solutions as a Service Delivery Partners we are specialized in delivering Compute, Networking, Security, Database and Storage services on AWS.",
  },
  {
    id: "4",
    img: "/solutions/aws/aws_d.webp",
    title: "Business Continuity, Disaster Recovery, And Managed Services ",
    description:
      "Our team of certified professionals possesses extensive experience in designing, implementing, and managing BCDR strategies that ensure the uninterrupted operation of critical systems and data in the face of unforeseen events.",
  },
  {
    id: "5",
    img: "/solutions/aws/aws_e.webp",
    title: "Web Hosting and Content Delivery Services",
    description:
      "Our Web hosting Service comes with Content Delivery Network (CDN) by AWS and is highly optimized to provide ultra-low latency performance and high transfer speed.",
  },
];
export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={awsHeaderData} />
      <div style={{ marginTop: "40px" }}>
        {solutionsData[3].textSections.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      {awsSectionData?.map((data) => (
        <CloudSection key={data?.id} data={data} />
      ))}
      <WorkTogether />
    </main>
  );
}
