import { useContext } from 'react';
import './Home.css';
import Skills from './Skills';
import { AppContext } from '../App'

const Home = () => {

  const homeProps = useContext(AppContext).homeProps;
  const homeContent = homeProps.introduction;

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
