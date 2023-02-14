import { React, useRef } from 'react'
import { Parallax } from 'react-parallax'
import BackgroundImage from '../Images/pasta.jpg'
import emailjs from '@emailjs/browser';
import { Trans } from 'react-i18next';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_inj98kg', 'template_xmwctmf', form.current, 'DR4gQHLbVtzT2Z2B5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div className='grid-cols-2  items-center ' >
            <Parallax bgImage={BackgroundImage} className='w-full h-screen flex items-center relative bg-black justify-center' renderLayer={(percentage) => (
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: `rgba(0, 0, 0, ${percentage * 0.5})`,
                    }}
                />
            )} strength={0} blur={5}>
                <div className='bg-white drop-shadow-lg p-20 rounded-xl flex flex-col'>
                    <h1 className='text-5xl font-semibold'><Trans i18nKey="description.contact0"/></h1>



                    <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center gap-10 p-20 rounded-xl  '>
                        <input className='border border-gray-400 px-4 py-2 rounded-full' type="text" placeholder='Your name' name='user_name' required />
                        <input className='border border-gray-400 px-4 py-2 rounded-full' type="email" placeholder='Your email' name='email' required />
                        <input className='border border-gray-400 px-4 py-2 rounded-full' name="message" required cols="30" rows="10" placeholder='Your message' />
                        <button className='bg-orange-500 rounded-full px-4 py-2 drop-shadow-lg hover:bg-orange-400 text-white duration-200 active:bg-orange-700' type='submit'><Trans i18nKey="description.contact2" /></button>
                    </form>


                </div>

            </Parallax>

        </div>
    )
}

export default Contact