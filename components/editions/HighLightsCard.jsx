import Image from "next/image";
import React from "react";
import { highLightsBg } from "../utils/Functions";

const HighLightsCard = ({ item, value }) => {
  const { BgColor } = highLightsBg({ value });

  return (
    <div className="max-w-[328px] my-5 w-full max-xl:mx-auto">
      <span
        style={{ backgroundColor: BgColor }}
        className="px-3 py-[7px] rounded-[31px] text-[#313131] text-[16px] font-Montserrat font-normal"
      >
        {item.btn}
      </span>
      <div className="mt-1.5">
        <div>
          <Image src={item.img} width={328} height={328} alt="hike img" />
        </div>
        <div className="max-w-[308px] mt-2">
          <h2 className="text-[32px] leading-9 font-Montserrat font-extrabold text-[#313131]">
            {item.title}
          </h2>
          <p className="text-[16px] mt-2 font-Montserrat font-normal leading-5 text-[#313131]">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighLightsCard;
