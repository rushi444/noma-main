import React from "react";

const NewsHeading = ({ heading }) => {
  return (
    <>
      <h1 className="text-[#313131] text-center font-Montserrat text-2xl sm:text-[32px] font-extrabold leading-normal">
        {heading}
      </h1>
    </>
  );
};

export default NewsHeading;
