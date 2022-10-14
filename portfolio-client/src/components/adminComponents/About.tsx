import { useState, useEffect, useContext } from 'react';
import './About.css';
import HomeLinks from './HomeLinks';
import { AppContext } from '../../App';

interface IAboutProps {
  token: string;
}

interface IAboutParagraph {
  id: number,
  text: string
};

const About = (props: IAboutProps) => {

  const [oldAboutParagraphs, setOldAboutParagraphs] = useState([{ id: 1, text: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/aboutParagraphs')
      .then(response => response.json())
      .then(result => setOldAboutParagraphs(result));
  }, []);

  const adminAccess = props.token !== 'Not Authorized';
  const aboutProps = useContext(AppContext).aboutProps;
  const aboutParagraphs = aboutProps.aboutParagraphs;
  const setAboutParagraphs = aboutProps.setAboutParagraphs;

  const postAboutParagraph = (text: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/About', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ text })
    })
  }

  const putAboutParagraph = (aboutParagraph: IAboutParagraph) => {
    fetch('https://jeportapi.azurewebsites.net/api/About', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(aboutParagraph)
    })
  }

  const deleteAboutParagraph = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/About/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
  }

  const addAboutParagraph = () => {
    const arrayLength = aboutParagraphs.length;
    const id = aboutParagraphs.sort(aboutParagraph => aboutParagraph.id)[arrayLength - 1].id + 1;
    setAboutParagraphs([...aboutParagraphs, { id: id, text: '' }])
  }

  const deleteParagraph = (id: number) => {
    setAboutParagraphs(
      aboutParagraphs.filter(aboutParagraph =>
        aboutParagraph.id !== id
      )
    )
  }

  const handleAboutParagraphs = () => {

    const oldAboutParagraphsLength = oldAboutParagraphs.length;
    const newAboutParagraphsLength = aboutParagraphs.length;
    const aboutParagraphDifference = oldAboutParagraphsLength - newAboutParagraphsLength;

    if (aboutParagraphDifference < 0) {
      for (let i = 0; i < oldAboutParagraphsLength; i++) {
        putAboutParagraph(aboutParagraphs[i])
      }
      for (let i = oldAboutParagraphsLength; i < newAboutParagraphsLength; i++) {
        postAboutParagraph(aboutParagraphs[i].text)
      }
    }

    if (aboutParagraphDifference === 0) {
      for (let i = 0; i < oldAboutParagraphsLength; i++) {
        putAboutParagraph(aboutParagraphs[i])
      }
    }

    if (aboutParagraphDifference > 0) {
      for (let i = 0; i < newAboutParagraphsLength; i++) {
        putAboutParagraph(aboutParagraphs[i])
      }
      for (let i = newAboutParagraphsLength; i < oldAboutParagraphsLength; i++) {
        deleteAboutParagraph(oldAboutParagraphs[i].id)
      }
    }
  }

  return (
    <div>
      <div className="About-content">
        <form>
          <div className="About-content__aboutParagraphs">
            {aboutParagraphs.map((aboutParagraph, paragraphIndex) =>
              <div className="About-content__aboutParagraph" key={paragraphIndex}>
                <textarea
                  value={aboutParagraph.text}
                  onChange={e => setAboutParagraphs(aboutParagraphs.map((p, textIndex) => {
                    if (paragraphIndex === textIndex) {
                      p.text = e.target.value;
                    }
                    return p;
                  }))}
                  rows={5}
                  cols={100}
                />
                <button type="button" onClick={() => deleteParagraph(aboutParagraph.id)}>Delete</button>
              </div>
            )}
            <button type="button" onClick={() => addAboutParagraph()}>Add Paragraph</button>
          </div>
          <div className="About-content__Save">
            <button type="submit" onClick={() => handleAboutParagraphs()} disabled={!adminAccess}>Update About</button>
          </div>
        </form>
      </div>
      <HomeLinks token={props.token} />
    </div>
  )
}

export default About;
