import './Skills.css';
import { getImgUrl } from '../../libraries/portfolioLibrary';
import { useSelector } from 'react-redux';

const Skills = () => {

  const skills: ISkill[] = useSelector(
    (state: AppState) => state.skills);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  const backend = skills.filter(skill => skill.type === 0);
  const frontend = skills.filter(skill => skill.type === 1);
  const languages = skills.filter(skill => skill.type === 2);
  const types = [{ name: 'languages', type: languages }, { name: 'backend', type: backend }, { name: 'frontend', type: frontend }];

  return (
    <div className="Skills-content">
      {types.map(type => (
          <div className="Skills" key={type.name}>
            <h2>{type.name}</h2>
            <div className="Skills-row">
              {type.type.map(content => (
                <div className="Skills-content" key={content.text}>
                  <img src={getImgUrl(content.imgUrl, baseUrl)} alt="logo" width="100rem" height="auto" />
                  <p>{content.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Skills;
