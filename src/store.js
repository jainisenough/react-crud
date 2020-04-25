import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'localforage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import reducer from './reducer';

const middlewares = [createSagaMiddleware()];
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
  let composeFn = compose;
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = await import('redux-devtools-extension');
    composeFn = composeWithDevTools;
  }
  const store = createStore(persistedReducer, preloadedState, composeFn(...enhancers));
  const persistor = persistStore(store);
  return { store, persistor };
};
