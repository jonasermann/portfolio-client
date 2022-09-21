import { useState, useEffect } from 'react';
import './HomeAdmin.css';

const Home = () => {

  const [homeContent, setHomeContent] = useState({ Id: 0, profilePicUrl: '', text: '' });
  const [homeContentText, setHomeContentText] = useState(homeContent.text)

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-content')
      .then(response => response.json())
      .then(result => { setHomeContent(result); setHomeContentText(result.text)})
  }, [])

  const handleHomeContent = () => {
    homeContent.text = homeContentText;
    fetch('https://jeportapi.azurewebsites.net/api/home/home-content', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(homeContent)
    });
  }

  return (
    <div className="HomeAdmin-content">
      <form>
        <div>
        <textarea
          className="HomeAdmin-content__input"
          value={homeContentText}
          onChange={e => setHomeContentText(e.target.value)}
          rows={5}
          cols={100}
          />
        </div>
        <button type="button" onClick={() => handleHomeContent()}>
          Save Changes
        </button>
        </form>
    </div>
    )
}

export default Home;
