import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Cooks from '../Images/Foodies - Cook Chef Recipe.png'
import { Trans } from 'react-i18next';


function Getstarted() {
  return (
    <div className='flex flex-col justify-around items-center mx-5 my-8 md:mx-10 md:my-16 lg:flex-row lg:mx-20 lg:my-32 gap-10'>
      <img src={Cooks} alt="/" className='w-[260px] h-[160px] sm:w-[450px] sm:h-[350px] md:w-[500px] md:h-[400px] xl:w-[700px] xl:h-[600px]' />
      <div>
        <div className='flex flex-col bg-gray-300 rounded-[53px] m-4 w-auto h-auto p-10 gap-12'>
          <p className='cursor-default text-sm md:text-lg'><Trans i18nKey="description.started0" />
            <br /><Trans i18nKey="description.started1" />  <br /><Trans i18nKey="description.started2" /> </p>

          <Link to='/Login' className='bg-orange-500 px-4 py-2 flex gap-x-2 text-white rounded-full'>
            <FaArrowCircleRight size={18} className='mt-[3px]' />
            <span className='text-md font-medium'><Trans i18nKey="description.started3" /></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Getstarted