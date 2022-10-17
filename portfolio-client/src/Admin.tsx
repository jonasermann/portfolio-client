import { useState } from 'react';
import './Admin.css';
import Home from './adminComponents/Home';
import About from './adminComponents/About';
import Projects from './adminComponents/Projects';
import Contact from './adminComponents/Contact';

interface IAdminProps {
  token: string;
}

const Admin = (props: IAdminProps) => {

  const [page, setPage] = useState(<Home token={props.token} />)

  return (
    <div className="Admin">
      <div className="Admin-content">
        <nav className="Admin-nav">
          <div className="Admin-nav__icon" onClick={() => setPage(<Home token={props.token} />)}>
            Home Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<About token={props.token} />)}>
            About Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Projects token={props.token} />)}>
            Projects Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Contact token={props.token} />)}>
            Contact Change
          </div>
        </nav>
        {page}
      </div>
    </div>
  );
}

export default Admin;
