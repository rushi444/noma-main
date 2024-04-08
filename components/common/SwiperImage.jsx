import Image from "next/image";
import React from "react";

const SwiperImage = ({ item }) => {
  return (
    <div style={{ height: 328, width: 328 }}>
      <Image
        src={item.src}
        width={328}
        height={328}
        className="rounded-t-2xl max-lg:w-full h-full"
        alt={item.src}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default SwiperImage;
