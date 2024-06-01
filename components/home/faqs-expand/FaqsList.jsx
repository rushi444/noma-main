import { faqList } from "@/components/common/Helper";
import { SelectDownArrow } from "@/components/common/Icons";
import React from "react";
import AnimateHeight from "react-animate-height";

const FaqsList = ({ openFaq, handleToggleFaq }) => {
  return (
    <div>
      {faqList.map((faq, index) => (
        <div key={index} className="flex flex-col mb-4">
          <div
            onClick={() => handleToggleFaq(index)}
            className="flex justify-between gap-2 items-center cursor-pointer  bg-[#ECECFD] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] pl-4 rounded-[57px] z-10 relative"
          >
            <h3 className="text-[#313131] font-Montserrat text-base ">
              {faq.question}
            </h3>
            <span className="bg-pastel-yellow px-4 sm:px-8 py-4 rounded-r-full">
              <SelectDownArrow />
            </span>
          </div>
          <AnimateHeight
            duration={300}
            height={openFaq === index ? "auto" : 0}
            className="transition-height custom-shadow"
          >
            <div
              className={`flex px-8 pb-4 pt-12  relative -mt-7  rounded-t-[57px] ${
                openFaq === index ? "custom-shadow" : ""
              }`}
            >
              <p className=" text-[#313131] font-Montserrat text-base max-w-[635px]">
                Yes, you need to have an existing part-time or full-time remote
                job to join. Noma Collective does not offer any remote work job
                opportunities.
                <span className="py-4 inline-block">
                  However, our blog and social media channels are packed with
                  resources to equip you with information about finding a remote
                  job and navigating the digital nomad lifestyle.
                </span>
                Noma Collective reserve the right to cancel any booking or
                reject any booking request if the individual is not able to work
                remotely.
              </p>
            </div>
          </AnimateHeight>
        </div>
      ))}
    </div>
  );
};

export default FaqsList;
