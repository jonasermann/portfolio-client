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
        <div className="Skills" key={type.name}>
          <h2>{type.name}</h2>
          <div className="Skills-row">
            {type.type.map(content => (
              <div className="Skills-content" key={content.text}>
                <img src={content.imgUrl} alt="logo" width="100rem" height="auto" />
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
