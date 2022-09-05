import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {

  const [homeContent, setHomeContent] = useState({imgUrl: '', text:''});
  const [homeHistory, setHomeHistory] = useState({title: '', texts: ['']});
  const [homeLinks, setHomeLinks] = useState([{imgUrl: '', url: '', text: ''}]);

  useEffect(() => {
    fetch('https://localhost:7140/home-content')
      .then(response => response.json())
      .then(result => setHomeContent(result))
  }, [])

  useEffect(() => {
    fetch('https://localhost:7140/home-history')
      .then(response => response.json())
      .then(result => setHomeHistory(result))
  }, [])

  useEffect(() => {
    fetch('https://localhost:7140/home-links')
      .then(response => response.json())
      .then(result => setHomeLinks(result))
  }, [])

  return (
    <div className="Home">
      {console.log(homeHistory)}
      <div className="Home-content">
        <img src={homeContent.profilePicUrl} alt="Profile" height="300rem" />
        <p className="Home__text">{homeContent.text}</p>
      </div>
      <div className="Home-history">
        <h3>{homeHistory.title}</h3>
        {(homeHistory) && homeHistory.texts.map((text, index) => (
          <p className="Home-history__text" key={index}>{text}</p>))}
      </div>
      <div className="Home-links">
          {homeLinks.map((link, index) => (
            <div className="Home-link" key={index}>
              <img src={link.imgUrl} alt="linked in logo" height="50rem" width="auto" />
              <a href={link.url}>{link.text}</a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home;