import React from 'react'
import { Parallax } from 'react-parallax'
import RegisterForm from '../Components/RegisterForm'
import BackgroundImage from '../Images/sol-ingrao-pw19GpDRZic-unsplash.jpg'
import PeopleImage from '../Images/Foodies_-_Go_Green.png'

const Register = () => {
    return (
        <>
            <div>
                <Parallax bgImage={BackgroundImage} className='w-full h-screen flex justify-center lg:justify-end items-center relative bg-black' bgStyle={'filter:brightness(.5)'} strength={300} blur={5}>
                    <div className='flex bg-white rounded-xl gap-10 mx-auto lg:mx-52 p-10 drop-shadow-2xl'>
                        <RegisterForm />
                        <img src={PeopleImage} alt="" width={450} className='hidden md:w-[65%] lg:flex my-20 p-8 xl:p-0' />
                    </div>
                </Parallax>
            </div>

        </>
    )
}

export default Register