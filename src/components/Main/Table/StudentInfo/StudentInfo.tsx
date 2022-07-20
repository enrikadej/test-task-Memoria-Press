import React from 'react';
import './StudentInfo.scss';
import { useSelector } from 'react-redux';
import { getStudentInfoSelector } from '../../../../store/selectors';

export const StudentInfo = () => {
  const student = useSelector(getStudentInfoSelector);
  // 60 198 24 20

  return (
    <div className="info">
      {student && (
        <>
          <div className="info__name">
            Student:
            <strong>
              {`  ${student.name}  `}
            </strong>
            id:
            <strong>
              {`  ${student.id} `}
            </strong>
          </div>
          <div className="info__category">
            <select>
              <option value="ALL CONCEPTS">ALL CONCEPTS</option>
            </select>
            <select>
              <option value="ALL SCORE">ALL SCORE</option>
            </select>
            <select>
              <option value="ALL SPEED">ALL SPEED</option>
            </select>
            <input type="date" className="info__calendar"></input>
            <hr className="info__hr"></hr>
          </div>
          <div className="info__cheat-sheet">

          </div>
          <table className="info__table">

          </table>
        </>
      )}
    </div>
  );
};
