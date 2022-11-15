import { editProject } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const EditProject = (project: IProject) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (project: IProject) => dispatch(editProject(project)),
    [dispatch]
  )

  return (
    <div>

      <div>
        <input
          type="text"
          value={project.title}
          onChange={e => {
            const updatedProject = {
              id: project.id,
              text: project.text,
              imgUrl: project.imgUrl,
              gitUrl: project.gitUrl,
              title: e.target.value,
              }
            edit(updatedProject);
          }}
        />
      </div>

      <img
        src={project.imgUrl}
        alt="logo"
        height="350rem"
        width="auto" />

      <div>
        <input
          type="text"
          value={project.imgUrl}
          onChange={e => {
            const updatedProject = {
              id: project.id,
              title: project.title,
              text: project.text,
              gitUrl: project.gitUrl,
              imgUrl: e.target.value,
            }
            edit(updatedProject);
          }}
        />
      </div>

      <textarea
        value={project.text}
        onChange={e => {
          const updatedProject = {
            id: project.id,
            title: project.title,
            imgUrl: project.imgUrl,
            gitUrl: project.gitUrl,
            text: e.target.value,
          }
          edit(updatedProject);
        }}
        rows={5}
        cols={100}
      />

      <div>
        <input
          type="text"
          value={project.gitUrl}
          onChange={e => {
            const updatedProject = {
              id: project.id,
              title: project.title,
              text: project.text,
              imgUrl: project.imgUrl,
              gitUrl: e.target.value,
            }
            edit(updatedProject);
          }}
        />
      </div>

    </div>
  )
}

export default EditProject;
