import React from 'react'

const FilterRadio = ({Name, id, onTrigger}) => {
  return (
    <div>
        <input type="radio" id={Name} name='ingredientsfilter'  value={id} onClick={onTrigger} className='hidden peer filter'/>
        <label htmlFor={Name} className='py-3 px-5 duration-150 peer-checked:shadow-md bg-white border rounded-full border-gray-400 text-gray-400 peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:hover:bg-orange-400 peer-checked:hover:border-orange-400 peer-checked:text-white hover:border-orange-500 hover:text-orange-500 active:bg-orange-700 active:text-white peer-checked:active:bg-orange-700 cursor-pointer select-none'>{Name}</label>
    </div>
  )
}

export default FilterRadio