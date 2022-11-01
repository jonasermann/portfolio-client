import './CRUDProjects.css';
import { useContext } from 'react'
import { AppContext } from '../App';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';

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

  const adminAccess = props.token.length > 163;
  const appProps = useContext(AppContext);
  const rootUrl = appProps.rootUrl;
  const projectProps = appProps.projectProps;
  const projects = projectProps.projects;
  const setProjects = projectProps.setProjects;

  const initiateChange = async () => {
    const url: string = `${rootUrl}/projects`;
    const oldProjects = await fetchOldData(url) as IProject[];
    handleChanges<IProject>(
      projects, oldProjects, oldProjects.map(p => p.id), url, props.token
    )
  }

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
                  onChange={e => setProjects(projects.map((p, textindex) => {
                    if (projectIndex === textindex) {
                      p.text = e.target.value
                    }
                    return p;
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
          <button type="button" onClick={() => initiateChange()} disabled={!adminAccess}>Update Projects</button>
        </div>
      </form>
    </div>
  )
}

export default Projects;
