import React from 'react';
import './about.css';
import { GrAnalytics } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import portrait from "../../assets/imageAbout.webp"
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { GrMysql } from "react-icons/gr";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import { SiPowerbi, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const about = () => {
  return (
    <section id="about">
      <div className="carousel">
        <div className="title">
          <span>about</span>
          <span>about</span>
          <span>about</span>
          <span>about</span>
          <span>about</span>
          <span>about</span>
        </div>
        <div className="title">
          <span>about</span>
          <span>about</span>
          <span>about</span>
          <span>about</span>
          <span>about</span>
          <span>about</span>
        </div>
      </div>
      <div className="bodyAbout">
        <div className="textAbout">
          <span className='slogan'>
            Practice Makes Perfect!
          </span>
          <span className="p-text">
            In my professional pursuits, I am dedicated to perfection,
            understanding the importance of learning from failures, while also
            ensuring meticulous attention to every task.
          </span>
          <span className="p-text">
            My primary focus is on mastering Data Analysis and Machine Learning.
          </span>
          <div className="buttonsContainer">
            <Link to="work" spy="true">
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, type: "tween" }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.iconAbout').style.color = '#163020';
                  e.currentTarget.querySelector('span').style.color = '#163020';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.iconAbout').style.color = 'whitesmoke';
                  e.currentTarget.querySelector('span').style.color = 'whitesmoke'; 
                }}
              >
                <GrAnalytics color="whitesmoke" className="iconAbout" />
                <span>Data <br /> Analysis</span>
              </motion.button>
            </Link>

            <Link to="work" spy="true">
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, type: "tween" }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('.iconAbout').style.color = '#163020';
                  e.currentTarget.querySelector('span').style.color = '#163020';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('.iconAbout').style.color = 'whitesmoke';
                  e.currentTarget.querySelector('span').style.color = 'whitesmoke'; 
                }}
              >
                <LuBrainCircuit color="whitesmoke" className="iconAbout" />
                <span>Machine <br /> Learning</span>
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="imageAbout">
          <img src={portrait} alt="A portrait" className="imgIntro" />
        </div>
      </div>
      <div className="mySkills">
        <span className="textSkills">My Skills</span>
        <div className="skillsContainer">
          <span className="skillsItem">
            <PiMicrosoftExcelLogoDuotone className="iconSkill" />
            <span className="skillText">Excel</span>
          </span>
          <span className="skillsItem">
            <GrMysql className="iconSkill" />
            <span className="skillText">MySQL</span>
          </span>
          <span className="skillsItem">
            <SiPowerbi className="iconSkill" />
            <span className="skillText">Power BI</span>
          </span>
          <span className="skillsItem">
            <SiPython className="iconSkill" />
            <span className="skillText">Python</span>
          </span>
          <span className="skillsItem">
            <FaJava className="iconSkill" />
            <span className="skillText">Java</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default about;