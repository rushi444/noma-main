import React from "react";
import AnimateHeight from "react-animate-height";
import { FaqsIcons } from "../common/Icons";

const TheBasicFaqs = ({ item, value, isOpen, toggleAccordion, height }) => {
  return (
    <section className=" h-fit w-full rounded-full">
      <article
        onClick={() => toggleAccordion(value)}
        className={`cursor-pointer   `}
      >
        <button
          type="submit"
          className={`flex w-full h-14 md:h-[36px] transition duration-700 ease-in-out justify-between items-center text-start `}
        >
          <p
            className={`text-[#313131] h-full font-Montserrat text-xs sm:text-base font-bold leading-normal ${item.bg} rounded-[57px] px-4 md:px-[28px] py-[10px] w-full rounded-r-none flex items-center justify-start`}
          >
            <span>{item.title}</span>
          </p>
          <div
            className={`transform transition ease-in-out duration-700 max-w-[60px] md:max-w-[104px] h-full w-full bg-[#FFDA7F] rounded-e-full flex justify-center items-center `}
          >
            {isOpen ? (
              <div
                className={` duration-300 ease-in-out ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <FaqsIcons />{" "}
              </div>
            ) : (
              <div className={` ${isOpen ? "rotate-180" : ""}`}>
                <FaqsIcons />
              </div>
            )}
          </div>
        </button>
        <AnimateHeight duration={500} height={height}>
          <div className="overflow-hidden max-w-[1220px] w-full duration-300 -mt-4 transition-all ease-in-out text-[#313131] font-Montserrat text-xs sm:text-base font-normal leading-normal sm:pt-10 pt-6 pb-4 sm:pb-[21px] px-4 sm:px-5  rounded-[0px_0px_36px_36px] bg-[#F4F1E6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
            <div className="overflow-hidden">{item.description}</div>
          </div>
        </AnimateHeight>
      </article>
    </section>
  );
};

export default TheBasicFaqs;
