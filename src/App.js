import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home component
const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <ul>
        <li>
          <Link to="/mywork">My Work</Link>
        </li>
        <li>
          <Link to="/projects">Projects I Have Worked On</Link>
        </li>
        <li>
          <Link to="/books">Favorite Books</Link>
        </li>
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

export default App;