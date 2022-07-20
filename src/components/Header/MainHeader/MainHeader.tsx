import React from 'react';
import './MainHeader.scss';
import { ButtonArrow } from '../../ButtonArrow';

export const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeader__school">
        <span>School 1</span>
        <ButtonArrow color="#777" />
      </div>
      <div className="mainHeader__nav">
        <p>Analytics</p>
        <p>Gradebooks</p>
        <p>Tests</p>
        <p>Students</p>
        <p>Teachers</p>
        <p>Archive</p>
      </div>
      <div className="mainHeader__profile">
        <img
          src="photoProfile.jpg"
          alt="profile"
        />
        <ButtonArrow color="#777" />
      </div>
    </div>
  );
};
