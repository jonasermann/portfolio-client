import './Skills.css';
import { useSelector, shallowEqual } from "react-redux";

const Skills = () => {

  const skills: ISkill[] = useSelector(
    (state: AppState) => state.skills,
    shallowEqual
  )

  const backend = skills.filter(skill => skill.type === 0);
  const frontend = skills.filter(skill => skill.type === 1);
  const languages = skills.filter(skill => skill.type === 2);
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
