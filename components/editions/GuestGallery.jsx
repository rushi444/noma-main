import React from "react";
import GuestGallerySlider from "./GuestGallerySlider";
import NewsHeading from "./NewsHeading";

const GuestGallery = () => {
  return (
    <div className="bg-[#BBE4D7] w-full px-4 xl:px-0">
      <div className="px-2.5 py-4 sm:py-8">
        <NewsHeading heading="Guest gallery" />
      </div>
      <GuestGallerySlider />
    </div>
  );
};

export default GuestGallery;
