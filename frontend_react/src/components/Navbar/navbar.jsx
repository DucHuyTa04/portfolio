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
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a className="homePage" href="/" aria-label="Home - Duc Huy Ta">
        <span className="logoSection">
          <img src={logo} alt="Duc Huy Ta logo" className="logo" />
          <div className="name">
            <span className="codeBy">Code by</span>
            <span className="duc">Duc</span>
            <span className="huy">Huy</span>
            <span className="ta">Ta</span>
          </div>
        </span>
      </a>

      <ul className="navbarLinks" role="menubar">
        {["about", "work", "contact"].map((item) => (
          <li key={`link-${item}`} className={activeSection === item ? 'active' : ''} role="none">
            <a 
              href={`#${item}`} 
              onClick={(e) => handleClick(e, item)}
              className={item === 'work' ? 'workClass' : ''}
              role="menuitem"
              aria-label={`Navigate to ${item} section`}
              aria-current={activeSection === item ? 'page' : undefined}
            >
              {item}
            </a>
            <div />
          </li>
        ))}
      </ul>

      <div className="smallMenu">
        <button 
          onClick={() => setToggle(true)}
          aria-label="Open navigation menu"
          aria-expanded={toggle}
          className="menu-button"
        >
          <IoIosMenu />
        </button>

        {toggle && (
          <div 
            className="menuOverlay" 
            onClick={() => setToggle(false)}
            role="presentation"
            aria-hidden="true"
          />
        )}

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              role="dialog"
              aria-label="Mobile navigation menu"
            >
              <ul role="menu">
                {["about", "work", "contact"].map((item) => (
                  <li key={item} role="none">
                    <a 
                      href={`#${item}`} 
                      onClick={(e) => handleClick(e, item)}
                      role="menuitem"
                      aria-label={`Navigate to ${item} section`}
                    >
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
