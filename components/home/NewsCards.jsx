import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import NewsCard from "../common/NewsCard";
import { newsCardsData } from "../common/Helper";
import Link from "next/link";
export default function NewsCards({ blogs }) {
  const b = blogs?.blogCollection?.items || [];
  return (
    <div className="max-w-[1120px] w-full mx-auto lg:pt-8 pb-8">
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 2700,
        }}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          430: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },

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
            spaceBetween: 68,
          },
        }}
        slidesPerView={3}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper3 w-full"
      >
        {b?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={`/blog/${item?.sys?.id}`}>
                <NewsCard item={item} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
