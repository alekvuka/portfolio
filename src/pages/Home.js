import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Header from '../components/Header';

// Home component
const Home = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Image src="/space.jpeg" fluid />
      </Container>



    </div>
  );}

  export default Home;
