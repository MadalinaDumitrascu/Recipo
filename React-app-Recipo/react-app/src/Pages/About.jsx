import React from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImage from '../Images/Strawberries.jpg'
import { useTranslation, Trans } from 'react-i18next';


const lngs = {
    en: { nativeName: 'English' },
    ro: { nativeName: 'Romana' }
};
const About = () => {
    const { t, i18n } = useTranslation();
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
                        <div>
                            {Object.keys(lngs).map((lng) => (
                                <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                    {lngs[lng].nativeName}
                                </button>
                            ))}
                        </div>
                        <h1 className='text-3xl font-semibold'><Trans i18nKey="description.about0">.</Trans></h1>
                        <div className='flex flex-col gap-3'>
                           
                            <p className='text-xl '><Trans i18nKey="description.about1"></Trans></p>

                            <p className='text-xl'><Trans i18nKey="description.about2"></Trans></p>

                            <p className='text-xl'><Trans i18nKey="description.about3"></Trans></p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-3xl font-semibold'><Trans i18nKey="description.recipo0"></Trans></h1>
                        <div className='flex flex-col gap-3'>
                            <p className='text-xl'><Trans i18nKey="description.recipo1"></Trans></p>

                            <p className='text-xl'><Trans i18nKey="description.recipo2"></Trans></p>

                            <p className='text-xl'><Trans i18nKey="description.recipo3"></Trans></p>

                            <p className='text-xl'><Trans i18nKey="description.recipo4"></Trans></p>
                        </div>
                    </div>

                </div>
            </Parallax>
        </div>
    )
}

export default About