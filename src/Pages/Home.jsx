import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import About from './About'

const Home = () => {

    useGSAP(() => {
        let tl = gsap.timeline()

        tl.from('.subHeading span', {
            y: 60,
            duration: 1,
            stagger: .5,
            ease: "power4.out",
            delay: .5
        })

        tl.from('.mainHeading span', {
            y: 80,
            duration: 1,
            ease: "power4.out",
        })

    })

    const mainHeadingRef = useRef(null);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                mainHeadingRef.current.classList.remove('mainHeading');
            } else {
                mainHeadingRef.current.classList.add('mainHeading');
            }
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className='hero-section w-[75%] m-auto'>
                <div className="video-background">
                    <video id="myVideo" muted autoPlay loop src='\hero-bg.mp4' />
                </div>
                <div className="overlay-content text-white relative top-1/2 -translate-y-1/2">
                    <p className='text-[2.5rem] overflow-hidden subHeading'><span>Stronger,</span> <span>Fitter,</span> <span>Better</span> –</p>
                    <h1
                        ref={mainHeadingRef}
                        className='text-[5rem] overflow-hidden leading-[5rem] mainHeading'
                    >
                        Welcome to <span className='text-[--main-color]'>Fitness Place</span>!
                    </h1>
                </div>
            </section>
            <About />
        </>
    );
}

export default Home