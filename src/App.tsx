import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      
      <main>
        <div id="about">
          <About />
        </div>
        
        <div id="publications">
          <Publications />
        </div>
        
        <div id="achievements">
          <Achievements />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;