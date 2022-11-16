import { editBackgroundParagraph } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const EditBackgroundParagraph = (backgroundParagraph: IBackgroundParagraph) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (backgroundParagraph: IBackgroundParagraph) => dispatch(editBackgroundParagraph(backgroundParagraph)),
    [dispatch]
  )

  return (
    <div
      className="mb"
      data-testid="backgroundParagraph">
      <textarea
        value={backgroundParagraph.text}
        onChange={e => {
          const newBackgroundParagraph: IBackgroundParagraph = {
            id: backgroundParagraph.id,
            text: e.target.value
          }
          edit(newBackgroundParagraph)
        }}
        rows={5}
        cols={100}
      />
    </div>
  )
}

export default EditBackgroundParagraph;
