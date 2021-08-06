import {
  SET_SOURCE,
  SET_DESTINATION, 
  SET_CURRENT_ROUTE,
  SET_SIGNAL,
  SAVE_JOURNEY,
} from './routesTypes';

import { locations } from '../../constants';

const initialState = {
  source: {
      value: locations[16]
  },
  destination: {
      value: locations[0]
  },
  current: [],
  signal: [],
  saved: [],
};

// pure component reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SOURCE:
      return {
          ...state,
          source: {
            value: action.payload,
          }
      }
    case SET_DESTINATION:
      return {
          ...state,
          destination: {
            value: action.payload,
          }
      }
    case SET_CURRENT_ROUTE:
        return {
            ...state,
            current: action.payload,
            signal: [],
        }
    case SET_SIGNAL:
      return {
          ...state,
          signal: [...state.signal, action.payload],
      }
      case SAVE_JOURNEY:
        return {
            ...state,
            saved: [...state.saved, action.payload],
        }
    default: return state
  }
}

export default reducer;