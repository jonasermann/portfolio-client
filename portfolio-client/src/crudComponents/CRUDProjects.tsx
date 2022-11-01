import { useState, useEffect, useContext } from 'react'
import './CRUDProjects.css';
import { AppContext } from '../App';
import { handleChanges } from '../libraries/crudLibrary';

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
    fetch('http://localhost:5133/api/projects')
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
    setProjects([...projects, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteProject_ = (id: number) => {
    setProjects(
      projects.filter(project =>
        project.id !== id
      )
    )
  }

  return (
    <div className="CRUDProjects-content">
      <form>
        <div className="CRUDProjects-content__projects">
          {projects.map((project, projectIndex) =>
            <div className="CRUDProjects-content__project" key={projectIndex}>
              <div key={projectIndex}>
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
          <button type="submit" onClick={() => handleChanges<IProject>(
            projects, oldProjects, oldProjects.map(o => o.id), 'http://localhost:5133/api/paragraphs', props.token
          )} disabled={!adminAccess}>Update Projects</button>
        </div>
      </form>
    </div>
  )
}

export default Projects;
