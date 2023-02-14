import React from 'react'
import { BsXCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { Trans } from 'react-i18next';

const PaymentFailed = () => {
  const navigate = useNavigate()
  React.useEffect(() => {
    setTimeout(() => {
      navigate('/Checkout', { replace: true })
    }, 5000)
  }, [])
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center items-center  w-[80%] h-[80vh] m-10 border-4 rounded-2xl border-gray-300'>
        <h1 className='flex gap-3 items-center text-3xl font-medium'><Trans i18nKey="description.failed0" /><BsXCircle size={35} className='text-red-600' /></h1>
        <p><Trans i18nKey="description.redirect0" /></p>
      </div>
    </div>
  )
}

export default PaymentFailed