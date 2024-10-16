import React from 'react';
import background from '../assets/hero-image.webp';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        height: '70vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundColor: '#36454F',
        backgroundBlendMode: 'overlay',
      }}
    >
      <Container
        className="text-center d-flex align-items-center justify-content-center"
        style={{ height: '100%', color: 'white' }}
      >
        <Row>
          <Col>
            <h4 className="fst-italic">Software Engineer</h4>
            <h1 style={{ fontSize: '3.5rem' }}>Bintang Bagus Pangestu</h1>
            <Button variant="info" className="mt-4">
              LinkedIn Profile
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
