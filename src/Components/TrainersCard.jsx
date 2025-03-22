import React from 'react'
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const TrainersCard = ({trainer}) => {

    const { name, role, image, social } = trainer;

    return (
        <div className="trainer-card relative group overflow-hidden">
            <img src={image} alt={name} className="h-full w-full group-hover:scale-[1.1] transition-all" />

            {/* Social Icons with Animation */}
            <div className="social_icon absolute bg-[--main-color] top-1/2 -translate-y-1/2 right-0 p-5 opacity-0 translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <ul className="flex flex-col gap-5">
                    {/* Facebook */}
                    <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                        <a href={social.facebook} className="text-white block"><FaFacebookF /></a>
                    </motion.li>

                    {/* Instagram */}
                    <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                        <a href={social.instagram} className="text-white block"><FaInstagram /></a>
                    </motion.li>

                    {/* Twitter */}
                    <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 200 }}>
                        <a href={social.twitter} className="text-white block"><FaTwitter /></a>
                    </motion.li>
                </ul>
            </div>

            {/* Trainer Info */}
            <div className="trainer-info border-t-2 group-hover:border-[--main-color] p-5 w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto text-white">
                <h3 className="text-2xl transition-colors duration-300 group-hover:text-[--main-color]">{name}</h3>
                <p className="text-lg uppercase">{role}</p>
            </div>
        </div>
    )
}

export default TrainersCard