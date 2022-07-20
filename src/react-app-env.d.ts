/// <reference types="react-scripts" />

export interface Student {
  name: string,
  id: number,
  class: string,
  score: string,
  speed:string,
  parents: string[],
}

export interface State {
  students: Student[],
  studentInfo: Student | null,
}
