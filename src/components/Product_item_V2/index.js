import Image from 'next/image'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { LiaShoppingBagSolid } from 'react-icons/lia'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProductItemV2 = () => {
  return (
    <div className='productItemV2'>
      <div className="imgWrapper relative w-[100%] ">
      <Image src="/burger-2.jpeg" alt="product1" width="100" height="100" />
      </div>

      <div className="info p-3 relative overflow-hidden">
      <div className="flex items-center justify-between">
      <Rating 
          name="half-rating" 
          defaultValue={2.5} 
          precision={0.5} 
          size='small'
          readOnly/>

      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        className='wishlist'
      />

        </div>
      <h3 className='text-brown text-lg'>PANISH BURGER</h3>
      <p className=''>Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula</p>

      <div className='flex items-center justify-between mt-3'>
      <span className='price flex items-center justify-normal px-3 py-1 text-y text-lg
          font-bold bg-brown rounded-md'>$10.35</span>

      <Button className='btn-y'><LiaShoppingBagSolid/>ADD TO CART</Button>
      </div>
      </div>
    </div>
  )
}

export default ProductItemV2
