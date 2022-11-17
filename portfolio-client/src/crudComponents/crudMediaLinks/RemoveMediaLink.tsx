import { removeMediaLink } from '../../actions/crudActions';
import { useCallback, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

const RemoveMediaLink = (mediaLink: IMediaLink) => {

  const dispatch: Dispatch<any> = useDispatch();

  const remove = useCallback(
    (mediaLink: IMediaLink) => dispatch(removeMediaLink(mediaLink)),
    [dispatch]);

  const removeOldMediaLink = (e: FormEvent) => {
    e.preventDefault();
    remove(mediaLink);
  };

  return (
    <form onSubmit={e => removeOldMediaLink(e)} >
      <button className="delete-button" data-testid={`delete${mediaLink.id}`}>
        Delete
      </button>
    </form>
  );
};

export default RemoveMediaLink;
