import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Benefits from './components/Benefits';
import Offerings from './components/Offerings';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-bg-main font-sans text-gray-900 overflow-x-hidden selection:bg-accent selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <Benefits />
        <Offerings />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

export default App;
