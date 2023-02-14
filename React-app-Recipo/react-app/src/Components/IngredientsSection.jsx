import React, { useEffect, useState } from 'react'
import IngredientLabel from './IngredientLabel'
import axios from 'axios'
import { Trans } from 'react-i18next';

const  IngredientsSection = ({search, filter, ParentCallback}) => {
  const [baseList, setBaseList] = useState([])
  const [selectedIngredients, setSelected] = useState([])
  const [Checkmark, setCheckmark] = useState([])
  useEffect(()=>{
      setTimeout(() => {
        axios.get('https://localhost:7291/api/Ingredients', {withCredentials: true}).then(res => {
          setBaseList(res.data)
        })
      }, 1500)
  }, [])

  useEffect(()=>{
    ParentCallback(selectedIngredients)
  }, [selectedIngredients, Checkmark])

  useEffect(()=>{
    setCheckmark(document.querySelectorAll('.checkmark'))
  }, [baseList, filter, search])

   useEffect(()=>{
    Checkmark.forEach(element => {
      selectedIngredients.forEach(item => {
        if(item.name === element.id){
          element.checked = true 
        }
      })
      
    })
  },[Checkmark])

  const HandleClick = (e) => {
    if(e.target.checked){
      setSelected(prev =>{
        return [...prev, {id: parseInt(e.target.dataset.ingredientId), name:e.target.id, categoryId:parseInt(e.target.dataset.categoryId)}]
      })
    }
    else
    {
      setSelected(selectedIngredients.filter((item) => item.id != e.target.dataset.ingredientId))
    }
  }
  

  return (
    <div className='flex flex-col'>
      <div className={selectedIngredients.length <= 1 ? 'p-3 flex justify-center items-center visible' : 'p-3 invisible'}>
        <h1 className='font-thin text-xl '><Trans i18nKey="description.ingresec0" /></h1>
      </div>
      
      {baseList.length === 0 &&  <div className='my-20 flex justify-center items-center'><div className=' animate-spin border-t-gray-600 border-l-gray-200 border-r-4 border-r-gray-600 border-b-4 border-b-gray-200 border-t-4 border-l-4 rounded-full absolute w-7 h-7 m-2'></div><div className='w-7 h-7 m-2 border-4 border-black border-opacity-40 rounded-full absolute'></div></div>}
      
      {baseList.length > 0 && 
      <div className='flex flex-wrap justify-center mx-10 lg:mx-20 my-10 items-center gap-6 p-10'>
        
        {search === undefined ? filter !== 0 ? baseList.filter((item)=> item.categoryId == filter).map(item=>(
          <IngredientLabel key={item.id} ClickHandler={HandleClick} text={item.name} categoryId={item.categoryId} id={item.id}/>
          )
          ): 
          baseList.map(item => (
            <IngredientLabel key={item.id} ClickHandler={HandleClick} text={item.name} categoryId={item.categoryId} id={item.id}/>
          )) :
          filter !== 0? baseList.filter((item)=> item.categoryId == filter & item.name.toLowerCase().includes(search)).map(item=>(
            <IngredientLabel key={item.id} ClickHandler={HandleClick} text={item.name} categoryId={item.categoryId} id={item.id}/>
            )
            ): 
            baseList.filter((item) => item.name.toLowerCase().includes(search)).map(item => (
              <IngredientLabel key={item.id} ClickHandler={HandleClick} text={item.name} categoryId={item.categoryId} id={item.id} />
            ))}
          
          
      </div>}
      </div>
        )
}

export default IngredientsSection