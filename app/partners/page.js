"use client";
import Collaboration from "../components/partners/Collaboration";
// import Testimonials from "../components/partners/Testimonials";
import ValuedClients from "../components/partners/ValuedClients";
import WorkTogether from "../components/common/WorkTogether";

export default function page() {
  return (
    <main className="body-wrapper">
      <Collaboration />
      {/* <Testimonials /> */}
      <ValuedClients />
      <WorkTogether />
    </main>
  );
}
