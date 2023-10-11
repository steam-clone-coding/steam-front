import React from 'react';
import './Button.css';

const Button = ({className, onClick, label}) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;