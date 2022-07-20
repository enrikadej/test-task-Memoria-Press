/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSortStudents, getStudents } from '../../../API/api';
import './Table.scss';
import { Student } from '../../../react-app-env.d';
import { ButtonArrow } from '../../ButtonArrow';
import { StudentInfo } from './StudentInfo';
import { getStudentInfoSelector, getStudentsSelector } from '../../../store/selectors';
import { setStudentActions, SetStudentsActions } from '../../../store/actions';
import { ButtonArrowUpDown } from '../../ButtonArrowUpDown';
// import { setStudentActions } from '../../../store/actions';

export const Table = React.memo(() => {
  const [openInfo, setOpenInfo] = useState(false);

  const students = useSelector(getStudentsSelector);
  const openedStudent = useSelector(getStudentInfoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getStudents(1, 8)
      .then((response) => {
        dispatch(SetStudentsActions(response.data));
      });
  }, []);

  const settingStudent = (studentObject: Student) => {
    setOpenInfo(!openInfo);
    dispatch(setStudentActions(studentObject));
  };

  const sortingStudent = (group: string) => {
    getSortStudents(1, 10, group, 1)
      .then(response => (
        dispatch(setStudentActions(response.data))
      ));
  };

  console.log(students);

  return (
    <>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>
              Name
              <button
                type="button"
                className="table__buttonArrow"
                onClick={() => (
                  sortingStudent('name')
                )}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.95998 2.10666L7.38665 0.533325L5.81332 2.10666H8.95998ZM5.92665 10.82H7.15332L4.15998 3.17999H3.06665L0.0666504 10.82H1.29332L1.90665 9.18666H5.31332L5.92665 10.82ZM2.31332 8.09333L3.60665 4.63999L4.89998 8.09333H2.31332V8.09333ZM7.38665 13.4667L8.93998 11.9133H5.83332L7.38665 13.4667ZM13.44 4.02666V3.18666H7.90665V4.25333H11.8267L7.87998 9.95999V10.82H13.5667V9.75999H9.48665L13.44 4.02666Z" fill="#C0C0C0" />
                </svg>
              </button>
            </td>
            <td>
              ID
              <button
                type="button"
                className="table__buttonArrow"
                onClick={() => (
                  sortingStudent('id')
                )}
              >
                <ButtonArrowUpDown />
              </button>
            </td>
            <td>Class</td>
            <td>
              Av. Score, %
              <button
                type="button"
                className="table__buttonArrow"
                onClick={() => (
                  sortingStudent('score')
                )}
              >
                <ButtonArrowUpDown />
              </button>
            </td>
            <td>
              Av. Speed
              <button
                type="button"
                className="table__buttonArrow"
                onClick={() => (
                  sortingStudent('speed')
                )}
              >
                <ButtonArrowUpDown />
              </button>
            </td>
            <td>Parents</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student: Student) => (
            <>
              <tr key={student.id} className="table__item">
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  {student.name}
                </td>
                <td>{student.id}</td>
                <td>{student.class}</td>
                <td>{student.score}</td>
                <td>{student.speed}</td>
                <td>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="table__info">
                    <path
                      d="M6.33325 10.3334H7.66659V6.33337H6.33325V10.3334ZM6.99992 0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992 0.333374ZM6.99992 12.3334C4.05992 12.3334 1.66659 9.94004 1.66659 7.00004C1.66659 4.06004 4.05992 1.66671 6.99992 1.66671C9.93992 1.66671 12.3333 4.06004 12.3333 7.00004C12.3333 9.94004 9.93992 12.3334 6.99992 12.3334ZM6.33325 5.00004H7.66659V3.66671H6.33325V5.00004Z"
                      fill="#C0C0C0"
                    />
                  </svg>
                  {student.parents ? (
                    `${student.parents[0]}, ${student.parents[1]}`
                  ) : (
                    'No parents added'
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="table__buttonArrow"
                    onClick={() => settingStudent(student)}
                  >
                    {openInfo && openedStudent && student.id === openedStudent.id ? (
                      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5L5 0L10 5H0Z" fill="#5B5B5B" />
                      </svg>
                    ) : (
                      <ButtonArrow
                        color="#C0C0C0"
                      />
                    )}
                  </button>
                </td>
              </tr>
              {openInfo && openedStudent && student.id === openedStudent.id && (
                <tr>
                  <td colSpan={8} key={student.id}>
                    <StudentInfo />
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="archive">
          Archived
        </h3>
        {/* archiveStudents? */}
        <table>

        </table>
      </div>

    </>
  );
});
