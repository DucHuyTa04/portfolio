import React, { useEffect, useState } from 'react';
import './load.css';

const greetings = ["Hello", "Bonjour", "Xin chào", "Hola", "您好", "سلام عليكم", "Olá"];

const LoadScreen = () => {
  const [currentGreeting, setCurrentGreeting] = useState('');
  // Initial state for fade-in effect
  const [fadeClass, setFadeClass] = useState('fade-in'); // Start with fade-in class

  useEffect(() => {
    // Allocate 1000ms for the first greeting to fade in
    const fadeDuration = 800;
    // Total duration for the rest of the greetings
    const remainingDuration = 1200; // Remaining time for other greetings
    // Calculate the display time for each of the remaining greetings
    const eachGreetingDuration = remainingDuration / (greetings.length - 1);

    let greetingIndex = 0;

    const updateGreeting = () => {
      setCurrentGreeting(greetings[greetingIndex]);

      // Increment the index for the next greeting
      greetingIndex++;

      // If there are more greetings to show, update the greeting after the calculated duration
      if (greetingIndex < greetings.length) {
        setTimeout(updateGreeting, greetingIndex === 1 ? fadeDuration : eachGreetingDuration);
      }

      // Remove fade-in effect after the first greeting
      if (greetingIndex === 1) {
        setTimeout(() => setFadeClass(''), fadeDuration);
      }
    };

    // Start displaying the first greeting immediately
    setTimeout(updateGreeting, 0); // Use setTimeout to align with the async nature

    // Cleanup
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
