"use client";
import React from "react";
import Heading from "../common/Heading";
import WhatToExpectSlider from "./WhatToExpectSlider";
const WhatToExpect = () => {
  return (
    <section className="w-full bg-noma px-4">
      <article className="w-full pt-[64px] pb-2  px-2.5 hidden sm:flex flex-col gap-5">
        <Heading heading="What to expect" />
        <p className="text-center text-carbon-Black font-Montserrat text-base font-normal max-w-[973px] w-full mx-auto  py-4 leading-normal">
          A retreat can provide a valuable opportunity for team members to
          connect, learn, and grow together. By creating a supportive and
          collaborative environment, teams can become more effective and achieve
          their goals more efficiently.
        </p>
      </article>
      <WhatToExpectSlider />
    </section>
  );
};
export default WhatToExpect;
