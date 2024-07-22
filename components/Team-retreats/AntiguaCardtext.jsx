import Image from "next/image";
import React from "react";
import { belizeChart } from "../common/Helper";
import Chart from "./ChartSuggested";

const AntiguaCardtext = () => {
  return (
    <div className="flex flex-col gap-[17px] md:mt-10 lg:mt-[72px]">
      <p className="flex justify-center items-center text-black font-Montserrat font-normal text-center text-[16px] lg:my-3 !line-clamp-5">
        Our explosive Edition in Antigua, Guatemala, has you exploring
        everything this hidden beauty has to offer. Join your team to kick off
        the workday with some yoga on the rooftop terrace as you take in the
        views of the unbelievable Volcan Acatenango and end the day with a
        refreshing dip in the pool.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-5 md:gap-10 xl:gap-[63px] w-full">
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

export default AntiguaCardtext;
