import './CRUDSkills.css';
import { useContext } from 'react';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';

interface ISkillsProps {
  context: React.Context<IAppProps>;
  token: string;
}

interface ISkill {
  id: number
  imgUrl: string
  text: string
  type: number
}

const Skills = (props: ISkillsProps) => {

  const adminAccess = props.token.length > 163;
  const appProps = useContext(props.context);
  const rootUrl = appProps.rootUrl;
  const skillProps = appProps.skillProps;
  const skills = skillProps.skills;
  const setSkills = skillProps.setSkills;

  const initiateChange = async () => {
    const url: string = `${rootUrl}/api/skills`;
    const oldSkills = await fetchOldData(url) as ISkill[];
    handleChanges<ISkill>(
      skills, oldSkills, oldSkills.map(s => s.id), url, props.token
    )
  }

  const addSkill = () => {
    const arrayLength = skills.length;
    const id = skills.sort(skill => skill.id)[arrayLength - 1].id + 1;
    setSkills([...skills, { id: id, imgUrl: '', text: '', type: 0 }])
  }

  const deleteSkill_ = (id: number) => {
    setSkills(
      skills.filter(skill =>
        skill.id !== id
      )
    )
  }

  return (
    <form>
      <div className="CRUDSkills-content">
        {
          skills.map((skill, skillIndex) => (
            <div className="CRUDSkills-content__skill" key={skillIndex} data-testid="skill">

              <img src={skill.imgUrl} alt="logo" height="auto" width="100rem" />

              <input type="text" value={skills[skillIndex].imgUrl} onChange={e => setSkills(skills.map((s, linkIndex) => {
                if (skillIndex === linkIndex) {
                  s.imgUrl = e.target.value
                };
                return s;
              }))} />

              <input type="text" value={skills[skillIndex].text} onChange={e => setSkills(skills.map((s, linkIndex) => {
                if (skillIndex === linkIndex) {
                  s.text = e.target.value
                };
                return s;
              }))} />

              <input type="number" value={skills[skillIndex].type} onChange={e => setSkills(skills.map((s, linkIndex) => {
                if (skillIndex === linkIndex) {
                  s.type = parseInt(e.target.value)
                };
                return s;
              }))} />

              <button className="CRUDSkills-content__skill-delete" type="button" onClick={() => deleteSkill_(skill.id)} data-testid={`delete${skillIndex}`}>Delete</button>
            </div>
          ))
        }
        <button type="button" onClick={() => addSkill()}>Add Skill</button >
      </div>
      <button className="CRUDSkills-content--Save" type="submit" onClick={() => initiateChange()} disabled={!adminAccess}>
        Update Skills
      </button>
    </form >
  )
}

export default Skills;
