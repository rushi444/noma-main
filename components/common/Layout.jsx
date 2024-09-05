import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { GoogleTagManager } from "@next/third-parties/google";
import ContactUsPopUp from "./pop-ups/ContactUsPopUp";
import { useState, useEffect } from "react";

const Layout = ({ children, isPopUpOpenPage }) => {
  const [isPopUpOpened, setisPopUpOpened] = useState(false);
  const handleButtonClick = () => {
    setisPopUpOpened((prev) => !prev);
  };

  useEffect(() => {
    if (isPopUpOpenPage) {
      setisPopUpOpened(true);
    }
  }, [isPopUpOpenPage]);
  return (
    <>
      <ContactUsPopUp onClick={handleButtonClick} isOpened={isPopUpOpened} />
      <GoogleTagManager gtmId="GTM-WRZZGKJ" />
      <Navbar onClickBookCall={handleButtonClick} />
      {children}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
