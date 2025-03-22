import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ContactForm from '../Components/ContactForm'

const Contact = () => {

  useGSAP(() => {
    let tl = gsap.timeline()

    tl.from('.contact-parent h3', {
      x: -80,
      duration: 1,
      opacity: 0,
      // stagger: .5,
      ease: "power4.out",
    })
  })

  return (
    <section className='contact-section'>
      <div className='w-[80%] mx-auto'>
        <h3 className='text-[--main-color] text-6xl mt-[10rem] sub-heading'>Your Journey Starts Here –</h3>
        <span className='overflow-hidden contact-parent'><h3 className='text-[--main-color] text-8xl mt-5 border-b-[.3rem] pb-2 border-[--main-color]'>Contact Us</h3></span>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact