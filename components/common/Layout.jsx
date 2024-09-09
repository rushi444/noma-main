import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { GoogleTagManager } from '@next/third-parties/google'

const Layout = ({ children }) => {
  return (
    <>
    <GoogleTagManager gtmId="GTM-WRZZGKJ" />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
