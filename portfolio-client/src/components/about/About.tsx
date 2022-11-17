import './About.css';
import MediaLinks from '../mediaLinks/MediaLinks';
import { useSelector } from 'react-redux';

const About = () => {

  const backgroundParagraphs: IBackgroundParagraph[] = useSelector(
    (state: AppState) => state.backgroundParagraphs);

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
  );
};

export default About;
