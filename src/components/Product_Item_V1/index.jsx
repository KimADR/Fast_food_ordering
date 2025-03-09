import Image from 'next/image'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { LiaShoppingBagSolid } from 'react-icons/lia'
import Button from '@mui/material/Button'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProductItemV1 = () => {
  return (
    <div className='product_item_V1'>
       <div className='imgWrapper relative p-4'>
       <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        className='wishlist absolute top-[5px] right-[5px] z-[99]'
      />
        <Image src='/img1.jpeg' 
        width={"100"} 
        height={"100"} 
        alt='img' />

        <div className='flex items-center justify-between'>
          <span className='price flex items-center justify-normal px-3 py-1 text-y text-lg
          font-bold bg-brown rounded-md'>$10.35</span>

          <Rating 
          name="half-rating" 
          defaultValue={2.5} 
          precision={0.5} 
          size='small'
          readOnly/>
        </div>
       </div>

        <div className='info p-4 text-center'>
            <h4 className='font-bold'>
                BIGTI BURGER
            </h4>
            <p className='text-black/60 mt-2 mb-3'>Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>

              <Button><LiaShoppingBagSolid/>ADD TO CART</Button>

        </div>
    </div>
  )
}

export default ProductItemV1
