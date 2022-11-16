import './MediaLinks.css';
import { useSelector, shallowEqual } from "react-redux";
import { getImgUrl } from '../../libraries/portfolioLibrary';

const MediaLinks = () => {

  const mediaLinks: IMediaLink[] = useSelector(
    (state: AppState) => state.mediaLinks,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  return (
    <div className="Media-links">
      {mediaLinks.map((link, index) => (
        <div className="Media-link" key={index}>
          <img src={getImgUrl(link.imgUrl, baseUrl)} alt="logo" height="50rem" width="auto" />
          <a href={link.url}>{link.text}</a>
        </div>
      ))}
    </div>
    )
}

export default MediaLinks;
