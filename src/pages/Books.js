// Books component
import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Books = () => {
    return (
      <div>
        <Header />
        <Container
         className="d-flex flex-column align-items-center justify-content-center"
         style={{ paddingTop: '15px' }}>
        <Card style={{ width: '18rem',  marginTop: '45px'  }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',  marginTop: '45px'  }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',  marginTop: '45px', marginBottom: '45px'  }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
         </Container>
      </div>
    );
  };
  
  export default Books;