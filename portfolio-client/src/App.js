import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header__text">
          Jonas Ermann .NET Full Stack Developer
        </p>
      </header>
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
      <div className="App-content">
        <Home />
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
