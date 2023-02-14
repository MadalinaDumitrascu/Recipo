import React from 'react'
import { FaCircle } from 'react-icons/fa'

const IngredientLabel = ({text, categoryId, ClickHandler, id}) => {

  return (
    <div>
        <input onChange={ClickHandler} data-category-id={categoryId} data-ingredient-id={id} type="checkbox" className='hidden peer checkmark' id={text}/>
        <label htmlFor={text} className='text-gray-500 border flex items-center border-gray-500 rounded-lg px-3 py-1 peer-checked:text-white peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:hover:bg-orange-400 peer-checked:hover:border-orange-400 hover:border-orange-500 hover:text-orange-500 peer-checked:shadow-md'><FaCircle size={10} className='mr-2'/>{text}</label>
    </div>
  )
}

export default IngredientLabel