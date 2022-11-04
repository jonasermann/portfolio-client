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

  const [backgroundParagraphs, setBackgroundParagraphs] = useState([{ id: 0, text: '' }]);
  const [mediaLinks, setMediaLinks] = useState([{ id: 0, imgUrl: '', url: '', text: '' }]);
  const [introduction, setIntroduction] = useState({ id: 0, profilePicUrl: '', text: '' });
  const [projects, setProjects] = useState([{ id: 0, title: '', imgUrl: '', text: '', gitUrl: '' }]);
  const [contacts, setContacts] = useState([{ id: 0, imgUrl: '', text: '' }])
  const [skills, setSkills] = useState([{ id: 0, imgUrl: '', text: '', type: 0 }])
  const [token, setToken] = useState('Unauthorized');
  const rootUrl: string = 'https://jeportapi.azurewebsites.net';

  useEffect(() => {
    fetch(`${rootUrl}/api/introduction`)
      .then(response => response.json())
      .then(result => setIntroduction(result));

    fetch(`${rootUrl}/api/backgroundparagraphs`)
      .then(response => response.json())
      .then(result => setBackgroundParagraphs(result));

    fetch(`${rootUrl}/api/medialinks`)
      .then(response => response.json())
      .then(result => setMediaLinks(result));

    fetch(`${rootUrl}/api/projects`)
      .then(response => response.json())
      .then(result => setProjects(result));

    fetch(`${rootUrl}/api/contacts`)
      .then(response => response.json())
      .then(result => setContacts(result));

    fetch(`${rootUrl}/api/skills`)
      .then(response => response.json())
      .then(result => setSkills(result));
  }, []);

  const homeProps: IHomeProps = {
    introduction, setIntroduction
  }

  const aboutProps: IAboutProps = {
    backgroundParagraphs, setBackgroundParagraphs
  }

  const mediaLinkProps: IMediaLinkProps = {
    mediaLinks, setMediaLinks
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
    homeProps, aboutProps, projectProps, contactProps, skillProps, mediaLinkProps, rootUrl
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
                <Route index element={<Home context={AppContext} />} />
                <Route path="about" element={<About context={AppContext} />} />
                <Route path="projects" element={<Projects context={AppContext} />} />
                <Route path="crud" element={<Authentication token={token} setToken={setToken} />} />
                <Route path="/crud/changes" element={<CRUDNavigation />} >
                  <Route path="home" element={<CRUDHome context={AppContext} token={token} />} />
                  <Route path="about" element={<CRUDAbout context={AppContext} token={token} />} />
                  <Route path="projects" element={<CRUDProjects context={AppContext} token={token} />} />
                  <Route path="contact" element={<CRUDContact context={AppContext} token={token} />} />
                </Route>
                <Route path="contact" element={<Contact context={AppContext} />} />
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
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
