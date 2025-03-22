import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
import { NavLink } from 'react-router-dom';
import TrainersCard from '../Components/TrainersCard';
import reviews from '../Api/gymReviews.json'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaDumbbell, FaStar } from 'react-icons/fa';



// api/trainers.js
const trainers = [
  {
    id: 1,
    name: "Dinesh Doe",
    role: "Personal Trainer",
    image: "/public/trainer1.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Gaurav Arora",
    role: "Fitness Coach",
    image: "/public/trainer.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },

  {
    id: 3,
    name: "Rajat Chug",
    role: "Fitness Coach",
    image: "/public/trainer1.jpg",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];


const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.from('.about-section .anim-txt p', {
      scrollTrigger: {
        trigger: ".about-section .anim-txt p",
        markers: false,  // Optional for debugging
        start: 'top 75%',
        end: 'top 30%',
        markers: false,
        scrub: 1,
      },
      opacity: 0,
      y: 80,
      duration: .7,
      stagger: 0.2,
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner-container",
        start: 'top 50%',
        end: 'top 30%',
        scrub: 1,
        markers: false, // Optional for debugging
      }
    });

    tl.from('.left-container .sub-heading span', {
      opacity: 0,
      y: -20,
      duration: 0.7,
      stagger: 0.5, // Adds delay between spans
    });

    tl.from('.left-container .main-heading', {
      opacity: 0,
      x: -30,
      duration: 0.5,
    });

    tl.from('.left-container .content', {
      opacity: 0,
      x: -30,
      duration: 0.5,
    });
  })

  return (
    <section className='about-section'>
      {/* SECTION HEADING */}
      <div className='mx-auto text-center pt-40'>
        <h2 className='text-[--main-color] text-[10rem] font-bold text-nowrap'>GET YOUR SWEAT ON</h2>
        <div className='w-[75%] mx-auto text-3xl leading-[2.5rem] mt-7 overflow-hidden'>
          {/* Hidden on mobile, visible on larger screens */}
          <span className='anim-txt overflow-hidden hidden md:block'>
            <p className='font-[Lato]'>"At Fitness Place, we believe fitness is more than just a workout – it’s a lifestyle.</p>
          </span>
          <span className='anim-txt overflow-hidden hidden md:block'>
            <p className='font-[Lato]'> Whether you’re a beginner or a seasoned athlete, our state-of-the-art facilities, expert</p>
          </span>
          <span className='anim-txt overflow-hidden hidden md:block'>
            <p className='font-[Lato]'> trainers, and supportive community are here to help you push your limits and achieve </p>
          </span>
          <span className='anim-txt overflow-hidden hidden md:block'>
            <p className='font-[Lato]'>your goals. It’s time to embrace the grind, break a sweat, and discover the best version </p>
          </span>
          <span className='anim-txt overflow-hidden hidden md:block'>
            <p className='font-[Lato]'> of yourself. Let’s make every drop of sweat count!" </p>
          </span>

          {/* Visible only on mobile */}
          <p className='font-[Lato] block md:hidden text-center anim-txt'>"At Fitness Place, we believe fitness is more than just a workout – it’s a lifestyle. Whether you’re a beginner or a seasoned athlete, our state-of-the-art facilities, expert trainers, and supportive community are here to help you push your limits and achieve your goals. It’s time to embrace the grind, break a sweat, and discover the best version of yourself. Let’s make every drop of sweat count!"</p>
        </div>
      </div>


      {/* SECTION ---- BANNER */}
      <div className='banner-container grid sm:grid-cols-2 grid-cols-1 sm mt-20 bg-black w-full text-white py-11'>
        <div className='left-container flex flex-col justify-center gap-5 border-t-2 border-b-2 border-[--main-color]'>
          <div className='w-[70%] mx-auto overflow-hidden'>
            <div className='sub-heading flex gap-[1rem] text-lg'>
              <span>SWEAT</span>
              <span className='text-[--main-color]'>SLEEP</span>
              <span>REPEAT</span>
            </div>
            <h3 className='main-heading text-6xl mt-[3rem] mb-7 leading-[4rem] overflow-hidden'>NICE TO MEET YOU, WE'RE <span className='text-[--main-color]'>FITNESS PLACE</span></h3>
            <p className='content mb-20'>At Fitness Place, we’re all about consistency, community, and crushing goals. From high-intensity workouts to mindful recovery, we’ve got the classes and energy to help you feel your best. Join us and sweat your way to a stronger, healthier you!</p>
            <NavLink to='/services' className='relative'><span className='btn hover:bg-[--main-color]'>SEE OUR CLASSES</span></NavLink>
          </div>
        </div>

        <div className='right-container'>
          <img src="public\aboutSecImg1.avif" alt="" className='object-contain h-full ' />
        </div>
      </div>


      {/* SECTION ---- OUR TRAINERS */}
      <div className='our-trainers-container mt-20'>
        <div className='w-[80%] mx-auto pt-[5rem] overflow-hidden'>
          <div className='w-full text-center'>
            <h2 className='text-[--main-color] text-8xl font-bold'>OUR TRAINERS</h2>
            <p className='text-xl mt-5'>Meet the team that will help you reach your goals.</p>
          </div>
          <div className='trainers-list grid sm:grid-cols-3 grid-cols-1 gap-10 mt-20'>
            {/* <TrainersCard /> */}
            {
              trainers.map((trainer) => (
                <TrainersCard key={trainer.id} trainer={trainer} />
              ))
            }
          </div>
        </div>
      </div>

      {/* SECTION ---- OUR REVIEWS */}
      <div className='our-reviews-container relative mt-40'>
        <div className='w-[80%] mx-auto'>
          <div className='grid sm:grid-cols-2 grid-cols-1'>

            <div className='our-reviews-left'>
              <h3 className='capitalize text-7xl text-[--main-color] mb-[5rem]'>What our members says about us?</h3>
              {/* <div className='flex gap-5 mt-10'>
                <span className="w-[4rem] h-[4rem] rounded-full border-4 border-[--main-color] overflow-hidden">
                  <img
                    src="/customer.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="w-[4rem] h-[4rem] rounded-full border-4 border-[--main-color] overflow-hidden">
                  <img
                    src="/customer.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="w-[4rem] h-[4rem] rounded-full border-4 border-[--main-color] overflow-hidden">
                  <img
                    src="/customer.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </span>
              </div> */}
              {/* <p className='mt-2 text-lg'>5k+ Satisfied Customers</p> */}
            </div>

            <div className='our-reviews-right'>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >

                {
                  reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                      <div className="w-[75%] mx-auto rounded-lg overflow-hidden shadow-lg bg-[#282525ed] p-6 text-white">
                        {/* Five stars on the top right corner */}
                        <div className="flex justify-end gap-1">
                          {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-400 text-xl" />
                          ))}
                        </div>

                        {/* Paragraph about the rating */}
                        <p className="text-base text-left mt-4">
                          {review.review}
                        </p>

                        {/* Image and name side by side */}
                        <div className="flex items-center mt-6">
                          {/* <img
                        className="w-12 h-12 rounded-full mr-4"
                        src="https://via.placeholder.com/150" // Replace with your image URL
                        alt="Person"
                      /> */}
                          <div className="font-semibold text-[--main-color]">{review.name}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION ---- JOIN US */}
      <div className='join-us-container mt-40'>
        <div className='w-[80%] join-first-child mx-auto bg-[--main-color] text-white py-[3rem] px-10 rounded-lg'>
          <div className='text-center gap-10'>
            <div className='join-us-left'>
              <h3 className='text-7xl mb-[2rem]'>Join Us Today</h3>
              <p className='text-xl'>Ready to start your fitness journey? Join us today and get access to our state-of-the-art facilities, expert trainers, and supportive community. Let’s make every drop of sweat count!</p>
              <div className="join-us relative w-full md:w-[50%] mt-10 mx-auto">
                <input
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                  className="w-full p-4 pr-16 border border-gray-300 rounded-lg focus:outline-none"
                  required
                />
                <button type='submit' className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[--main-color] text-white px-5 py-3 rounded-lg hover:opacity-80">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  )
}





export default About