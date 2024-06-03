import React from "react";

const Subheading = ({ paragraph, width }) => {
  return (
    <div className="px-4 sm:mt-2 sm:mb-8">
      <div style={{ maxWidth: width }} className={`  w-full mx-auto`}>
        <p className="pt-2  px-1 text-carbon-Black text-center font-Montserrat not-italic font-normal leading-normal">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Subheading;
