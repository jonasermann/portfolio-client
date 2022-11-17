import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { editIntroduction } from '../../actions/crudActions';
import { getImgUrl } from '../../libraries/portfolioLibrary';

const EditIntroduction = (introduction: IIntroduction) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (introduction: IIntroduction) => dispatch(editIntroduction(introduction)),
    [dispatch]
  )

  const baseUrl: string = useSelector(
    (state: AppState) => state.baseUrl,
    shallowEqual
  )

  return (
    <div className="mb">
      <img
        src={getImgUrl(introduction.profilePicUrl, baseUrl)}
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
