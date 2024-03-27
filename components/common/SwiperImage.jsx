import Image from "next/image";
import React from "react";

const SwiperImage = ({ item }) => {
  return (
    <div>
      <Image
        src={item.src}
        width={328}
        height={328}
        className="rounded-t-2xl max-lg:w-full h-[328px]"
        alt={item.src}
      />
    </div>
  );
};

export default SwiperImage;
