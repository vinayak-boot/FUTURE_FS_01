import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />

      <main>
        <section id="about" style={{ padding: '80px 20px' }}>
          <Resume />
        </section>

        <section id="projects" style={{ padding: '80px 20px' }}>
          <Projects />
        </section>

        <section id="contact" style={{ padding: '80px 20px' }}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
