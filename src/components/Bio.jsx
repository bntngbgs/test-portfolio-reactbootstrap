import React from 'react';
import { Container } from 'react-bootstrap';

const Bio = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center flex-column text-center">
      <h2 className="mb-4">My Bio</h2>
      <p>
        "As a software engineer I have a passion for creating innovative
        solutions to complex problems using code. With a background in computer
        science I have developed a strong foundation in programming languages
        and software development methodologies. I have experience working on a
        variety of projects web application and have a knack for finding
        efficient and effective solutions"
      </p>
    </Container>
  );
};

export default Bio;
