import React from 'react';
import TechCard from './TechCard';
import { Container, Row, Col } from 'react-bootstrap';

const TechStack = () => {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Row className="mb-3">
        <h2>Tech Stack</h2>
      </Row>
      <Row className="gy-4 justify-content-center">
        <Col>
          <TechCard title="html" />
        </Col>
        <Col>
          <TechCard title="css" />
        </Col>
        <Col>
          <TechCard title="bootstrap" />
        </Col>
        <Col>
          <TechCard title="javascript" />
        </Col>
        <Col>
          <TechCard title="react" />
        </Col>
        <Col>
          <TechCard title="nodejs" />
        </Col>
        <Col>
          <TechCard title="expressjs" />
        </Col>
        <Col className="flex-grow-0">
          <TechCard title="mongodb" />
        </Col>
        <Col className="flex-grow-0">
          <TechCard title="postgresql" />
        </Col>
        <Col className="flex-grow-0">
          <TechCard title="git" />
        </Col>
        <Col className="flex-grow-0">
          <TechCard title="github" />
        </Col>
      </Row>
    </Container>
  );
};

export default TechStack;
