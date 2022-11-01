import { useState, useEffect, useContext } from 'react';
import './CRUDAbout.css';
import CRUDMediaLinks from './CRUDMediaLinks';
import { AppContext } from '../App';
import { handleChanges } from '../libraries/crudLibrary';

interface IAboutProps {
  token: string;
}

interface IBackgroundParagraph {
  id: number,
  text: string
};

const About = (props: IAboutProps) => {

  const [oldBackgroundParagraphs, setOldBackgroundParagraphs] = useState([{ id: 1, text: '' }])

  useEffect(() => {
    fetch('http://localhost:5133/api/backgroundParagraphs')
      .then(response => response.json())
      .then(result => setOldBackgroundParagraphs(result));
  }, []);

  const adminAccess = props.token.length > 163;
  const aboutProps = useContext(AppContext).aboutProps;
  const backgroundParagraphs = aboutProps.backgroundParagraphs;
  const setbackgroundParagraphs = aboutProps.setBackgroundParagraphs;

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
            <button type="submit" onClick={() => handleChanges<IBackgroundParagraph>(
              backgroundParagraphs, oldBackgroundParagraphs, oldBackgroundParagraphs.map(o => o.id ), 'http://localhost:5133/api/backgroundParagraphs', props.token
            )} disabled={!adminAccess}>Update About</button>
          </div>
        </form>
      </div>
      <CRUDMediaLinks token={props.token} />
    </div>
  )
}

export default About;
