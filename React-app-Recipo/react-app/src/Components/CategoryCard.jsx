import React from 'react'


const CategoryCard = ({text, image}) => {

  return (
    <div className='flex justify-center relative items-center my-10 border border-gray-300 hover:border-gray-100 bg-black hover:scale-110 hover:shadow-lg active:shadow-md active:shadow-black/30 hover:shadow-black/30 active:scale-105 active:duration-100 duration-300 rounded-xl text-white w-[290px] h-[180px] md:w-[320px] md:h-[210px] lg:w-[350px] lg:h-[240px] xl:w-[380px] xl:h-[270px]'>
    <img src={image} alt="" className='flex justify-center absolute items-center my-10 rounded-xl bg-black object-cover text-white w-[290px] h-[180px] md:w-[320px] md:h-[210px] lg:w-[350px] lg:h-[240px] xl:w-[380px] xl:h-[270px]' />
    <h1 className='absolute text-xl lg:text-3xl font-medium flex rounded-xl items-center justify-center cursor-pointer w-[290px] h-[180px] md:w-[320px] md:h-[210px] lg:w-[350px] lg:h-[240px] xl:w-[380px] xl:h-[270px] hover:backdrop-blur-0 shadow-md hover:shadow-lg  backdrop-brightness-[.65] backdrop-blur-sm duration-[400ms]'>{text}</h1>
    </div>
  )
  
}

export default CategoryCard