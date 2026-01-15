import WorkTogether from "@/app/components/common/WorkTogether";
import BackButton from "@/app/components/common/BackButton";
import SolutionsHeader from "@/app/components/solutions/SolutionsHeader";
import TextSection from "@/app/components/solutions/TextSection";
import { solutionsData } from "@/data/solutions";

export default function page() {
  return (
    <main className='body-wrapper'>
      <BackButton backUrl='/solutions' />
      <SolutionsHeader title={solutionsData[0].title} />
      {solutionsData[0].textSections.map((textSection) => (
        <TextSection key={textSection.id} {...textSection} />
      ))}
      <WorkTogether />
    </main>
  );
}
