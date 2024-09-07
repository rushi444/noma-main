import AdsSitehero from "@/components/ads-site/AdsSitehero";
import Carmellacard from "@/components/ads-site/Carmellacard";
import DigitalFreedom from "@/components/ads-site/DigitalFreedom";
import OurUniqueDestinations from "@/components/ads-site/OurUniqueDestinations";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import React from "react";

const AdsSite = () => {
  return (
    <Layout>
      <PageSEO title="Ads Site" />
      <main className="mb-20">
        <AdsSitehero
          adsheading="Live, Work and Explore With Our Digital Nomad Community"
          adstext="Bring your job, we’ll do the rest."
        />
        <DigitalFreedom />
        <OurUniqueDestinations />
        <Carmellacard />
      </main>
    </Layout>
  );
};

export default AdsSite;
