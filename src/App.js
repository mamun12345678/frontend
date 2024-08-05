import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Resume from './components/Resume';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Router basename="/frontend">
      <NavBar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
