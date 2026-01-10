import React, { useState, useEffect } from 'react';
import { client, urlFor } from './client';
import LoadingScreen from './components/LoadingScreen/load';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Work from './components/Work/work';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css';
import imageAbout from './assets/imageAbout.webp';

function App() {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);

  // Preload images
  const preloadImages = (imageUrls) => {
    return Promise.all(
      imageUrls.map(
        (imageUrl) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = imageUrl;
          })
      )
    );
  };

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload About section image
        await preloadImages([imageAbout]);

        // Fetch work data from Sanity
        const query = '*[_type == "works"]';
        const data = await client.fetch(query);

        // Extract and preload work images
        const workImageUrls = data.map((work) => urlFor(work.imgUrl).url());
        await preloadImages(workImageUrls);

        setWorks(data);
        
        // Wait for all greetings to complete (800ms first + 1200ms for 6 more = 2000ms)
        await new Promise((resolve) => setTimeout(resolve, 2100));
        
        setLoading(false);
      } catch (err) {
        console.error('Failed to initialize app:', err);
        setError('Failed to load content. Please refresh the page.');
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <>
      <div className={`loading-screen ${!loading ? 'slide-up' : ''}`}>
        <LoadingScreen />
      </div>
      <a href="#intro" className="skip-link">
        Skip to main content
      </a>
      <div className="App">
        <Navbar />
        <main id="main-content">
          <Intro />
          <About />
          <Work works={works} />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;