import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import { SliderLeftArrowIcon, SliderRightArrowIcon } from "../common/Icons";
import { guestGalleryData } from "../common/Helper";
import Image from "next/image";
import { Scrollbar } from "swiper/modules";
import { ReactImageCarouselViewer } from "react-image-carousel-viewer";

export default function GuestGallerySlider({ guestGallery }) {
  const swiperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

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

  const carouselImges = guestGallery.map((item) => ({
    src: item.url,
    description: item.title,
  }));

  return (
    <div className="max-w-[1152px] w-full mx-auto flex items-center gap-4 pb-4">
      <ReactImageCarouselViewer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        images={carouselImges}
        startIndex={index}
      />
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
        {guestGallery.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.url}
              width={328}
              height={328}
              alt={item?.title}
              onClick={() => {
                setIsOpen(true);
                setIndex(index);
              }}
              className="h-[328px] w-[328px] rounded-2xl mx-auto cursor-pointer object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next-btn hidden sm:block" onClick={goNext}>
        <button type="submit">
          <SliderRightArrowIcon />
        </button>
      </div>
    </div>
  );
}
