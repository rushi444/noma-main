import Image from "next/image";
import React from "react";
import { belizeChart, panamaChart } from "../common/Helper";
import Chart from "./ChartSuggested";

const PanamaCardtext = () => {
  return (
    <div className="flex flex-col gap-[17px] md:mt-10 lg:mt-[72px]">
      <p className="flex justify-center items-center text-black font-Montserrat font-normal text-center text-[16px] lg:my-3 !line-clamp-5">
        Escape to Bocas Del Toro, Panama a stunning archipelago featuring
        stunning beaches and tropical rainforests. You'll live in breathtaking
        eco-friendly domes in the heart of the tropical jungle, the perfect
        location to recharge as a team. This resort is purpose-built for nomads
        and its dedicated co-working space is designed to ensure a productive
        and motivating work environment.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-5 lg:gap-10 xl:gap-[63px] w-full">
        {belizeChart.map((item, index) => (
          <>
            <Chart
              color={item.color}
              text={item.text}
              text2={item.textb}
              img={item.img}
              parcent={item.percent}
              key={index}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default PanamaCardtext;
