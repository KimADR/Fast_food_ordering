"use client"
import BannerSlider from "@/components/BannerSlider";
import ProductItemV1 from "@/components/Product_Item_V1";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [isActiveTab, setIsActiveTab] = useState(0);

  const filterProducts = (index)=>{
    setIsActiveTab(index);
  }

  return (
    <>
   
    <BannerSlider/>

    <section className='filterProducts py-5'>
      <div className="container">
        <ul className="list list-inline text-center mb-5">
          <li className={`list-inline-item text-center cursor-pointer ${isActiveTab===0 && 'active'}`}
          onClick={()=>filterProducts(0)}>
            <Image src="/icon3.png" 
            width={"70"} 
            height={"70"} 
            alt="icon3" 
            className="m-auto"/>
            <h3 className="text-lg py-2 mb-0 font-bold">
              BURGERS
            </h3>
          </li>
          <li className={`list-inline-item text-center cursor-pointer ${isActiveTab===1 && 'active'}`}
          onClick={()=>filterProducts(1)}>
            <Image src="/icon4.png" 
            width={"70"} 
            height={"70"} 
            alt="icon4" 
            className="m-auto"/>
            <h3 className="text-lg py-2 mb-0 font-bold">
              DESSERTS
            </h3>
          </li>
          <li className={`list-inline-item text-center cursor-pointer ${isActiveTab===2 && 'active'}`}
          onClick={()=>filterProducts(2)}>
            <Image src="/icon5.png" 
            width={"70"} 
            height={"70"} 
            alt="icon5" 
            className="m-auto"/>
            <h3 className="text-lg py-2 mb-0 font-bold">
              SALADS
            </h3>
          </li>
          <li className={`list-inline-item text-center cursor-pointer ${isActiveTab===3 && 'active'}`}
          onClick={()=>filterProducts(3)}>
            <Image src="/icon1.png" 
            width={"70"} 
            height={"70"} 
            alt="icon1" 
            className="m-auto"/>
            <h3 className="text-lg py-2 mb-0 font-bold">
              SIDES
            </h3>
          </li>
        </ul>

        <div className="productsList">
          <div className="container px-5 flex items-center gap-7 justify-between">
          <ProductItemV1/>
          <ProductItemV1/>
          <ProductItemV1/>
          <ProductItemV1/>
          </div>
        </div>
      </div>
    </section>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
