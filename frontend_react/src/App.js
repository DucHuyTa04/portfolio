import React, { useState, useEffect } from 'react';
import { client, urlFor } from './client'; 
import LoadingScreen from './components/LoadingScreen/load';
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import './App.css';

//import images
import imageHome from "../src/assets/imageHome.webp";
import imageAbout from "../src/assets/imageAbout.webp";

function App() {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]); // State to hold preloaded work data

  // Preload images
  const preloadImages = (imageUrls) => {
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };

  useEffect(() => {
    // Preload statically imported images
    const staticImageUrls = [imageHome, imageAbout];
    preloadImages(staticImageUrls);

    // Fetch work data from Sanity and preload images associated with each work item
    const fetchWorkDataAndPreloadImages = async () => {
      const query = '*[_type == "works"]';
      const data = await client.fetch(query);

      // Extract image URLs from the fetched data
      const workImageUrls = data.map(work => urlFor(work.imgUrl).url());
      preloadImages(workImageUrls); // Preload work images

      setWorks(data); // Store fetched work data in state
    };

    fetchWorkDataAndPreloadImages().then(() => {
      // Set a timeout to simulate loading time
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
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
        <Work works={works}/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;