
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from '../components/navigation/Navigation';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Authentication from '../authentication/Authentication';
import CRUDNavigation from '../crudComponents/crudNavigation/CRUDNavigation'
import CRUDHome from '../crudComponents/crudHome/CRUDHome';
import CRUDAbout from '../crudComponents/crudAbout/CRUDAbout';
import CRUDProjects from '../crudComponents/crudProjects/CRUDProjects';
import CRUDContact from '../crudComponents/crudContact/CRUDContact';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header__text">
          Jonas Ermann .NET Full Stack Developer
        </p>
      </header>
      <div className="App-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="crud" element={<Authentication />} />
              <Route path="/crud/changes" element={<CRUDNavigation />} >
                <Route path="home" element={<CRUDHome baseUrl="" token="" />} />
                <Route path="about" element={<CRUDAbout baseUrl="" token="" />} />
                <Route path="projects" element={<CRUDProjects baseUrl="" token="" />} />
                <Route path="contact" element={<CRUDContact baseUrl="" token="" />} />
              </Route>
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <br />
      <br />
      <br />
      <footer className="App-footer">
        <p className="App-footer__text">
          Made by me, Jonas Ermann, 2022.
        </p>
      </footer>
    </div>
  );
}

export default App;
