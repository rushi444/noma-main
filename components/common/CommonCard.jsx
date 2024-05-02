import Image from "next/image";
import React from "react";

const CommonCard = ({ item }) => {
  return (
    <>
      <article className="max-w-[310px] flex justify-center flex-col items-center bg-transparent  sm:px-2.5 lg:py-12 w-full">
        <Image
          src={item.src}
          className="pb-4"
          width={132}
          height={77}
          alt="card-img"
        />
        <p className="text-center font-Montserrat bg-transparent text-carbon-Black text-[24px] sm:text-[32px] not-italic font-extrabold leading-normal py-2 md:py-4">
          {item.step}
        </p>
        <p className="text-carbon-Black text-center font-Montserrat text-[14px] max-sm:px-4 sm:text-base not-italic font-normalleadimg-[normal] bg-transparent">
          {item.text}
        </p>
      </article>
    </>
  );
};

export default CommonCard;
