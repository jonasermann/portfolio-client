import './CRUDHome.css';
import { useContext } from 'react';
import { AppContext } from '../App';
import CRUDSkills from './CRUDSkills';

interface IHomeProps {
  token: string;
}

const Home = (props: IHomeProps) => {

  const adminAccess = props.token.length > 163;
  const homeProps = useContext(AppContext).homeProps;
  const homeContent = homeProps.introduction;
  const setHomeContent = homeProps.setIntroduction;

  const handleHomeContent = () => {
    fetch('http://localhost:5133/api/introduction', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(homeContent)
    });
  }

  return (
    <div>
      <div className="CRUDHome-content">
        <form>
          <div className="CRUDHome-content__homeContent">
            <img src={homeContent.profilePicUrl} alt="profile-pic" height="100rem" width="auto" />
            <input type="text" value={homeContent.profilePicUrl} onChange={(e => setHomeContent({ id: homeContent.id, text: homeContent.text, profilePicUrl: e.target.value }))} />
            <textarea
              className="CRUDHome-content__input"
              value={homeContent.text}
              onChange={e => setHomeContent({ id: homeContent.id, text: e.target.value, profilePicUrl: homeContent.profilePicUrl })}
              rows={5}
              cols={100}
            />
          </div>
          <button className="CRUDHome-content--Save" type="button" onClick={() => handleHomeContent()} disabled={!adminAccess}>
            Update Home
          </button>
        </form>
      </div>
      <CRUDSkills token={props.token} />
    </div>
  )
}

export default Home;
