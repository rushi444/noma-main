import React from "react";
import { TimeZone, featuredSliderCardsData } from "../common/Helper";
import FeaturedEditionCard from "./FeaturedEditionCard";
import Link from "next/link";

const TimeZoneSwiper = () => {
  return (
    <>
      <div className=" gap-5 gap-y-8 mb-[140px] sm:mt-8 xl:gap-[68px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3   max-w-[1120px] w-full mx-auto px-4 xl:px-0">
        {featuredSliderCardsData.map((item, index) => (
          <Link key={index} href={`/location/${index}`}>
            <FeaturedEditionCard item={item} value={index} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TimeZoneSwiper;
