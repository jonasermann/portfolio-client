import { useContext } from 'react';
import './Skills.css';
import { AppContext } from '../App';

const Skills = () => {

  const skillProps = useContext(AppContext).skillProps;
  const backend = skillProps.skills.filter(skill => skill.type === 0);
  const frontend = skillProps.skills.filter(skill => skill.type === 1);
  const languages = skillProps.skills.filter(skill => skill.type === 2);
  const types = [{ name: 'languages', type: languages }, { name: 'backend', type: backend }, { name: 'frontend', type: frontend}];

  return (
  <div className ="Skills-content">
    {
      types.map(type => (
        <div className="Skills">
          <h2>{type.name}</h2>
          <div className="Skills-row">
            {type.type.map((content, index) => (
              <div className="Skills-content" key={index}>
                <img src={content.imgUrl} alt="logo" width="auto" height="100rem" />
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Skills;
