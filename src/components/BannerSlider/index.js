"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';


const BannerSlider = () => {
  return (
    <>
      <Swiper 
      navigation={true}
      loop={true}
      pagination={{ 
        clickable: true,
       }}
      autoplay={{ 
        delay: 2500,
        disableOnInteraction: false,
       }}
       modules={[Navigation,Autoplay, Pagination]} 
      className="banner-slider w-[100%]">
        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background: `url(/slide8.jpg)`}}>
                <div className="info w-[50%] d-flex flex-col gap-4 mr-auto duration-1000">
                    <h2 className="text-white">DOUBLE BURGER</h2>
                    <h3>
                      <span className="text-white">Open Daily:</span>
                      <span className="text-yellow-500"> 11:30PM - 8:30PM</span>
                      </h3>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background: `url(/ss.jpg)`}}>
                <div className="info w-[50%] d-flex flex-col gap-4 ml-auto duration-1000">
                    <h2 className="text-white">TASTY BURGER</h2>
                    <h3><span className="text-white">Open Daily:</span><span className="text-yellow-500"> 11:30PM - 8:30PM</span></h3>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background: `url(/e.jpg)`}}>
                <div className="info w-[50%] d-flex flex-col gap-4 mr-auto duration-1000">
                    <h2 className="text-white">CRISPY CHICKEN</h2>
                    <h3><span className="text-white">Open Daily:</span><span className="text-yellow-500"> 11:30PM - 8:30PM</span></h3>
                </div>
            </div>
        </SwiperSlide>

       
      </Swiper>
    </>
  );
}
export default BannerSlider;                                    