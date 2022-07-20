import { State } from '../react-app-env.d';

export const getStudentsSelector = (state: State) => state.students;

export const getStudentInfoSelector = (state: State) => state.studentInfo;
