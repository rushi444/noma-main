import React, { useState } from "react";
import FaqsList from "./FaqsList";

const FaqsWrapper = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleToggleFaq = (index) => {
    setOpenFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-10 max-w-[800px] mx-auto pb-[150px] px-4">
      <div className="py-12">
        <div className="h-full">
          <FaqsList openFaq={openFaq} handleToggleFaq={handleToggleFaq} />
        </div>
      </div>
    </div>
  );
};

export default FaqsWrapper;
