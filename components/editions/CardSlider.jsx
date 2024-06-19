import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Scrollbar } from "swiper/modules";
import { profileMapData } from "../common/Helper";
import ProfileData from "./ProfileData";

export default function CardSlider({alumniReviews}) {
  return (
    <div className="w-full sm:bg-[#F4F1E6] pb-[120px] bg-[#FFDA7F]">
      <div className="max-w-[1120px] w-full mx-auto px-4 xl:px-4 sm:pt-[29px] pt-4">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          autoplay={{
            delay: 2700,
          }}
          breakpoints={{
            20: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            // 430: {
            //   slidesPerView: 1.2,
            //   spaceBetween: 10,
            // },
            // 540: {
            //   slidesPerView: 1.5,
            //   spaceBetween: 15,
            // },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2.2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 52,
            },
          }}
          slidesPerView={3}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper3 w-full h-[500px]"
        >
          {alumniReviews.map((item, index) => (
            <SwiperSlide key={index}>
              <ProfileData items={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
