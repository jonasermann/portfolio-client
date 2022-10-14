import { useContext } from 'react';
import './About.css';
import { AppContext } from '../App';

const HomeLinks = () => {

  const homeLinkProps = useContext(AppContext).homeLinkProps;
  const homeLinks = homeLinkProps.homeLinks

  return (
    <div className="Home-links">
      {homeLinks.map((link, index) => (
        <div className="Home-link" key={index}>
          <img src={link.imgUrl} alt="logo" height="50rem" width="auto" />
          <a href={link.url}>{link.text}</a>
        </div>
      ))}
    </div>
    )
}

export default HomeLinks;
