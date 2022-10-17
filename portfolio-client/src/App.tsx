import { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Authentication from './Authentication';
import CRUDNavigation from './crudComponents/CRUDNavigation'
import CRUDHome from './crudComponents/CRUDHome';
import CRUDAbout from './crudComponents/CRUDAbout';
import CRUDProjects from './crudComponents/CRUDProjects';
import CRUDContact from './crudComponents/CRUDContact';

const AppContext = createContext<IAppProps>({} as IAppProps)

const App = () => {

  const [aboutParagraphs, setAboutParagraphs] = useState([{ id: 0, text: '' }]);
  const [homeLinks, setHomeLinks] = useState([{ id: 0, imgUrl: '', url: '', text: '' }]);
  const [homeContent, setHomeContent] = useState({ id: 0, profilePicUrl: '', text: '' });
  const [projects, setProjects] = useState([{ id: 0, title: '', imgUrl: '', text: '', gitUrl: '' }]);
  const [contacts, setContacts] = useState([{ id: 0, imgUrl: '', text: '' }])
  const [skills, setSkills] = useState([{ id: 0, imgUrl: '', text: '', type: 0 }])
  const [token, setToken] = useState('Unauthorized');

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-content')
      .then(response => response.json())
      .then(result => setHomeContent(result))
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/about/')
      .then(response => response.json())
      .then(result => setAboutParagraphs(result))
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-links')
      .then(response => response.json())
      .then(result => setHomeLinks(result))

  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/projects/')
      .then(response => response.json())
      .then(result => setProjects(result))
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/contacts')
      .then(response => response.json())
      .then(result => setContacts(result));
  }, []);

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills')
      .then(response => response.json())
      .then(result => setSkills(result))
  }, []);

  const homeProps: IHomeProps = {
    homeContent, setHomeContent
  }

  const aboutProps: IAboutProps = {
    aboutParagraphs, setAboutParagraphs
  }

  const homeLinkProps: IHomeLinkProps = {
    homeLinks, setHomeLinks
  }

  const projectProps: IProjectProps = {
    projects, setProjects
  }

  const contactProps: IContactProps = {
    contacts, setContacts
  }

  const skillProps: ISkillsProps = {
    skills, setSkills
  }

  const appProps: IAppProps = {
    homeProps, aboutProps, projectProps, contactProps, skillProps, homeLinkProps
  }

  return (
    <AppContext.Provider value={appProps}>
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
                <Route path="crud" element={<Authentication token={token} setToken={setToken} />} />
                <Route path="/crud/changes" element={<CRUDNavigation />} >
                  <Route path="home" element={<CRUDHome token={token} />} />
                  <Route path="about" element={<CRUDAbout token={token} />} />
                  <Route path="projects" element={<CRUDProjects token={token} />} />
                  <Route path="contact" element={<CRUDContact token={token} />} />
                </Route>
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        <footer className="App-footer">
          <p className="App-footer__text">
            Made by me, Jonas Ermann, 2022.
          </p>
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
