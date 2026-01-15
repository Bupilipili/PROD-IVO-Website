import InfoSection from "../components/about-us/InfoSection";
import Principles from "../components/about-us/Principles";
import PageTitleSection from "../components/common/PageTitleSection";
import WorkTogether from "../components/common/WorkTogether";
import Footer from "../components/common/Footer";

export default function page() {
  return (
    <main className='body-wrapper'>
      <PageTitleSection
        // subtitle="ABOUT"
        title={
          <>
            We Are Increasing Business Success With <span>Technology</span>
          </>
        }
        subtext='The people at Ivo Solutions are the main driver of its growth, and are committed to providing speedy and reliable technical support to customers through a team of certified engineers and administrators.'
        titleWidth={937}
      />
      <InfoSection />
      <Principles />
      <WorkTogether />
      <Footer />
    </main>
  );
}
