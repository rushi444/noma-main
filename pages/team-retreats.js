import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ReadOurReviews from "@/components/home/ReadOurReviews";
import BasicFaqs from "@/components/team-retreats/BasicFaqs";
import SuggestedLocations from "@/components/team-retreats/SuggestedLocations";
import Teamhero from "@/components/team-retreats/Teamhero";
import WhatToExpect from "@/components/team-retreats/WhatToExpect";
import WhyNoma from "@/components/team-retreats/WhyNoma";

const TeamRetreats = () => {
  return (
    <Layout>
      <PageSEO title="Team Retreats" />
      <main className="mb-28">
        <Teamhero
          heading="Team Retreats"
          text="Give your team a break and let us shoulder the burden of planning a memorable and inspiring corporate getaway"
          btn="REQUEST A QUOTE"
        />
        <WhatToExpect />
        <WhyNoma />
        <SuggestedLocations />
        <section className="mt-14">
          <ReadOurReviews />
        </section>
        <BasicFaqs />
      </main>
    </Layout>
  );
};

export default TeamRetreats;
