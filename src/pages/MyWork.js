import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Card from 'react-bootstrap/Card';



// MyWork component
const MyWork = () => {
    return (
      <div>
        <Header />
        <Container className="d-flex align-items-center justify-content-center" style={{paddingTop: '15px' }}>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          <Col >
          <Card 
            style={{ width: '20rem',  marginTop: '45px' }}
            bg={"primary"}
            key={"primary"}
            text={"primary" === 'light' ? 'dark' : 'white'}
            style={{ width: '20em',  marginTop: '45px' }}
            className="custom-card"
            
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
             
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
         
          <Col >
          <Card 
            style={{ width: '20rem',  marginTop: '45px' }}
            bg={"secondary"}
            key={"secondary"}
            text={"secondary" === 'light' ? 'dark' : 'white'}
            style={{ width: '20em',  marginTop: '45px' }}
            className="custom-card"
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
           
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>

        <Col >
        <Card    
            bg={"success"}
            key={"success"}
            text={"success" === 'light' ? 'dark' : 'white'}
            style={{ width: '20em',  marginTop: '45px' }}
            className="custom-card">
              

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
           
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card 
            bg={"warning"}
            key={"warning"}
            text={"warning" === 'light' ? 'dark' : 'white'}
            style={{ width: '20em',  marginTop: '45px' }}
            className="custom-card">

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card 
             bg={"info"}
             key={"info"}
             text={"info" === 'light' ? 'dark' : 'white'}
             style={{ width: '20em',  marginTop: '45px' }}
             className="custom-card">

            <Card.Body>
              <Card.Title>Card Title</Card.Title>
             
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>


        </Row>
        </Container>
    

  

      </div>
    );
  };

  export default MyWork;