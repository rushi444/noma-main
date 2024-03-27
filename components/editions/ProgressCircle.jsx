import Image from "next/image";
import React from "react";
import { progressCardsData } from "../common/Helper";

const ProgressCircle = ({ progress, size = 100, stroke = "#A565FF" }) => {
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <article className="bg-[#ECECFD] flex gap-2 items-center justify-center pt-4 pb-[29px] w-full sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[67px] px-4 xl:px-0">
      {progressCardsData.map((item, index) => (
        <article key={index} className="flex flex-col w-[66px] sm:w-[102px]">
          <div className="py-1">
            <p className="text-center text-[#313131] text-[10px] sm:text-base font-Montserrat font-normal leading-normal max-sm:italic">
              {item.title}
            </p>
          </div>
          <Image
            src={item.img}
            alt="img"
            width={102}
            height={102}
            className="w-[66px] h-[66px] sm:w-[102px] sm:h-[102px]"
          />
          <p className="text-[#313131] text-center text-sm sm:text-[32px] font-Montserrat font-extrabold leading-normal">
            {item.value}
          </p>
        </article>
      ))}
    </article>
  );
};
export default ProgressCircle;
