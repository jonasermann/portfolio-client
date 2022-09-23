import { useState } from 'react';
import './Admin.css';
import Home from './adminComponents/Home';
import About from './adminComponents/About';
import Projects from './adminComponents/Projects';
import Contact from './adminComponents/Contact';

type Props = {
  accessAdmin: boolean;
}

const Admin = (props: Props) => {

  const [page, setPage] = useState(<Home accessAdmin={props.accessAdmin} />)

  return (
    <div className="Admin">
      <div className="Admin-content">
        <nav className="Admin-nav">
          <div className="Admin-nav__icon" onClick={() => setPage(<Home accessAdmin={props.accessAdmin} />)}>
            Home Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<About accessAdmin={props.accessAdmin} />)}>
            About Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Projects accessAdmin={props.accessAdmin} />)}>
            Projects Change
          </div>
          <div className="Admin-nav__icon" onClick={() => setPage(<Contact accessAdmin={props.accessAdmin} />)}>
            Contact Change
          </div>
        </nav>
        {page}
      </div>
    </div>
  );
}

export default Admin;
