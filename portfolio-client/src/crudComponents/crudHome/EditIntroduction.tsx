import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { editIntroduction } from '../../actions/crudActions';

const EditIntroduction = (introduction: IIntroduction) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (introduction: IIntroduction) => dispatch(editIntroduction(introduction)),
    [dispatch]
  )

  return (
    <div
      className="CRUDHome-content__introduction">
      <img
        src={introduction.profilePicUrl}
        alt="profile-pic"
        height="100rem"
        width="auto" />
      <input
        type="text"
        value={introduction.profilePicUrl}
        onChange={e => {
          const updatedIntroduction = {
            id: introduction.id,
            text: introduction.text,
            profilePicUrl: e.target.value,
          }
          edit(updatedIntroduction);
        }}
      />
      <textarea
        className="CRUDHome-content__input"
        value={introduction.text}
        onChange={e => {
          const updatedIntroduction = {
            id: introduction.id,
            profilePicUrl: introduction.profilePicUrl,
            text: e.target.value,
          }
          edit(updatedIntroduction);
        }}
        rows={5}
        cols={100}
      />
    </div>
  )
}

export default EditIntroduction;
