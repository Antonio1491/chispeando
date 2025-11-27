import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
