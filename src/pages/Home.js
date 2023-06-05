import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Header from '../components/Header';

// Home component
const Home = () => {
  return (
    <div>
      <Header />
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh', paddingTop: '150px' }}> 
            <Image src="/space.jpeg" fluid />
      </Container>
    </div>
  );}

  export default Home;
