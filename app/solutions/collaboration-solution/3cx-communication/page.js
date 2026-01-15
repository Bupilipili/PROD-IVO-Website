import WorkTogether from "@/app/components/common/WorkTogether";
import BackButton from "@/app/components/common/BackButton";
import TextSection from "@/app/components/solutions/TextSection";
import ServiceHeader from "@/app/components/services/ServiceHeader";
import FooterData from "@/app/components/cloud/FooterData";

const cxCommunicationBannerData = {
  id: "1",
  img: "/solutions/3cxCommunication/3cxCommunication.webp",
  text: "Work without limits using",
  subText: "3CX Communication",
  description: "The ultimate business communication solution with 3CX!",
};

const cxCommunicationHeaderData = {
  id: "1",
  name: "3cxCommunication",
  title: "3cxCommunication",
  textSection: [
    {
      id: "1",
      title: "",
      description: `<p>3CX is a robust, fully equipped communications system, which allows you to communicate with your colleagues and customers - anywhere, anytime.
      </p>`,
    },
    {
      id: "2",
      title: "",
      description: `<p>You can trial a fully equipped 3CX System today! <br> Our team will gladly give you a quick demo and answer any questions!</p>`,
    },
  ],
};

const cxCommunicationFooterData = [
  {
    id: "1",
    title: "Compelling reasons why 3CX is the perfect fit for your business",
    description: "",
    content: [
      {
        id: "1",
        title: "Telephony",
        subContent: [
          {
            id: "1",
            description: "Web client and mobile apps for remote working",
          },
        ],
      },
      {
        id: "2",
        title: "Video",
        subContent: [
          {
            id: "1",
            description: "Included in your system, no add-ons needed",
          },
        ],
      },
      {
        id: "3",
        title: "Live Chat",
        subContent: [
          {
            id: "1",
            description:
              "Talk with your customers in real time via your website or WhatsApp",
          },
        ],
      },
      {
        id: "4",
        title: "SMS",
        subContent: [
          {
            id: "1",
            description: "Allow your customers to interact with you instantly",
          },
        ],
      },
      {
        id: "5",
        title: "Integrations",
        subContent: [
          {
            id: "1",
            description: "CRMs and Microsoft 365",
          },
        ],
      },
      {
        id: "6",
        title: "Low Cost",
        subContent: [
          {
            id: "1",
            description: "Save on your phone bills, add ons and hardware",
          },
        ],
      },
      {
        id: "7",
        title: "Flexible",
        subContent: [
          {
            id: "1",
            description:
              "Keep your numbers, choose your phones and your provider",
          },
        ],
      },
      {
        id: "8",
        title: "Secure",
        subContent: [
          {
            id: "1",
            description: "3CX includes advanced security features",
          },
        ],
      },
      {
        id: "9",
        title: "Install anywhere",
        subContent: [
          {
            id: "1",
            description: "Hosted on-premise, MiniPC, Hyper-V, VMware or KVM",
          },
        ],
      },
      {
        id: "10",
        title: "Backed by the vendor, supported by us",
        subContent: [
          {
            id: "1",
            description: "600,000+ customers globally",
          },
        ],
      },
    ],
  },
];

const cxCommunicationTextData = {
  id: "1",
  title: "",
  description: `<p>Backed by the vendor, supported by us <br>
  600,000+ customers globally<p>`,
};

export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <ServiceHeader data={cxCommunicationBannerData} />
      <div style={{ marginTop: "40px" }}>
        {cxCommunicationHeaderData.textSection.map((textSection) => (
          <TextSection key={textSection.id} {...textSection} />
        ))}
      </div>
      {cxCommunicationFooterData.map((data) => (
        <FooterData key={data?.id} data={data} />
      ))}
      <div style={{ marginTop: "24px" }}>
        <TextSection {...cxCommunicationTextData} />
      </div>
      <WorkTogether />
    </main>
  );
}
