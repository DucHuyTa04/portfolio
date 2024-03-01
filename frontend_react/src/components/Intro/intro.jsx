import React from 'react';
import './intro.css';
import bigImage from "../../assets/imageHome.png"
import { CiLocationOn } from "react-icons/ci";

const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="hanger">
          <span className="locationText">
            <span>Located in</span>
            <br />
            <span>Montreal</span>
            <br />
            <span>Canada</span>
          </span>
          <div className="btnLocationWrap">
            <div className="btnLocation">
              <a
                href="https://www.google.com/maps/place/Montreal,+QC/@45.5587087,-74.0415125,10z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu"
                target="_blank"
              >
                <CiLocationOn
                  color="whitesmoke"
                  size={40}
                  className="iconLocation"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="shortIntro">
          <span>Student</span>
          <br />
          <span>Computer Science</span>
          <br />
          <span>Concordia University</span>
        </div>
      </div>
      <div className="bigName">Duc Huy Ta</div>
      
    </section>
  );
}

export default intro;