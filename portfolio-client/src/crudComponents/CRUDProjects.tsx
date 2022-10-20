import { useState, useEffect, useContext } from 'react'
import './CRUDProjects.css';
import { AppContext } from '../App';

interface IProjectProps {
  token: string;
}

interface IProject {
  id: number
  imgUrl: string
  text: string
  gitUrl: string
}

const Projects = (props: IProjectProps) => {

  const [oldProjects, setOldProjects] = useState([{ id: 1, title: '', imgUrl: '', text: '', gitUrl: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/projects')
      .then(response => response.json())
      .then(result => setOldProjects(result));
  }, []);

  const adminAccess = props.token.length > 163;
  const projectProps = useContext(AppContext).projectProps;
  const projects = projectProps.projects;
  const setProjects = projectProps.setProjects;

  const addProject = () => {
    const arrayLength = projects.length;
    const id = projects.sort(project => project.id)[arrayLength - 1].id + 1;
    setProjects([...projects, { id: id, title: '', imgUrl: '', text: '', url: '' }])
  }

  const deleteProject_ = (id: number) => {
    setProjects(
      projects.filter(project =>
        project.id !== id
      )
    )
  }

  const postProject = (title: string, imgUrl: string, text: string, gitUrl: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ title, imgUrl, text, gitUrl })
    })
  }

  const putProject = (project: IProject) => {
    fetch('https://jeportapi.azurewebsites.net/api/projects', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify(project)
    })
  }

  const deleteProject = (id: number) => {
    fetch(`https://jeportapi.azurewebsites.net/api/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    })
  }

  const handleProjects = () => {

    const oldProjectsLength = oldProjects.length;
    const newProjectsLength = projects.length;
    const projectDifference = oldProjectsLength - newProjectsLength;

    if (projectDifference < 0) {
      for (let i = 0; i < oldProjectsLength; i++) {
        putProject(projects[i])
      }
      for (let i = oldProjectsLength; i < newProjectsLength; i++) {
        postProject(projects[i].title, projects[i].imgUrl, projects[i].text, projects[i].gitUrl)
      }
    }

    if (projectDifference === 0) {
      for (let i = 0; i < oldProjectsLength; i++) {
        putProject(projects[i])
      }
    }

    if (projectDifference > 0) {
      for (let i = 0; i < newProjectsLength; i++) {
        putProject(projects[i])
      }
      for (let i = newProjectsLength; i < oldProjectsLength; i++) {
        deleteProject(oldProjects[i].id)
      }
    }
  }

  return (
    <div className="CRUDProjects-content">
      <form>
        <div className="CRUDProjects-content__projects">
          {projects.map((project, projectIndex) =>
            <div className="CRUDProjects-content__project" key={projectIndex}>
              <div key={projectIndex}>
                <div>
                  <input type="text" value={projects[projectIndex].title} onChange={e => setProjects(projects.map((p, linkIndex) => {
                    if (projectIndex === linkIndex) {
                      p.title = e.target.value
                    }
                    return p;
                  }))}
                  />
                </div>
                <img src={projects[projectIndex].imgUrl} alt="logo" height="350rem" width="auto" />
                <div>
                  <input type="text" value={projects[projectIndex].imgUrl} onChange={e => setProjects(projects.map((p, linkIndex) => {
                    if (projectIndex === linkIndex) {
                      p.imgUrl = e.target.value
                    }
                    return p;
                  }))}
                  />
                </div>
                <textarea
                  value={project.text}
                  onChange={e => setProjects(projects.map((l, textindex) => {
                    if (projectIndex === textindex) {
                      l.text = e.target.value
                    }
                    return l;
                  }))}
                  rows={5}
                  cols={100}
                />
                <div>
                  <input type="text" value={projects[projectIndex].gitUrl} onChange={e => setProjects(projects.map((p, linkIndex) => {
                    if (projectIndex === linkIndex) {
                      p.gitUrl = e.target.value
                    }
                    return p;
                  }))}
                  />
                </div>
              </div>
              <button className="CRUDProjects-content__project-delete" type="button" onClick={() => deleteProject_(project.id)}>Delete</button>
            </div>
          )}
          <button className="CRUDProjects-content__Add" type="button" onClick={() => addProject()}>Add Project</button>
        </div>
        <div className="CRUDProjects-content__Save">
          <button type="button" onClick={() => handleProjects()} disabled={!adminAccess}>Update Projects</button>
        </div>
      </form>
    </div>
  )
}

export default Projects;
