import Image from "next/image";
import React from "react";

const DigitalFreedom = () => {
  return (
    <section className="bg-[#BBE4D7]">
      <div className="max-w-[1279px] px-4 w-full mx-auto flex gap-6 items-center justify-between pt-[27px] pb-[37px] max-md:flex-col">
        <article className="max-w-[500px] w-full">
          <h3 className="text-[#070707] text-center font-sergio-trendy text-[26px] sm:text-4xl lg:text-5xl font-normal leading-[106%] capitalize">
            Experience the ultimate digital freedom
          </h3>
          <p className="text-[#070707] text-center font-Montserrat text-xs lg:text-base font-normal leading-[115%] flex flex-col gap-1 pt-4 lg:pt-6">
            <span>
              As a remote work community, our goal is to create the perfect
              working environment. We specialize in creating life-changing
              experiences and curating global adventures. Take the leap today
              and join us in one of our upcoming trips.
            </span>
            <span>
              Working remotely is not as easy as the internet would have you
              believe (as with most things!) but with the right environment, and
              the right people around you, we can make it easier, fun and
              fulfilling. We can promise that whoever you are and whatever you
              do, there will be something from Noma Collective that brings you
              joy.
            </span>
          </p>
          <div className="flex justify-center mt-6 lg:mt-8">
            <button
              type="submit"
              className="bg-[#FF9500] rounded-full px-4 lg:px-8 py-2 lg:py-4 border-[2px] border-[#FF9500] text-[#F7F7F7] font-Montserrat text-xs lg:text-base font-extrabold leading-normal hover:bg-transparent hover:text-[#FF9500] duration-300 ease-in-out mx-auto"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </article>
        <article>
          {" "}
          <Image
            className=" max-md:h-[280px]"
            src="/img/digital-freedom.png"
            width={618}
            height={488}
          />
        </article>
      </div>
    </section>
  );
};

export default DigitalFreedom;
