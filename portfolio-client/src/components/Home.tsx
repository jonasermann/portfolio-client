import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {

    const [homeContent, setHomeContent] = useState({ profilePicUrl: '', text:''});
  const [homeHistory, setHomeHistory] = useState([{text: ''}]);
  const [homeLinks, setHomeLinks] = useState([{imgUrl: '', url: '', text: ''}]);

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-content')
      .then(response => response.json())
      .then(result => setHomeContent(result))
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-history')
      .then(response => response.json())
      .then(result => setHomeHistory(result))
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-links')
      .then(response => response.json())
      .then(result => setHomeLinks(result))
  }, [])

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={homeContent.profilePicUrl} alt="Profile" height="300rem" />
        <p className="Home__text">{homeContent.text}</p>
      </div>
      <div className="Home-history">
        <h3>Background</h3>
        {homeHistory.map((text, index) => (
          <p className="Home-history__text" key={index}>{text.text}</p>))}
      </div>
      <div className="Home-links">
          {homeLinks.map((link, index) => (
            <div className="Home-link" key={index}>
              <img src={link.imgUrl} alt="logo" height="50rem" width="auto" />
              <a href={link.url}>{link.text}</a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home;
