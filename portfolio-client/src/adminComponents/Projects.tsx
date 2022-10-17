import { useState, useEffect, useContext } from 'react'
import './Projects.css';
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

  const [oldProjects, setOldProjects] = useState([{ id: 1, imgUrl: '', text: '', gitUrl: '' }])

  useEffect(() => {
    fetch('https://jeportapi.azurewebsites.net/api/projects')
      .then(response => response.json())
      .then(result => setOldProjects(result));
  }, []);

  const adminAccess = props.token !== 'Not Authorized';
  const projectProps = useContext(AppContext).projectProps;
  const projects = projectProps.projects;
  const setProjects = projectProps.setProjects;

  const addProject = () => {
    const arrayLength = projects.length;
    const id = projects.sort(project => project.id)[arrayLength - 1].id + 1;
    setProjects([...projects, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteProject_ = (id: number) => {
    setProjects(
      projects.filter(project =>
        project.id !== id
      )
    )
  }

  const postProject = (text: string, imgUrl: string, gitUrl: string) => {
    fetch('https://jeportapi.azurewebsites.net/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body: JSON.stringify({ text, imgUrl })
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
        postProject(projects[i].text, projects[i].imgUrl, projects[i].gitUrl)
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
    <div className="Projects-content">
      <form>
        <div className="Projects-content__projects">
          {projects.map((project, projectIndex) =>
            <div className="Projects-content__project" key={projectIndex}>
              <div key={projectIndex}>
                <img src={projects[projectIndex].imgUrl} alt="logo" height="50rem" width="auto" />
                <input type="text" value={projects[projectIndex].imgUrl} onChange={e => setProjects(projects.map((p, linkIndex) => {
                  if (projectIndex === linkIndex) {
                    p.imgUrl = e.target.value
                  }
                  return p;
                }))}
                />
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
                <input type="text" value={projects[projectIndex].gitUrl} onChange={e => setProjects(projects.map((p, linkIndex) => {
                  if (projectIndex === linkIndex) {
                    p.gitUrl = e.target.value
                  }
                  return p;
                }))}
                />
              </div>
              <button className="Projects-content__project-delete" type="button" onClick={() => deleteProject_(project.id)}>Delete</button>
            </div>
          )}
        </div>
        <button type="button" onClick={() => addProject()}>Add Project</button>
        <div className="Projects-content__Save">
          <button type="submit" onClick={() => handleProjects()} disabled={!adminAccess}>Update Projects</button>
        </div>
      </form>
    </div>
  )
}

export default Projects;
