import './CRUDMediaLinks.css';
import { useContext } from 'react';
import { AppContext } from '../App';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';

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

  const adminAccess = props.token.length > 163;
  const appProps = useContext(AppContext);
  const rootUrl = appProps.rootUrl;
  const mediaLinkProps = appProps.mediaLinkProps;
  const mediaLinks = mediaLinkProps.mediaLinks;
  const setmediaLinks = mediaLinkProps.setMediaLinks;

  const initiateChange = async () => {
    const url: string = `${rootUrl}/medialinks`;
    const oldMediaLinks = await fetchOldData(url) as IMediaLink[];
    handleChanges<IMediaLink>(
      mediaLinks, oldMediaLinks, oldMediaLinks.map(p => p.id), url, props.token
    )
  }

  const addMediaLinks = () => {
    const arrayLength = mediaLinks.length;
    const id = mediaLinks.sort(mediaLink => mediaLink.id)[arrayLength - 1].id + 1;
    setmediaLinks([...mediaLinks, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteMediaLink = (id: number) => {
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
          <button className="CRUDmediaLinks-content__mediaLink-delete" type="button" onClick={() => deleteMediaLink(mediaLink.id)}>Delete</button>
        </div>
      )}
      <button type="button" onClick={() => addMediaLinks()}>Add Icon Description</button>
      <div className="CRUDmediaLinks-content__Save">
        <button type="button" onClick={() => initiateChange()} disabled={!adminAccess}>Update Links</button>
      </div>
    </div>
  )
}

export default MediaLinks;