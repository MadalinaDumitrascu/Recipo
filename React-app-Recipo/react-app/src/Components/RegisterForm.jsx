import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';


function RegisterForm() {
    const [user, SetUser] = useState({})
    const [usernameError, setUsernameError] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [cPasswordError, setCPasswordError] = useState(Boolean)
    const navigate = useNavigate()
    const apiUrl = 'https://localhost:7291/api/Users/Register';

    const AddUser = async(e) => {
        e.preventDefault();
        const data = { userName: user.username, email: user.email, password: user.password, confirmPassword: user.confirmpassword };
        console.log(data);
        await axios.post(apiUrl, data).then(result => {
            navigate('/Login')
        }).catch(reason => {
            console.log(reason)
            const errors = reason.response.data.errors
            if(errors.Email || errors.email) setEmailError(true)
            else setEmailError(false)
            if(errors.UserName || errors.userName) setUsernameError(true)
            else setUsernameError(false)
            if(errors.Password || errors.password) setPasswordError(true)
            else setPasswordError(false)
            if(errors.ConfirmPassword || errors.confirmPassword) setCPasswordError(true)
            else setCPasswordError(false)
            
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
            <form className='flex flex-col items-center' onSubmit={AddUser}>
                <h1 className='text-2xl font-medium m-2 mt-10 mb-10'>Join us</h1>
                <div className='flex flex-col gap-5 items-center'>
                    <div className='flex flex-col'>
                        {usernameError ? <p className='flex text-red-500  gap-2 items-center'><AiOutlineExclamationCircle /><Trans i18nKey="description.regform0" /> </p> :null}
                    <input type="text" name='username' autoComplete='none' placeholder='Username' className={usernameError ?'border border-red-500 placeholder:text-red-700 rounded-full px-3 py-1 outline-none m-2' :'border border-gray-400 rounded-full px-3 py-1 outline-none m-2'} onChange={onChange} />
                    </div>
                    <div className='flex flex-col'>
                        {emailError ? <p className='flex text-red-500  gap-2 items-center'><AiOutlineExclamationCircle /><Trans i18nKey="description.regform1" />  </p> :null}
                    <input  type="text" name='email' autoComplete='none' placeholder='Email' className={emailError ?'border border-red-500 placeholder:text-red-700 rounded-full px-3 py-1 outline-none m-2' :'border border-gray-400 rounded-full px-3 py-1 outline-none m-2'} onChange={onChange} />
                    </div>
                    <div className='flex flex-col'>
                        {passwordError ? <p className='flex  text-red-500 gap-2 items-center'><AiOutlineExclamationCircle /><Trans i18nKey="description.regform2" /></p> :null}
                    <input type="password" name='password' placeholder='Password' className={passwordError ?'border border-red-500 placeholder:text-red-700 rounded-full px-3 py-1 outline-none m-2' :'border border-gray-400 rounded-full px-3 py-1 outline-none m-2'} onChange={onChange} />
                    </div>
                    <div className='flex flex-col'>
                        {cPasswordError ? <p className='flex text-red-500  gap-2 items-center'><AiOutlineExclamationCircle /><Trans i18nKey="description.regform3" /></p> :null}
                    <input type="password" name='confirmpassword' placeholder='Confirm Password' className={cPasswordError ?'border border-red-500 placeholder:text-red-700 rounded-full px-3 py-1 outline-none m-2' :'border border-gray-400 rounded-full px-3 py-1 outline-none m-2'} onChange={onChange} />
                    </div>

                </div>
                <button type='submit' className='bg-orange-500 mx-2 text-white hover:bg-orange-400 active:bg-orange-700 rounded-full px-6 py-2 duration-300 my-5 '><Trans i18nKey="description.login0" /></button>
                <p className='font-thin flex gap-1 whitespace-nowrap'><Trans i18nKey="description.regform4" /><Link className='underline underline-offset-2 hover:text-orange-400 duration-150 active:text-orange-700 font-medium text-orange-500' to="/Login"><Trans i18nKey="description.started3" /></Link></p>

            </form>
        </div>
    )
}

export default RegisterForm