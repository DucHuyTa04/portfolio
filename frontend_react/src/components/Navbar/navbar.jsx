import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import { IoIosMenu } from "react-icons/io";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <Link className="homePage" to="intro" spy={true} offset={-100}>
        <span className="logoSection">
          <img src={logo} alt="logo" className="logo" />
          <div className="name">
            <span className="codeBy">Code by</span>
            <span className="duc">Duc</span>
            <span className="huy">Huy</span>
            <span className="ta">Ta</span>
          </div>
        </span>
      </Link>

      <ul className="navbarLinks">
        {["about", "work", "contact"].map((item) => (
          <li key={`link-${item}`} className={item === 'work' ? 'workClass' : ''}>
            <a href={`#${item}`}>{item}</a>
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
              <HiXMark onClick={() => setToggle(false)} />
              <ul>
                {["about", "work", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
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