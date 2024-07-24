import React, { useState } from "react";
import TheBasicFaqs from "./TheBasicFaqs";
import { BasicFaqsMapData } from "../common/Helper";

const BasicFaqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <section className="bg-[#F4F1E6]">
      <article className="max-w-[832px] w-full px-4 mx-auto pb-[43px] pt-[54px]">
        <h1 className="text-[#313131] font-sergio-trendy text-[26px] md:text-[36px] lg:text-5xl font-normal leading-normal capitalize text-center">
          FAQs The Basics
        </h1>
        <div className="lg:mt-[104px] mt-4 sm:mt-8 md:mt-12 flex flex-col gap-4">
          {" "}
          {BasicFaqsMapData.map((item, index) => (
            <TheBasicFaqs
              value={index}
              item={item}
              key={index}
              height={openAccordion === index ? "auto" : 0}
              toggleAccordion={toggleAccordion}
              isOpen={openAccordion === index}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default BasicFaqs;
