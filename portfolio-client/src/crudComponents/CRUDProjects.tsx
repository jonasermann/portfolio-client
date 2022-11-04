import './CRUDProjects.css';
import { useContext } from 'react';
import { handleChanges, fetchOldData } from '../libraries/crudLibrary';

interface IProjectProps {
  context: React.Context<IAppProps>;
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
  const appProps = useContext(props.context);
  const rootUrl = appProps.rootUrl;
  const projectProps = appProps.projectProps;
  const projects = projectProps.projects;
  const setProjects = projectProps.setProjects;
  console.log(projects);

  const initiateChange = async () => {
    const url: string = `${rootUrl}/api/projects`;
    const oldProjects = await fetchOldData(url) as IProject[];
    handleChanges<IProject>(
      projects, oldProjects, oldProjects.map(p => p.id), url, props.token
    )
  }

  const addProject = () => {
    const arrayLength = projects.length;
    const id = projects.sort(project => project.id)[arrayLength - 1].id + 1;
    setProjects([...projects, { id: id, title: '', imgUrl: '', text: '', url: '' }])
  }

  const deleteProject = (id: number) => {
    setProjects(
      projects.filter(project =>
        project.id !== id
      )
    )
  }

  const upProject = (index: number) => {
    const upperProject = projects[index - 1];
    upperProject.id = index + 1;
    projects[index].id = index;
    projects[index - 1] = projects[index];
    projects[index] = upperProject;
    setProjects(projects);
  }

  const downProject = (index: number) => {
    const lowerProject = projects[index + 1];
    lowerProject.id = index + 1;
    projects[index].id = index + 2;
    projects[index + 1] = projects[index];
    projects[index] = lowerProject;
    setProjects(projects);
  }

  return (
    <div className="CRUDProjects-content">
      <form>
        <div className="CRUDProjects-content__projects">
          {projects.map((project, projectIndex) =>
            <div className="CRUDProjects-content__project" key={projectIndex} data-testid="project">
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
                    if (projectIndex === linkIndex) { p.imgUrl = e.target.value }; return p;
                  }))} />
                </div>
                <textarea
                  value={project.text}
                  onChange={e => setProjects(projects.map((p, textindex) => {
                    if (projectIndex === textindex) {
                      p.text = e.target.value
                    };
                    return p;
                  }))}
                  rows={5}
                  cols={100}
                />
                <div>
                  <input type="text" value={projects[projectIndex].gitUrl} onChange={e => setProjects(projects.map((p, linkIndex) => {
                    if (projectIndex === linkIndex) { p.gitUrl = e.target.value }; return p;
                  }))} />
                </div>
              </div>
              <button className="CRUDProjects-content__project-delete" type="button" onClick={() => deleteProject(project.id)} data-testid={`delete${projectIndex}`}>Delete</button>
              <button type="button" onClick={e => upProject(projectIndex)} disabled={projectIndex === 0}>up</button>
              <button type="button" onClick={e => downProject(projectIndex)} disabled={projectIndex === projects.length - 1}>down</button>
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
