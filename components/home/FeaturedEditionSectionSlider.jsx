import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import { Scrollbar } from "swiper/modules";
import { SliderLeftArrowIcon, SliderRightArrowIcon } from "../common/Icons";
import FeaturedEditionCard from "../common/FeaturedEditionCard";
import { format, differenceInDays } from "date-fns";

export default function FeaturedEditionSectionSlider({locations}) {
  const locationsMapped = locations?.map((l) => ({
    id: l?.sys?.id,
    firstbtn: l?.timeZone,
    secondbtn: l?.temperature,
    title: l?.city,
    description: l?.country,
    date: `${format(new Date(l.startDate), "MMM d")} - ${format(
      new Date(l.endDate),
      "MMM d, yyyy"
    )}`,
    days: Math.abs(
      differenceInDays(new Date(l.endDate), new Date(l.startDate))
    ),
    price: l.accomodationsCollection.items[0].price,
    img: [{ src: l?.heroImage?.url }],
  }));
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
    <div className="max-w-[1184px] h-[552px] w-full mx-auto flex items-center mt-8 gap-4 lg:gap-6 xl:gap-8">
      <div className="prev-btn hidden sm:block -mt-28" onClick={goPrev}>
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
            slidesPerView: 1.5,
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
        className="mySwiper h-[552px] w-full"
        ref={swiperRef}
      >
        {locationsMapped.map((item, index) => (
          <SwiperSlide key={index}>
            <FeaturedEditionCard item={item} value={index} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next-btn hidden sm:block -mt-28" onClick={goNext}>
        <button type="submit">
          <SliderRightArrowIcon />
        </button>
      </div>
    </div>
  );
}
