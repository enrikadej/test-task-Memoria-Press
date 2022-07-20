import React from 'react';
import './ButtonArrow.scss';

type Props = {
  color: string,
};

export const ButtonArrow: React.FC<Props> = ({ color }) => (
  <button
    type="button"
    className="buttonArrow"
  >
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L5 5L10 0H0Z"
        fill={color}
      />
    </svg>
  </button>
);
