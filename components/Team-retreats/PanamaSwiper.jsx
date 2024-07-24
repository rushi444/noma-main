import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function PanamaSwiper() {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[300px] rounded-t-[16px]"
      >
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img2.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img2.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img2.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/img/loctionswiper-img2.png"
            alt="swiper card"
            width={328}
            height={328}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
