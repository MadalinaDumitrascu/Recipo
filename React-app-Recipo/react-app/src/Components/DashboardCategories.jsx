import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import CategoryCard from './CategoryCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PulseDashboardCategories from './PulseDashboardCategories'
import { Trans } from 'react-i18next';
const DashboardCategories = () => {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://localhost:7291/api/Categories', { withCredentials: true }).then(res => {
        setCategoryList(res.data)
      })
    }, 2753)
  }, [])
  return (
    <>
      <div className='bg-white flex items-center border-b-gray-400 border-b mx-10 px-10'>
        <h1 className='cursor-default  text-xl lg:text-3xl font-semibold p-7 mx-5 justify-start flex'><Trans i18nKey="description.recipe3" /></h1>

      </div>
      <div className='grid py-10 px-16 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-10 md:gap-x-20 lg:gap-x-32 mx-5 lg:mx-20'>
        {categoryList.length === 0 ?

          <PulseDashboardCategories />

          :
          categoryList.map((item) => (
            <Link key={"ingredients-" + item.id} to={'/Ingredients/' + item.id}><CategoryCard image={item.imageLink} text={item.name} id={item.id} /></Link>
          ))
        }
      </div>
    </>
  )
}

export default DashboardCategories