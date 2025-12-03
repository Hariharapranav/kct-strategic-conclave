import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Sponsorship from './components/Sponsorship';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        {/* <Stats /> */}
        <About />
        <Schedule />
        <Speakers />
        <Registration />
        <Sponsorship />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;