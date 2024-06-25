import React, { useRef } from "react";
import BasicsCard from "../common/BasicsCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { SliderLeftArrowIcon, SliderRightArrowIcon } from "../common/Icons";
import { Scrollbar } from "swiper/modules";
import Link from "next/link";

const Basics = ({ faqs = [] }) => {
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
    <div>
      <div className="pb-5 sm:pb-[100px] bg-[#ECECFD] ">
       <h1 className=" text-center py-8 text-carbon-Black text-[40px] font-normal capitalize font-sergio-trendy">
          FAQS
        </h1>
        {/* <div className="  gap-x-1  max-w-[890px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 ">
          {faqs?.map((item, index) => (
            <BasicsCard item={item} key={index} />
          ))}
        </div> */}
        <div className="max-w-[1152px] w-full mx-auto flex items-center gap-4 pb-4">
          <div className="prev-btn hidden sm:block" onClick={goPrev}>
            <button type="submit">
              <SliderLeftArrowIcon />
            </button>
          </div>
          <Swiper
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            scrollbar={{ hide: false }}
            breakpoints={{
              20: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              430: {
                slidesPerView: 1.2,
                spaceBetween: 5,
              },
              540: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            slidesPerView={3}
            modules={[Scrollbar]}
            className="mySwiper h-[376px] w-full px-8 pb-8 pt-4"
            ref={swiperRef}
          >
            {faqs?.map((item, index) => (
              <SwiperSlide key={index + 'faq-card-page'}>
                <Link href="/faqs">
                  <BasicsCard item={item} key={index} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="next-btn hidden sm:block" onClick={goNext}>
            <button type="submit">
              <SliderRightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basics;
