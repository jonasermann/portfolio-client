import CRUDMediaLinks from './CRUDMediaLinks';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { fireEvent, render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("CRUDMediaLinks Component", () => {

  beforeEach(() => {

    store.dispatch({
      type: 'SET_STATE',
      backgroundParagraph: {} as IBackgroundParagraph,
      contact: {} as IContact,
      introduction: {} as IIntroduction,
      mediaLink: {} as IMediaLink,
      project: {} as IProject,
      skill: {} as ISkill,
      state: mockState,
    });

    render(
      <Provider store={store}>
        <CRUDMediaLinks />;
      </Provider>
    )
  });

  it('adds an empty media link', () => {
    expect(screen.getAllByTestId('mediaLink')).toHaveLength(2);
    fireEvent.click(screen.getByText('Add Media Link'));
    expect(screen.getAllByTestId('mediaLink')).toHaveLength(3);
    fireEvent.click(screen.getByTestId('delete2'));
    expect(screen.getAllByTestId('mediaLink')).toHaveLength(2);
  })

});