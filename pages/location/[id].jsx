import Heading from "@/components/common/Heading";
import { heroBtnData } from "@/components/common/Helper";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import Accomodation from "@/components/editions/Accomodation";
import CardSlider from "@/components/editions/CardSlider";
import GuestGallery from "@/components/editions/GuestGallery";
import HeroBtn from "@/components/editions/HeroBtn";
import HighLights from "@/components/editions/HighLights";
import ProfileMeet from "@/components/editions/ProfileMeet";
import ProgressCircle from "@/components/editions/ProgressCircle";
import WhatIncluded from "@/components/editions/WhatIncluded";
import React from "react";

const Editions = () => {
  return (
    <Layout>
      <PageSEO title="Location" />
      <div className="w-full bg-center bg-cover bg-[url('/img/news-bg-2.png')] sm:bg-[url('/img/news-bg.png')] h-[382px] sm:h-[800px] max-sm:mt-[7px] max-sm:px-4">
        <div className="flex gap-2 items-center py-2 px-1 sm:hidden">
          {heroBtnData.map((item, index) => (
            <HeroBtn item={item} value={index} key={index} />
          ))}
        </div>
      </div>
      <div className="px-2.5 py-8 hidden sm:block">
        <Heading heading="Antigua, Guatemala" />
      </div>
      <div className="sm:max-w-[710px] w-full mx-auto max-xl:px-4 hidden sm:block">
        <Subheading
          paragraph="Really lean into how we plan everything and curate this amazing experience with them. 
Maybe something about trusted by 700+ alumni?"
        />
      </div>
      <div className="block sm:hidden px-2.5 pt-2 pb-4">
        <p className="text-center text-[#313131] font-Montserrat text-base font-extrabold leading-normal">
          Nestled by four volcanoes lies Antigua, Guatemala - a city erupting
          with vibrant culture, tasty cuisine and endless adventure.
        </p>
      </div>
      <ProgressCircle />
      <WhatIncluded />
      <ProfileMeet />
      <HighLights />
      <Accomodation />
      <div className="mt-[85px]">
        <GuestGallery />
      </div>
      <CardSlider />
    </Layout>
  );
};

export default Editions;
