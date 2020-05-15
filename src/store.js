import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'localforage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import saga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const persistedReducer = persistReducer(
  {
    key: process.env.REACT_APP_STORE_KEY,
    stateReconciler: hardSet,
    debug: process.env.NODE_ENV === 'development',
    storage
  },
  reducer
);

export default async preloadedState => {
  let composedEnhacer;
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = await import('redux-devtools-extension');
    composedEnhacer = composeWithDevTools(...enhancers);
  } else {
    composedEnhacer = compose(...enhancers);
  }
  const store = createStore(persistedReducer, preloadedState, composedEnhacer);
  const persistor = persistStore(store);

  sagaMiddleware.run(saga);
  return { store, persistor };
};
