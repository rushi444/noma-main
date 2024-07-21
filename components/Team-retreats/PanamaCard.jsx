import React from "react";
import PanamaSwiper from "./PanamaSwiper";

const PanamaCard = () => {
  return (
    <article className="max-w-[328px] w-full">
      <div className="flex gap-2 items-center py-2 px-1">
        <div className="w-[162px] h-[33px] bg-[#BBE4D7] rounded-[31px]  flex justify-center items-center drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)]">
          <p className="text-[#313131] font-Montserrat font-normal text-center text-[14px]">
            Time zone: (GMT+3)
          </p>
        </div>
        <div className="w-[100px] h-[33px] bg-[#F4F1E6] rounded-[31px] flex justify-center items-center  drop-shadow-[0px_2px_2px_rgba(0,0,0,0.10)]">
          <p className="text-[#313131] font-Montserrat font-normal text-center text-[14px]">
            30°C | 86°F
          </p>
        </div>
      </div>
      <div>
        <PanamaSwiper />
      </div>
      <div className="pt-1 pb-[17px] px-4 w-full bg-[#BBE4D7] rounded-b-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
        <p className=" font-Montserrat font-extrabold text-[18px] sm:text-[24px] text-[#313131]">
          Bocas Del Toro,
          <br /> Panama
        </p>
      </div>
    </article>
  );
};

export default PanamaCard;
