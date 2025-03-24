import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const PreLoader = () => {

    useGSAP(() => {
        gsap.timeline()
            .fromTo(
                ".preloader-img",
                { x: "-100vw", rotate: 0, opacity: 0 },
                { x: "0vw", rotate: 360, opacity: 1, duration: 2.5, scale:1.5 , ease: "elastic.out(1,0.75)" }
            )
            .to(".preloader-img", {
                x: "100vw",
                rotate: 720,
                scale:1,
                duration: 2,
                ease: "power2.in",
            });



    }, []);

    return (
        <div className="preloader overflow-hidden">
            <img src="/gymlogo.png" alt="loading" className='preloader-img w-[10rem]' />
            <h4 className='text-6xl mt-8'>FITNESS <span className='text-[--main-color]'>PLACE</span></h4>
        </div>
    )
}

export default PreLoader