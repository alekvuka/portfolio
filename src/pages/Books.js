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
          <Card.Img variant="top" src="/startup.png" />
          <Card.Body>      
            <Card.Text>
              A quintisential guide for startups and producrt development in general. Bob Dorf and Steve Blank 
              use real world examples, experience and opportunty to illustrate the art and scince of creating 
              a succefull product  
            </Card.Text> 
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',  marginTop: '45px'  }}>
          <Card.Img variant="top" src="/discovery.png" />
          <Card.Body> 
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem',  marginTop: '45px', marginBottom: '45px'  }}>
          <Card.Img variant="top" src="/testing.png" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> 
            </Card.Body>
        </Card>
         </Container>
      </div>
    );
  };
  
  export default Books;