import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Header from '../components/Header';

// Home component
const Contact = () => {
  return (
    <div>
      <Header />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '25vh' }}> 
        <a href={"mailto:${alekvuka@gmail.com}"} >alekvuka@gmail.com</a>
        <a href="linkedin.com/u/alekvuka" target="_blank">LinkedIn</a>
        <a href="github.com/alekvuka" target="_blank">GitHub</a> 
      </Container>
    </div>
  );}

  export default Contact;
