import { useState, useEffect, useContext } from 'react';
import './CRUDAbout.css';
import CRUDMediaLinks from './CRUDMediaLinks';
import { AppContext } from '../App';

interface IAboutProps {
  token: string;
}

interface IbackgroundParagraph {
  id: number,
  text: string
};

const About = (props: IAboutProps) => {

  const [oldBackgroundParagraphs, setOldBackgroundParagraphs] = useState([{ id: 1, text: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/backgroundParagraphs')
      .then(response => response.json())
      .then(result => setOldBackgroundParagraphs(result));
  }, []);

  const adminAccess = props.token.length > 163;
  const aboutProps = useContext(AppContext).aboutProps;
  const backgroundParagraphs = aboutProps.backgroundParagraphs;
  const setbackgroundParagraphs = aboutProps.setBackgroundParagraphs;

  const postBackgroundParagraph = (text: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/About', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ text })
    })
  }

  const putBackgroundParagraph = (backgroundParagraph: IbackgroundParagraph) => {
    fetch('https://jeportapi.azurewebsites.net/api/About', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(backgroundParagraph)
    })
  }

  const deleteBackgroundParagraph = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/About/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
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

  const handleBackgroundParagraphs = () => {

    const oldBackgroundParagraphsLength = oldBackgroundParagraphs.length;
    const newBackgroundParagraphsLength = backgroundParagraphs.length;
    const backgroundParagraphDifference = oldBackgroundParagraphsLength - newBackgroundParagraphsLength;

    if (backgroundParagraphDifference < 0) {
      for (let i = 0; i < oldBackgroundParagraphsLength; i++) {
        putBackgroundParagraph(backgroundParagraphs[i])
      }
      for (let i = oldBackgroundParagraphsLength; i < newBackgroundParagraphsLength; i++) {
        postBackgroundParagraph(backgroundParagraphs[i].text)
      }
    }

    if (backgroundParagraphDifference === 0) {
      for (let i = 0; i < oldBackgroundParagraphsLength; i++) {
        putBackgroundParagraph(backgroundParagraphs[i])
      }
    }

    if (backgroundParagraphDifference > 0) {
      for (let i = 0; i < newBackgroundParagraphsLength; i++) {
        putBackgroundParagraph(backgroundParagraphs[i])
      }
      for (let i = newBackgroundParagraphsLength; i < oldBackgroundParagraphsLength; i++) {
        deleteBackgroundParagraph(oldBackgroundParagraphs[i].id)
      }
    }
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
            <button type="submit" onClick={() => handleBackgroundParagraphs()} disabled={!adminAccess}>Update About</button>
          </div>
        </form>
      </div>
      <CRUDMediaLinks token={props.token} />
    </div>
  )
}

export default About;
