import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImage from '../Images/Strawberries.jpg'
import { useTranslation, Trans } from 'react-i18next';


const lngs = {
    en: { nativeName: 'English' },
    ro: { nativeName: 'Romana' }
};
const About = () => {
    
    return (
        <div className=''>
            <Parallax bgImage={BackgroundImage} className='w-full flex justify-center items-center  bg-black' renderLayer={(percentage) => (
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: `rgba(0, 0, 0, ${percentage * 0.5})`,
                    }}
                    
                />
                
            )} strength={0} blur={5}>
                <div className='bg-white shadow-lg flex flex-col items-start gap-20 justify-center p-20 m-32 rounded-xl'>
                    <div className='flex flex-col gap-4'>
                        
                        <h1 className='text-3xl font-semibold'><Trans i18nKey="description.about0"/></h1>
                        <div className='flex flex-col gap-3'>
                           
                            <p className='text-xl '><Trans i18nKey="description.about1"/></p>

                            <p className='text-xl'><Trans i18nKey="description.about2"/></p>

                            <p className='text-xl'><Trans i18nKey="description.about3"/></p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl font-semibold'><Trans i18nKey="description.recipo0"/></h1>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xl'><Trans i18nKey="description.recipo1"/></p>

                            <p className='text-xl'><Trans i18nKey="description.recipo2"/></p>

                            <p className='text-xl'><Trans i18nKey="description.recipo3"/></p>

                            <p className='text-xl'><Trans i18nKey="description.recipo4"/></p>
                        </div>
                    </div>

                </div>
            </Parallax>
        </div>
    )
}

export default About