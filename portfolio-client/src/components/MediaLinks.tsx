import { useContext } from 'react';
import './MediaLinks.css';
import { AppContext } from '../App';

const MediaLinks = () => {

  const mediaLinkProps = useContext(AppContext).mediaLinkProps;
  const mediaLinks = mediaLinkProps.mediaLinks;

  return (
    <div className="Media-links">
      {mediaLinks.map((link, index) => (
        <div className="Media-link" key={index}>
          <img src={link.imgUrl} alt="logo" height="50rem" width="auto" />
          <a href={link.url}>{link.text}</a>
        </div>
      ))}
    </div>
    )
}

export default MediaLinks;
