import { combineReducers } from 'redux';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';

import hyperionStreamer from 'services/hyperion-streamer';
import { errorLog } from 'helpers/error-logger';

const actionPrefix = `LIBBlockReducer/LIBBlock/`;

//Action Type
const FETCH_START = actionPrefix + `FETCH_START`;
const FETCH_FULFILLED = actionPrefix + `FETCH_FULFILLED`;
const FETCH_REJECTED = actionPrefix + `FETCH_REJECTED`;
const PARAMS_SET = actionPrefix + `PARAMS_SET`;

//Action Creator
export const fetchStart = () => ({ type: FETCH_START });
export const fetchFulfilled = payload => ({ type: FETCH_FULFILLED, payload });
export const fetchRejected = ( payload, error ) => ({ type: FETCH_REJECTED, payload, error });
export const paramsSet = (params) => ({ type: PARAMS_SET, params });

const fetchEpic = ( action$, state$ ) => action$.pipe(
  ofType(FETCH_START),
  mergeMap(action =>{
    let { value: { tokenDetailsComponent: { tokenDetails: { params } }}} = state$;
    return hyperionStreamer(`get_currency_stats`, params).pipe(
      map(res => fetchFulfilled(res)),
      catchError(error => {
        errorLog("Category list component/ get table error",error);
        return of(fetchRejected(error.response, { status: error.status }))
      })
    )
  })
);

export const combinedEpic = combineEpics(
  fetchEpic,
);

//Reducer
const dataInitState = {
  payload: [],
  error: undefined
}

const dataReducer = (state=dataInitState, action) => {
  switch (action.type) {
    case FETCH_START:
        return dataInitState;

    case FETCH_FULFILLED:
      return {
        ...state,
        payload: action.payload,
        error: undefined
      };
    case FETCH_REJECTED:
      return {
        ...state,
        payload: action.payload,
        error: action.error
      };
    default:
      return state;
  }
};

const isFetchingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_START:
      return true;

    case FETCH_FULFILLED:
    case FETCH_REJECTED:
      return false;

    default:
      return state;
  }
};

const paramsReducer = (state = {}, action) => {
  switch (action.type) {
    case PARAMS_SET:
      return {
        ...state,
        ...action.params
      };

    default:
      return state;
  }
};


export const combinedReducer = combineReducers({
  data: dataReducer,
  isFetching: isFetchingReducer,
  params: paramsReducer
})
