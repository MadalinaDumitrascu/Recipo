import React from 'react'
import { Link } from 'react-router-dom'
import SubscriptionCard from './SubscriptionCard'

const SubscriptionCardsSection = () => {
  
  return (
    <div className='flex flex-col justify-center items-center pb-20 p-8 px-52'>
      <h1 className='text-4xl font-thin py-20'>Choose Your Plan</h1>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-10 xl:gap-26'>
        <Link to='/Checkout'><SubscriptionCard title='Standard Plan' description='Limited to only free recipes provided by Recipo and other users' price='free' /></Link>
        <Link to='/Checkout'><SubscriptionCard title='Monthly Premium Plan' description='Have access to all free and premium recipes.  Premium users have the ability to add new recipes.  Payment recurring monthly for Premium Account' price='€4.99' isMiddle={true} /></Link>
        <Link to='/Checkout'><SubscriptionCard title='Yearly Premium Plan' description='Have access to all free and premium recipes.  Premium users have the ability to add new recipes.  Payment recurring yearly for Premium Account' price='€41.99' /></Link>
      </div>

    </div>
  )
}

export default SubscriptionCardsSection