import CRUDProjects from './CRUDProjects';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { fireEvent, render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("CRUDProjects Component", () => {

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
        <CRUDProjects />;
      </Provider>
    )
  });

  it('adds an empty project', () => {
    expect(screen.getAllByTestId('project')).toHaveLength(5);
    fireEvent.click(screen.getByText('Add Project'));
    expect(screen.getAllByTestId('project')).toHaveLength(6);
    fireEvent.click(screen.getByTestId('delete5'));
    expect(screen.getAllByTestId('project')).toHaveLength(5);
  })

});