import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
            About
          </div>
          <div className="App-nav__icon" onClick={() => setPage(<Skills />)}>
            Skills
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
        <p className="App-footer__text">
          Made by me, Jonas Ermann, 2022.
        </p>
      </footer>
    </div>
  );
}

export default App;
