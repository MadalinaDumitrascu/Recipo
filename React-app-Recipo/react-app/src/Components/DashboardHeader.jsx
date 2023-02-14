import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import PremiumFoodImage from '../Images/Foodies - Chef Top Menu.png'
import FoodImage from '../Images/Foodies - Noodle Soup.png'
import {  Trans } from 'react-i18next';

const DashboardHeader = ({ParentCallback}) => {
  const [username, setUsername] = React.useState('')
  const [userRole, setUserRole] = React.useState([])
  const navigate = useNavigate()
  
  React.useEffect(()=>{
    axios.get('https://localhost:7291/api/Users/GetUser', {withCredentials: true}).then(res => {
      setUserRole(res.data.roles)
      setUsername(res.data.username)
    }).catch((reason)=>{
      reason.response.status !== 200 && navigate('/Login')
    })

  },[])
  React.useEffect(()=>{    
    ParentCallback(userRole)
  },[userRole])
  
  return (
    <div className={userRole.includes('SubscribedUser') ? 'cursor-default flex justify-between flex-row p-10 sm:p-12 md:p-16 lg:p-20 text-white bg-gradient-to-br from-emerald-700 via-emerald-900 to-black items-center': 'cursor-default flex justify-between flex-row p-10 sm:p-12 md:p-16 lg:p-20 text-white bg-gradient-to-br from-orange-500 to-orange-900 items-center'}>
        <div>
        <h1 className='text-xl md:text-2xl lg:text-5xl font-medium drop-shadow-lg'><Trans i18nKey="description.dash0" /> {username.charAt(0).toUpperCase().concat(username.substring(1))}</h1>
        <br />
        <h5 className='text-sm md:text-lg lg:text-xl font-thin drop-shadow-lg'><Trans i18nKey="description.dash1" /></h5>
        </div>
        <div>
          {userRole.includes('SubscribedUser') ? <img src={PremiumFoodImage} alt="" className='hidden md:flex lg:flex md:w-[400px] lg:w-[600px]'/> :
          <img src={FoodImage} alt="" className='hidden md:flex lg:flex md:w-[400px] lg:w-[600px]'/>
}
        </div>
    </div>
  )
}

export default DashboardHeader