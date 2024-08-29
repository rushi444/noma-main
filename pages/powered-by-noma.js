import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ReadOurReviews from "@/components/home/ReadOurReviews";
import BasicFaqs from "@/components/Powered-By-Noma/BasicFaqs";
import SuggestedLocations from "@/components/Powered-By-Noma/SuggestedLocations";
import Teamhero from "@/components/Powered-By-Noma/Teamhero";
import WhatToExpect from "@/components/Powered-By-Noma/WhatToExpect";
import WhyNoma from "@/components/Powered-By-Noma/WhyNoma";

const TeamRetreats = () => {
  return (
    <Layout>
      <PageSEO title="Powered by Noma" />
      <main className="mb-28">
        <Teamhero
          heading="Powered by Noma"
          text="Become a Noma Partner and Bring Our Trips to your audience."
          btn="Talk To Us"
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

export default PoweredByNoma;
