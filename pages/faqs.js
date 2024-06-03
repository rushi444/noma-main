import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import FaqsWrapper from "@/components/home/faqs-expand/FaqsWrapper";

const FaqsExpand = () => {
  return (
    <Layout>
      <PageSEO title="Noma - FAQS expand" />
      <HeroImage bg='url("/img/faq-expand-cover-bg.png")' />
      <div className="mb-4 mt-6">
        <h1 className="heading">FAQs The Basics</h1>
      </div>
      <FaqsWrapper />
    </Layout>
  );
};

export default FaqsExpand;
