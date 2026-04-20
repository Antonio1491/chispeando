import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FounderBio from './components/FounderBio';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TheSpace from './components/TheSpace';
import Offerings from './components/Offerings';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-bg-main font-sans text-gray-900 overflow-x-hidden selection:bg-accent selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Offerings />
        <Services />
        <TheSpace />
        <Testimonials />
        <FounderBio />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
