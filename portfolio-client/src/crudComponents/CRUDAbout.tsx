import { useContext } from 'react';
import './CRUDAbout.css';
import CRUDMediaLinks from './CRUDMediaLinks';
import { AppContext } from '../App';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';

interface IAboutProps {
  token: string;
}

interface IBackgroundParagraph {
  id: number,
  text: string
};

const About = (props: IAboutProps) => {

  const adminAccess = props.token.length > 163;
  const appProps = useContext(AppContext);
  const rootUrl = appProps.rootUrl;
  const aboutProps = appProps.aboutProps;
  const backgroundParagraphs = aboutProps.backgroundParagraphs;
  const setbackgroundParagraphs = aboutProps.setBackgroundParagraphs;

  const initiateChange = async () => {
    const url: string = `${rootUrl}/backgroundparagraphs`;
    const oldBackgroundParagraphs = await fetchOldData(url) as IBackgroundParagraph[];
    handleChanges<IBackgroundParagraph>(
      backgroundParagraphs, oldBackgroundParagraphs, oldBackgroundParagraphs.map(p => p.id), url, props.token
    )
  }

  const addBackgroundParagraph = () => {
    const arrayLength = backgroundParagraphs.length;
    const id = backgroundParagraphs.sort(backgroundParagraph => backgroundParagraph.id)[arrayLength - 1].id + 1;
    setbackgroundParagraphs([...backgroundParagraphs, { id: id, text: '' }])
  }

  const deleteParagraph = (id: number) => {
    setbackgroundParagraphs(
      backgroundParagraphs.filter(backgroundParagraph =>
        backgroundParagraph.id !== id
      )
    )
  }

  return (
    <div>
      <div className="CRUDAbout-content">
        <form>
          <div className="CRUDAbout-content__backgroundParagraphs">
            {backgroundParagraphs.map((backgroundParagraph, paragraphIndex) =>
              <div className="CRUDAbout-content__backgroundParagraph" key={paragraphIndex}>
                <textarea
                  value={backgroundParagraph.text}
                  onChange={e => setbackgroundParagraphs(backgroundParagraphs.map((p, textIndex) => {
                    if (paragraphIndex === textIndex) {
                      p.text = e.target.value;
                    }
                    return p;
                  }))}
                  rows={5}
                  cols={100}
                />
                <div>
                  <button type="button" onClick={() => deleteParagraph(backgroundParagraph.id)}>Delete</button>
                </div>
              </div>
            )}
            <button type="button" onClick={() => addBackgroundParagraph()}>Add Paragraph</button>
          </div>
          <div className="CRUDAbout-content__Save">
            <button type="button" onClick={() => initiateChange()} disabled={!adminAccess}>Update About</button>
          </div>
        </form>
      </div>
      <CRUDMediaLinks token={props.token} />
    </div>
  )
}

export default About;
