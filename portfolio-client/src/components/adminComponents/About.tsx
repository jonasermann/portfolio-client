import { useState, useEffect } from 'react';
import './AboutAdmin.css';

const About = () => {

  const [aboutParagraphs, setAboutParagraphs] = useState([{ id: 0, text: '' }]);
  const [aboutParagraphTexts, setAboutParagraphsTexts] = useState(['']);
  const [homeLinks, setHomeLinks] = useState([{ imgUrl: '', url: '', text: '' }]);

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/about/')
      .then(response => response.json())
      .then(result => { setAboutParagraphs(result); setAboutParagraphsTexts(result.map((p: { id: number, text: string }) => p.text)) })
  }, [])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/home/home-links')
      .then(response => response.json())
      .then(result => setHomeLinks(result))
  }, [])

  const deleteParagraph = (index: number) => {
    setAboutParagraphsTexts(
      aboutParagraphTexts.filter(aboutParagraph =>
        aboutParagraphTexts.indexOf(aboutParagraph) !== index
      )
    )
  }

  const postAboutParagraph = ( text: string ) => {
    fetch('https://jeportapi.azurewebsites.net/api/about', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
  }

  const putAboutParagraph = (id: number, text: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/about', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, text })
    })
  }

  const deleteAboutParagraph = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/about/${id}`, {
      method: 'DELETE'
    })
  }

  const handleChanges = () => {
    
    const currentParagraphsLength = aboutParagraphs.length;
    const updatedParagraphsLength = aboutParagraphTexts.length;
    const difference = updatedParagraphsLength - currentParagraphsLength;

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

    console.log('hi');
  }

  return (
    <div className="About-content">
      <form>
        {aboutParagraphTexts.map((aboutParagraph, paragraphIndex) =>
        <div>
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
        <button type="button" onClick={() => setAboutParagraphsTexts([...aboutParagraphTexts, '']) }>Add Paragraph</button>
        <button type="button" onClick={() => handleChanges()}>Save Changes</button>
      </form>
    </div>
  )
}

export default About;
