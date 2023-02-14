import React from 'react'
import { Trans } from 'react-i18next';

const NotFoundHeader = () => {
  return (
    <div className='flex w-full py-10 justify-center'>
      <h1 className='flex justify-start text-5xl font-extralight border-b-2 border-b-gray-400 py-6 w-[80%]'><Trans i18nKey="description.notfound3" /></h1>
    </div>
  )
}

export default NotFoundHeader