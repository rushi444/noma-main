import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import WhatWeOfferCARD from "../common/WhatWeOfferCARD";
import { whatWeOfferCardData3 } from "../common/Helper";

export default function WhatWeOfferSlider() {
  return (
    <div className="max-w-[1120px] w-full mx-auto pb-8">
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 17,
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 17,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 17,
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 17,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 17,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 17,
          },
        }}
        slidesPerView={3}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper2 w-full"
      >
        {whatWeOfferCardData3.map((item, index) => (
          <SwiperSlide key={index}>
            <WhatWeOfferCARD item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
