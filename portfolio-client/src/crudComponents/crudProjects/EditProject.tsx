import { editProject } from '../../actions/crudActions';
import { getImgUrl } from '../../libraries/portfolioLibrary';
import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

const EditProject = (project: IProject) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = useCallback(
    (project: IProject) => dispatch(editProject(project)),
    [dispatch]);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

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
        src={getImgUrl(project.imgUrl, baseUrl)}
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
  );
};

export default EditProject;
