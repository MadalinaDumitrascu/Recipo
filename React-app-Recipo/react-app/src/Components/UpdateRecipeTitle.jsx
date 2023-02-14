import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { RecipeTitle } from '../State'

const UpdateRecipeTitle = () => {
  const [title, setTitle] = useAtom(RecipeTitle)
  const titleInput = document.querySelector('#title')
  useEffect(() => {
    console.log(title);
    console.log(titleInput);
    document.querySelector("#title").value = title
  },[title])
  const GetTitle = (e) => {

      setTitle(e.target.value)
  }
  return (
    <div className='flex flex-col gap-10 h-[30vh] items-center'>
      <h1>Step 1 - Recipe Title</h1>
      <input type="text" id='title' onInput={GetTitle} className='border-2 w-[200%] border-gray-300 rounded-full px-3 py-1 duration-300 outline-none focus:border-gray-600 placeholder:duration-300 focus:placeholder:placeholder-gray-300' placeholder='Title'/>
    </div>
  )
}

export default UpdateRecipeTitle