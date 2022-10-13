import { useContext } from 'react'
import './Projects.css';
import { AppContext } from '../../App'; 

interface IProjectProps {
  token: string;
}

const Projects = (props: IProjectProps) => {

  const adminAccess = props.token !== 'Not Authorized';
  const projectProps = useContext(AppContext).projectProps;
  const projects = projectProps.projects;
  const setProjects = projectProps.setProjects;

  const addProject = () => {
    const arrayLength = projects.length;
    const id = projects.sort(homeLink => homeLink.id)[arrayLength - 1].id + 1;
    setProjects([...projects, { id: id, imgUrl: '', text: '', url: '' }])
  }

  const deleteProject = (id: number) => {
    setProjects(
      projects.filter(project =>
        project.id !== id
      )
    )
  }

  const handleProjects = () => {

  }

  return (
    <div className="Projects-content">
      <form>
        <div className="Projects-content__projects">
          {projects.map((project, projectIndex) =>
            <div className="Projects-content__project">
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
                  rows={2}
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
              <button className="Projects-content__project-delete" type="button" onClick={() => deleteProject(project.id)}>Delete</button>
            </div>
          )}
        </div>
        <button type="button" onClick={() => addProject()}>Add Project</button>
        <div className="Projects-content__Save">
          <button type="submit" onClick={() => handleProjects()} disabled={!adminAccess}>Update Database</button>
        </div>
      </form>
    </div>
  )
}

export default Projects;
