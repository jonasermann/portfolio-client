import { useState, useEffect } from 'react';
import './SkillsAdmin.css';

interface IAboutProps {
  token: string;
}

const Skills = (props: IAboutProps) => {

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
