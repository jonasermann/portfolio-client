import { removeMediaLink } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const RemoveMediaLink = (mediaLink: IMediaLink) => {

  const dispatch: Dispatch<any> = useDispatch()

  const remove = React.useCallback(
    (mediaLink: IMediaLink) => dispatch(removeMediaLink(mediaLink)),
    [dispatch]
  )

  const removeOldMediaLink = (e: React.FormEvent) => {
    e.preventDefault();
    remove(mediaLink);
  };

  return (
    <form onSubmit={e => removeOldMediaLink(e)} >
      <button className="CRUDmediaLinks-content__mediaLink-delete">
        Delete
      </button>
    </form>
  )
}

export default RemoveMediaLink;
