import Image from "next/image";
import React from "react";
const Chart = ({ parcent, img, text, text2, color }) => {
  const degrees = (parcent / 100) * 360;
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className=" font-Montserrat  font-normal  text-center text-[16px] text-[#313131]">
        {text} <br /> {text2}
      </p>
      <div
        className="w-[96px] h-[96px] relative  group  shadow-2xl rounded-full p-[11px]"
        style={{
          background: `conic-gradient( ${color} ${degrees}deg , #ADADAD ${degrees}deg)`,
        }}
      >
        <div
          className="w-[60px] rounded absolute group-hover:opacity-100 duration-700 opacity-0 text-bold text-white shadow-xl top-3 -right-9 px-4  "
          style={{
            background: `${color}`,
          }}
        >
          {parcent}%{" "}
        </div>{" "}
        <div className="w-full h-full text-white text-[42px] bg-white flex items-center justify-center rounded-full">
          <Image src={img} height={76} width={76} />
        </div>
      </div>
      <p className="text-[#313131] font-Montserrat font-extrabold text-[32px] text-center ">
        {parcent}%
      </p>
    </div>
  );
};
export default Chart;
