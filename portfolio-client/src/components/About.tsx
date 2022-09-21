import { useState, useEffect } from 'react';
import './About.css';

const About = () => {

  const [aboutParagraphs, setAboutParagraphs] = useState([{ text: '' }]);
  const [homeLinks, setHomeLinks] = useState([{ imgUrl: '', url: '', text: '' }]);

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

  return (
    <div className="About">
      <h3>Background</h3>
      {aboutParagraphs.map(aboutParagraph => 
        <div className="About-content">
          <p className="About-content__text">{aboutParagraph.text}</p>
        </div>
      )}
      <div className="Home-links">
        {homeLinks.map((link, index) => (
          <div className="Home-link" key={index}>
            <img src={link.imgUrl} alt="logo" height="50rem" width="auto" />
            <a href={link.url}>{link.text}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
