import React from 'react'

const Featured = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 text-center'>
        <h1>Featured Books</h1>
        <p>Explore the recent books that have drawn the attention of many</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 row-span-2 md:col-span-3' src="./images/hero-img.jpg" alt="" />
            <img className='w-full h-full object-cover' src="./images/hero-img.jpg" alt="" />
            <img className='w-full h-full object-cover' src="./images/hero-img.jpg" alt="" />
            <img className='w-full h-full object-cover' src="./images/hero-img.jpg" alt="" />
        </div>
    </div>
  )
}

export default Featured;