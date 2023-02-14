import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Parallax } from 'react-parallax'
import { useNavigate, useParams } from 'react-router'
import { Trans } from 'react-i18next';
import i18next from 'i18next'


const RecipePage = () => {
  const Param = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [recipe, setRecipe] = useState([])
  const [PortionAmount, setPortionAmount] = useState(1)
  const [isDone, setDone] = useState()
  const [steps, setSteps] = useState([])
  const [ingredients, setIngredients] = useState([])

  React.useEffect(() => {
    axios.get('https://localhost:7291/api/Users/GetUser', { withCredentials: true }).then(res => {
      setUser(res.data.roles.includes('SubscribedUser'))
      setDone(true)
    }).catch(
      reason => {
        console.log(reason)
        reason.response.status == 401 && navigate('/Login')
      }
    )
  }, [])
  React.useEffect(() => {
    if (isDone) {
      async function fetchData() {
        await axios.get(`https://localhost:7291/api/Recipes/${Param.id}`, { withCredentials: true }).then(res => {
          if (res.data.isPremium) {
            if (!user) navigate('/Subscriptions', { replace: true })
          }
          setRecipe(res.data)
          setSteps(res.data.steps.split('\\\\'))
        })

        await axios.get('https://localhost:7291/api/Ingredients', { withCredentials: true }).then(res => {
          setIngredients(res.data)
          
        })
      }
      fetchData()
      setDone(false)
    }
  }, [isDone])
  const IncreaseServing = () => {
    setPortionAmount(PortionAmount + 1)

  }
  const DecreaseServing = () => {
    PortionAmount > 1 && setPortionAmount(PortionAmount - 1)

  }


  return (
    <div>
      <Parallax bgImage={recipe.imageLink} className='bg-black ' renderLayer={(percentage) => (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `rgba(0, 0, 0, ${percentage * 0.4})`,
          }}
        />
      )} strength={300}><p className='w-full object-scale-down h-[40vh] md:h-[70vh] lg:h-[78vh] xl:h-[78vh]'></p></Parallax>
      <div className='flex justify-between mx-10 py-10 px-10 my-5 border-b-2 border-b-gray-300'>
        <h1 className='font-medium text-4xl'>{recipe.name}</h1>
        <div className='flex gap-2 items-center'>
          <button onClick={DecreaseServing} className='text-xl select-none px-2 rounded-md hover:bg-gray-200 active:bg-gray-500 border border-gray-400 hover:border-gray-300 active:border-gray-500 hover:scale-105 active:scale-95 duration-300 bg-gray-300' >-</button>
          <span className='font-medium select-none text-lg'>{PortionAmount} {PortionAmount > 1 ? "Servings" : "Serving"}</span>
          <button onClick={IncreaseServing} className='text-xl select-none px-2 rounded-md hover:bg-gray-200 active:bg-gray-500 border border-gray-400 hover:border-gray-300 active:border-gray-500 hover:scale-105 active:scale-95 duration-300 bg-gray-300' >+</button>
        </div>
      </div>
      <div className='flex gap-16 p-10 justify-around'>
        <div className=''>
          <div className='mx-5 border-2 rounded-xl h-full w-[30rem] p-5 border-gray-300'>
            <div className='py-2 border-b-2 border-b-gray-300 mb-2'>
              <h1 className='text-2xl text-center font-medium '><Trans i18nKey="description.recipe3" /></h1>
            </div>
            <div className='flex flex-col mt-7 w-full gap-3 mx-3'>

              {ingredients.filter((item) => recipe.ingredientIds.includes(item.id)).map(item => (
                <p className='text-lg border-b border-b-gray-200 py-2 font-medium' key={item.id}>{item.name} - {recipe.ingredientQuantity.filter((i) => i.ingredientId === item.id).map(i => i.quantityType === 'pc' ? i.quantity * PortionAmount + ' ' + i.quantityType : i.quantity * PortionAmount + i.quantityType)}</p>
              ))}
            </div>
          </div>
        </div>
        <div className='p-10 mx-5'>
          <h1 className='text-3xl font-medium mb-10'><Trans i18nKey="description.recipe4" /></h1>
          {steps.map(item => (
            <div className='flex flex-col py-3' key={item[0]}>
              <h1 className='text-xl font-medium'><Trans i18nKey="description.recipe5" /> {item.substring(0, 1)}</h1>
              <p className='flex gap-5 font-normal text-xl' >{item.substring(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipePage