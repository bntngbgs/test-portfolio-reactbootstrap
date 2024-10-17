import React from 'react';
import TechCard from './TechCard';
import { Container, Row, Col } from 'react-bootstrap';

const TechStack = () => {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Row>
        <h2 className="mb-3">TechStack</h2>
      </Row>
      <Row>
        <Col>
          <TechCard title="html" />
        </Col>
        <Col>
          <TechCard title="css" />
        </Col>
        <Col>
          <TechCard title="javascript" />
        </Col>
        <Col>
          <TechCard title="react" />
        </Col>
      </Row>
    </Container>
  );
};

export default TechStack;
