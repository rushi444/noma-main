import React from "react";
import Heading from "../common/Heading";
import WhatWeOfferSlider from "./WhatWeOfferSlider";

const WhatWeOffer = () => {
  return (
    <div className="w-full bg-light-purple px-4">
      <div className="w-full py-8 px-2.5 hidden sm:block">
        <Heading heading="What we offer" />
      </div>
      <WhatWeOfferSlider />
    </div>
  );
};

export default WhatWeOffer;
