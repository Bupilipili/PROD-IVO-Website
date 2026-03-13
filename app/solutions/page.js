"use client";
import SolutionSection from "../components/solutions/SolutionSection";
import WorkTogether from "../components/common/WorkTogether";
import BestService from "../components/common/BestService";
import ClientFeedback from "../components/common/ClientFeedback";
import StayUpdated from "../components/common/StayUpdated";
import PageTitleSection from "../components/common/PageTitleSection";
import { solutionsData } from "../../data/solutionsHome";

export default function SolutionsPage() {
  return (
    <main className="body-wrapper">
      <PageTitleSection
        subtitle="SOLUTIONS"
        title={
          <>
            Diverse <span>Solutions</span> for Your Needs
          </>
        }
        subtext="Harness the Power of Cloud, Strengthen Your Infrastructure, Optimize Network Performance, and Secure Your Future with IVO's Comprehensive Solutions"
        titleWidth={635}
      />

      <BestService
        description="IVO Solutions provides comprehensive technology solutions tailored to your business needs. From cloud infrastructure and cybersecurity to network optimization and digital banking, we deliver enterprise-grade solutions backed by industry certifications and global partnerships."
      />

      {solutionsData.map((data, index) => (
        <SolutionSection key={data.id} {...data} reverse={index % 2 !== 0} />
      ))}

      <ClientFeedback />
      <StayUpdated />
      <WorkTogether />
    </main>
  );
}
