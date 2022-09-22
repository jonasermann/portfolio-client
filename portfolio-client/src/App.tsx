import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Admin from './components/Admin';
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {

  const [page, setPage] = useState(<Home />)

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header__text">
          Jonas Ermann .NET Full Stack Developer
        </p>
      </header>
      <div className="App-content">
        <nav className="App-nav">
          <div className="App-nav__icon" onClick={() => setPage(<Home />)}>
            Home
          </div>
          <div className="App-nav__icon" onClick={() => setPage(<About />)}>
            About
          </div>
          <div className="App-nav__icon" onClick={() => setPage(<Projects />)}>
            Projects
          </div>
          <div className="App-nav__icon" onClick={() => setPage(<Contact />)}>
            Contact
          </div>
        </nav>
        {page}
      </div>
      <footer className="App-footer">
        <p className="App-footer__text" onClick={() => 
          ReactDOM.render(
            <Auth0Provider
              domain=""
              clientId=""
              redirectUri={window.location.origin}>
              <Admin />
            </Auth0Provider>,
            document.getElementById("root"))}>
          Admin
        </p>
        <p className="App-footer__text">
          Made by me, Jonas Ermann, 2022.
        </p>
      </footer>
    </div>
  );
}

export default App;
