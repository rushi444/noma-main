import Image from "next/image";
import React from "react";

const WhatWeOfferCARD = ({ item }) => {
  return (
    <>
      <article>
        <article className="max-w-[267px] w-full max-md:mx-auto max-sm:py-6">
          <p className="text-carbon-Black py-4 text-center font-Montserrat text-[32px] FeaturedEditionSection font-extrabold leading-normal px-2.5">
            {item.heading}
          </p>
          <Image
            src={item.src}
            width={267}
            height={230}
            alt={item.src}
            className="rounded-lg max-sm:w-full mx-auto w-[267px] h-[230px] object-cover"
          />
          <p className="text-center text-carbon-Black font-Montserrat text-base font-normal  py-4 leading-normal">
            {item.text}
          </p>
        </article>
      </article>
    </>
  );
};

export default WhatWeOfferCARD;
