import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const SuggestedLocationSwiper = ({ images }) => {
  return (
    <Swiper
      pagination={true}
      autoplay={{
        delay: 1000,
      }}
      modules={[Pagination]}
      className="mySwiper h-[328px] w-[328px]"
    >
      <SwiperSlide key={images[0]?.id}>
        <Image
          src={images[0]?.src}
          alt="suggested location"
          width={328}
          height={328}
          className='h-[328px] w-[328px] object-cover rounded-t-[16px]'
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SuggestedLocationSwiper;
