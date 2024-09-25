"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { Mobileslides, slides } from "@/utils";
import Image from "next/image";
import { readexPro } from "@/app/fonts";
import Link from "next/link";

const MobileHero: React.FC = () => {
  return (
    <div className="relative w-full h-[95vh] max-h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {Mobileslides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                className=" w-full h-full"
                priority
              />
              <div className="absolute top-2 inset-x-0 flex flex-col space-y-4 justify-center items-center bg-black bg-opacity-70 text-left">
                <div className="flex flex-col space-y-2 items-center">
                  <h1
                    className={`text-xl font-medium text-white ${readexPro.className}`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-lg  text-center font-normal text-white ${readexPro.className}`}
                  >
                    {slide.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className={`px-6 py-3 bg-button text-white rounded-lg hover:bg-blue-700 transition duration-300 text-base md:text-lg lg:text-xl font-normal ${readexPro.className}`}
                >
                  Know More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileHero;
