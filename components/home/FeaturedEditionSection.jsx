import React from "react";
import Heading from "../common/Heading";
import FeaturedEditionSectionSlider from "./FeaturedEditionSectionSlider";
import Button from "../common/CommonButton";

const FeaturedEditionSection = ({locations}) => {
  return (
    <div className="w-full px-4 pb-8">
      <div className="w-full py-6 sm:py-8 px-1 sm:px-2.5">
        <div className="hidden sm:block">
          <Heading heading="FEATURED" />
        </div>
        <div>
          <p className="text-center text-black font-Montserrat text-2xl font-extrabold leading-normal block sm:hidden">
            Featured
          </p>
        </div>
      </div>
      <FeaturedEditionSectionSlider locations={locations}/>
      <div className="block sm:hidden">
        <Button text="SEE ALL TRIPS" link='/location'/>
      </div>
    </div>
  );
};

export default FeaturedEditionSection;
