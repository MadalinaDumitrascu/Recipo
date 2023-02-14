import axios from 'axios'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { useState } from 'react'
import { Trans } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import LoginAltButtons from './LoginAltButtons'


const LoginAdminForm = () => {
    const [user, SetUser] = useState({})
    const navigate = useNavigate()
    const apiUrl = 'https://localhost:7291/api/Users/Login';
    const LoginUser = async (e) => {
        e.preventDefault();
        const data = { email: user.email, password: user.password };
        console.log(data);
        await axios.post(apiUrl, data).then(async (result) => {
            console.log(result);
            localStorage.setItem("username", token.Username)
            navigate('/Dashboard')
        });

    }
    const onChange = (e) => {
        const value = e.target.value;
        SetUser({
            ...user, [e.target.name]: value
        })
    }
    return (
        <div>

            <form action="" className='flex flex-col items-center' onSubmit={LoginUser}>
                <h1 className='text-2xl font-medium m-2 mt-10 mb-10'>Sign In</h1>
                <LoginAltButtons />
                <div className='flex flex-col gap-2 my-2'>
                    <input required type="text" name='email' placeholder='Email' onChange={onChange} className='border border-gray-400 rounded-full px-3 py-1 outline-none m-2 ' />
                    <input required type="password" name='password' placeholder='Password' onChange={onChange} className='border border-gray-400 rounded-full px-3 py-1 outline-none m-2 ' />
                </div>
                <button className='bg-orange-500  mx-2 text-white hover:bg-orange-400 active:bg-orange-600 rounded-full px-6 py-2 duration-300'>Login</button>

            </form>
            <div className='flex gap-1 mt-12'>
                <p className='text-lg font-thin'><Trans i18nKey="description.login1" /></p><Link className='text-lg underline hover:text-orange-300 duration-100 active:text-orange-700 text-orange-500' to='/Register'><Trans i18nKey="description.login0" /></Link>

            </div>
        </div>
    )
}

export default LoginAdminForm