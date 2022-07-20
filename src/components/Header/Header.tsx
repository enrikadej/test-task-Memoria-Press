import React from 'react';
import './Header.scss';
import { MainHeader } from './MainHeader';
import { SubHeader } from './SubHeader';

export const Header = () => {
  return (
    <div className="header">
      <MainHeader />
      <SubHeader />
    </div>
  );
};
