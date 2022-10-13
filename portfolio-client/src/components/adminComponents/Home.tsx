import { useState, useEffect, useContext } from 'react';
import './Home.css';
import { AppContext } from '../../App'

interface IHomeProps {
  token: string;
}

const Home = (props: IHomeProps) => {

  const homeProps = useContext(AppContext).homeProps;
  const homeContent = homeProps.homeContent;
  const setHomeContent = homeProps.setHomeContent;
  const [homeContentText, setHomeContentText] = useState(homeContent.text)

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
    <div className="Home-content">
      <form>
        <div>
          <textarea
            className="Home-content__input"
            value={homeContentText}
            onChange={e => setHomeContentText(e.target.value)}
            rows={5}
            cols={100}
          />
        </div>
        <button className="Home-content--Save"type="button" onClick={() => handleHomeContent() }>
          Update Database
        </button>
      </form>
    </div>
  )
}

export default Home;
