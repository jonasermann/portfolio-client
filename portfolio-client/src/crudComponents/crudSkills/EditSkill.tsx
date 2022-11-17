import { editSkill } from '../../actions/crudActions';
import { getImgUrl } from '../../libraries/portfolioLibrary';
import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

const EditSkill = (skill: ISkill) => {

  const dispatch: Dispatch<any> = useDispatch();

  const edit = useCallback(
    (skill: ISkill) => dispatch(editSkill(skill)),
    [dispatch]);

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl);

  return (
    <div>

      <img
        src={getImgUrl(skill.imgUrl, baseUrl)}
        alt="logo"
        height="auto"
        width="100rem" />

      <input
        type="text"
        value={skill.imgUrl}
        onChange={e => {
          const updatedSkill = {
            id: skill.id,
            text: skill.text,
            type: skill.type,
            imgUrl: e.target.value,
          }
          edit(updatedSkill);
        }}
      />

      <input
        type="text"
        value={skill.text}
        onChange={e => {
          const updatedSkill = {
            id: skill.id,
            imgUrl: skill.imgUrl,
            type: skill.type,
            text: e.target.value,
          }
          edit(updatedSkill);
        }}
      />

      <input
        type="number"
        value={skill.type}
        onChange={e => {
          const updatedSkill = {
            id: skill.id,
            text: skill.text,
            imgUrl: skill.imgUrl,
            type: parseInt(e.target.value),
          }
          edit(updatedSkill);
        }}
      />

    </div>
  );
};

export default EditSkill;
