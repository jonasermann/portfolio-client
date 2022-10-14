import { useState, useEffect, useContext } from 'react';
import './HomeLinks.css';
import { AppContext } from '../../App';

interface IHomeLinkProps {
  token: string;
}

interface IHomeLink {
  id: number
  imgUrl: string
  text: string
  url: string
};

const HomeLinks = (props: IHomeLinkProps) => {

  const [oldHomeLinks, setOldHomeLinks] = useState([{ id: 1, imgUrl: '', text: '', url: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/homeLink')
      .then(response => response.json())
      .then(result => setOldHomeLinks(result));
  }, []);

  const adminAccess = props.token !== 'Not Authorized';
  const homeLinkProps = useContext(AppContext).homeLinkProps;
  const homeLinks = homeLinkProps.homeLinks;
  const setHomeLinks = homeLinkProps.setHomeLinks;

  const addHomeLinks = () => {
    const arrayLength = homeLinks.length;
    const id = homeLinks.sort(homeLink => homeLink.id)[arrayLength - 1].id + 1;
    setHomeLinks([...homeLinks, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteLink = (id: number) => {
    setHomeLinks(
      homeLinks.filter(homeLink =>
        homeLink.id !== id
      )
    )
  }

  const postHomeLink = (text: string, imgUrl: string, url: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/homeLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ text, imgUrl, url })
    })
  }

  const putHomeLink = (project: IHomeLink) => {
    fetch('https://jeportapi.azurewebsites.net/api/homeLink', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(project)
    })
  }

  const deleteHomeLink = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/homeLink/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
  }

  const handleHomeLinks = () => {

    const oldHomeLinkLength = oldHomeLinks.length;
    const newHomeLinkLength = homeLinks.length;
    const homeLinkDifference = oldHomeLinkLength - newHomeLinkLength;

    if (homeLinkDifference < 0) {
      for (let i = 0; i < oldHomeLinkLength; i++) {
        putHomeLink(homeLinks[i])
      }
      for (let i = oldHomeLinkLength; i < newHomeLinkLength; i++) {
        postHomeLink(homeLinks[i].text, homeLinks[i].imgUrl, homeLinks[i].url)
      }
    }

    if (homeLinkDifference === 0) {
      for (let i = 0; i < oldHomeLinkLength; i++) {
        putHomeLink(homeLinks[i])
      }
    }

    if (homeLinkDifference > 0) {
      for (let i = 0; i < newHomeLinkLength; i++) {
        putHomeLink(homeLinks[i])
      }
      for (let i = newHomeLinkLength; i < oldHomeLinkLength; i++) {
        deleteHomeLink(oldHomeLinks[i].id)
      }
    }
  }

  return (
    <div className="HomeLinks-content">
      {homeLinks.map((homeLink, homeIndex) =>
        <div className="HomeLinks-content__homeLink">
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
          <button className="HomeLinks-content__homeLink-delete" type="button" onClick={() => deleteLink(homeLink.id)}>Delete</button>
        </div>
      )}
      <button type="button" onClick={() => addHomeLinks()}>Add Icon Description</button>
      <div className="Skill-content__Save">
        <button type="submit" onClick={() => handleHomeLinks()} disabled={!adminAccess}>Update Links</button>
      </div>
    </div>
  )
}

export default HomeLinks;