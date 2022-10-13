import { useContext } from 'react';
import './About.css';
import { AppContext } from '../../App';

interface IAboutProps {
  token: string;
}

interface IAboutParagraph {
  id: number,
  text: string
};

const About = (props: IAboutProps) => {

  const adminAccess = props.token !== 'Not Authorized';
  const aboutProps = useContext(AppContext).aboutProps;
  const aboutParagraphs = aboutProps.aboutParagraphs;
  const setAboutParagraphs = aboutProps.setAboutParagraphs;
  const homeLinks = aboutProps.homeLinks;
  const setHomeLinks = aboutProps.setHomeLinks;

  console.log(props.token)

  const aboutParagraphsLength = aboutParagraphs.length;
  const homeLinksLength = homeLinks.length;

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

  const addHomeLinks = () => {
    const arrayLength = homeLinks.length;
    const id = homeLinks.sort(homeLink => homeLink.id)[arrayLength - 1].id + 1;
    setHomeLinks([...homeLinks, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteParagraph = (id: number) => {
    setAboutParagraphs(
      aboutParagraphs.filter(aboutParagraph =>
        aboutParagraph.id !== id
      )
    )
  }

  const deleteLink = (id: number) => {
    setHomeLinks(
      homeLinks.filter(homeLink =>
        homeLink.id !== id
      )
    )
  }

  const handleAboutParagraphs = () => {

    const aboutParagraphDifference = aboutParagraphsLength - aboutParagraphs.length;

    if (aboutParagraphDifference < 0) {
      for (let i = 0; i < aboutParagraphsLength; i++) {
        putAboutParagraph(aboutParagraphs[i])
      }
      for (let i = aboutParagraphsLength; i < aboutParagraphs.length; i++) {
        postAboutParagraph(aboutParagraphs[i].text)
      }
    }

    if (aboutParagraphDifference === 0) {
      for (let i = 0; i < aboutParagraphsLength; i++) {
        putAboutParagraph(aboutParagraphs[i])
      }
    }

    if (aboutParagraphDifference > 0) {
      for (let i = 0; i < aboutParagraphs.length; i++) {
        putAboutParagraph(aboutParagraphs[i])
      }
      for (let i = aboutParagraphs.length; i < aboutParagraphsLength; i++) {
        deleteAboutParagraph(aboutParagraphs[i].id)
      }
    }
  }

  return (
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

        <div className="About-content__homeLinks">
          {homeLinks.map((homeLink, homeIndex) =>
            <div className="About-content__homeLink">
              <div key={homeIndex}>
                <img src={homeLinks[homeIndex].imgUrl} alt="logo" height="50rem" width="auto" />
                <input type="text" value={homeLinks[homeIndex].imgUrl} onChange={e => setHomeLinks(homeLinks.map((l, linkIndex) => {
                  if (homeIndex === linkIndex) {
                    l.imgUrl = e.target.value
                  }
                  return l;
                }))}
                />
                <textarea
                  value={homeLink.text}
                  onChange={e => setHomeLinks(homeLinks.map((l, textindex) => {
                    if (homeIndex === textindex) {
                      l.text = e.target.value
                    }
                    return l;
                  }))}
                  rows={2}
                  cols={100}
                />
                <input type="text" value={homeLinks[homeIndex].url} onChange={e => setHomeLinks(homeLinks.map((l, linkIndex) => {
                  if (homeIndex === linkIndex) {
                    l.url = e.target.value
                  }
                  return l;
                }))}
                />
              </div>
              <button className="About-content__homeLink-delete" type="button" onClick={() => deleteLink(homeLink.id)}>Delete</button>
            </div>
          )}
        </div>
        <button type="button" onClick={() => addHomeLinks()}>Add Icon Description</button>
        <div className="About-content__Save">
          <button type="submit" onClick={() => handleAboutParagraphs()} disabled={!adminAccess}>Update Database</button>
        </div>
      </form>
    </div>
  )
}

export default About;
