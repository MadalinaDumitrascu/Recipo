import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import PremiumAd from '../Components/PremiumAd'
import PremiumAddRecipes from '../Components/PremiumAddRecipes'
import RecipeSection from '../Components/RecipeSection'


const Recipes = () => {
  const [isPremium, setIsPremium] = React.useState()
  const navigate = useNavigate()
  React.useEffect(()=>{
    axios.get('https://localhost:7291/api/Users/GetUser', {withCredentials: true}, navigate).then(res => {
      setIsPremium(res.data.roles.includes('SubscribedUser'))
    }).catch((reason)=>{
      reason.response.status !== 200 && navigate('/Login')
    })
  },[])

  
  
  return (
    <div>
      {isPremium ? <PremiumAddRecipes/> :<PremiumAd />}
      <RecipeSection UserPremium={isPremium}/>
      
    </div>
  )
}

export default Recipes