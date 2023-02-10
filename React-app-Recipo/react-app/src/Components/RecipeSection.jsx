import axios from 'axios'
import React, { useState } from 'react'
import RecipePageCard from './RecipePageCard'
import { Trans } from 'react-i18next';

const RecipeSection = ({UserPremium}) => {
    const [recipes, setRecipes] = useState([])
    const [selectedIngredients] = useState(JSON.parse(localStorage.getItem('ingredients')))
    React.useEffect(()=>{
        axios.post(`https://localhost:7291/api/Recipes/IngredientsinRecipe`, selectedIngredients, {withCredentials: true}).then(res => {
          setRecipes(res.data.data)
        })
      },[])
    
  return (
    <div>
        <div className='px-10 mx-16 py-10 border-b border-b-gray-300'>
        <h1 className='text-3xl font-thin '><Trans i18nKey="description.section0" /></h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center  gap-10 p-10'>
            {recipes.map(item => (
                
                <RecipePageCard className='col-span-1' key={item.id} id={item.id} title={item.name} image={item.imageLink} steps={item.steps} isPremium={item.isPremium} Id={item.id} Favorite={item.favorite} User={UserPremium}/>
            ))}
        </div>

    </div>
  )
}

export default RecipeSection