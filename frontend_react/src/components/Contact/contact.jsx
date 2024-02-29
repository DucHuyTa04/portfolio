import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { IoPhonePortrait, IoMail } from "react-icons/io5";
import './contact.css';



const Contact = () => {
  const [formData, setFormData] = useState({name:'', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [messageBasedOnTime, setMessageBasedOnTime] = useState('');

  useEffect(() => {
    const updateCurrentTimeAndMessage = () => {
      const now = new Date();
      const hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; 
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const day = days[now.getDay()];
      setCurrentTime(`It is currently ${formattedHours} ${ampm} on a ${day} for me.`);

      const isNightTime = (hours >= 23 || hours < 9);

      const timeBasedMessage = isNightTime
        ? "A good sleep promises readiness for the next morning, but any messages are welcome."
        : "Sounds like a wonderful time to start working. Let me know how I can help you, I’m listening.";

        setMessageBasedOnTime(timeBasedMessage);
    };

    updateCurrentTimeAndMessage(); 
    const intervalId = setInterval(updateCurrentTimeAndMessage, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  const{ name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Can you please fill in all 3 fields");
      setLoading(false);
      return;
    }
  
    setLoading(true);
  
    emailjs.send(
      'service_qdr2xyk', 
      'template_0ywetnj',
      {
        from_name: name,
        to_name: 'Huy',
        from_email: email,
        to_email: 'taduchuy04@gmail.com',
        message: message,
      }, 'HIYHxB3YNYwjpatD1'
    )
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something is wrong.');
    });
  }
  

  return (
    <section id="contact">
      {/* heading */}
      <div className="carousel">
        <div className="title">
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
        </div>
        <div className="title">
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
          <span>contact</span>
        </div>
      </div>

      <div className="app__flex contactBody">
      <p className="headText">{currentTime}</p>
      <p className="p-text headTextDetails" >{messageBasedOnTime}</p>
      
      <div className="contactCards">
        <div className="contactCard">
          <IoMail />
          <a href="mailto:taduchuy04@gmail.com" className="p-text">taduchuy04@gmail.com</a>
        </div>
        <div className="contactCard">
          <IoPhonePortrait />
          <a href="tel:+1 (438) 979-5679" className="p-text">+1 (438) 979-5679</a>
        </div>
      </div>

    {! isFormSubmitted ?
        <div className="contactForm app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder='Your full name' name='name' value ={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Your email' name='email' value ={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea 
            className="p-text" 
            placeholder="What's on your mind?"
            value={message}
            name="message"
            onChange={handleChangeInput}
            />
        </div>
        <motion.button whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, type: "tween" }} type="button" className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</motion.button>
      </div>
      :
      <div>
        <h3 className='textAfterSubmit'>Thank you for getting in touch!</h3>
      </div>}
      </div>
    </section>
  )
}

export default Contact