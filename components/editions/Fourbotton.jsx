import React from "react";
import { featuredBlogsBgs2 } from "../utils/Functions";

const Fourbotton = ({ items, value }) => {
  const BgColor = featuredBlogsBgs2({ value });
  return (
    <>
      <button
        type="submit"
        className=" rounded-[31px] mt-8 p-[7px_12px] text-[#313131] font-Montserrat text-base font-normal leading-normal transition duration-300 ease-in-out  hover:scale-[1.02]"
        style={{ backgroundColor: BgColor }}
      >
        {items.btnname}
      </button>
    </>
  );
};

export default Fourbotton;
