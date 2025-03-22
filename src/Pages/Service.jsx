import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { TiTick } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FaDumbbell, FaHeartbeat, FaRunning } from 'react-icons/fa';



// Training Data
const trainings = [
  { id: 1, number: '01.', title: 'Cardio Training', videoUrl: '/videos/cardio.mp4' },
  { id: 2, number: '02.', title: 'Strength Training', videoUrl: '/videos/strength.mp4' },
  { id: 3, number: '03.', title: 'Cardio + Strength Training', videoUrl: '/videos/carStre.mp4' },
];


// Programs Data
const programs = [
  {
    title: "Cardio Training",
    description: "Improve endurance and burn calories with high-intensity workouts.",
    icon: FaRunning,
  },
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with weightlifting exercises.",
    icon: FaDumbbell,
  },
  {
    title: "Heart Health",
    description: "Boost cardiovascular fitness and overall well-being.",
    icon: FaHeartbeat,
  },
  {
    title: "Flexibility & Mobility",
    description: "Enhance joint mobility and reduce muscle stiffness with stretching exercises.",
    icon: FaRunning, // Replace with a better icon if needed
  },
  {
    title: "HIIT Workouts",
    description: "Short, intense workouts designed to maximize fat burning and improve endurance.",
    icon: FaDumbbell, // Replace with a better icon if needed
  },
  {
    title: "CrossFit Training",
    description: "High-intensity functional movements combining weightlifting, cardio, and endurance.",
    icon: FaHeartbeat, // Replace with a better icon if needed
  },
  {
    title: "Yoga & Mindfulness",
    description: "Relax, improve flexibility, and strengthen the mind-body connection through yoga.",
    icon: FaRunning, // Replace with a better icon if needed
  },
];

// Pricing Plans Data
const PricingPlans = [
  {
    title: "Monthly Plan",
    price: "₹2000/mo",
    features: ["Gym Access", "Group Classes", "Locker Facility"],
  },
  {
    title: "Half yearly Plan",
    price: "₹10,000",
    features: ["24/7 Gym Access", "Free Personal Training", "Group Classes", "Sauna & Spa"],
  },
  {
    title: "Yearly Plan",
    price: "₹18,000",
    features: ["All Premium Features", "Diet Consultation", "Massage Therapy"],
  },
];

const Service = () => {

  return (
    <section className='service-section'>
      <div className='w-[80%] mx-auto flex flex-col pt-[5rem] overflow-hidden'>
        <h2 className='text-8xl text-center font-bold my-10 text-[--main-color]'>Our Trainings  </h2>
        {trainings.map((training) => (
          <TrainingList key={training.id} training={training} />
        ))}
      </div>

      {/* SECTION -- BANNER */}
      <div className='service-banner mt-40'>
        <div className="w-[80%] mx-auto grid sm:grid-cols-2 grid-cols-1 gap-16">
          <div className="service-left relative">
            <div className='relative h-[50vh]'>
              <img src="public\img2.jpg" alt="" className='absolute top-0 w-[18rem] object-contain rounded-lg' />
              <img src="public\img3.jpg" alt="" className='absolute w-[25rem] top-[3rem] right-0 object-contain rounded-lg border-[5px] border-white' />
              <img src="public\img4.jpg" alt="" className='absolute left-8 bottom-[-5rem] w-[20rem] object-contain rounded-lg border-[5px] border-white' />
            </div>
          </div>
          <div className="service-right">
            <h3 className='text-[3.5rem] text-[--main-color] pr-[2rem] leading-[4rem]'>Transform your physique with our fitness plan.</h3>

            <ul className='flex flex-col gap-5 my-10'>
              <li className='capitalize flex items-center gap-2 text-lg'><span className='text-xl bg-[--main-color] rounded-full text-white'><TiTick /></span>Increase muscle and strength</li>
              <li className='capitalize flex items-center gap-2 text-lg'><span className='text-xl bg-[--main-color] rounded-full text-white'><TiTick /></span>be healthier than before</li>
              <li className='capitalize flex items-center gap-2 text-lg'><span className='text-xl bg-[--main-color] rounded-full text-white'><TiTick /></span>increase stamina</li>
            </ul>

            <div>
              <NavLink to='/contact' className='border-2 border-[--main-color] px-7 py-4 rounded-lg mt-5 hover:bg-[--main-color] hover:text-white'>Contact Us</NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION -- EXPLORE OUR PROGRAMS */}
      <div className='our-programs-section my-40'>  
        <h3 className='text-[3.5rem] w-[80%] mx-auto text-[--main-color] font-bold text-right'>Explore Our Programs</h3>
        <div className="w-[80%] mx-auto mt-24 relative">
          <Swiper
            modules={[Navigation, Autoplay, FreeMode]}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            freeMode
            className="mySwiper static"
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, // Phones
              768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
              1024: { slidesPerView: 3, spaceBetween: 40 }, // Desktops
            }}
          >
            {programs.map((currProgram, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-black text-white rounded-lg shadow-lg text-center flex flex-col items-center">
                  <currProgram.icon className="text-4xl text-[--main-color] mb-4" />
                  <h4 className="text-xl font-semibold">{currProgram.title}</h4>
                  <p className="text-sm mt-2">{currProgram.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* SECTION -- GYM PRICING */}
      <div className='gym-pricing-section'>
        <div className='w-[80%] mx-auto'>
          <h3 className='text-[3.5rem] text-[--main-color] font-bold text-center mb-20'>Our List Packages</h3>
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap gap-6 justify-center parent">
              {PricingPlans.map((plan, index) => (
                <div key={index} className="gym-pricing-card cursor-pointer w-80 bg-gray-900 text-white rounded-2xl shadow-lg border border-red-600 p-6 text-center">
                  <h2 className="text-2xl font-bold text-red-500">{plan.title}</h2>
                  <p className="text-4xl font-extrabold mt-2">{plan.price}</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <span className="text-red-500 font-bold text-xl mr-2">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300">
                    Join Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

// Training List Component
const TrainingList = ({ training }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(videoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
    });



    const handleMouseEnter = () => tl.play();
    const handleMouseLeave = () => tl.reverse();

    const handleMouseMove = (e) => {
      gsap.to(videoRef.current, {
        x: e.clientX - containerRef.current.getBoundingClientRect().left - 100,
        y: e.clientY - containerRef.current.getBoundingClientRect().top - 100,
        duration: 0.2,
        ease: "linear",
      });
    };

    const container = containerRef.current;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative training flex items-center gap-x-5 border-b-2 border-[--main-color] py-10 group cursor-pointer "
    >
      {/* Training Number */}
      <span className="text-4xl text-[--main-color]">{training.number}</span>

      {/* Icon & Title */}
      <div className="flex items-center gap-x-3">
        {/* <span className="text-5xl text-[--main-color]">{training.icon}</span> */}
        <h3 ref={titleRef} className="uppercase text-4xl md:text-6xl">{training.title}</h3>
      </div>

      {/* Hover Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 -translate-x-1/2 transform -translate-y-1/2 w-[10rem] h-auto opacity-0 rounded-xl"
        src={training.videoUrl}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Service