import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginAltButtons = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row'>
            <Link to='' className='text-white bg-red-400 p-2 rounded-full mx-2 hover:bg-red-300 active:bg-red-600 duration-150'><FaGoogle size={25}/></Link>
            <Link to='' className='text-white bg-sky-700 p-2 rounded-full mx-2 hover:bg-sky-500 active:bg-sky-900 duration-150'><FaFacebookF size={25}/></Link>
        </div>
        <p className='font-thin text-xl my-5'>or</p>
    </div>
  )
}

export default LoginAltButtons