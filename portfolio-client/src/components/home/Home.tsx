import './Home.css';
import Skills from '../skills/Skills';
import { getImgUrl } from '../../libraries/portfolioLibrary';
import { useSelector } from "react-redux";

const Home = () => {

  const introduction: IIntroduction = useSelector(
    (state: AppState) => state.introduction);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  return (
    <div className="Home">
      <div className="Home-content">
        <img src={getImgUrl(introduction.profilePicUrl, baseUrl)} alt="Profile" height="300rem" />
        <p className="Home__text">{introduction.text}</p>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
