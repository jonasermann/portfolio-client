import { useContext } from 'react';
import './MediaLinks.css';

interface IMediaLinksProps {
  context: React.Context<IAppProps>
}

const MediaLinks = (props: IMediaLinksProps) => {

  const mediaLinkProps = useContext(props.context).mediaLinkProps;
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
