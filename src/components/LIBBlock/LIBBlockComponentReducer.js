import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { combinedEpic as libBlockEpic, combinedReducer as libBlockReducer } from './LIBBlockReducer';

export const combinedEpic = combineEpics(
  libBlockEpic
);

export const combinedReducer = combineReducers({
  libBlock: libBlockReducer,
})
