import './Home.css';
import Skills from '../skills/Skills';
import { useSelector, shallowEqual } from "react-redux";
import { getImgUrl } from '../../libraries/portfolioLibrary';

const Home = () => {

  const introduction: IIntroduction = useSelector(
    (state: AppState) => state.introduction,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={getImgUrl(introduction.profilePicUrl, baseUrl)} alt="Profile" height="300rem" />
        <p className="Home__text">{introduction.text}</p>
      </div>
      <Skills />
    </div>
  )
}

export default Home;
