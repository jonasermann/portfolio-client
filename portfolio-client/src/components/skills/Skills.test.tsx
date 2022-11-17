import Skills from './Skills';
import reducer from '../../reducers/AppReducer';
import thunk from 'redux-thunk';
import { mockState } from '../../mock/state';
import { render, screen } from '@testing-library/react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';

const store: Store<AppState, AppAction> & {
  dispatch: AppDispatch
} = createStore(reducer, applyMiddleware(thunk))

describe("Skills Component", () => {

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
        <Skills />;
      </Provider>
    )
  });

  it('has images', () => {
    expect(screen.getAllByAltText('logo')).toHaveLength(12);
  })

  it('has text', () => {
    expect(screen.getByText('ASP.NET Core')).toBeInTheDocument();
  });

  it('has rows', () => {
    expect(screen.getByText('languages')).toBeInTheDocument();
    expect(screen.getByText('backend')).toBeInTheDocument();
    expect(screen.getByText('frontend')).toBeInTheDocument();
  })
});