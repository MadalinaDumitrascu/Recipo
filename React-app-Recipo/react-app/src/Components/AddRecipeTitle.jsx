import { useAtom } from 'jotai'
import React from 'react'
import { RecipeTitle } from '../State'
import { Trans } from 'react-i18next';

const AddRecipeTitle = () => {
  const [title, setTitle] = useAtom(RecipeTitle)

  const GetTitle = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div className='flex flex-col gap-10 h-[30vh] items-center'>
      <h1><Trans i18nKey="description.recipe2"/></h1>
      <input type="text" onInput={GetTitle} className='border-2 w-[200%] border-gray-300 rounded-full px-3 py-1 duration-300 outline-none focus:border-gray-600 placeholder:duration-300 focus:placeholder:text-gray-300' placeholder='Title'/>
    </div>
  )
}

export default AddRecipeTitle