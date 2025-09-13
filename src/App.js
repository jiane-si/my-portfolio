import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import PortfolioNavbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <PortfolioNavbar />

      {/* About Me */}
      <section id="about" className="text-center p-5">
        <Container>
          <h2 style={{ color: "blue" }}>About Me</h2>
          <p
            style={{
              backgroundColor: "#e6f2ff",
              padding: "15px",
              borderRadius: "8px",
              maxWidth: "750px",
              margin: "20px auto",
              color: "#000",
              lineHeight: "1.6",
            }}
          >
            Hey there! I’m <strong>Jiane Princess S. Sigua</strong>. I’m diving
            into the world of IT, exploring <strong>web development, tech, and
            design</strong>. This site is my little corner to show off projects
            I’ve worked on and what I’m learning. Always looking to get better
            and make cool things happen.
          </p>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="p-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 text-dark">Projects</h2>
          <p className="text-center text-muted">
            A few things I’ve built (some are just demos)
          </p>
          <Row>
            {/* Portfolio Website */}
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                  alt="Portfolio Website"
                />
                <Card.Body>
                  <Card.Title>Portfolio Website</Card.Title>
                  <Card.Text>
                    My personal portfolio site built with React and Bootstrap.
                  </Card.Text>
                  <Button variant="primary" href="#">
                    Check it out
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Todo App */}
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                  alt="Todo App"
                />
                <Card.Body>
                  <Card.Title>Todo App</Card.Title>
                  <Card.Text>
                    A simple React todo app to keep my daily tasks in check.
                  </Card.Text>
                  <Button variant="success" href="#">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* E-commerce Mockup */}
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x200"
                  alt="E-commerce Mockup"
                />
                <Card.Body>
                  <Card.Title>E-commerce Mockup</Card.Title>
                  <Card.Text>
                    Concept design for an online shopping platform.
                  </Card.Text>
                  <Button variant="danger" href="#">
                    See Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center p-5 bg-dark text-white">
        <Container>
          <h2>Contact Me</h2>
          <p>
            Drop me a message at:{" "}
            <a href="mailto:jia.sigua07@gmail.com" className="text-info">
              jia.sigua07@gmail.com
            </a>
          </p>

          {/* Contact Form */}
          <Form style={{ maxWidth: "480px", margin: "0 auto" }}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your Message"
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Send
            </Button>
          </Form>
        </Container>
      </section>
    </div>
  );
}
export default App;
