import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'; // Import custom CSS file

function Header() {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="justify-content-center">
          <Nav bg="light" expand="lg" className="justify-content-center">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="#link">Examples of My Work</Nav.Link>
            <Nav.Link href="#link">Projects I Contribnuted To</Nav.Link>
            <Nav.Link href="#link">My Favorite Books</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
    </Navbar>
  );
}

export default Header