import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file

const About = () => {
  // Sample data for images and videos
  const mediaItems = [
    { type: 'image', src: require('../assets/images/graduationPic.jpg'), alt: 'Graduation Photo', description: 'Graduation Day - University of Bedfordshire' },
    { type: 'image', src: require('../assets/images/posterdayPic2.jpg'), alt: 'Poster Presentation', description: 'Poster Presentation Day' },
    { type: 'video', src: require('../assets/videos/graduationVideo.mp4'), alt: 'Graduation Video', description: 'Graduation Ceremony Video' },
  ];

  // Split media items into images and videos
  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');

  return (
    <Container className="mt-5">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="lead">
          I am Md Abdullah Al Mamun, a recent Computer Science graduate from the University of Bedfordshire, currently working as a Desktop and Media Service Technician. With a robust background in technical support, multimedia management, and network troubleshooting, I am passionate about leveraging my skills to solve complex IT challenges and enhance user experiences.
        </p>
      </div>

      <div className="about-content">
        <h2>My Journey</h2>
        <p>
          In my role at the University of Bedfordshire, I provide crucial technical support to students and staff, maintain multimedia equipment, and assist with network troubleshooting and system updates. My work in the ICT department has honed my ability to handle both hardware and software issues effectively.
        </p>
        <p>
          Alongside my technical role, I manage The Metro Cafe at Beds SU, overseeing daily operations, ensuring excellent service, and building strong relationships with students and staff. My dedication to student satisfaction earned me the "Student Staff of the Year" award for two consecutive years. Additionally, I have demonstrated my web development skills by creating a website for The Metro.
        </p>
        <p>
          I also have a background in teaching, having developed comprehensive lesson plans for IELTS students and adapted my teaching methodologies to suit various learning styles.
        </p>
        <p>
          My academic journey includes a B.Sc. Honors in Computer Science, where I received awards for my commercial project and project presentation. I have served in leadership roles such as Marketing Officer for Enactus Bedfordshire, Vice-President of the Computing Society, and President of the Bangladeshi Society.
        </p>
        <p>
          I possess a diverse set of technical skills, including web development, digital marketing, content management, graphic design, data analysis, SEO, SEM, and social media management. My proficiency in the Microsoft Office Suite further complements my technical abilities.
        </p>
        <p>
          Beyond my professional and academic achievements, I am passionate about public speaking, interpersonal communication, leadership, problem-solving, and creative thinking. My interests include table tennis, chess, community volunteering, cultural events, and exploring educational technology trends.
        </p>
        <p>
          With a commitment to diversity and inclusion, I thrive in collaborative environments and am eager to bring my expertise and enthusiasm to a challenging IT support role.
        </p>
      </div>

      <div className="gallery-section">
        <h2 className="text-center mb-4">Gallery</h2>

        <h3>Images</h3>
        <div className="images-gallery">
          {images.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt={item.alt} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <h3>Videos</h3>
        <div className="videos-gallery">
          {videos.map((item, index) => (
            <div className="video-card" key={index}>
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
