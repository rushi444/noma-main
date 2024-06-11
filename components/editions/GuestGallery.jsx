import React from "react";
import GuestGallerySlider from "./GuestGallerySlider";
import NewsHeading from "./NewsHeading";

const GuestGallery = ({guestGallery}) => {
  return (
    <div className="bg-[#BBE4D7] w-full px-4 xl:px-0">
      <div className="px-2.5 py-4 sm:py-8">
        <NewsHeading heading="Guest Gallery" />
      </div>
      <GuestGallerySlider guestGallery={guestGallery}/>
    </div>
  );
};

export default GuestGallery;
