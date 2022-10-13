import { useEffect, useContext } from 'react';
import './About.css';
import { AppContext } from '../App';

const About = () => {

  const aboutProps = useContext(AppContext).aboutProps;
  const aboutParagraphs = aboutProps.aboutParagraphs;
  const homeLinks = aboutProps.homeLinks;

  return (
    <div className="About">
      <h3>Background</h3>
      {aboutParagraphs.map((aboutParagraph, index) =>
        <div className="About-content" key={index}>
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
