import axios from 'axios'
import React, { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const UserRecipe = ({title, image, steps, Id}) => {
    const [dropdown, setDropdown] = useState();
    const navigate = useNavigate()
    const RecipeSteps = steps.split('\\\\')
    
    const Delete = () => axios.delete(`https://localhost:7291/api/Recipes/${Id}`, { withCredentials: true }).then(res => console.log(res))
    
    const ToUpdate = () => {
        navigate(`/Update/${Id}`)
    }
    const ToRecipe = ()=>{
        navigate(`/Recipes/${Id}`)
    }
    const openDropdown = () => {
        setDropdown(true)
    }
    const closeDropdown = () => {
        setDropdown(false)
    }
    return (
      <div className="relative" key={Id}>
        <div className={dropdown ? "w-full h-screen absolute z-20" : ""}></div>
        <div
          onBlur={closeDropdown}
          className={
            dropdown
              ? "bg-white shadow-lg absolute rounded-xl border-2 duration-200 border-gray-200 px-10 z-20 flex gap-3 origin-top-left flex-col py-5"
              : "bg-white shadow-lg absolute rounded-xl border-2 duration-100 border-gray-200 px-10 z-20 flex gap-3 flex-col py-5 origin-top-left scale-0 invisible"
          }
        >
          <p className="text-lg">Are You Sure?</p>
          <div className="flex gap-5 items-end">
            <button
              onClick={closeDropdown}
              onMouseDown={Delete}
              className="bg-orange-500 rounded-lg shadow-md delay-100 hover:bg-orange-300 duration-200 active:bg-orange-700 text-white px-5 py-2"
            >
              Yes
            </button>
            <button
              onClick={closeDropdown}
              className="bg-red-600 hover:bg-red-400 rounded-lg shadow-md active:bg-red-900 duration-200 text-white px-5 py-2"
            >
              No
            </button>
          </div>
        </div>
        <div className="flex flex-col border-2 group rounded-xl select-none relative w-[400px] h-[500px] hover:scale-[1.07] active:scale-[1.02] p-3 duration-300">
          <div
            onClick={ToRecipe}
            className="bg-gradient-to-b rounded-xl from-transparent via-transparent to-white/90 absolute w-[90%] h-[97%]"
          ></div>

          <div className="flex justify-center">
            <div className="flex justify-between w-[85%] z-10 absolute">
              <FaTrashAlt
                onClick={openDropdown}
                className="m-2 invisible group-hover:visible hover:scale-[1.20] active:scale-110 active:text-red-700 hover:text-red-400 drop-shadow text-white group-hover:duration-200"
                size={23}
              />
              <BsPencilSquare
                onClick={ToUpdate}
                className="m-2 invisible group-hover:visible hover:scale-[1.20] active:scale-110 active:text-amber-600 drop-shadow hover:text-amber-400 text-white group-hover:duration-200"
                size={23}
              />
            </div>
            <img
              src={image}
              alt=""
              className="w-[350px] h-[250px] rounded-xl"
            />
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-thin">{title}</h1>
          </div>
          <div className="p-5 flex flex-col gap-2 overflow-hidden">
            {RecipeSteps.map((item) => (
              <div className="mb-3">
                <h1 className="font-medium text-lg mb-2">
                  Step {item.substring(0, 1)}
                </h1>
                <p className="font-medium">{item.substring(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default UserRecipe