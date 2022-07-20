import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Header />
      <Main />
    </div>
  );
};
