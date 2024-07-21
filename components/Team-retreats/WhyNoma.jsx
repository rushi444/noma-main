import Image from "next/image";
import React from "react";

const WhyNoma = () => {
  return (
    <section className="bg-[#FFDA7F]">
      <article className="max-w-[1440px] mx-auto w-full flex max-md:flex-col items-center">
        <div>
          <Image src="/img/whynoma.png" width={720} height={568} />
        </div>
        <div className="max-w-[514px] w-full flex  flex-col items-center justify-center mx-auto px-4 xl:px-0 ,d:py-10 py-6">
          <h5 className="text-[#070707] text-center font-sergio-trendy text-[28px] md:text-[34px] lg:text-5xl font-normal capitalize">
            Why Noma{" "}
          </h5>

          <div className="flex flex-col gap-2 pt-3 ">
            <p className="text-[#070707] text-center  text-xs font-Montserrat lg:text-base font-normal">
              Did you know it takes around 60+ hours on average to plan a
              corporate retreat if it is handled internally?{" "}
            </p>
            <p className="text-[#070707] text-center  text-xs font-Montserrat lg:text-base font-normal">
              Why not save your team the hassle and let us do the work? At Noma,
              we are experts in providing a curated experience that not only
              promises to be productive for your team but entertaining and
              culturally integrated.
            </p>
            <p className="text-[#070707] text-center text-xs font-Montserrat lg:text-base font-normal">
              We work with local community managers to support your guests
              experience end-to-end, as well as cherry-picking the best,
              authentic local experiences and cultural events. We've built
              amazing connections across the globe, enabling us to curate the
              very best trips for you and your team.
            </p>
            <p className="text-[#070707] text-center text-xs font-Montserrat lg:text-base font-normal">
              We manage the logistics, the programming, the accommodation, so
              all you'll have, to do is show up!
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#FF9500] rounded-full px-4 lg:px-8 py-2 lg:py-4 border-[2px] border-[#FF9500] text-[#F7F7F7] font-Montserrat text-xs lg:text-base font-extrabold leading-normal hover:bg-transparent hover:text-[#FF9500] duration-300 ease-in-out mx-auto"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhyNoma;
