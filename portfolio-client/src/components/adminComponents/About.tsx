import { useState, useContext } from 'react';
import './AboutAdmin.css';
import { AppContext } from '../../App';

interface IAboutProps {
  token: string;
}

const About = (props: IAboutProps) => {

  const adminAccess = props.token !== 'Not Authorized';

  const aboutProps = useContext(AppContext).aboutProps;
  const aboutParagraphs = aboutProps.aboutParagraphs;
  const setAboutParagraphs = aboutProps.setAboutParagraphs;
  const homeLinks = aboutProps.homeLinks;
  const setHomeLinks = aboutProps.setHomeLinks;

  const [aboutParagraphTexts, setAboutParagraphsTexts] = useState(aboutParagraphs.map(p => p.text));
  const [homeLinkTexts, setHomeLinkTexts] = useState(homeLinks.map(l => l.text))

  const deleteParagraph = (index: number) => {
    setAboutParagraphsTexts(
      aboutParagraphTexts.filter(aboutParagraph =>
        aboutParagraphTexts.indexOf(aboutParagraph) !== index
      )
    )
  }

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

  const putAboutParagraph = (id: number, text: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/About', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ id, text })
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

  const handleChanges = () => {

    const currentParagraphsLength = aboutParagraphs.length;
    const updatedParagraphsLength = aboutParagraphTexts.length;
    const difference = updatedParagraphsLength - currentParagraphsLength;

    interface IAboutParagraph {
      id: number,
      text: string
    };

    if (adminAccess) {
      if (difference < 0) {
        for (let i = 0; i < updatedParagraphsLength; i++) {
          if (aboutParagraphs[i].text !== aboutParagraphTexts[i]) {
            putAboutParagraph(aboutParagraphs[i].id, aboutParagraphTexts[i]);
          }
        }
        for (let i = updatedParagraphsLength; i < currentParagraphsLength; i++) {
          deleteAboutParagraph(aboutParagraphs[i].id);
        }
      }

      if (difference === 0) {
        for (let i = 0; i < updatedParagraphsLength; i++) {
          if (aboutParagraphs[i].text !== aboutParagraphTexts[i]) {
            putAboutParagraph(aboutParagraphs[i].id, aboutParagraphTexts[i]);
          }
        }
      }

      if (difference > 0) {
        for (let i = 0; i < currentParagraphsLength; i++) {
          if (aboutParagraphs[i].text !== aboutParagraphTexts[i]) {
            putAboutParagraph(aboutParagraphs[i].id, aboutParagraphTexts[i]);
          }
        }
        for (let i = currentParagraphsLength; i < updatedParagraphsLength; i++) {
          postAboutParagraph(aboutParagraphTexts[i]);
        }
      }
    }
    else {
      const newAboutParagraphs: IAboutParagraph[] = [];
      aboutParagraphTexts.forEach((value, index) =>
        newAboutParagraphs.push({ id: index, text: value })
      )
      setAboutParagraphs(newAboutParagraphs);
    }
  }

  return (
    <div className="About-content">
      <form>
        {aboutParagraphTexts.map((aboutParagraph, paragraphIndex) =>
          <div key={paragraphIndex}>
            <textarea
              value={aboutParagraph}
              onChange={e => setAboutParagraphsTexts(aboutParagraphTexts.map((p, textIndex) => {
                if (paragraphIndex === textIndex) {
                  p = e.target.value;
                }
                return p;
              }))}
              rows={5}
              cols={100}
            />
            <button type="button" onClick={() => deleteParagraph(paragraphIndex)}>Delete</button>
          </div>
        )}
        <button type="button" onClick={() => setAboutParagraphsTexts([...aboutParagraphTexts, ''])}>Add Paragraph</button>
        <button type="button" onClick={() => { if (props.token) { handleChanges() } }}>Save Changes</button>
      </form>
      <form>
        {homeLinkTexts.map((homeLinkText, index) => 
          <div key={index}>
            <img src={homeLinks[index].imgUrl} alt="logo" height="50rem" width="auto" />
            <textarea
              value={homeLinkText}
              onChange={e => setHomeLinkTexts(homeLinkTexts.map((l, textindex) => {
                if (index === textindex) {
                  l = e.target.value
                }
                return l;
              }))}
              rows={2}
              cols={100}
            />
          </div>
        )}
      </form>
    </div>
  )
}

export default About;


//{

//}
