import { useState } from 'react';
import './Admin.css';
import Home from './adminComponents/Home';
import About from './adminComponents/About';
import Projects from './adminComponents/Projects';
import Contact from './adminComponents/Contact';

const Admin = () => {

  const [page, setPage] = useState(<Home />)

  return (
    <div className="Admin">
      <div className="Admin-content">
        <nav className="Admin-nav">
          <div className="Admin-nav__icon" onClick={window.location.reload}>
            Return Home
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Home />)}>
            Home Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<About />)}>
            About Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Projects />)}>
            Projects Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Contact />)}>
            Contact Change
          </div>
        </nav>
        {page}
      </div>
    </div>
  );
}

export default Admin;
