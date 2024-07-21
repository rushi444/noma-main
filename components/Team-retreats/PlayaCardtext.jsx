import Image from "next/image";
import React from "react";
import { belizeChart, playaChart } from "../common/Helper";
import Chart from "./ChartSuggested";

const PlayaCardtext = () => {
  return (
    <div className="flex flex-col gap-[17px] md:mt-10 lg:mt-[72px]">
      <p className="flex justify-center items-center text-black font-Montserrat font-normal text-center text-[16px] lg:my-3 !line-clamp-5">
        Located in the laid-back surfer town of Playa Grande, ONDA merges the
        community feel of a hostel with the luxuries of a hotel. Their dedicated
        co-work space allows for a peaceful and comfortable working environment.
        Your team will be living the pura vida dream as they recharge in this
        digital nomad paradise. 
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

export default PlayaCardtext;
