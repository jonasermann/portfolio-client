import { useState, useEffect, useContext } from 'react';
import './CRUDSkills.css';
import { AppContext } from '../App'

interface ISkillsProps {
  token: string;
}

interface ISkill {
  id: number
  imgUrl: string
  text: string
  type: number
}

const Skills = (props: ISkillsProps) => {

  const [oldSkills, setOldSkills] = useState([{ id: 1, imgUrl: '', text: '', type: 0 }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills')
      .then(response => response.json())
      .then(result => setOldSkills(result));
  }, []);

  const adminAccess = props.token.length > 163;
  const skillProps = useContext(AppContext).skillProps;
  const skills = skillProps.skills;
  const setSkills = skillProps.setSkills;

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

  const postSkill = (text: string, imgUrl: string, type: number) => {
    fetch('https://jeportapi.azurewebsites.net/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ text, imgUrl })
    })
  }

  const putSkill = (skill: ISkill) => {
    fetch('https://jeportapi.azurewebsites.net/api/skills', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(skill)
    })
  }

  const deleteSkill = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/skills/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
  }

  const handleSkills = () => {

    const oldSkillsLength = oldSkills.length;
    const newSkillsLength = skills.length;
    const skillDifference = oldSkillsLength - newSkillsLength;

    if (skillDifference < 0) {
      for (let i = 0; i < oldSkillsLength; i++) {
        putSkill(skills[i])
      }
      for (let i = oldSkillsLength; i < newSkillsLength; i++) {
        postSkill(skills[i].text, skills[i].imgUrl, skills[i].type)
      }
    }

    if (skillDifference === 0) {
      for (let i = 0; i < oldSkillsLength; i++) {
        putSkill(skills[i])
      }
    }

    if (skillDifference > 0) {
      for (let i = 0; i < newSkillsLength; i++) {
        putSkill(skills[i])
      }
      for (let i = newSkillsLength; i < oldSkillsLength; i++) {
        deleteSkill(oldSkills[i].id)
      }
    }
  }


  return (
    <form>
      < div className="CRUDSkills-content" >
        {
          skills.map((skill, skillIndex) => (
            <div className="CRUDSkills-content__skill" key={skillIndex}>
              <img src={skill.imgUrl} alt="logo" height="auto" width="100rem" />
              <input type="text" value={skills[skillIndex].imgUrl} onChange={e => setSkills(skills.map((s, linkIndex) => {
                if (skillIndex === linkIndex) {
                  s.imgUrl = e.target.value
                }
                return s;
              }))}
              />
              <input type="text" value={skills[skillIndex].text} onChange={e => setSkills(skills.map((s, linkIndex) => {
                if (skillIndex === linkIndex) {
                  s.text = e.target.value
                }
                return s;
              }))}
              />
              <input type="number" value={skills[skillIndex].type} onChange={e => setSkills(skills.map((s, linkIndex) => {
                if (skillIndex === linkIndex) {
                  s.type = parseInt(e.target.value)
                }
                return s;
              }))}
              />
              <button className="CRUDSkills-content__skill-delete" type="button" onClick={() => deleteSkill_(skill.id)}>Delete</button>
            </div>
          ))
        }
        < button type="button" onClick={() => addSkill()}> Add Skill</button >
      </div >
      <button className="CRUDSkills-content--Save" type="button" onClick={() => handleSkills()} disabled={!adminAccess}>
        Update Skills
      </button>
    </form>
  )
}

export default Skills;
