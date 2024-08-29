import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ReadOurReviews from "@/components/home/ReadOurReviews";
import BasicFaqs from "@/components/Team-retreats/BasicFaqs";
import SuggestedLocations from "@/components/Team-retreats/SuggestedLocations";
import Teamhero from "@/components/Team-retreats/Teamhero";
import WhatToExpect from "@/components/Team-retreats/WhatToExpect";
import WhyNoma from "@/components/Team-retreats/WhyNoma";

const PoweredByNoma = () => {
  return (
    <Layout>
      <PageSEO title="Powered by Noma" />
      <main className="mb-28">
        <Teamhero
          heading="Powered by Noma"
          text="We specialize in curating unique and bespoke in-person retreats for online communities to meet, learn and grow together in beautiful locations around the world."
          btn="Talk To Us"
        />
        <WhatToExpect />
        <WhyNoma />
        <SuggestedLocations />
        <section className="mt-14">
          <ReadOurReviews />
        </section>
        <BasicFaqs />
        public/img/footer-img.png
      </main>
    </Layout>
  );
};

export default PoweredByNoma;
