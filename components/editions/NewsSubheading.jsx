import React from "react";

const NewsSubheading = ({ subheading }) => {
  return (
    <>
      <p className="text-[#313131] text-center text-sm sm:text-base font-normal leading-normal font-Montserrat">
        {subheading}
      </p>
    </>
  );
};

export default NewsSubheading;
