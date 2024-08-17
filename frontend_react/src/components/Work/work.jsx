import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { urlFor } from '../../client';
import "./work.css";

const Works = ({ works }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1});
  const [filterWork, setFilterWork] = useState(works);


  useEffect(() => {
    setFilterWork(works);
  }, [works]); 

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity:1}]);

      if(item === 'All'){
        setFilterWork(works);
      } else{
        setFilterWork(works.filter((work) => work.tags && work.tags.includes(item)));
      }
    }, 500);
  }


  return (
    <section id="work">
      {/* heading */}
      <div className="carousel">
        <div className="title">
          <span>work</span>
          <span>work</span>
          <span>work</span>
          <span>work</span>
          <span>work</span>
          <span>work</span>
        </div>
        <div className="title">
          <span>work</span>
          <span>work</span>
          <span>work</span>
          <span>work</span>
          <span>work</span>
          <span>work</span>
        </div>
      </div>

      {/* body */}
      <div className="bodywork">
        <div className="app__flex workText"> Explore my work - each project is a testament of creativity, dedication, and passion.</div>
        <div className="workFilter app__flex">
          {['All','Data Analysis','Machine Learning', 'Others'].map((item,index) => (
            <div
              key={index}give 
              onClick={() => handleWorkFilter(item)}
              className={`workFilterItem app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
              >
                {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{duration:0.2, ease: 'easeInOut'}}
          className='workPortfolio'
        >
          {filterWork.map((work,index) => (
            <div className="workItem app__flex" key={index}>
            <div className="workImg app__flex">
              <img src={urlFor(work.imgUrl).url()} alt={work.title} />

                <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition={{ duration: 0.15, ease: 'easeInOut', staggerChildren: 0.5}}
                  className='workHover app__flex'
                >
                  <a href="work.projectLink" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{scale: [0,1]}}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye/>
                    </motion.div>
                  </a>

                  <a href="work.projectLink" target="_blank" rel="noreferrer">
                    <motion.div
                    whileInView={{scale: [0,1]}}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="workContent app__flex">
                <h3 className="p-text workContentTitle">{work.title}</h3>

                <p className="p-text workContentText">{work.description}</p>

                <div className="workContentTag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Works