import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import VideoComponent from "@/components/common/Videocomponent";
import Basics from "@/components/how-it-work/Basics";
import Steps from "@/components/how-it-work/Steps";
import { getFaqs } from "@/lib/api";
import React from "react";

export const getServerSideProps = async () => {
  const faqs = await getFaqs();
  return {
    props: {
      title: "How it works",
      faqs: faqs || [],
    },
  };
};

const HowItWork = ({ faqs }) => {
  console.log({ faqs });
  const faq = faqs.faqCollection.items;
  return (
    <Layout>
      <PageSEO title="How it works" />
      <HeroImage bg="url(/img/hero-water.png)" />
      <div className="pt-8">
        <Heading heading="How do i start  it work" />
      </div>
      <Subheading
        width="730px"
        paragraph="Really lean into how we plan everything and curate this amazing experience with them. Maybe something about trusted by 700+ alumni?"
      />
      <div className="mt-8">
        <Steps />
      </div>
      <div className="mt-8">
        <VideoComponent video="/video/sample-video.mp4" />
      </div>{" "}
      <div className="mt-11 mb-8 sm:mb-0">
        <Subheading
          width="800px"
          paragraph="Something here about key community values and the vetting process (dont use this terinology) t make sure our community is super open minded and compassionate and here for the same thing basically. Not sure if we have some kind of charter for how we like to do this but maybe we make one"
        />
      </div>
      <Basics faqs={faq} />
    </Layout>
  );
};

export default HowItWork;
