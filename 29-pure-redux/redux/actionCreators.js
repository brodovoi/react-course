import getCurentTime from '../utils/getCurentTime.js';
// import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from './actionTypes.js';
import * as actiontypes from './actionTypes.js';

export function addCurrentTime() {
  return {
    // type: ADD_CURRENT_TIME,
    type: actiontypes.ADD_CURRENT_TIME,
    payload: getCurentTime(),
  };
}

export function clearTimes() {
  return {
    type: actiontypes.CLEAR_ALL_TIMES,
  };
}
