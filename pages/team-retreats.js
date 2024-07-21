import Layout from "@/components/common/Layout";
import ReadOurReviews from "@/components/home/ReadOurReviews";
import BasicFaqs from "@/components/Team-retreats/BasicFaqs";
import SuggestedLocations from "@/components/Team-retreats/SuggestedLocations";
import Teamhero from "@/components/Team-retreats/Teamhero";
import WhatToExpect from "@/components/Team-retreats/WhatToExpect";
import WhyNoma from "@/components/Team-retreats/WhyNoma";
import React from "react";

const TeamRetreats = () => {
  return (
    <Layout>
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
          {" "}
          <ReadOurReviews />
        </section>
        <BasicFaqs />
      </main>
    </Layout>
  );
};

export default TeamRetreats;
