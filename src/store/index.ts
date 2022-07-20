import { createStore } from 'redux';
import { State } from '../react-app-env.d';
import { Action, ActionType } from './actions';

export const initialState: State = {
  students: [],
  studentInfo: null,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_STUDENTS:
      return {
        ...state,
        students: [...action.payload],
      };

    case ActionType.SET_STUDENTINFO:
      return {
        ...state,
        studentInfo: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
