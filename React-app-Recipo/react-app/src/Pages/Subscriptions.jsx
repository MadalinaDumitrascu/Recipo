import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import SubscriptionCardsSection from '../Components/SubscriptionCardsSection'
import SubscriptionHero from '../Components/SubscriptionHero'

const Subscriptions = () => {
  
  const navigate = useNavigate()
  React.useEffect(()=>{
    axios.get('https://localhost:7291/api/Users/GetUser', {withCredentials: true}).then(res => {
      console.log(res)
    }).catch((reason)=>{
      reason.response.status !== 200 && navigate('/Login')
    })
  },[])
  return (
    <div>
        <SubscriptionHero/>
        <SubscriptionCardsSection/>
    </div>
  )
}

export default Subscriptions