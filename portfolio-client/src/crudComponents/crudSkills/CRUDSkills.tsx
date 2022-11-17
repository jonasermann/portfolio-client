import './CRUDSkills.css';
import AddSkill from './AddSkill';
import EditSkill from './EditSkill';
import RemoveSkill from './RemoveSkill';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useSelector } from 'react-redux';

const Skills = () => {

  const skills: ISkill[] = useSelector(
    (state: AppState) => state.skills);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  const token: string = useSelector(
    (state: AppState) => state.token);

  const adminAccess = token.length > 163;

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/skills`;
    const oldSkills = await fetchData(url) as ISkill[];
    handleChanges<ISkill>(
      skills, oldSkills, oldSkills.map(p => p.id), url, token);
  };

  const idToAdd = () => {
    const arrayLength = skills.length;
    return skills.sort(skill =>
      skill.id)[arrayLength - 1].id + 1;
  };

  return (
    <div>
      <div
        className="mb">
        {
          skills.map((skill, skillIndex) => (
            <div
              className="mb"
              key={skillIndex}
              data-testid="skill">
              <EditSkill {...skill} />
              <RemoveSkill {...skill} />
            </div>
          ))
        }
        <AddSkill {...{ idToAdd }} />
      </div>
      <button
        className="mb"
        type="submit"
        onClick={() => initiateChange()}
        disabled={!adminAccess}>
        Update Skills
      </button>
    </div>
  );
};

export default Skills;
