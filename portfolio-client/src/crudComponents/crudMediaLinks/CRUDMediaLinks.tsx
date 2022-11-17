import './CRUDMediaLinks.css';
import AddMediaLink from './AddMediaLink';
import EditMediaLink from './EditMediaLink';
import RemoveMediaLink from './RemoveMediaLink';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import { useSelector} from 'react-redux';

const MediaLinks = () => {

  const mediaLinks: IMediaLink[] = useSelector(
    (state: AppState) => state.mediaLinks);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  const token: string = useSelector(
    (state: AppState) => state.token);

  const adminAccess = token.length > 163;

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/backgroundparagraphs`;
    const oldMediaLinks = await fetchData(url) as IMediaLink[];
    handleChanges<IMediaLink>(
      mediaLinks, oldMediaLinks, oldMediaLinks.map(p => p.id), url, token);
  };

  const idToAdd = () => {
    const arrayLength = mediaLinks.length;
    return mediaLinks.sort(mediaLink =>
      mediaLink.id)[arrayLength - 1].id + 1;
  };

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
      <AddMediaLink {...{ idToAdd }} />
      <div
        className="mb">
        <button
          type="button"
          onClick={() => initiateChange()}
          disabled={!adminAccess}>Update Links</button>
      </div>
    </div>
  );
};

export default MediaLinks;
