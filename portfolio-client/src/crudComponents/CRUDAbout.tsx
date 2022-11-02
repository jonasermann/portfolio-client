import './CRUDAbout.css';
import { useContext } from 'react';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';
import CRUDMediaLinks from './CRUDMediaLinks';

interface IAboutProps {
  context: React.Context<IAppProps>
  token: string;
}

interface IBackgroundParagraph {
  id: number,
  text: string
};

const About = (props: IAboutProps) => {

  const adminAccess = props.token.length > 163;
  const appProps = useContext(props.context);
  const rootUrl = appProps.rootUrl;
  const aboutProps = appProps.aboutProps;
  const backgroundParagraphs = aboutProps.backgroundParagraphs;
  const setBackgroundParagraphs = aboutProps.setBackgroundParagraphs;

  const initiateChange = async () => {
    const url: string = `${rootUrl}/api/backgroundparagraphs`;
    const oldBackgroundParagraphs = await fetchOldData(url) as IBackgroundParagraph[];
    handleChanges<IBackgroundParagraph>(
      backgroundParagraphs, oldBackgroundParagraphs, oldBackgroundParagraphs.map(p => p.id), url, props.token
    )
  }

  const addBackgroundParagraph = () => {
    const arrayLength = backgroundParagraphs.length;
    const id = backgroundParagraphs.sort(backgroundParagraph => backgroundParagraph.id)[arrayLength - 1].id + 1;
    setBackgroundParagraphs([...backgroundParagraphs, { id: id, text: '' }])
  }

  const deleteParagraph = (id: number) => {
    setBackgroundParagraphs(
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
              <div className="CRUDAbout-content__backgroundParagraph" key={paragraphIndex} data-testid="backgroundParagraph">
                <textarea
                  value={backgroundParagraph.text}
                  onChange={e => {
                    setBackgroundParagraphs(backgroundParagraphs.map((p, textIndex) => {
                      if (paragraphIndex === textIndex) {
                        p.text = e.target.value;
                      }
                      return p;
                    }))
                  }}
                  rows={5}
                  cols={100}
                />
                <div>
                  <button type="button" onClick={() => deleteParagraph(backgroundParagraph.id)} data-testid={`delete${paragraphIndex}`}>Delete</button>
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
      <CRUDMediaLinks context={props.context} token={props.token} />
    </div>
  )
}

export default About;
