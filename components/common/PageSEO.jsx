import Head from "next/head";
import React from "react";

const PageSEO = ({ title }) => {
  const maintitle = `NOMA — ${title}`;
  return (
    <>
      {title && (
        <Head>
          <title>{maintitle}</title>
          <meta name="title" content={`NOMA — ${title}`} />
          <meta name="description" content="" />
          <meta name="keywords" content=" " />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content={` NOMA — ${title}`} />
          <meta property="og:description" content="" />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="" />
          <meta property="twitter:url" content="" />
          <meta property="twitter:title" content={`NOMA — ${title}`} />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content="" />
        </Head>
      )}
    </>
  );
};

export default PageSEO;
