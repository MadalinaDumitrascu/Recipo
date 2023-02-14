import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdStar} from 'react-icons/io'
import { Trans } from 'react-i18next'

const PremiumAddRecipes = () => {
  return (
    <div className='text-white bg-gradient-to-br from-emerald-900 to-black p-10 flex flex-col items-start lg:flex-row gap-10 lg:justify-around lg:gap-96 lg:items-center py-16 z-[9]'>
        <div className='flex justify-start text-xl font-thin flex-col cursor-default'>
        
            <p className='flex flex-row text-sm sm:text-base lg:text-lg'><IoMdStar className='text-emerald-500 lg:w-6 lg:h-6 mr-2'/> <Trans i18nKey={'description.premium1p1'} /></p>
        <p className='flex flex-row text-sm sm:text-base lg:text-lg'> <Trans i18nKey={'description.premium1p2'}/></p>
        
        </div>
        <Link className='bg-emerald-500 text-white py-4 px-6 rounded-full hover:shadow-lg hover:shadow-emerald-400/60 text-xs sm:text-base lg:text-lg font-medium flex items-center hover:bg-emerald-400 hover:scale-105 ease-linear duration-150 active:bg-emerald-700' to='/Add-Recipe' ><IoMdStar size={18} className='mr-2'/> <Trans i18nKey={'description.premium1button'} /></Link>
    </div>
  )
}

export default PremiumAddRecipes