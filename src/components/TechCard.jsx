import React from 'react';
// import html from '../assets/html.png';
import { Card } from 'react-bootstrap';

const TechCard = ({ title }) => {
  return (
    <Card style={{ width: '9rem' }}>
      <Card.Img variant="top" src={require(`../assets/${title}.png`)} />
      <Card.Body className="text-center">
        <Card.Title>{title.toUpperCase()}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TechCard;
