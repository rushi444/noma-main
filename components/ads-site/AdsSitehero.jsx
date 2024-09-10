import Image from "next/image";
import React from "react";

const AdsSite = ({ adsheading, adstext, join }) => {
  return (
    <>
      {" "}
      {/* herosection */}
      <div className="bg-[url('/img/ads_img.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col h-[450px]  sm:h-[512px] md:px-0 px-4">
        <h1 className="text-center text-2xl sm:text-[48px] font-sergio-trendy font-normal text-[#F4F1E6] capitalize leading-[105%] max-w-[850px] w-full mx-auto xl:mt-20">
          {adsheading}
        </h1>
        <p className="text-center text-base md:text-2xl text-[#F4F1E6] font-Montserrat font-bold leading-normal pt-[6px] max-w-[550px] w-full mx-auto">
          {adstext}
        </p>
      </div>
    </>
  );
};

export default AdsSite;
