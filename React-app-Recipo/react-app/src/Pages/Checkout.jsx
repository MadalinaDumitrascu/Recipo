import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { usePaymentInputs } from 'react-payment-inputs'
import {  Trans } from 'react-i18next';

const Checkout = () => {
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [details, setDetails] = useState()
  const [card, setCard] = useState();
  const [expirationDate, setExpiration] = useState()
  const [cvc, setCvc] = useState()
  const [dropdownM, setDropdownM] = useState()
  const [dropdownY, setDropdownY] = useState()
  const [isDone, setDone] = useState(false)
  const [amount, SetAmount] = useState();

  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs()
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://localhost:7291/api/Users/GetUser', { withCredentials: true }).then(res => {
      setUsername(res.data.username)
      setEmail(res.data.emailAddress)
    })
      .catch(reason => reason.response.status === 401 && navigate('/Login'))
  })
  const amountHandler = (e) => {
    console.log(e)
    SetAmount(parseInt(e.target.value))
    if(e.target.id === 'monthly') {
      setDropdownY(false)
      setDropdownM(true)
    }
    else{
      setDropdownM(false)
      setDropdownY(true)
    }
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    setExpiration((prev)=>{
      prev.split(' / ')
    })
    console.log(expirationDate)
    await axios.post('https://localhost:7291/api/StripeContoller/customer/add', {
      email: email,
      name: userName,
      creditCard: {
        name: e.target[3].value,
        cardNumber: card,
        expirationYear: `20${expirationDate[5]}${expirationDate[6]}`,
        expirationMonth: `${expirationDate[0]}${expirationDate[1]}`,
        cvc: cvc
      }
    }, {withCredentials: true }).then(res => {
      console.log(res.data)
      setDetails(res.data.customerId)
      console.log(details)
      setDone(true)
    }).catch(reason => reason.response.status !== 200 && navigate('/Checkout/Failed'))
  }

  useEffect(()=>{
    if(isDone){
      axios.post('https://localhost:7291/api/StripeContoller/payment/add', {
          customerId: details,
          receiptEmail: email,
          description: "Subscription payment succeeded",
          currency: "eur",
          amount: amount
        }, { withCredentials: true }).then(response => {
          console.log(response)
          const data = {email: email, role: 'SubscribedUser'}
          axios.post('https://localhost:7291/api/Setup/AddUserToRole',data, {withCredentials: true}).then(res => console.log(res))
          setDone(false)
          navigate('/Checkout/Success' , {replace: true})
        }).catch(reason => reason.response.status !== 200 && navigate('/Checkout/Failed' , {replace: true}))
    }
  }, [isDone])


  const handleChangeCardNumber = (e) =>{
    setCard(e.target.value)
  }
  const handleChangeExpiryDate = (e) =>{
    console.log(e.target.value)
    setExpiration(`${e.target.value}`)
    
  }
  const handleChangeCVC = (e) =>{
    setCvc(e.target.value)
  }
  

  return (
    <div className='flex justify-center h-[80vh] gap-5'>
      <div className='flex p-10 w-[40%] translate-y-24 gap-5'>
      <div>
      <input type="radio" id='monthly' onChange={amountHandler} value={499} name='subscription' className='hidden peer checkmark' />
      <label htmlFor="monthly" className='flex cursor-pointer flex-col h-[25vh] pr-10 pl-3 gap-5 peer-checked:shadow-lg py-6 border-2 duration-300 border-gray-300 bg-white z-30 rounded-xl peer-checked:rounded-b-none peer-checked:border-emerald-900 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:hover:bg-emerald-600 peer-checked:active:bg-emerald-700 active:bg-gray-400 hover:bg-gray-200'>
            <p className='text-2xl font-medium'><Trans i18nKey="description.subs0"></Trans></p>
            <p className='text-lg font-thin'><Trans i18nKey="description.subs1"></Trans></p>
      </label>
      <div className={dropdownM ? 'flex py-3 px-3 flex-col w-full h-[16.6vh] shadow-lg rounded-b-xl border-2 border-t-0 border-gray-300 bg-white duration-300 translate-y-0 visible ' : 'invisible duration-300 h-0'}>
            <p className={dropdownM ? 'font-thin visible duration-75' : 'font-thin invisible'}><Trans i18nKey="description.subs2"/></p>
            <p className={dropdownM ? 'font-thin visible duration-75' : 'font-thin invisible'}><Trans i18nKey="description.subs3"/></p>
            <p className={dropdownM ? 'font-thin visible duration-75' : 'font-thin invisible'}><Trans i18nKey="description.subs4"/> <span className='font-medium'>€4.99</span></p>
      </div>
      </div>
      <div>
      <input type="radio" id='yearly' onChange={amountHandler} value={4199} name='subscription' className='hidden peer checkmark' />
      <label htmlFor="yearly" className='flex cursor-pointer flex-col h-[25vh] pr-10 gap-5 pl-3 py-6 border-2 peer-checked:shadow-lg duration-300 border-gray-300 z-20 rounded-xl peer-checked:rounded-b-none peer-checked:border-emerald-900 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:hover:bg-emerald-600 peer-checked:active:bg-emerald-700 active:bg-gray-400 hover:bg-gray-200'>
        
            <p className='text-2xl font-medium'><Trans i18nKey="description.subs5"/></p>
            <p className='text-lg font-thin'><Trans i18nKey="description.subs6"/></p>
      </label>
      <div className={dropdownY ? 'flex py-3 px-3 flex-col w-full h-[16.6vh] shadow-lg border-2 rounded-b-xl border-t-0 border-gray-300 bg-white duration-300 translate-y-0 visible ' : 'invisible duration-300 h-0'}>
            <p className={dropdownY ? 'font-thin visible duration-75' : 'font-thin invisible'}><Trans i18nKey="description.subs2" /></p>
            <p className={dropdownY ? 'font-thin visible duration-75' : 'font-thin invisible'}><Trans i18nKey="description.subs7" /></p>
            <p className={dropdownY ? 'font-thin visible duration-75' : 'font-thin invisible'}><Trans i18nKey="description.subs4" /><span className='font-medium'>€41.99</span></p>
      </div>
      </div>
      </div>
      <div className='flex items-center rounded-xl'>
        
        <form onSubmit={onSubmit} className='flex flex-col items-center shadow-lg gap-10 border border-gray-300 rounded-xl p-16 '>
          <h1 className='text-xl font-medium'><Trans i18nKey="description.info0"/></h1>
          <input type="text" name='fullname' placeholder="Full Name" className='px-2 py-1 border w-56 border-gray-300 rounded-full'/>
          <input {...getCardNumberProps({ onChange: handleChangeCardNumber })}  className='px-2 py-1 w-56 border border-gray-300 rounded-full'/>
          <div className='flex gap-3'>
          <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}  className='px-2 py-1 w-20 border border-gray-300 rounded-full'/>
          <input {...getCVCProps({ onChange: handleChangeCVC })}  className='px-2 py-1 border w-20 border-gray-300 rounded-full'/>
          </div>
          {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
          <button type='submit' className='bg-orange-500 px-10 py-3 rounded-full hover:bg-orange-400 active:bg-orange-700 duration-150 shadow-lg text-white text-lg font-medium active:shadow-md'><Trans i18nKey="description.info1" /></button>
        </form>
      </div>
    </div>
  )
}

export default Checkout