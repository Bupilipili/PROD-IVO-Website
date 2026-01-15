import Footer from "../components/common/Footer";
import Heading from "../components/common/Heading";
import TextSection from "../components/solutions/TextSection";

const data = [
  {
    id: "1",
    title: "",
    description: `<p>IVO Solutions top management is committed to the confidentiality, integrity and availability of her information assets and shall implement measures through the establishment,implementation, maintenance and continual improvement of an information security program to protect the organization’s information assets against all threats.</p><br />

    <p>IVO Solutions is committed to managing information risks and the protection of all organizational assets and shall implement measures through an information security program to protect against breaches of confidentiality, failures of integrity or interruptions to the availability of its information assets.</p><br />
    
    <p>IVO Solutions is committed to the continual improvement of its information security program and shall comply with all applicable legal, regulatory, and contractual requirements related to information security in her services and operations.</p><br />
    
    <p>All users and custodians of information assets owned by or entrusted to IVO Solutions shall comply with this policy and exercise a duty of care in relation to the storage, processing, and transmission of the organization’s information and information systems.</p><br />
    
    <p>Non-compliance with this policy could pose significant business risk to IVO Solutions. Therefore, compliance with this policy is mandatory.</p><br />
    
    <p>If any employee or third-party personnel is aware of an information security incident, then they must report it through the designated email <a href='mailto:helpdesk@ivosolutions.co.tz' style="color:#1D73E8; text-decoration:none;">helpdesk@ivosolutions.co.tz</a> for incident reporting.</p>`,
  },
];

export default function page() {
  return (
    <main className='body-wrapper'>
      <div className='main-text'>
        <Heading>
          Information <span>Security</span> Policy
        </Heading>
      </div>
      {data.map((item) => (
        <TextSection key={item.id} {...item} />
      ))}
      <Footer />
    </main>
  );
}
