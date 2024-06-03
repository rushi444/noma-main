import { faqList } from "@/components/common/Helper";
import { SelectDownArrow } from "@/components/common/Icons";
import React from "react";
import AnimateHeight from "react-animate-height";

const FaqsList = ({ openFaq, handleToggleFaq }) => {
  return (
    <div>
      {faqList.map((faq, index) => (
        <div key={index} className="flex flex-col mb-6">
          <div onClick={() => handleToggleFaq(index)} className="faq-btn-style">
            <h3 className="text-carbon-Black font-Montserrat text-sm sm:text-base">
              {faq.question}
            </h3>
            <span className="bg-pastel-yellow px-4 sm:px-8 py-5 sm:py-4 rounded-r-full">
              <SelectDownArrow />
            </span>
          </div>
          <AnimateHeight
            duration={300}
            height={openFaq === index ? "auto" : 0}
            className="transition-height custom-shadow"
          >
            <div
              className={`flex px-5 sm:px-8 pb-4 pt-12  relative -mt-7  rounded-t-[57px] ${
                openFaq === index ? "custom-shadow" : ""
              }`}
            >
              {faq.answer}
            </div>
          </AnimateHeight>
        </div>
      ))}
    </div>
  );
};

export default FaqsList;
