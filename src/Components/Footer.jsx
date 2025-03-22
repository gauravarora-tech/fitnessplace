import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // // GSAP Animation for footer entrance
    // gsap.from(footerRef.current, {
    //   y: 50,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0.5,
    //   ease: "power3.out",
    // });

    // Hover animation for social media icons
    gsap.to(".social-icon", {
      y: -5,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    });

    // Apply hover effects
    const socialIcons = document.querySelectorAll(".social-icon");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { y: -5, scale: 1.1, duration: 0.3 });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { y: 0, scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-8 text-center mt-24">

      <h2 style={{ color: "#f40606", marginBottom: "1rem" }}>Fitness Place</h2>
      <p style={{ marginBottom: "1rem" }}>
        &copy; {new Date().getFullYear()} Fitness Place. All rights reserved.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <a
          href="https://facebook.com"
          className="social-icon"
          style={{ color: "#f40606", textDecoration: "none" }}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          className="social-icon"
          style={{ color: "#f40606", textDecoration: "none" }}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://twitter.com"
          className="social-icon"
          style={{ color: "#f40606", textDecoration: "none" }}
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;