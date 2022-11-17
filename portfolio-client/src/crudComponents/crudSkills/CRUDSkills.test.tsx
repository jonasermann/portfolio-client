import CRUDSkills from './CRUDSkills';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { fireEvent, render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("CRUDSkills Component", () => {

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
        <CRUDSkills />;
      </Provider>
    )
  });

  it('adds an empty skill', () => {
    expect(screen.getAllByTestId('skill')).toHaveLength(12);
    fireEvent.click(screen.getByText('Add Skill'));
    expect(screen.getAllByTestId('skill')).toHaveLength(13);
    fireEvent.click(screen.getByTestId('delete12'));
    expect(screen.getAllByTestId('skill')).toHaveLength(12);
  })

});