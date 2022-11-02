import { useContext } from 'react';
import './Home.css';
import Skills from './Skills';

interface IHomeProps {
  context: React.Context<IAppProps>
}

const Home = (props: IHomeProps) => {

  const homeProps = useContext(props.context).homeProps;
  const homeContent = homeProps.introduction;

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={homeContent.profilePicUrl} alt="Profile" height="300rem" />
        <p className="Home__text">{homeContent.text}</p>
      </div>
      <Skills context={props.context } />
    </div>
  )
}

export default Home;
