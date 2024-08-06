import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaTools, FaUserFriends, FaStar } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <Container className="resume">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Md Abdullah Al Mamun</h1>
        <p className="hero-subtitle">Desktop & Media Service Technician | IT Support Enthusiast</p>
        <p className="hero-contact">
          mdabdullah.almamun.one@gmail.com | 07394032549 | 5 Westbourne Road, Luton
        </p>
      </section>

      {/* Resume Sections */}
      <section className="resume-sections">
        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaBriefcase /> Objectives</Card.Title>
                <Card.Text>
                  A recent Computer Science graduate from the University of Bedfordshire, currently working as a Desktop and Media Service Technician. Seeking a challenging role in IT support to leverage my skills and experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaBriefcase /> Experience</Card.Title>
                <Card.Text>
                  <strong>Desktop and Media Service Technician</strong>, ICT Department, University of Bedfordshire<br />
                  <em>January 2024 - Present</em>
                  <ul>
                    <li>Provided technical support for hardware and software issues to students and staff.</li>
                    <li>Maintained and managed multimedia equipment and computer labs.</li>
                    <li>Assisted in network troubleshooting and system updates.</li>
                  </ul>

                  <strong>Cafe Manager</strong>, The Metro, Beds SU<br />
                  <em>April 2023 - Present</em>
                  <ul>
                    <li>Managed daily operations, ensuring effective service and student satisfaction.</li>
                    <li>Built strong relationships with students and staff across campuses.</li>
                    <li>Created a website for The Metro.</li>
                    <li>Awarded "Student Staff of the Year" consecutively in 2022 and 2023.</li>
                  </ul>

                  <strong>Teaching Experience</strong>, Bangladesh<br />
                  <em>IELTS Students and Lower Grades (Class 1-12)</em>
                  <ul>
                    <li>Developed and delivered comprehensive lesson plans and study materials for IELTS students.</li>
                    <li>Adapted teaching methodologies to align with students' varied learning styles.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaGraduationCap /> Education</Card.Title>
                <Card.Text>
                  <strong>B.Sc. Honors in Computer Science</strong>, University of Bedfordshire<br />
                  <em>September 2020 - June 2023</em>
                  <ul>
                    <li>Worked as a Quality Manager using agile project management.</li>
                    <li>Undergraduate Project Awards: “Best Commercial Project” - 3rd Place, “Best Project Presentation and Poster” - 2nd Place.</li>
                    <li>Roles: Enactus Bedfordshire Marketing Officer, Computing Society Vice-President, Bangladeshi Society President.</li>
                  </ul>

                  <strong>B.Sc. Honors in Psychology</strong>, National University, Bangladesh<br />
                  <em>2018 - 2019</em>
                  <ul>
                    <li>Completed 1st year, understanding human behavior and psychology.</li>
                  </ul>

                  <strong>HSC (Higher Secondary Certificate) in Science</strong>, Sub-District Competition Winner<br />
                  <em>2016 - 2018</em>
                  <ul>
                    <li>1st in Mathematics and Computing, 3rd in Science Project Presentation.</li>
                    <li>CBET Scholarship Award in 2017, and other scholarships.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaTools /> Technical Skills</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Web Development: Proficient in creating and managing user-friendly websites.</li>
                    <li>Digital Marketing Tools: Experienced in creating compelling online content.</li>
                    <li>CMS: Skilled in utilizing CMS platforms for content updates.</li>
                    <li>Graphic Design: Capable of creating visually appealing graphics.</li>
                    <li>Data Analysis: Competent in analyzing web and social media analytics.</li>
                    <li>SEO and SEM: Knowledgeable in applying SEO and SEM techniques.</li>
                    <li>Social Media Management: Experienced in managing social media platforms.</li>
                    <li>Microsoft Office Suite: Proficient in Word, Excel, and PowerPoint.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaUserFriends /> Soft Skills</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Public Speaking & Presentation</li>
                    <li>Interpersonal Communication</li>
                    <li>Leadership & Team Management</li>
                    <li>Problem-Solving & Creative Thinking</li>
                    <li>Adaptability & Flexibility</li>
                    <li>Commitment to Diversity & Inclusion</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaStar /> Interests & Hobbies</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Table Tennis and Chess</li>
                    <li>Community Volunteering and Cultural Events</li>
                    <li>Educational Technology Trends</li>
                    <li>Recreational Group Activities</li>
                    <li>Travel and Cultural Exploration</li>
                    <li>Graphic Design and Content Creation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Resume;
