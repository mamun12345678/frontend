import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="justify-content-center">
          {/* About Me Section */}
          <Col xs={12} md={4} className="footer-col">
            <h5 className="footer-title">About Me</h5>
            <p className="footer-text">
              I am Md Abdullah Al Mamun, a recent Computer Science graduate from the University of Bedfordshire, currently working as a Desktop and Media Service Technician.
            </p>
          </Col>

          {/* Contact Information Section */}
          <Col xs={12} md={4} className="footer-col">
            <h5 className="footer-title">Contact Information</h5>
            
            <p className="footer-text">
              Phone: <a href="tel:+447394032549" className="footer-link">+447394032549</a>    </p>
              <p className="footer-text">
              Email: <a href="mailto:o.md.abdullahalmamun@gmail.com" className="footer-link">mdabdullah.almamun.one@gmail.com</a>
            </p>
            <p className="footer-text">
              Location: 5 Westbourne Road, Luton | LU4 8JD
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/md-abdullah-al-mamun-aa05a5212/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/mamun12345678" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100022551855378" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/o.md.abdullahalmamun/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col xs={12} md={4} className="footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/resume" className="footer-link">Resume</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="footer-text footer-bottom-text">&copy; {new Date().getFullYear()} MD Abdullah Al Mamun. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
