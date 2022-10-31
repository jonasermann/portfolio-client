import { useContext } from 'react';
import './About.css';
import MediaLinks from './MediaLinks'
import { AppContext } from '../App';

const About = () => {

  const aboutProps = useContext(AppContext).aboutProps;
  const backgroundParagraphs = aboutProps.backgroundParagraphs;

  return (
    <div className="About">
      <h3>Background</h3>
      {backgroundParagraphs.map((backgroundParagraph, index) =>
        <div className="About-content" key={index}>
          <p className="About-content__text">{backgroundParagraph.text}</p>
        </div>
      )}
      <MediaLinks />
    </div>
  )
}

export default About;
