import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import NewsForBlog from "@/components/news/NewsForBlog";
import React from "react";

const News = () => {
  return (
    <Layout>
      <PageSEO title="News" />

      <HeroImage bg="url('/img/news-hero-bg-img.png')" />
      <NewsForBlog />
    </Layout>
  );
};

export default News;
