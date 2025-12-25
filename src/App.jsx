import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMe from './components/Email';
import './App.css';
import Aboutme from './components/Aboutme';
import Navbar from './components/Navbar';
import Skillset from './components/Skillicon';
import Projects from './components/Projectscards';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CursorFollower from './components/CursorFollower';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

// Home Page Component
const HomePage = () => (
  <>
    <Aboutme />
    <Skillset />
    <Projects />
    <Experience />
    <Certifications />
    <ContactMe />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <CursorFollower />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
