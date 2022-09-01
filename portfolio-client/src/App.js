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
