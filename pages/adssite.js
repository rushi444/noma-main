import AdsSitehero from "@/components/ads-site/AdsSitehero";
import Carmellacard from "@/components/ads-site/Carmellacard";
import DigitalFreedom from "@/components/ads-site/DigitalFreedom";
import Embrence from "@/components/ads-site/Embrence";
import OurUniqueDestinations from "@/components/ads-site/OurUniqueDestinations";
import WhatWeOffer from "@/components/ads-site/WhatWeOffer";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import React from "react";

const AdsSite = () => {
  return (
    <Layout>
      <PageSEO title="Ads Site" />
      <main className="mb-20">
        <AdsSitehero
          adsheading="travel the world with our digital nomad community"
          adstext="Make the world your office.Bring your 9 to 5. We'll handle the rest."
          join="JOIN NOW"
        />
        <WhatWeOffer />
        <DigitalFreedom />
        <Embrence />
        <OurUniqueDestinations />
        <Carmellacard />
      </main>
    </Layout>
  );
};

export default AdsSite;
