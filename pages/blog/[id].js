import BlogOpenHero from "@/components/blogdetail/BlogOpenHero";
import BlogOpenSection from "@/components/blogdetail/BlogOpenSection";
import OpenBlogInterested from "@/components/blogdetail/OpenBlogInterested";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import React from "react";

const Blog = () => {
  return (
    <Layout>
      <PageSEO title="Blogs" />
      <BlogOpenHero />
      <BlogOpenSection />
      <OpenBlogInterested />
    </Layout>
  );
};

export default Blog;
