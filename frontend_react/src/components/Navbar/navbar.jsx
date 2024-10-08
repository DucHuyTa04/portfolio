import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/logo.webp';
import { IoIosMenu } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "work", "contact"];

      const currentSection = sections.find((sectionId) => {
        const el = document.getElementById(sectionId);
        if (!el) return false;
        const scrollPosition = window.scrollY;
        return (
          el.offsetTop <= scrollPosition + window.innerHeight / 3 &&
          el.offsetTop + el.offsetHeight > scrollPosition + window.innerHeight / 3
        );
      });
  
      setActiveSection(currentSection || '');
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [toggle]);

  const handleClick = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    const carousel = document.querySelector('.carousel'); // Assuming your carousel has this class
    if (section && carousel) {
      const carouselHeight = carousel.getBoundingClientRect().height - 40; // Get the current height of the carousel
      const topOffset = section.offsetTop + carouselHeight; // Adjust scroll position by the carousel height
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <a className="homePage" href="/" >
        <span className="logoSection">
          <img src={logo} alt="logo" className="logo" />
          <div className="name">
            <span className="codeBy">Code by</span>
            <span className="duc">Duc</span>
            <span className="huy">Huy</span>
            <span className="ta">Ta</span>
          </div>
        </span>
      </a>

      <ul className="navbarLinks">
        {["about", "work", "contact"].map((item) => (
          <li key={`link-${item}`} className={activeSection === item ? 'active' : ''}>
            <a href={`#${item}`} onClick={(e) => handleClick(e, item)}
              className={item === 'work' ? 'workClass' : ''}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className="smallMenu">
        <IoIosMenu onClick={() => setToggle(true)}></IoIosMenu>

        {toggle && (
          <div className="menuOverlay" onClick={() => setToggle(false)}></div>
        )}

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ul>
                {["about", "work", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={(e) => handleClick(e, item)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
