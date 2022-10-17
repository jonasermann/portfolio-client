import { useContext } from 'react';
import './Home.css';
import Skills from './Skills';
import { AppContext } from '../App';

interface IHomeProps {
  token: string;
}

const Home = (props: IHomeProps) => {

  const adminAccess = props.token !== 'Not Authorized';
  const homeProps = useContext(AppContext).homeProps;
  const homeContent = homeProps.homeContent;
  const setHomeContent = homeProps.setHomeContent;

  const handleHomeContent = () => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-content', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(homeContent)
    });
  }

  return (
    <div>
      <div className="Home-content">
        <form>
          <div className="Home-content__homeContent">
            <img src={homeContent.profilePicUrl} alt="profile-pic" height="100rem" width="auto" />
            <input type="text" value={homeContent.profilePicUrl} onChange={(e => setHomeContent({ id: homeContent.id, text: homeContent.text, profilePicUrl: e.target.value }))} />
            <textarea
              className="Home-content__input"
              value={homeContent.text}
              onChange={e => setHomeContent({ id: homeContent.id, text: e.target.value, profilePicUrl: homeContent.profilePicUrl })}
              rows={5}
              cols={100}
            />
          </div>
          <button className="Home-content--Save" type="submit" onClick={() => handleHomeContent()} disabled={!adminAccess}>
            Update Home
          </button>
        </form>
      </div>
      <Skills token={props.token} />
    </div>
  )
}

export default Home;
