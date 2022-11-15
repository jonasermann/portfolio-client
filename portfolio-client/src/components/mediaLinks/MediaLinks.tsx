import './MediaLinks.css';
import { useSelector, shallowEqual } from "react-redux";

const MediaLinks = () => {

  const mediaLinks: IMediaLink[] = useSelector(
    (state: AppState) => state.mediaLinks,
    shallowEqual
  )

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
