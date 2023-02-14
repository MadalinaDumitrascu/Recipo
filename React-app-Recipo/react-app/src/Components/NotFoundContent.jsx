import React from 'react'
import { Link } from 'react-router-dom/dist'
import { Trans } from 'react-i18next';
const NotFoundContent = () => {
  return (
    <div className='flex flex-col px-10 md:px-32 lg:px-52 text-sm lg:text-lg mb-[374px]'>
      <p><Trans i18nKey="description.notfound0" /></p>
      <p><Trans i18nKey="description.notfound1" /><Link to='/' className='text-orange-500 underline underline-offset-[3px]'><Trans i18nKey="description.notfound2" /></Link></p>

    </div>
  )
}

export default NotFoundContent