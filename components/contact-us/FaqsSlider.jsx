import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import Image from "next/image";

export const FaqsSlider = ({ faqs }) => {
  return (
    <div className="max-w-[1120px] w-full mx-auto lg:pt-8 pb-8 px-4">
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
        {faqs?.map((item, index) => (
          <SwiperSlide key={index + "faq-slider"}>
            <div className="pb-8 sm:py-8 px-[0px] max-w-[378px] w-full mx-auto bg-transparent">
              <Image
                src={item?.image?.url}
                alt="basic image"
                width={358}
                height={328}
                className="rounded-[8px] h-[328px] w-[358px] mx-auto object-cover"
              />
              <p className="pt-4 text-center font-Montserrat font-extrabold text-[24px] sm:text-[32px] text-carbon-Black">
                {item?.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
