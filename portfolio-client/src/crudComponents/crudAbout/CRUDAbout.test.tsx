import CRUDAbout from './CRUDAbout';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { fireEvent, render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("CRUDAbout Component", () => {

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
        <CRUDAbout />;
      </Provider>
    )
  });

  it('adds an empty paragraph', () => {
    expect(screen.getAllByTestId('backgroundParagraph')).toHaveLength(4);
    fireEvent.click(screen.getByText('Add Paragraph'));
    expect(screen.getAllByTestId('backgroundParagraph')).toHaveLength(5);
    fireEvent.click(screen.getByTestId('delete4'));
    expect(screen.getAllByTestId('backgroundParagraph')).toHaveLength(4);
  })

});