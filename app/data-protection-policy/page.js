import Footer from "../components/common/Footer";
import Heading from "../components/common/Heading";
import TextSection from "../components/solutions/TextSection";

const data = [
  {
    id: "1",
    title: "",
    description: `<p>IVO Solutions Ltd and its affiliates may need to gather and use certain information about individuals it comes into contact with.</p><br />

    <p>This policy describes how personal data must be collected, handled, and stored in accordance with the company’s data protection standards and in accordance with the law.</p><br />
    
    <p>This data protection policy ensures that IVO Solutions Ltd:</p>
    <ul><li>Complies with data protection law and follows good practice.</li>
    <li>Protects the rights of staff, customers, and partners.</li>
    <li>Is open about how it stores and processes individuals’ data.</li>
    <li>Protects itself from risks of a data breach.</li></ul>`,
  },
  {
    id: "2",
    title: "Data Protection Principles",
    description: `<p>This data protection policy is guided by the following principles:<p>
    <li>Fair and lawful process of data</li>
    <li>Specific and lawful use</li>
    <li>Adequacy, relevancy, and reasonability</li>
    <li>Accuracy and updated.</li>
    <li>Sufficient and appropriate protection</li>
    <li>Strictly non sharing unless required by law.</li>`,
  },
  {
    id: "3",
    title: "Scope of the policy",
    description: `<p>The policy applies to the Company’s:</p>
    <li>Headquarters</li>
    <li>All branches</li>
    <li>All staff and volunteers</li>
    <li>All contractors, suppliers and authorized personnel representing the company.</li>`,
  },
  {
    id: "4",
    title: "Integrity of data protection",
    description: `<p>Everyone who works for the company is duty bound to collect, handle and store data appropriately. In ensuring integrity of and data protection, the company management:</p>
    <li>Reviews all data protection procedures and related policies from time to time.</li>
    <li>Offers data protection trainings to its staff.</li>
    <li>Handles data access requests from third parties.</li>
    <li>Controls how the authorized persons access and handle sensitive data.</li>
    <li>Ensures all systems, services and equipment used for storing data meet the acceptable security standards.</li>
    <li>Ensures constant checks and scans to ensure security functions are working properly.</li>
    <li>Monitors its staff ensuring compliance with data protection principles.</li>`,
  },
  {
    id: "5",
    title: "Data storage guidelines",
    description: `<li>All data should be handled with ultimate care and be accessible only when needed for particular use and purpose.</li>
    <li>Data should be accessed formally and authorized with credentials and strong passwords.</li>
    <li>Data should regularly be reviewed and updated.</li>
    <li>Line managers should ensure that the person accessing and using protected data is well versed with the sensitivity of the data and security guidelines.</li>`,
  },
  {
    id: "6",
    title: "Data use",
    description: `<li>When working with data, employees must ensure that the screens of their computers are always locked when left unattended.</li>
    <li>Data should not be shared informally, sent by email without prior authorization.</li>
    <li>Data must be encrypted before being transferred electronically.</li>
    <li>Data must not be sent across the borders of the United Republic of Tanzania.</li>
    <li>Employees should not save personal information to their computers. They should always access and update the central copy of any data.</li>`,
  },
  {
    id: "7",
    title: "Subject access requests",
    description: `<p>All subjects of personal data held by the company are entitled to:</p>
    <li>Ask what information the company holds about them and for what reasons.</li>
    <li>Ask how to gain access to</li>
    <li>Be informed on how it is kept up to date.</li>
    <li>Be informed how the company meets its data protection obligations.</li>
    <p>Data access requests can only be made by email, addressed to the data controller via service@ivosolutions.co.tz Before
    responding to data access requests, the company shall must verify the identity of the person making the request.</p>`,
  },
  {
    id: "8",
    title: "Providing information",
    description: `<p>The company aims to ensure that individuals are aware that their data is being processed, and that they
    understand:</p>
    <li>How data is being used</li>
    <li>How to exercise their rights</li>`,
  },
];

export default function page() {
  return (
    <main className='body-wrapper'>
      <div className='main-text'>
        <Heading>
          Data <span>Protection</span> Policy
        </Heading>
      </div>
      {data.map((item) => (
        <TextSection key={item.id} {...item} />
      ))}
      <Footer />
    </main>
  );
}
