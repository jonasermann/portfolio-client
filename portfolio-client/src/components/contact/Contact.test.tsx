import Contact from './Contact';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("Contact Component", () => {

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
        <Contact />;
      </Provider>
    )
  });

  it('has title', () => {
    expect(screen.getByText('You can reach me the following ways:')).toBeInTheDocument();
  })

  it('has contacts', () => {
    expect(screen.getByText('contact 1')).toBeInTheDocument();
    expect(screen.getByText('contact 2')).toBeInTheDocument();
  });
});