import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Header from '../components/Header';

// Home component
const Home = () => {
  return (
    <div>
      <Header />
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
        
        
          <h5>Projects I contributed to:</h5>
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
  );}

  export default Home;

/*
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
    
    
      <h5>Projects I contributed to:</h5>
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
*/