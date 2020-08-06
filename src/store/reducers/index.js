import {combineReducers} from "redux";
import {combineEpics} from "redux-observable";
import {connectRouter} from "connected-react-router";

import {
    combinedEpic as libBlockComponentEpic,
    combinedReducer as libBlockComponentReducer
} from "components/LIBBlock/LIBBlockComponentReducer";


export const rootEpic = combineEpics(
  libBlockComponentEpic
);

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    libBlock: libBlockComponentReducer
  });
