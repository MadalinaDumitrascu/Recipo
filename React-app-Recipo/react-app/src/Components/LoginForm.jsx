import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import LoginAltButtons from './LoginAltButtons'
import { Trans } from 'react-i18next';

const LoginForm = () => {
  const [user, SetUser] = useState({})
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const navigate = useNavigate()
  const apiUrl = 'https://localhost:7291/api/Users/Login';
  const LoginUser = async (e) => {
    e.preventDefault();
    const data = { email: user.email, password: user.password };

    await axios.post(apiUrl, data, { withCredentials: true }).then((result) => {
      localStorage.setItem('Authorized', 'true')
    }).catch(reason => {
      console.log(reason)
      if (reason.response.data.errors.Email || reason.response.data.errors.email) setEmailError(true)
      else setEmailError(false)
      if (reason.response.data.errors.Password || reason.response.data.errors.password) setPasswordError(true)
      else setPasswordError(false)
    });
    if (localStorage.getItem('Authorized') == 'true') navigate('/Dashboard')

  }

  const onChange = (e) => {
    const value = e.target.value;
    SetUser({
      ...user, [e.target.name]: value
    })
  }
  return (
    <div>
      <form className='flex flex-col items-center' onSubmit={LoginUser}>
        <h1 className='text-2xl font-medium m-2 mt-10 mb-10'><Trans i18nKey="description.started3" /></h1>
        <LoginAltButtons />
        <div className='flex flex-col gap-2 my-2 items-center'>
          <div className='flex flex-col'>
            {emailError ? <p className='flex gap-1 items-center mx-2 text-red-500'><AiOutlineExclamationCircle /><Trans i18nKey="description.started4" /> </p> : null}
            <input type="text" name='email' placeholder='Email' autoComplete='none' onChange={onChange} className={emailError ? 'border border-red-500 placeholder:text-red-700 rounded-full px-3 py-1 outline-none m-2' : 'border border-gray-400 rounded-full px-3 py-1 outline-none m-2 '} />
          </div>
          <div className='flex flex-col '>
            {passwordError ? <p className='flex gap-1 items-center mx-2 text-red-500'><AiOutlineExclamationCircle /> <Trans i18nKey="description.started5" /></p> : null}
            <input type="password" name='password' placeholder='Password' onChange={onChange} className={passwordError ? 'border border-red-500 placeholder:text-red-700 rounded-full px-3 py-1 outline-none m-2' : 'border border-gray-400 rounded-full px-3 py-1 outline-none m-2 '} />
          </div>
          <Link className='text-orange-500 hover:text-orange-400 active:text-orange-700 underline mb-3 underline-offset-2'><Trans i18nKey="description.started6" /></Link>
        </div>

        <button type='submit' className='bg-orange-500 shadow-md mx-2 text-white hover:bg-orange-400 active:bg-orange-600 rounded-full px-6 py-2 duration-300'><Trans i18nKey="description.started3" /></button>
      </form>
      <div className='flex gap-1 mt-12'>
        <p className='text-lg font-thin'><Trans i18nKey="description.login1" /></p><Link className='text-lg underline hover:text-orange-300 duration-100 active:text-orange-700 text-orange-500' to='/Register'><Trans i18nKey="description.login0" /></Link>
      </div>
    </div>
  )
}

export default LoginForm