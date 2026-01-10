import React, { useEffect, useState } from 'react';
import './load.css';

const greetings = ["Hello", "Bonjour", "Hola", "您好", "سلام عليكم", "Olá", "Xin chào"];

const LoadScreen = () => {
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const fadeDuration = 800;
    const remainingDuration = 1200;
    const eachGreetingDuration = remainingDuration / (greetings.length - 1);

    let greetingIndex = 0;

    const updateGreeting = () => {
      setCurrentGreeting(greetings[greetingIndex]);

      greetingIndex++;

      if (greetingIndex < greetings.length) {
        setTimeout(updateGreeting, greetingIndex === 1 ? fadeDuration : eachGreetingDuration);
      }

      if (greetingIndex === 1) {
        setTimeout(() => setFadeClass(''), fadeDuration);
      }
    };

    setTimeout(updateGreeting, 0);

    return () => clearTimeout(updateGreeting);
  }, []);

  return (
    <div className="loadingScreen">
      <div className={fadeClass}>
        {currentGreeting}
      </div>
    </div>
  );
};

export default LoadScreen;
