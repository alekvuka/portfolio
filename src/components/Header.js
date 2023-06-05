import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'; // Import custom CSS file
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <Navbar bg="light" variant="light" expand="lg" className="justify-content-center">
          <Nav bg="light" expand="lg" className="justify-content-center">
            <Nav.Link  as={NavLink} to="/" exact activeClassName="active"> Home</Nav.Link>
            <Nav.Link as={NavLink} to="/mywork" activeClassName="active">Examples of My Work</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" activeClassName="active">Projects I Contribnuted To</Nav.Link>
            <Nav.Link as={NavLink} to="/books" activeClassName="active">My Favorite Books</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default Header