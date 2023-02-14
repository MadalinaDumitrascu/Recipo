import React from 'react'

import DashboardCategories from '../Components/DashboardCategories'
import DashboardHeader from '../Components/DashboardHeader'
import PremiumAddRecipes from '../Components/PremiumAddRecipes'
import PremiumDashboardSection from '../Components/PremiumDashboardSection'

const Dashboard = () => {
  const [userRole, setUserRole] = React.useState([])

  const ParentCallback = (childData) => {
    setUserRole(childData)
  }
  
  return (
    <>
        <DashboardHeader ParentCallback={ParentCallback}/>
        {userRole.includes('SubscribedUser') ? <PremiumDashboardSection/>:<PremiumAddRecipes />}
        
        <DashboardCategories />
    </>
  )
}

export default Dashboard