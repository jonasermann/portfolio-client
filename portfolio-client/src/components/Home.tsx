import { useState, useEffect } from 'react';
import './Home.css';
import Skills from './Skills';

const Home = () => {

  const [homeContent, setHomeContent] = useState({ profilePicUrl: '', text:''});
 
  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-content')
      .then(response => response.json())
      .then(result => setHomeContent(result))
  }, [])

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={homeContent.profilePicUrl} alt="Profile" height="300rem" />
        <p className="Home__text">{homeContent.text}</p>
      </div>
      <Skills />
    </div>
  )
}

export default Home;
