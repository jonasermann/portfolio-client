import './App.css';
import Authentication from '../authentication/Authentication';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Home from '../components/home/Home';
import Navigation from '../components/navigation/Navigation';
import Projects from '../components/projects/Projects';
import CRUDAbout from '../crudComponents/crudAbout/CRUDAbout';
import CRUDContact from '../crudComponents/crudContact/CRUDContact';
import CRUDNavigation from '../crudComponents/crudNavigation/CRUDNavigation'
import CRUDHome from '../crudComponents/crudHome/CRUDHome';
import CRUDProjects from '../crudComponents/crudProjects/CRUDProjects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { populateState } from '../actions/crudActions';
import { useEffect, useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const App = () => {

  const baseUrl: string = 'https://jeportapi.azurewebsites.net';
  const dispatch: Dispatch<any> = useDispatch();

  const set = useCallback(
    (state: AppState) => dispatch(populateState(state)),
    [dispatch]);

  const fetchData: () => Promise<AppState> = async () => {
    const backgroundParagraphsResponse = await fetch(`${baseUrl}/api/backgroundParagraphs`);
    const backgroundParagraphsJson = await backgroundParagraphsResponse.json() as IBackgroundParagraph[];
    const backgroundParagraphs = backgroundParagraphsJson;

    const contactsResponse = await fetch(`${baseUrl}/api/contacts`);
    const contactsJson = await contactsResponse.json() as IContact[];
    const contacts = contactsJson;

    const introductionResponse = await fetch(`${baseUrl}/api/introduction`);
    const introductionJson = await introductionResponse.json() as IIntroduction;
    const introduction = introductionJson;

    const mediaLinksResponse = await fetch(`${baseUrl}/api/mediaLinks`);
    const mediaLinksJson = await mediaLinksResponse.json() as IMediaLink[];
    const mediaLinks = mediaLinksJson;

    const projectsResponse = await fetch(`${baseUrl}/api/projects`);
    const projectsJson = await projectsResponse.json() as IProject[];
    const projects = projectsJson;

    const skillsResponse = await fetch(`${baseUrl}/api/skills`);
    const skillsJson = await skillsResponse.json() as ISkill[];
    const skills = skillsJson;

    return {
      backgroundParagraphs,
      contacts,
      introduction,
      mediaLinks,
      projects,
      skills,
      baseUrl,
      token: '',
    };
  };

  const initiateFetch = async () => {
    const fetchedState = fetchData();
    fetchedState
      .then(state => set(state))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    initiateFetch();
  }, []);

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
                <Route path="home" element={<CRUDHome />} />
                <Route path="about" element={<CRUDAbout />} />
                <Route path="projects" element={<CRUDProjects />} />
                <Route path="contact" element={<CRUDContact />} />
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
};

export default App;
