import React from "react";
import Heading from "../common/Heading";
import FeaturedEditionSectionSlider from "../home/FeaturedEditionSectionSlider";

const OurUniqueDestinations = ({ locations }) => {
  return (
    <section className="w-full bg-noma px-4 pb-12">
      <div className="w-full pt-6 sm:pt-[48px] pb-1 sm:pb-[18px] px-1 sm:px-2.5">
        <div className="">
          <Heading heading="Our best Selling Destinations " />
        </div>
      </div>
      <FeaturedEditionSectionSlider locations={locations} />
    </section>
  );
};

export default OurUniqueDestinations;
