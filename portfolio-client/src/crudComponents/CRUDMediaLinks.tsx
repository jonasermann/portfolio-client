import { useState, useEffect, useContext } from 'react';
import './CRUDMediaLinks.css';
import { AppContext } from '../App';
import { handleChanges } from '../libraries/crudLibrary';

interface IMediaLinkProps {
  token: string;
}

interface IMediaLink {
  id: number
  imgUrl: string
  text: string
  url: string
};

const MediaLinks = (props: IMediaLinkProps) => {

  const [oldmediaLinks, setOldmediaLinks] = useState([{ id: 1, imgUrl: '', text: '', url: '' }])

  useEffect(() => {
    fetch('http://localhost:5133/api/mediaLinks')
      .then(response => response.json())
      .then(result => setOldmediaLinks(result));
  }, []);

  const adminAccess = props.token.length > 163;
  const mediaLinkProps = useContext(AppContext).mediaLinkProps;
  const mediaLinks = mediaLinkProps.mediaLinks;
  const setmediaLinks = mediaLinkProps.setMediaLinks;

  const addmediaLinks = () => {
    const arrayLength = mediaLinks.length;
    const id = mediaLinks.sort(mediaLink => mediaLink.id)[arrayLength - 1].id + 1;
    setmediaLinks([...mediaLinks, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteLink = (id: number) => {
    setmediaLinks(
      mediaLinks.filter(mediaLink =>
        mediaLink.id !== id
      )
    )
  }

  return (
    <div className="CRUDmediaLinks-content">
      {mediaLinks.map((mediaLink, mediaIndex) =>
        <div className="CRUDmediaLinks-content__mediaLink" key={mediaIndex}>
          <div key={mediaIndex}>
            <img src={mediaLinks[mediaIndex].imgUrl} alt="logo" height="50rem" width="auto" />
            <input type="text" value={mediaLinks[mediaIndex].imgUrl} onChange={e => setmediaLinks(mediaLinks.map((l, linkIndex) => {
              if (mediaIndex === linkIndex) {
                l.imgUrl = e.target.value
              }
              return l;
            }))}
            />
            <textarea
              value={mediaLink.text}
              onChange={e => setmediaLinks(mediaLinks.map((l, textindex) => {
                if (mediaIndex === textindex) {
                  l.text = e.target.value
                }
                return l;
              }))}
              rows={2}
              cols={100}
            />
            <div>
              <input type="text" value={mediaLinks[mediaIndex].url} onChange={e => setmediaLinks(mediaLinks.map((l, linkIndex) => {
                if (mediaIndex === linkIndex) {
                  l.url = e.target.value
                }
                return l;
              }))}
              />
            </div>
          </div>
          <button className="CRUDmediaLinks-content__mediaLink-delete" type="button" onClick={() => deleteLink(mediaLink.id)}>Delete</button>
        </div>
      )}
      <button type="button" onClick={() => addmediaLinks()}>Add Icon Description</button>
      <div className="CRUDmediaLinks-content__Save">
        <button type="submit" onClick={() => handleChanges<IMediaLink>(
          mediaLinks, oldmediaLinks, oldmediaLinks.map(o => o.id), 'http://localhost:5133/api/mediaLinks', props.token
        )} disabled={!adminAccess}>Update Links</button>
      </div>
    </div>
  )
}

export default MediaLinks;