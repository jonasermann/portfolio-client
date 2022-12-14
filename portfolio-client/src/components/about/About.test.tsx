import About from '../about/About';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("About Component", () => {

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
        <About />;
      </Provider>
    )
  });

  it('has title', () => {
    expect(screen.getByText('Background')).toBeInTheDocument();
  })

  it('has paragraphs', () => {
    expect(screen.getByText('About Test 1')).toBeInTheDocument();
    expect(screen.getByText('About Test 2')).toBeInTheDocument();
    expect(screen.getByText('About Test 3')).toBeInTheDocument();
    expect(screen.getByText('About Test 4')).toBeInTheDocument();
  });
});