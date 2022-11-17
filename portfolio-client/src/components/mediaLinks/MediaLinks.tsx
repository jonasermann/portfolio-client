import './MediaLinks.css';
import { getImgUrl } from '../../libraries/portfolioLibrary';
import { useSelector } from 'react-redux';

const MediaLinks = () => {

  const mediaLinks: IMediaLink[] = useSelector(
    (state: AppState) => state.mediaLinks);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  return (
    <div className="Media-links">
      {mediaLinks.map((link, index) => (
        <div className="Media-link" key={index}>
          <img src={getImgUrl(link.imgUrl, baseUrl)} alt="logo" height="50rem" width="auto" />
          <a href={link.url}>{link.text}</a>
        </div>
      ))}
    </div>
  );
};

export default MediaLinks;
