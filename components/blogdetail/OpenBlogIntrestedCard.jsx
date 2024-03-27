import Image from "next/image";
import React from "react";
import { featuredBlogsBgs } from "../utils/Functions";

const OpenBlogIntrestedCard = ({ item }) => {
  const BgColor = featuredBlogsBgs({ item });

  return (
    <>
      <div className="max-w-[328px] cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out w-full mx-auto">
        <button
          type="submit"
          className={` px-2 py-[7px] rounded-[31px] duration-300 max-w-[169px] w-full text-carbon-Black font-Montserrat text-sm font-normal leding-normal`}
          style={{ backgroundColor: BgColor }}
        >
          {item.btnheading}
        </button>
        <Image
          className="rounded-lg mt-2"
          src={item.image}
          width={328}
          height={400}
          alt={item.image}
        />
        <h1 className="text-carbon-Black font-Montserrat text-2xl lg:text-2xl font-extrabold mt-2">
          {item.heading}
        </h1>
      </div>
    </>
  );
};

export default OpenBlogIntrestedCard;
