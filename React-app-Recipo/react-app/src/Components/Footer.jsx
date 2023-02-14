import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import { Trans } from 'react-i18next';

function Footer() {
    return (
        <div className='bg-black text-gray-500 flex flex-col gap-6 md:flex-row justify-around px-10 pt-5 pb-32'>
            <div className='flex flex-row md:flex-col  gap-3 '>
                <FaFacebookSquare size={35} className='cursor-pointer hover:text-gray-300' />
                <FaInstagramSquare size={35} className='cursor-pointer hover:text-gray-300' />
                <FaTwitterSquare size={35} className='cursor-pointer hover:text-gray-300' />
            </div>
            <div>
                <p className='text-gray-400 text-lg font-bold cursor-default'><Trans i18nKey="description.footer0" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer1" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer2" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer3" /></p>
            </div>
            <div>
                <p className='text-gray-400 text-lg font-bold cursor-default'><Trans i18nKey="description.footer4" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer5" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer6" /></p>
            </div>
            <div>
                <p className='text-gray-400 text-lg font-bold cursor-default'><Trans i18nKey="description.footer7" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer8" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer9" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer10" /></p>
                <p className='cursor-pointer hover:text-gray-300'><Trans i18nKey="description.footer11" /></p>
            </div>
        </div>
    )
}

export default Footer