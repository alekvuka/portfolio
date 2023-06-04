import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from '.pages/home';
import Books from '.pages/books';
import MyWork from '.pages/MyWork';
import Projects from '.pages/Projects';




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
