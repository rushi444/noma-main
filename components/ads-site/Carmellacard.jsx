import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import { Carmelcardmap } from "../common/Helper";
import ProfileDataCardBtn from "../editions/ProfileDataCardBtn";

const Carmellacard = () => {
  return (
    <div className="bg-pastel-yellow w-full pt-1 pb-1 mb-[-250px]">
      <div className="2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-10 mb-5 2xl:pt-10 xl:pt-10 lg:pt-10 pt-5">
        <Heading heading="Read Our Reviews " />
      </div>
      <article className="max-w-[1140px] w-full mx-auto p-3 sm:p-7  mb-[200px] ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-5 ">
          {Carmelcardmap.map((item) => (
            <div className="max-w-[328px] w-full cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out  mx-auto flex flex-col gap-2">
              <span className="text-[#313131] font-Montserrat text-[24px] sm:text-[32px] font-extrabold leading-normal">
                {item.name}
              </span>
              <div className="flex gap-2">
                <ProfileDataCardBtn
                  item={{ btn1: `${item.numberOfTrips}` }}
                  value={0}
                />
                <ProfileDataCardBtn item={{ btn1: item.jobTitle }} value={1} />
              </div>
              <div>
                <Image
                  src={item.img}
                  width={328}
                  height={412}
                  alt="item.img.png"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-[#313131] font-Montserrat text-sm sm:text-base font-normal !leading-5">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Carmellacard;

{
  /* <div className="max-w-[328px] w-full cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out  mx-auto flex flex-col gap-2">
      <span className="text-[#313131] font-Montserrat text-[24px] sm:text-[32px] font-extrabold leading-normal">
        {items.alumniName}
      </span>
      <div className="flex gap-2">
        <ProfileDataCardBtn
          item={{ btn1: `${items?.numberOfTrips} x Editions` }}
          value={0}
        />
        <ProfileDataCardBtn item={{btn1: items?.jobTitle}} value={1} />
      </div>
      <p className="text-[#313131] font-Montserrat text-sm sm:text-base font-normal !leading-5">
        {documentToReactComponents(items?.review?.json || {})}
      </p>
    </div> */
}

{
  /* <div
              key={index}
              className="max-w-[328px] w-full cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out  mx-auto flex flex-col gap-2"
            >
              <div>
                <Image
                  src={item.img}
                  width={300}
                  height={200}
                  alt="Carmellacard-img1.png"
                />
              </div>
              <div>
                <p className="text-[#171210] font-raleway text-[20px] font-bold leading-[20px] text-center mt-3 mb-1 ">
                  {item.text1}
                </p>
                <div className="mb-2 ">
                  <Image
                    src="/img/star.png"
                    width={120}
                    height={22}
                    alt="star.png"
                  />
                </div>
                <p className="max-w-[280px] w-full mx-auto font-raleway text-[16px] leading-[126%] ">
                  {item.paragraph}
                </p>
              </div>
            </div> */
}
