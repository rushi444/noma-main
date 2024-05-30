import React from "react";
import { featuredBlogsBgs2 } from "../utils/Functions";

const Fourbotton = ({ items, value, onFilterSelect }) => {
  const BgColor = featuredBlogsBgs2({ value });
  return (
    <article>
      <button
        type="submit"
        className=" rounded-[31px] transition duration-300 ease-in-out  mt-8 p-[7px_12px] text-carbon-Black font-Montserrat text-base font-normal leading-normal hover:scale-[1.02]"
        style={{ backgroundColor: BgColor }}
        onClick={() => onFilterSelect(items.btnname)}
      >
        {items.btnname}
      </button>
    </article>
  );
};

export default Fourbotton;
