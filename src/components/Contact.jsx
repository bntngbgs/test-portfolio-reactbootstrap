import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container style={{ marginTop: '6rem' }}>
      <Row>
        <Col className="border-end border-3 border-dark d-flex justify-content-center align-items-center">
          <h1 className="text-center display-2">My Contact</h1>
        </Col>
        <Col>
          <Row className="d-flex flex-row ms-5">
            <a
              href="#hero"
              className="d-flex align-items-center"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={require(`../assets/gmail.png`)}
                alt="gmail-logo"
                style={{ width: '96px' }}
              />
              <h3 className="text-dark ms-3">Email</h3>
            </a>
          </Row>
          <Row className="d-flex flex-row ms-5">
            <a
              href="#hero"
              className="d-flex align-items-center"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={require(`../assets/linkedin.png`)}
                alt="gmail-logo"
                style={{ width: '96px' }}
              />
              <h3 className="text-dark ms-3">LinkedIn</h3>
            </a>
          </Row>
          <Row className="d-flex flex-row ms-5">
            <a
              href="#hero"
              className="d-flex align-items-center"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={require(`../assets/whatsapp.png`)}
                alt="gmail-logo"
                style={{ width: '82px' }}
                className="mx-3"
              />
              <h3 className="text-dark">WhatsApp</h3>
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
