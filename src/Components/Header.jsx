import React, { useEffect, useState } from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // Show navbar when scrolling up, hide when scrolling down
            if (prevScrollPos > currentScrollPos) {
                setIsVisible(true); // Show navbar
            } else {
                setIsVisible(false); // Hide navbar
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);


    // Function to close the mobile menu
    const closeMenu = () => setIsOpen(false);

    return (
        <header className='header w-full flex justify-center relative'>
            <nav className={`navbar ${isVisible ? "visible" : "hidden"} rounded-[4.5rem] relative`}>
                <div className="navbar-content">
                    <NavLink to='/' className="logo font-[oswald]"><span className='font-[oswald] text-[2rem] font-[600] text-[--main-color]'>FITNESS</span> PLACE</NavLink>
                    <ul className={`nav-links ${isOpen ? 'ham-active' : ''} transition-all`}>
                        <li><NavLink to="/" className="nav-link" onClick={closeMenu}>HOME</NavLink></li>
                        <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>ABOUT</NavLink></li>
                        <li><NavLink to="/services" className="nav-link" onClick={closeMenu}>SERVICES</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link" onClick={closeMenu}>CONTACT</NavLink></li>
                    </ul>
                    {/* Hamburger for mobile */}
                    <div className='hamburger transition-all relative' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <RxCross2 /> : <RxHamburgerMenu />}</div>
                </div>
            </nav>
        </header>
    );
}

export default Header