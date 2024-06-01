import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ConnectWithUs from "@/components/contact-us/ConnectWithUs";
import SocialConnect from "@/components/contact-us/SocialConnect";
import FaqsWrapper from "@/components/home/faqs-expand/FaqsWrapper";
import React from "react";

const FaqsExpand = () => {
  return (
    <Layout>
      <PageSEO title="Noma - Contact us" />
      <HeroImage bg='url("/img/faq-expand-cover-bg.png")' />
      <div className="mb-4 mt-6">
        <Heading heading="FAQs  The Basics" />
      </div>
      <FaqsWrapper />
    </Layout>
  );
};

export default FaqsExpand;
