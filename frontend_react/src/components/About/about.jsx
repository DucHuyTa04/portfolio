import React from 'react';
import './about.css';
import { MdOutlineWeb } from "react-icons/md";
import { AiFillRobot } from "react-icons/ai";
import portrait from "../../assets/imageAbout.png"
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { FaHtml5, FaGitAlt, FaNodeJs, FaReact, FaBootstrap, FaGithub, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3  } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiCplusplus, SiCsharp } from "react-icons/si";

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
            ensuring meticulous attention to every small task.
          </span>
          <span className="p-text">
            My primary focus is on exploring Web Development and Artificial
            Intelligence (AI).
          </span>
          <div className="buttonsContainer">
            <Link to="work" spy="true">
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, type: "tween" }}
                className="webPart"
              >
                <MdOutlineWeb color="whitesmoke" className="iconAbout" />
                <span>Web</span>
              </motion.button>
            </Link>

            <Link to="work" spy="true">
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, type: "tween" }}
                className="aiPart"
              >
                <AiFillRobot color="whitesmoke" className="iconAbout" />
                <span>AI</span>
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
        <span className="webSkills">
          <span className="webSkills1">
            <FaHtml5 className="iconSkill" />
            <IoLogoCss3 className="iconSkill" />
            <IoLogoJavascript className="iconSkill" />
            <DiJqueryLogo className="iconSkill" />
            <FaBootstrap className="iconSkill" />
          </span>
          <span className="webSkills2">
            <FaNodeJs className="iconSkill" />
            <FaReact className="iconSkill" />
            <GrMysql className="iconSkill" />
            <FaPhp className="iconSkill" />
            <SiMongodb className="iconSkill" />
            </span>
        </span>
        <span className="programmingSkills">
          <FaGitAlt className="iconSkill" />
          <FaGithub className="iconSkill" />
          <FaJava className="iconSkill" />
          <FaPython className="iconSkill" />
          <SiCplusplus className="iconSkill" />
          <SiCsharp className="iconSkill" />
        </span>
      </div>
    </section>
  );
}

export default about;