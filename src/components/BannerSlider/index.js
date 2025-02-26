"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


const BannerSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="banner-slider w-[100%]">
        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background: `url(/slide8.jpg) center center`}}>
                <div className="info w-[50%] d-flex flex-col gap-4 mr-right duration-500">
                    <h2 className="text-white">CRISPY CHICKEN</h2>
                    <h3><span className="text-white">Open Daily:</span><span className="text-yellow-500"> 11:30PM - 8:30PM</span></h3>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background: `url(/slide3.jpg) center center`}}>
                <div className="info w-[50%] d-flex flex-col gap-4 ml-auto">
                    <h2 className="text-white">CRISPY CHICKEN</h2>
                    <h3><span className="text-white">Open Daily:</span><span className="text-yellow-500"> 11:30PM - 8:30PM</span></h3>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{background: `url(/slidee.jpg) center center`}}>
                <div className="info w-[50%] d-flex flex-col gap-4 mr-auto">
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