"use client";
import SolutionSection from "../components/solutions/SolutionSection";
import WorkTogether from "../components/common/WorkTogether";
import PageTitleSection from "../components/common/PageTitleSection";
import { solutionsData } from "../../data/solutionsHome";

export default function page() {
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
      {solutionsData.map((data, index) => (
        <SolutionSection key={data.id} {...data} reverse={index % 2 !== 0} />
      ))}
      <WorkTogether />
    </main>
  );
}
