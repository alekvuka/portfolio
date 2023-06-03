import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

// Home component
const Home = () => {
  return (
    
    <div>
      <h1> </h1>
      <ul>
        
        <h5>Examples of my work:</h5>
          <ul>
          <li>
          <Link to="/mywork">Stories</Link>
          </li>
          <li>
          <Link to="/mywork">Epics</Link>
          </li>
          <li>
          <Link to="/mywork">Product Roadmaps</Link>
          </li>
          <li>
          <Link to="/mywork">UI/UX </Link>
          </li>
          </ul>
        
        
          <h5>Projects I helped create:</h5>
          <ul>
          <li>
          <Link to="/mywork">Avalanche Insights</Link>
          </li>
          <li>
          <Link to="/mywork">Emozia</Link>
          </li>
          <li>
          <Link to="/mywork">Together.farm</Link>
          </li>
          <li>
          <Link to="/mywork">MapMyStress</Link>
          </li>
          <li>
          <Link to="/mywork">MapMyWork </Link>
          </li>
          <li>
          <Link to="/mywork">Coronavirus Updates</Link>
          </li>
          <li>
          <Link to="/mywork">NYC Traffic Cams</Link>
          </li>
          </ul>
        
          <h5>Favorie Books:</h5>
          <ul>
          <li>
          <Link to="/mywork">The Startup Owners Manual</Link>
          </li>
          <li>
          <Link to="/mywork">Testing Business Ideas</Link>
          </li>
          </ul>

          <h5>Socials:</h5>
          <ul>
          <li>
          <Link to="/mywork">LinkedIn</Link>
          </li>
          <li>
          <Link to="/mywork">GitHub</Link>
          </li>
          <li>
          <Link to="/mywork">Resume</Link>
          </li>
          </ul>

      </ul>
    </div>

  );
};

// MyWork component
const MyWork = () => {
  return (
    <div>
      <h1>My Work</h1>
      {/* Add your content for My Work page */}
    </div>
  );
};

// Projects component
const Projects = () => {
  return (
    <div>
      <h1>Projects I Have Worked On</h1>
      {/* Add your content for Projects page */}
    </div>
  );
};

// Books component
const Books = () => {
  return (
    <div>
      <h1>Favorite Books</h1>
      {/* Add your content for Favorite Books page */}
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>

    
    
  );
};

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}


function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="Examples of my Work" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Stories</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Epics</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Product roadmaps</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Technical Evaluations</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5">UI/UX</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Projects I worked on" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.6">Avalanche Insights</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.7">Emozia</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.8">Together.farm</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.9">MapMyStres</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.0">MapMyWork</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.0">Coronavirus Updates</NavDropdown.Item>
        <NavDropdown.Item eventKey="5.0">NYC Traffic Cams</NavDropdown.Item>
      </NavDropdown>
    
    </Nav>
    
  );
}




export default App;