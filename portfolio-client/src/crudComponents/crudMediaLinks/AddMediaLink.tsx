import { addMediaLink } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const AddMediaLink = (get: { idToAdd(): number }) => {

  const dispatch: Dispatch<any> = useDispatch()

  const add = React.useCallback(
    (mediaLink: IMediaLink) => dispatch(addMediaLink(mediaLink)),
    [dispatch]
  )

  const addNewMediaLink = (e: React.FormEvent) => {
    e.preventDefault();
    add({ id: get.idToAdd(), text: '', imgUrl: '', url: '' });
  };

  return (
    <form onSubmit={e => addNewMediaLink(e)} >
      <button className="mb">
        Add MediaLink
      </button>
    </form>
  )
}

export default AddMediaLink;
