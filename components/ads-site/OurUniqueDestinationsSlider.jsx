import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import { Scrollbar } from "swiper/modules";
import { SliderLeftArrowIcon, SliderRightArrowIcon } from "../common/Icons";
import { format, differenceInDays } from "date-fns";
import { featured } from "../common/Helper";
import Image from "next/image";
import OurUniqueDestinationsSlider2 from "./OurUniqueDestinationsSlider2";

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function OurUniqueDestinationsSlider({ locations }) {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="max-w-[1184px]  w-full mx-auto flex items-center  gap-4 lg:gap-6 xl:gap-8">
      <div className="prev-btn hidden sm:block -mt-24" onClick={goPrev}>
        <button type="submit">
          <SliderLeftArrowIcon />
        </button>
      </div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        loop="true"
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.7,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        slidesPerView={3}
        modules={[Scrollbar]}
        className="mySwiper sm:py-8 py-5   w-full"
        ref={swiperRef}
      >
        {locations.map((items, index) => (
          <SwiperSlide>
            <section
              key={index}
              className="max-w-[328px] pt-8 pb-16  w-full  mx-auto  "
            >
              <article className="flex gap-[8px] py-[8px] px-[4px]">
                <button
                  className="max-w-[162px] w-full h-[33px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[20px] font-Montserrat text-[14px] not-italic leading-[normal] text-center font-normal py-[8px] pr-[5px] "
                  style={{ backgroundColor: `${items.bgcolor}` }}
                >
                  {items.btn_1}
                </button>
                <button
                  className="max-w-[100px] w-full h-[33px] rounded-[20px] font-Montserrat text-[14px] not-italic leading-[normal] text-center font-normal"
                  style={{ backgroundColor: `${items.bg_colour_second}` }}
                >
                  {items.btn_2}
                </button>
              </article>
              <div>
                <OurUniqueDestinationsSlider2 />
              </div>

              <div
                style={{ backgroundColor: `${items.content_bg}` }}
                className="max-w-[328px] w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0px_0px_16px_16px] px-4"
              >
                <h1 className=" font-Montserrat text-[24px] not-italic font-extrabold leading-[normal] w-full pt-[4px] max-w-[202px] ">
                  {" "}
                  {items.name}
                </h1>

                <p className="text-[#313131] font-Montserrat text-[14px] not-italic font-normal leading-[normal] pt-[8px]">
                  {items.date}
                </p>

                <div className="flex justify-between py-[8px] max-sm-px-2">
                  <p className=" font-Montserrat text-[#313131] not-italic font-normal leading-[normal]">
                    {items.day}
                  </p>
                  <p className="text-black font-Montserrat text-[14px] not-italic font-extrabold leading-[normal]">
                    {items.price}
                  </p>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next-btn hidden sm:block -mt-24" onClick={goNext}>
        <button type="submit">
          <SliderRightArrowIcon />
        </button>
      </div>
    </div>
  );
}
