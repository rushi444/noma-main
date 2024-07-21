import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function BelizeSwiper() {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper  h-[300px] rounded-t-[16px]"
      >
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
