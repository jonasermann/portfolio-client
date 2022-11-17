import { removeBackgroundParagraph } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const RemoveBackgroundParagraph = (backgroundParagraph: IBackgroundParagraph) => {

  const dispatch: Dispatch<any> = useDispatch()

  const remove = React.useCallback(
    (backgroundParagraph: IBackgroundParagraph) => dispatch(removeBackgroundParagraph(backgroundParagraph)),
    [dispatch]
  )

  const removeOldBackgroundParagraph = (e: React.FormEvent) => {
    e.preventDefault();
    remove(backgroundParagraph);
  };

  return (
    <form onSubmit={e => removeOldBackgroundParagraph(e)} >
      <button className="delete-button mb">
        Delete
      </button>
    </form>
  )
}

export default RemoveBackgroundParagraph;
