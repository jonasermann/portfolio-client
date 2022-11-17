import './CRUDAbout.css';
import EditBackgroundParagraph from './EditBackgroundParagraph';
import RemoveBackgroundParagraph from './RemoveBackgroundParagraph';
import AddBackgroundParagraph from './AddBackgroundParagraph';
import { handleChanges, fetchData } from '../../libraries/crudLibrary';
import CRUDMediaLinks from '../crudMediaLinks/CRUDMediaLinks';
import { useSelector, shallowEqual } from "react-redux";

const About = () => {

  const backgroundParagraphs: IBackgroundParagraph[] = useSelector(
    (state: AppState) => state.backgroundParagraphs,
    shallowEqual
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  const token: string = useSelector(
    (state: AppState) => state.token,
    shallowEqual
  )

  const adminAccess = token.length > 163;

  const initiateChange = async () => {
    const url: string = `${baseUrl}/api/backgroundparagraphs`;
    const oldBackgroundParagraphs = await fetchData(url) as IBackgroundParagraph[];
    handleChanges<IBackgroundParagraph>(
      backgroundParagraphs, oldBackgroundParagraphs, oldBackgroundParagraphs.map(p => p.id), url, token
    )
  }

  const idToAdd = () => {
    const arrayLength = backgroundParagraphs.length;
    return backgroundParagraphs.sort(backgroundParagraph =>
      backgroundParagraph.id)[arrayLength - 1].id + 1;
  }

  return (
    <div>
      <div
        className="mb">
        <div>
          {backgroundParagraphs.map((backgroundParagraph, paragraphIndex) =>
            <div key={paragraphIndex}>
              <EditBackgroundParagraph {...backgroundParagraph} />
              <RemoveBackgroundParagraph {...backgroundParagraph} />
            </div>
          )}
        </div>
        <AddBackgroundParagraph {...{ idToAdd}} />
        <div
          className="mb">
          <button
            type="button"
            onClick={() => initiateChange()}
            disabled={!adminAccess}>Update About</button>
        </div>
      </div>
      <CRUDMediaLinks />
    </div>
  )
}

export default About;
