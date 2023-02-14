import React from 'react'
import { Parallax } from 'react-parallax'
import LoginForm from '../Components/LoginForm'
import SmallImage from '../Images/Foodies - Food Delivery 1.png'
import BackgroundImage from '../Images/sol-ingrao-pw19GpDRZic-unsplash.jpg'

const LoginAdmin = () => {
  return (
    <div className=''>
        <Parallax bgImage={BackgroundImage} className='w-full h-screen flex justify-center lg:justify-end items-center relative bg-black' bgStyle={'filter: brightness (.5)'} strength={300} blur={5}>
    <div className='flex flex-row bg-white rounded-xl gap-10 mx-auto lg:mx-52 p-10 drop-shadow-2xl'>
        <LoginForm />
        <img src={SmallImage} alt="" width={350} className='hidden lg:flex'/>

    </div>
    </Parallax>
    </div>
  )
}

export default LoginAdmin