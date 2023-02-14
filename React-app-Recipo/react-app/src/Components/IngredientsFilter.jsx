import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import FilterRadio from './FilterRadio'
import axios from 'axios'
import { Trans } from 'react-i18next';

const IngredientsFilter = ({parentCallback, FilterRef}) => {
    const [filterDropdown, setDropdown] = useState(false)
    const[isLarge, setIsLarge] = useState(window.innerWidth >= 1024 ? true : false)
    const[categoryList, setCategoryList] = useState([])
    const[Checkmark, setCheckmark] = useState([])

    React.useEffect(()=>{
      axios.get('https://localhost:7291/api/Categories', {withCredentials: true}).then(res => {
        setCategoryList(res.data)})
    }, [])

    const OpenClose = () => {
        setDropdown(!filterDropdown)
    }
    const onTrigger = (e) => {
        parentCallback(e.target.value) 
    }
    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth >= 1024) setIsLarge(true)
            else setIsLarge(false)
        }
        window.addEventListener('resize', handleResize)
    },[])
    useEffect(()=>{
        setCheckmark(document.querySelectorAll('.filter'))
    },[categoryList])
    useEffect(()=>{
        Checkmark.forEach(item=>{
        
            if(item.value === FilterRef.id){
                item.checked = true
            }
        })
    },[Checkmark])    
    
    
  return (
    <div className=''>
    <div className='p-6 mx-10 flex px-8 justify-between items-center border-b border-b-gray-400 z-10'>
        <div>
                  <h1 className='text-lg md:text-xl lg:text-2xl font-thin cursor-default '><Trans i18nKey="description.filter0" /></h1>
        </div>
        <div>
            <IoIosArrowDown size={42} className={!filterDropdown ? 'rounded-full p-2 active:bg-gray-300 hover:bg-gray-100 duration-200 lg:hidden visible': 'rounded-full p-2 active:bg-gray-300 hover:bg-gray-100 duration-150 lg:hidden rotate-180'} onClick={OpenClose}/>
        </div>
    </div>
    <div className={filterDropdown || isLarge ? 'flex gap-10 justify-center duration-300 flex-wrap py-7 mx-10 border-b border-b-gray-400 z-0 origin-top visible h-[20vh] lg:h-full ' : 'flex gap-10 justify-center duration-300 flex-wrap py-7 mx-10 border-b border-b-gray-400 z-0 scale-y-0 origin-top h-0'}>
            {categoryList.length === 0? <p>Loading...</p>:categoryList.map((item) =>(
                <FilterRadio key={item.id} Name={item.name} id={item.id} onTrigger={onTrigger}/>
            ) )}
    </div>
    
    </div>
  )
}

export default IngredientsFilter