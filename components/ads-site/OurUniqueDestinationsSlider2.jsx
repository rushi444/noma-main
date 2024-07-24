import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function OurUniqueDestinationsSlider2() {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Pagination,Autoplay]}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}
                className="mySwiper  rounded-t-[16px]"
            >
                <SwiperSlide>
                    {" "}
                    <Image
                        src="/img/card-1.png"
                        alt="swiper card"
                        width={328}
                        height={328}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <Image
                        src="/img/card-2.png"
                        alt="swiper card"
                        width={328}
                        height={328}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <Image
                        src="/img/card-3.png"
                        alt="swiper card"
                        width={328}
                        height={328}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <Image
                        src="/img/card-4.png"
                        alt="swiper card"
                        width={328}
                        height={328}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}