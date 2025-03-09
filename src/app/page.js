"use client"
import BannerSlider from "@/components/BannerSlider";
import ProductItemV1 from "@/components/Product_Item_V1";
import ProductItemV2 from "@/components/Product_item_V2";
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from 'swiper/modules';

export default function Home() {

  const [isActiveTab, setIsActiveTab] = useState(0);

  const filterProducts = (index) => {
    setIsActiveTab(index);
  }

  return (
    <>

      <BannerSlider />

      <section className='filterProducts py-5'>
        <div className="container">
          <ul className="list list-inline text-center mb-5">
            <li className={`list-inline-item text-center cursor-pointer ${isActiveTab === 0 && 'active'}`}
              onClick={() => filterProducts(0)}>
              <Image src="/icon3.png"
                width={"70"}
                height={"70"}
                alt="icon3"
                className="m-auto" />
              <h3 className="text-lg py-2 mb-0 font-bold">
                BURGERS
              </h3>
            </li>
            <li className={`list-inline-item text-center cursor-pointer ${isActiveTab === 1 && 'active'}`}
              onClick={() => filterProducts(1)}>
              <Image src="/icon4.png"
                width={"70"}
                height={"70"}
                alt="icon4"
                className="m-auto" />
              <h3 className="text-lg py-2 mb-0 font-bold">
                DESSERTS
              </h3>
            </li>
            <li className={`list-inline-item text-center cursor-pointer ${isActiveTab === 2 && 'active'}`}
              onClick={() => filterProducts(2)}>
              <Image src="/icon5.png"
                width={"70"}
                height={"70"}
                alt="icon5"
                className="m-auto" />
              <h3 className="text-lg py-2 mb-0 font-bold">
                SALADS
              </h3>
            </li>
            <li className={`list-inline-item text-center cursor-pointer ${isActiveTab === 3 && 'active'}`}
              onClick={() => filterProducts(3)}>
              <Image src="/icon1.png"
                width={"70"}
                height={"70"}
                alt="icon1"
                className="m-auto" />
              <h3 className="text-lg py-2 mb-0 font-bold">
                SIDES
              </h3>
            </li>
          </ul>

          <div className="productsList">
            <div className="container px-5 flex items-center gap-7 justify-between">
              <ProductItemV1 />
              <ProductItemV1 />
              <ProductItemV1 />
              <ProductItemV1 />
            </div>
          </div>
        </div>
      </section>

      <section className="section2 text-center">
        <div className="container">
          <div className="info w-75 m-auto">
            <h2 className="text-brown mb-4">THE BURGER TASTES BETTER WHEN <br /> YOU EAT IT WITH YOUR FAMILY</h2>
            <p> From juicy burgers to crispy fries,
              we offer an extensive range of freshly prepared dishes,
              served expeditiously for your satisfaction. We cordially invite you to visit our establishment
              or place your order online at your convenience.</p>

            <Button className="btn-brown btn-lg no-radius mt-5">EXPLORE FULL MENU</Button>
          </div>
        </div>

      </section>
      <section className="section3 text-center bg-y py-5">
        <div className="container flex items-center justify-between">
          <div className="box p-5 text-center w-[33%]">
            <Image src="/recipes.png"
              width="100"
              height="100"
              alt="burger"
              className="m-auto" />
            <h3 className="mt-4">ORIGINAL RECIPES</h3>
            <p className="mt-3"> Discover a world where every dish is a handcrafted masterpiece, 
              and every bite tells a story of creativity and flavor.  Embrace the journey of taste and let 
              each original creation inspire your next culinary adventure.</p>
          </div>

          <div className="box p-5 text-center w-[33%]">
            <Image src="/food.png"
              width="100"
              height="100"
              alt="burger"
              className="m-auto" />
            <h3 className="mt-4">QUALITY FOODS</h3>
            <p className="mt-3"> Experience a journey of exceptional taste, 
              where every dish is crafted from the finest ingredients. Our commitment 
              to excellence transforms each bite into a perfect harmony of flavor and passion.</p>
          </div>

          <div className="box p-5 text-center w-[33%]">
            <Image src="/delivery.png"
              width="100"
              height="100"
              alt="burger"
              className="m-auto" />
            <h3 className="mt-4">FASTEST DELIVERY</h3>
            <p className="mt-3"> Ensuring prompt and reliable service
              with an efficient logistics network that delivers your order swiftly, 
              experience unmatched speed and reliability your order,
              while upholding the highest standards of quality and freshness.</p>
          </div>

        </div>
      </section>

      <section className="py-5">
        <div className="container">
            <h1 className="text-center hd text-red">OUR CRAZY BURGERS</h1>
            <p className="text-center mt-3">Our journey began with a vision to create a unique dining experience that 
              combines <br/>the art of culinary craftsmanship with the warmth of family hospitality.</p>

            <Swiper 
                  navigation={true}
                  slidesPerView={5}
                  spaceBetween={10}
                  loop={true}
                  modules={[Navigation]} 
                  className="productList mt-4 swiperSlider">
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide> 
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide> 
              </Swiper>
              </div>
      </section>

      <div className="bg_row"></div>

      <section className="py-5">
        <div className="container">
            <h1 className="text-center hd text-red">OUR CRAZY DESSERTS</h1>
            <p className="text-center mt-3">Our journey began with a vision to create a unique dining experience that 
              combines <br/>the art of culinary craftsmanship with the warmth of family hospitality.</p>

            <Swiper 
                  navigation={true}
                  slidesPerView={5}
                  spaceBetween={10}
                  loop={true}
                  modules={[Navigation]} 
                  className="productList mt-4 swiperSlider">
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide> 
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductItemV2 />
                  </SwiperSlide> 
              </Swiper>
              </div>
      </section>

      <section className="section deliverySection w-[100%] flex items-center justify-center">
        <div className="container text-center">
          <div className="w-75 m-auto">
            <h4 className="text-brown">WE GUARANTEE</h4>
            <h2 className="text-brown">30 MINUTES DELIVERY!</h2>
            <p className="text-black ">
              We are committed to delivering your order.
              If we fail to do so, you will receive a complimentary meal on your next order.
            </p>

            <br/>

            <Button className="btn-brown btn-lg no-radius">
              CALL: 038-33-456-78
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
