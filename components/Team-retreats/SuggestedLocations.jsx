import React from "react";
import BelizeCardtext from "./BelizeCardtext";
import BelizeCard from "./BelizeCard";
import PanamaCard from "./PanamaCard";
import PanamaCardtext from "./PanamaCardText";
import AntiguaCard from "./AntiguaCard";
import AntiguaCardtext from "./AntiguaCardtext";
import PlayaCard from "./PlayaCard";
import PlayaCardtext from "./PlayaCardtext";

const SuggestedLocations = () => {
  return (
    <section className=" bg-[#F4F1E6] ">
      <article className="max-w-[1112px] w-full mx-auto pt-6 sm:pt-10 md:pt-[61px] px-4 xl:px-0">
        <h2 className="text-center text-black font-sergio-trendy font-normal text-[24px] sm:text-[48px] capitalize">
          Suggested Locations
        </h2>
        <article className="mt-5 sm:mt-10 lg:mt-[56px] flex flex-col gap-5 sm:gap-10 lg:gap-[56px]">
          <section className="flex max-md:flex-col max-md:items-center gap-5 md:gap-7 xl:gap-[56px] ">
            <BelizeCard />
            <BelizeCardtext />
          </section>
          <section className="flex max-md:flex-col max-md:items-center gap-5 md:gap-7 xl:gap-[56px]">
            <PanamaCard />
            <PanamaCardtext />
          </section>
          <section className="flex max-md:flex-col max-md:items-center gap-5 md:gap-7 xl:gap-[56px]">
            <AntiguaCard />
            <AntiguaCardtext />
          </section>
          <section className="flex max-md:flex-col max-md:items-center gap-5 md:gap-7 xl:gap-[56px] ">
            <PlayaCard />
            <PlayaCardtext />
          </section>
        </article>
      </article>
    </section>
  );
};

export default SuggestedLocations;
