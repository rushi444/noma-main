import CommonButton from "@/components/common/CommonButton";
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
      <div className="mt-11 mb-8 sm:mb-0">
        <Subheading
          width="800px"
          paragraph={`Noma Collective not only brings you the world, but a real community to see it with. Above all else, we recognize that it’s the people who make the experience. Each Edition brings together a unique and diverse community who are united through values of openness, compassion and collaboration. We create a safe space for creative collaboration where you and your community can thrive.`}
        />
      </div>
      <Basics faqs={faq} />
      <div className="mb-24">
        <CommonButton text="BOOK YOUR CALL" />
      </div>
    </Layout>
  );
};

export default HowItWork;
