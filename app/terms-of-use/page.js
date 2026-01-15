import Footer from "../components/common/Footer";
import Heading from "../components/common/Heading";
import TextSection from "../components/solutions/TextSection";
const data = [
  {
    id: "1",
    title: "Background",
    description: `<p>This website is operated by IVO Solutions. The terms “we”, “use” and “our” refer to IVO Solutions. The use of our website is subject to the following terms and conditions of us, as amended from time to time (the “Terms”). The Terms are to be read together by you with any terms, conditions or disclaimers provided on the pages of our website. Please read the Terms carefully. The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and /or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website or use any of our website’s services.</p>`,
  },
  {
    id: "2",
    title: "Use of our Website",
    description: `<p>You agree to use our website for legitimate purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of intellectual property rights or privacy law. By agreeing to the Terms, you represent and warrant that you are at the majority age and are legally capable of entering into a binding contract.</p><br /><p>You agree to not use our website to conduct any activity that would constitute a civil or criminal offence or violation of any law. You agree not to attempt to interfere with our website network or security features or to gain unauthorized access to our systems.</p><br /><p>You agree to provide us with accurate personal information, such as your email address, mailing address and other contact information in case such information is required for doing any business with us. You authorize us to collect and use this information to contact you in accordance with our Privacy Policy.</p>`,
  },
  {
    id: "3",
    title: "General Conditions",
    description: `<p>We reserve the right to refuse the service to anyone, at any time, for any reason. We reserve the right to make any modifications to the website, including terminating, changing, suspending, or discontinuing any aspect of the website at any time, without notice. We may impose additional rules or limits on the use of our website. You agree to read the Terms regularly and your continued access or use of our website will mean that you agree to any changes.</p><br /><p>You agree that we will not be liable to you or any third party for any modification, suspension, or discontinuance of our website for any service, content, feature, or product offered through our website.</p>`,
  },
  {
    id: "4",
    title: "Products or Services",
    description: `<p>All services through our website are subject to service availability. We may, in our sole discretion, limit or cancel the service quality offered on our website or limit the sales of our services or products to any person or jurisdiction.</p>`,
  },
  {
    id: "5",
    title: "Links to Third Party Websites",
    description: `<p>Links from or to websites outside our website are meant for convenience only. We do not review, endorse, approve, or control, and are not responsible for any sites linked from or to our website, the content of those sites, the third party named therein, or their products and services. Linking to any other site is at your sole risk and we will not be responsible for or liable for any damages in connection with linking. Links to downloadable software sites are for convenience only and we are not responsible for or liable for any difficulties or consequences associated with downloading the software. Use of any downloaded software is governed by the terms of the license agreement, if any, which accompanies or is provided by the software.</p>`,
  },
  {
    id: "6",
    title: "Use Comments, Feedback, and Other Submissions",
    description: `<p>You acknowledge that you are responsible for the information, profiles, opinions, messages, comments, and any other content (the “Content”) that you post, distribute, or share on or through our website or services available in connection with our website. You further acknowledge that you have full responsibility for the Content, including but not limited to, with respect to its legality, and its trademark, copyright, and other intellectual property ownership.</p><br /><p>You agree that any Content submitted by you in response to any request by us for specific submission may be edited, adapted, modified, recreated, published, or distributed by us. You further agree that we are under no obligation to maintain any Content in confidence, to pay compensation for any Content or to respond to any Content.</p><br /><p>You agree that you will not post, distribute, or share any Content on our website that is protected by copyright, trademark, patent, or any other proprietary right without the express consent of the owner of such proprietary right. You further agree that your Content will not be unlawful, abusive, or obscene nor will it contain any malware or computer virus that could affect our website’s operations. You will be solely liable for any Content that you make and its accuracy. We have no responsibility and assume no liability for any Content posted by you or any third party.</p><br /><p>We reserve the right to terminate your ability to post on our website and to remove and/or delete any Content that we deem objectionable. You consent to such removal and/or deletion and waive any claims against us for the removal or deletion of your Content.</p>`,
  },
  {
    id: "7",
    title: "Your Personal Information",
    description: `<p>Please see our Privacy Policy to learn about how we collect, use, and share your personal information.</p>`,
  },
  {
    id: "8",
    title: "Error and Omissions; Disclaimer and Limitation of Liability",
    description: `<p>Please see our Disclaimer and Limitation of Liability</p>`,
  },
  {
    id: "9",
    title: "Indemnification",
    description: `<p>You agree to defend and indemnify us, and hold us and our affiliates harmless, and our and their respective directors, officers, agents, contractors, and employees against any losses, liabilities, claims, express (including legal fees) in any way arising from, related to or in connection with your use of our website, your violation of the Terms, or the posting or transmission of any materials on or through the website by you, including but not limited to, any third party claims that any information or materials provided by you infringe upon any third party proprietary rights.</p>`,
  },
  {
    id: "10",
    title: "Entire Agreement",
    description: `<p>The Terms and any documents expressly referred to in them represent the entire agreement between you and us in relation to the subject matter of the Terms and supersedes any prior agreement, understanding or arrangement between you and us, whether oral or written. Both you and we acknowledge that, in entering into these Terms, neither you nor we have relied on any representation, undertaking or promise given by the other or implied from anything said or written between you and us prior to such Terms, except as expressly provided in the Terms.</p>`,
  },
  {
    id: "11",
    title: "Waiver",
    description: `<p>Our failure to exercise or enforce any right or provision of the Terms will not constitute a waiver of such a right or remedy. A waiver by us of any default will not constitute a waiver of any subsequent default. No waiver by us is effective unless it is communicated to you in writing.</p>`,
  },
  {
    id: "12",
    title: "Headings",
    description: `<p>Any headings and titles herein are for convenience only.</p>`,
  },
  {
    id: "13",
    title: "Severability",
    description: `<p>If any of the provisions of the Terms are determined by any competent authority to be invalid, unlawful, or unenforceable, such provision shall to that extent be severed from the remaining Terms which will continue to be valid and enforceable to the fullest extent permitted by law.</p>`,
  },
  {
    id: "14",
    title: "Governing Law",
    description: `<p>All disputes arising out of or relating to the Terms, the Privacy Policy, use of our website, or our services offered on our website will be resolved in accordance with the laws of the United Republic of Tanzania without regard to its conflict of law rules. Any disputes, actions or proceedings relating to the Terms or your access to or use of our website must be brought before the court of the United Republic of Tanzania in the city of Dar es Salaam. you irrevocably consent to the exclusive jurisdiction and venue of the courts in the United Republic of Tanzania sitting in Dar es Salaam.</p>`,
  },
  {
    id: "15",
    title: "Questions or Concerns",
    description: `<p>Please send all questions, comments, and feedback to us through [service@ivosolutions.co.tz]</p>`,
  },
];

export default function page() {
  return (
    <main className='body-wrapper'>
      <div className='main-text'>
        <Heading>
          Term of <span>Use</span>
        </Heading>
      </div>
      {data.map((item) => (
        <TextSection key={item.id} {...item} />
      ))}
      <Footer />
    </main>
  );
}
