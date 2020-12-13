import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '@/redux/root-reducer';
import { middlewares } from '@/redux/middlewares';

const initialState = {};

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);
