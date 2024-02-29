import React from 'react'
import './footer.css';
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

const footer = () => {
  return (
    <div className="footer">
        <div className="footerCover">
            <div className="footerCopyRight">
                <span><FaRegCopyright className="footerIcon"/></span>
                <span>2024 DUC HUY TA</span>
            </div>

            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/duchuyta04/" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin className='socialIcon' />
                </a>
                <a href="https://github.com/iamafeeder" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='socialIcon' />
                </a>
                <a href="https://www.instagram.com/huy.ta_04/" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram className='socialIcon' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default footer