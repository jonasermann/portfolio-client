import { editMediaLink } from '../../actions/crudActions';
import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const EditMediaLink = (mediaLink: IMediaLink) => {

  const dispatch: Dispatch<any> = useDispatch()

  const edit = React.useCallback(
    (mediaLink: IMediaLink) => dispatch(editMediaLink(mediaLink)),
    [dispatch]
  )

  return (
    <div>
      <img
        src={mediaLink.imgUrl}
        alt="logo"
        height="50rem"
        width="auto" />
      <input
        type="text"
        value={mediaLink.imgUrl}
        onChange={e => {
          const updatedMediaLink = {
            id: mediaLink.id,
            text: mediaLink.text,
            url: mediaLink.url,
            imgUrl: e.target.value
          }
          edit(updatedMediaLink);}}
      />
      <textarea
        value={mediaLink.text}
        onChange={e => {
          const updatedMediaLink = {
            id: mediaLink.id,
            imgUrl: mediaLink.imgUrl,
            url: mediaLink.url,
            text: e.target.value,
          }
          edit(updatedMediaLink);
        }}
        rows={2}
        cols={100}
      />
      <div>
        <input
          type="text"
          value={mediaLink.url}
          onChange={e => {
            const updatedMediaLink = {
              id: mediaLink.id,
              text: mediaLink.text,
              imgUrl: mediaLink.imgUrl,
              url: e.target.value
            }
            edit(updatedMediaLink);
          }}
        />
      </div>
    </div>
  )
}

export default EditMediaLink;
