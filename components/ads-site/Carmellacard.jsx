import Image from "next/image";
import React from "react";
import { Carmelcardmap } from "../common/Helper";

const Carmellacard = () => {
  return (
    <>
      <h1 className="md:my-20 my-10 text-center text-[#1E1E1E] font-Montserrat text-[24px] md:text-[32px] font-extrabold">
        READ OUR REVIEWS
      </h1>
      <article className=" max-w-[1140px] bg-white w-full mx-auto p-3 sm:p-7  mb-[200px] ">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-5 ">
          {Carmelcardmap.map((item, index) => (
            <div
              key={index}
              className=" max-w-[390px] w-full mx-auto bg-[rgba(255,255,255,0.00)] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.20)] p-[30px_30px_20px_30px] "
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
                <p className=" text-[#171210] font-raleway text-[20px] font-bold leading-[20px] text-center mt-3 mb-1 ">
                  {item.text1}
                </p>
                <div className=" mb-2 ">
                  <Image
                    src="/img/star.png"
                    width={120}
                    height={22}
                    alt="star.png"
                  />
                </div>
                <p className=" max-w-[280px] w-full mx-auto font-raleway text-[16px] leading-[126%] ">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Carmellacard;
