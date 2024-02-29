import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen/load';
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className={`loading-screen ${!loading ? 'slide-up' : ''}`}>
        <LoadingScreen/>
      </div>
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;