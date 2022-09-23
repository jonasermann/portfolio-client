import { useState, useEffect } from 'react';
import './SkillsAdmin.css';

type Props = {
  accessAdmin: boolean;
}

const Skills = (props: Props) => {

  const [backend, setBackend] = useState([{ imgUrl: '', text: '' }])
  const [frontend, setFrontend] = useState([{ imgUrl: '', text: '' }])
  const [languages, setLanguages] = useState([{ imgUrl: '', text: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills/backend')
      .then(response => response.json())
      .then(result => setBackend(result))
  }, []);

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills/frontend')
      .then(response => response.json())
      .then(result => setFrontend(result))
  }, []);

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/skills/languages')
      .then(response => response.json())
      .then(result => setLanguages(result))
  }, []);

  return (
    <div className="Skills-content">
    </div>
  )
}

export default Skills;
