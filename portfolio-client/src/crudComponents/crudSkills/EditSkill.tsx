import { editSkill } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const EditSkill = (skill: ISkill) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (skill: ISkill) => dispatch(editSkill(skill)),
    [dispatch]
  )

  return (
    <div>

      <img
        src={skill.imgUrl}
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
  )
}

export default EditSkill;
