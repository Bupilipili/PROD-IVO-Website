import Footer from "../components/common/Footer";
import Heading from "../components/common/Heading";
import TextSection from "../components/solutions/TextSection";

const data = [
  {
    id: "1",
    title: "",
    description: `<p>IVO Solutions’ top management is committed to ensuring the <strong>confidentiality, integrity, and availability</strong> of its information assets. The organization shall establish, implement, maintain, and continually improve an <strong>Information Security Management System (ISMS)</strong> to protect information assets against all internal and external threats.</p><br />

    <p>The Information Security Management System at IVO Solutions aligns with the principles and requirements of the ISO/IEC 27001:2022 Information Security Management Standard and applicable legal, regulatory, and contractual obligations.</p><br />

    <p><strong>Information Security Objectives</strong></p>
    <p>IVO Solutions has established the following major information security objectives:</p>
    <ol>
      <li><strong>Ensure availability, confidentiality, and integrity</strong> of all business-critical ICT services, achieving <strong>99.9% service uptime</strong> and <strong>zero critical data breaches throughout the year</strong>.</li>
      <li><strong>Embed security-by-design principles in 99.9% of new solutions and services</strong>, validated through <strong>pre-deployment security assessments</strong>.</li>
      <li><strong>Maintain full compliance</strong> with applicable regulations, contractual requirements, and <strong>ISO/IEC 27001:2022 controls</strong>, with <strong>zero regulatory penalties</strong>.</li>
      <li><strong>Strengthen security awareness and competence</strong> across the organization.</li>
      <li><strong>Improve vulnerability management</strong> by reducing security vulnerabilities in systems.</li>
    </ol><br />

    <p>IVO Solutions is committed to effectively managing information security risks and protecting all organizational assets. Appropriate controls and processes shall be implemented through a structured information security program to prevent breaches of confidentiality, compromise of integrity, or disruption to the availability of information and ICT services.</p><br />

    <p>IVO Solutions is committed to the <strong>continual improvement of its Information Security Management System (ISMS)</strong> to ensure that information assets remain protected and that security controls remain effective in addressing evolving cyber threats.</p><br />

    <p>This policy applies to <strong>all employees, contractors, partners, and third parties</strong> who access or manage IVO Solutions information assets.</p><br />

    <p><strong>Approved by:</strong><br />Head of Operations<br />Remigius Hyera</p>`,
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
