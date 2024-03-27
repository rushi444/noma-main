import React from "react";
import BasicsCard from "../common/BasicsCard";
import { basics } from "../common/Helper";

const Basics = () => {
  return (
    <div>
      <div className="sm:bg-pastel-yellow pb-[100px] bg-light-green ">
        <h1 className=" text-center sm:hidden py-8 text-carbon-Black text-[32px] font-normal capitalize font-sergio-trendy">
          FAQS
        </h1>
        <div className="  gap-x-1  max-w-[890px]  w-full mx-auto grid grid-cols-1 sm:grid-cols-2 ">
          {basics.map((item, index) => (
            <BasicsCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basics;
