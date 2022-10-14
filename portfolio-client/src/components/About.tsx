import { useContext } from 'react';
import './About.css';
import HomeLinks from './HomeLinks'
import { AppContext } from '../App';

const About = () => {

  const aboutProps = useContext(AppContext).aboutProps;
  const aboutParagraphs = aboutProps.aboutParagraphs;

  return (
    <div className="About">
      <h3>Background</h3>
      {aboutParagraphs.map((aboutParagraph, index) =>
        <div className="About-content" key={index}>
          <p className="About-content__text">{aboutParagraph.text}</p>
        </div>
      )}
      <HomeLinks />
    </div>
  )
}

export default About;
