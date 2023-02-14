import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { Trans } from 'react-i18next';

const PaymentSuccess = () => {
  const navigate = useNavigate()
  
  React.useEffect(() => {
    setTimeout(() => {
      navigate('/Dashboard', { replace: true })
    }, 5000)
  }, [])
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center items-center  w-[80%] h-[80vh] m-10 border-4 rounded-2xl border-gray-300'>
        <h1 className='flex gap-3 items-center text-3xl font-medium'><Trans i18nKey="description.pay0" /><BsCheck2Circle size={35} className='text-green-600' /></h1>
        <p><Trans i18nKey="description.redirect0" /></p>
      </div>
    </div>
  )
}

export default PaymentSuccess