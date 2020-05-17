import React from 'react';
import { render as rtlRender, queries } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { promiseState } from 'helper/action-helper';
import { createMemoryHistory } from 'history';
import reducer from 'reducer';
import * as customQueries from './custom-queries';

const history = createMemoryHistory();
const reducerInitialState = {
  root: { ...promiseState(false, false, false, null) },
  user: { ...promiseState(false, false, false, null) }
};

function render(
  ui,
  { initialState = reducerInitialState, store = createStore(reducer, initialState), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(<Router history={history}>{ui}</Router>, {
    wrapper: Wrapper,
    queries: { ...queries, ...customQueries },
    ...renderOptions
  });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
