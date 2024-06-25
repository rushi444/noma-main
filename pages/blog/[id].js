import BlogOpenHero from "@/components/blogdetail/BlogOpenHero";
import BlogOpenSection from "@/components/blogdetail/BlogOpenSection";
import OpenBlogInterested from "@/components/blogdetail/OpenBlogInterested";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { getBlogById } from "@/lib/api";
import React from "react";

export const getServerSideProps = async ({params}) => {
  const blog = await getBlogById({ blogId: params.id });
  return {
    props: {
      blog,
    },
  };
}

const Blog = ({blog}) => {
  return (
    <Layout>
      <PageSEO title="Blogs" />
      <BlogOpenHero />
      <BlogOpenSection blog={blog?.blog}/>
      <OpenBlogInterested />
    </Layout>
  );
};

export default Blog;
