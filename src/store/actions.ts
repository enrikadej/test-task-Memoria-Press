import { Student } from '../react-app-env.d';

export type Action = SetStudentsAction | SetStudentInfoAction;

// eslint-disable-next-line no-shadow
export enum ActionType {
  SET_STUDENTS = 'SET_STUDENTS',
  SET_STUDENTINFO = 'SET_STUDENTINFO',
}

export interface SetStudentsAction {
  type: ActionType.SET_STUDENTS,
  payload: Student[],
}

export interface SetStudentInfoAction {
  type: ActionType.SET_STUDENTINFO,
  payload: Student | null,
}

export const SetStudentsActions = (payload: Student[]): SetStudentsAction => ({
  type: ActionType.SET_STUDENTS,
  payload,
});

export const setStudentActions = (payload: Student | null): SetStudentInfoAction => ({
  type: ActionType.SET_STUDENTINFO,
  payload,
});
