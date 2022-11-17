import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/AppReducer'
import { mockState } from '../mock/state';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("App Component", () => {

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
      <App />;
    </Provider>
  )
  });

  it('has header', () => {
    expect(screen.getByText('Jonas Ermann .NET Full Stack Developer')).toBeInTheDocument();
  });
});
