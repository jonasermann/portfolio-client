import './CRUDMediaLinks.css';
import EditMediaLink from './EditMediaLink';
import RemoveMediaLink from './RemoveMediaLink';
import AddMediaLink from './AddMediaLink';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useSelector, shallowEqual } from "react-redux";

const MediaLinks = (props: IAppProps) => {

  const adminAccess = props.token.length > 163;
  const baseUrl = props.baseUrl;
  const mediaLinks: IMediaLink[] = useSelector(
    (state: AppState) => state.mediaLinks,
    shallowEqual
  )

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/backgroundparagraphs`;
    const oldMediaLinks = await fetchData(url) as IMediaLink[];
    handleChanges<IMediaLink>(
      mediaLinks, oldMediaLinks, oldMediaLinks.map(p => p.id), url, props.token
    )
  }

  const idToAdd = () => {
    const arrayLength = mediaLinks.length;
    return mediaLinks.sort(mediaLink =>
      mediaLink.id)[arrayLength - 1].id + 1;
  }

  return (
    <div
      className="mb">
      {mediaLinks.map((mediaLink, mediaIndex) =>
        <div
          className="mb"
          key={mediaIndex}
          data-testid="mediaLink">
          <EditMediaLink {...mediaLink} />
          <RemoveMediaLink {...mediaLink} />
        </div>
      )}
      <AddMediaLink {...{idToAdd}} />
      <div
        className="mb">
        <button
          type="button"
          onClick={() => initiateChange()}
          disabled={!adminAccess}>Update Links</button>
      </div>
    </div>
  )
}

export default MediaLinks;