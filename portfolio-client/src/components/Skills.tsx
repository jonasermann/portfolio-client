import { useContext} from 'react';
import './Skills.css';
import { AppContext } from '../App';

const Skills = () => {

  const skillProps = useContext(AppContext).skillProps;
  const backend = skillProps.backend;
  const frontend = skillProps.frontend;
  const languages = skillProps.languages;

  return (
    <div className="Skills">
      <h2>Languages</h2>
      <div className="Skills-row">
        {languages.map((content, index) => (
          <div className="Skills-content" key={index}>
            <img src={content.imgUrl} alt="logo" width="auto" height="100rem" />
            <p>{content.text}</p>
          </div>
        ))}
      </div>

      <h2>Back End</h2>
      <div className="Skills-row">
        {backend.map((content, index) => (
          <div className="Skills-content" key={index}>
            <img src={content.imgUrl} alt="logo" width="auto" height="100rem" />
            <p>{content.text}</p>
          </div>
        ))}
      </div>

      <h2>Front End</h2>
      <div className="Skills-row">
        {frontend.map((content, index) => (
          <div className="Skills-content" key={index}>
            <img src={content.imgUrl} alt="logo" width="auto" height="100rem" />
            <p>{content.text}</p>
          </div>
        ))}
      </div> 
    </div>
   )
}

export default Skills;
