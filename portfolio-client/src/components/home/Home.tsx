import './Home.css';
import Skills from '../skills/Skills';
import { useSelector, shallowEqual } from "react-redux";

const Home = () => {

  const introduction: IIntroduction = useSelector(
    (state: AppState) => state.introduction,
    shallowEqual
  )

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={introduction.profilePicUrl} alt="Profile" height="300rem" />
        <p className="Home__text">{introduction.text}</p>
      </div>
      <Skills />
    </div>
  )
}

export default Home;
