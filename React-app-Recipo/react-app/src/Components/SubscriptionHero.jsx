import React from 'react'
import { Trans } from 'react-i18next';
const SubscriptionHero = () => {
  return (
    <div className='text-white bg-gradient-to-br from-emerald-900 via-black to-emerald-500 w-full h-[40vh] lg:h-[80vh] gap-10 items-center flex flex-col justify-center cursor-default3'>
      <h1 className='text-xl md:text-3xl lg:text-6xl font-thin drop-shadow-md'><Trans i18nKey="description.subsHero0" /></h1>
      <h1 className='text-xl md:text-3xl lg:text-6xl font-thin drop-shadow-md'><Trans i18nKey="description.subsHero1" /></h1>
      <h1 className='text-xl md:text-3xl lg:text-6xl flex gap-4 font-thin drop-shadow-md'><Trans i18nKey="description.subsHero2" /><p className='text-emerald-400 font-semibold'>Recipo</p></h1>
    </div>
  )
}

export default SubscriptionHero