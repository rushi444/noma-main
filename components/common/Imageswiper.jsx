import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SwiperImage from "./SwiperImage";
export default function ImageSwiper({ item }) {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper4 w-[328px] h-[328px]"
      >
        {item.img.map((item, index) => (
          <SwiperSlide key={index} className="flex gap-[68px]">
            <SwiperImage item={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
