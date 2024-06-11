import Image from "next/image";
import React from "react";
import { highLightsBg } from "../utils/Functions";

const HighLightsCard = ({ item, value }) => {
  const { BgColor } = highLightsBg({ value });

  return (
    <div
      className={`w-[328px] my-5 max-xl:mx-auto ${
        item?.image?.url ? "" : "invisible"
      }`}
    >
      <span
        style={{ backgroundColor: BgColor }}
        className="px-3 py-[7px] rounded-[31px] text-[#313131] text-[16px] font-Montserrat font-normal"
      >
        {item?.tag}
      </span>
      <div className="mt-2.5">
        <div className={`w-[328px]  ${item?.image?.url ? "" : "invisible"}`}>
          <Image
            src={item?.image?.url || ""}
            width={328}
            height={400}
            alt={item?.title}
            className="w-[328px] h-[328px] object-cover rounded"
          />
        </div>
        <div className="w-[308px] mt-2">
          <h2 className="text-[32px] leading-9 font-Montserrat font-extrabold text-[#313131]">
            {item?.title || ""}
          </h2>
          <p className="text-[16px] mt-2 font-Montserrat font-normal leading-5 text-[#313131]">
            {item?.description || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighLightsCard;
