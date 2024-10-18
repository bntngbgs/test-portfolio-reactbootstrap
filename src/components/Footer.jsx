import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#222529',
        paddingBlock: '1.5rem',
        marginTop: '6rem',
      }}
    >
      <Container>
        <p className="text-white text-center fs-5" style={{ margin: '0' }}>
          Copyright &copy; 2024 Bintang Bagus Pangestu
        </p>
      </Container>
    </div>
  );
};

export default Footer;
