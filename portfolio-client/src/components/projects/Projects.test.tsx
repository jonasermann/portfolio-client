import Projects from './Projects';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("Projects Component", () => {

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
        <Projects />;
      </Provider>
    )
  });

  it('has Projects', () => {
    expect(screen.getByText('Project Test 1')).toBeInTheDocument();
    expect(screen.getByText('Project Test 2')).toBeInTheDocument();
    expect(screen.getByText('Project Test 3')).toBeInTheDocument();
    expect(screen.getByText('Project Test 4')).toBeInTheDocument();
    expect(screen.getByText('Project Test 5')).toBeInTheDocument();
  });
});