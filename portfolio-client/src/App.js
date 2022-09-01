import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';

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
          <div className="App-nav__icon">
            About
          </div>
          <div className="App-nav__icon">
            Projects
          </div>
          <div className="App-nav__icon">
            Contact
          </div>
        </nav>
        {page}
      </div>
      <footer className="App-footer">
        <p className="App-footer__text">
          Made by me
        </p>
      </footer>
    </div>
  );
}

export default App;
