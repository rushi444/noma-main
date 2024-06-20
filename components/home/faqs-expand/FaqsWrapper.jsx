import React, { useState } from "react";
import FaqsList from "./FaqsList";

const FaqsWrapper = ({faqs}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggleFaq = (index) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-10 max-w-[800px] mx-auto pb-[104px] sm:pb-[150px] px-4">
      <div className="pb-12 sm:py-12">
        <div className="h-full">
          <FaqsList faqs={faqs} openFaq={openFaq} handleToggleFaq={handleToggleFaq} />
        </div>
      </div>
    </div>
  );
};

export default FaqsWrapper;
