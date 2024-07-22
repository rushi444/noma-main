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
      modules={[Pagination, Autoplay]}
      className="mySwiper  h-[300px] rounded-t-[16px]"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Image
            src={image.src}
            alt="suggested location"
            width={328}
            height={328}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SuggestedLocationSwiper;
