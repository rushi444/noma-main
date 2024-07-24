import React from "react";
import Heading from "../common/Heading";
import OurUniqueDestinationsSlider from "./OurUniqueDestinationsSlider";

const OurUniqueDestinations = ({ locations }) => {
  return (
    <section className="w-full bg-pastel-yellow px-4 pb-12">
      <div className="w-full pt-6 sm:pt-[48px] pb-1 sm:pb-[18px] px-1 sm:px-2.5">
        <div className="">
          <Heading heading="Our unique destinations " />
        </div>
      </div>
      <OurUniqueDestinationsSlider locations={locations} />
    </section>
  );
};

export default OurUniqueDestinations;
