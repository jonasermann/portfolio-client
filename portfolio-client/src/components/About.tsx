import { useContext } from 'react';
import './About.css';
import MediaLinks from './MediaLinks'

interface IAboutProps {
  context: React.Context<IAppProps>
}

const About = (props: IAboutProps) => {

  const aboutProps = useContext(props.context).aboutProps;
  const backgroundParagraphs = aboutProps.backgroundParagraphs;

  return (
    <div className="About">
      <h3>Background</h3>
      {backgroundParagraphs.map((backgroundParagraph, index) =>
        <div className="About-content" key={index}>
          <p className="About-content__text">{backgroundParagraph.text}</p>
        </div>
      )}
      <MediaLinks context={props.context} />
    </div>
  )
}

export default About;
