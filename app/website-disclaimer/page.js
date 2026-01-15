import Footer from "../components/common/Footer";
import Heading from "../components/common/Heading";
import TextSection from "../components/solutions/TextSection";

const data = [
  {
    id: "1",
    title: "",
    description: `<p>The use of this website and services on this website are provided by the IVO Solutions LTD (the “Company”) are subject to this Disclaimer.</p><br />

    <p>The parties to this Disclaimer are IVO Solutions LTD and you, as the user of the website. The parties are referred to individually as a “Party” and collectively as “Parties”.</p><br />
    
    <p>By using this website, you assent to all terms and conditions contained herein. You further acknowledge and agree that information and/or documents provided herein are simply that, information, and shall not be considered legal, tax, brokerage, or investment advice. The information provided herein is not for financial or investment solicitation. No fiduciary relationship is created between you and the Company.</p><br />
    
    <p>IVO Solutions LTD is neither acting as attorney, certified financial planner, broker, or any other regulated advisor through your use of this website. In case you need any expert and professional assistance, please consult the appropriate legal or other certified expert.</p><br />
    
    <p>You agree that your use of the website is at your sole and exclusive risk and that any services provided by IVO Solutions LTD are on an “As Is” basis only. IVO Solutions LTD hereby expressly disclaims any and all express or implied warranties of any kind, including, but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability. IVO Solutions LTD makes no warranties that the website will meet your needs or that the website will be uninterrupted, error free, or secure. IVO Solutions LTD also makes no warranties as to the reliability of, or accuracy of, completeness, or quality of any information on the website or contained through third parties, links to the website, features in banners or advertisements.</p><br />
    
    <p>You agree that IVO Solutions LTD is not liable for any errors or omissions, loss or damage which may be caused by your use of the website, to the fullest extent permitted by law. Any damage that may occur to you, through your computer or mobile system, or as a result of loss of data from your use of the website is your sole responsibility.</p>`,
  },
];

export default function page() {
  return (
    <main className='body-wrapper'>
      <div className='main-text'>
        <Heading>
          Website <span>disclaimer</span>
        </Heading>
      </div>
      {data.map((item) => (
        <TextSection key={item.id} {...item} />
      ))}
      <Footer />
    </main>
  );
}
