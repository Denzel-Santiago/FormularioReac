import React from 'react';
import './Button.css';

const Button = ({ children, ...props }) => {
  return (
    <button className="button button_lg" {...props}>
      <span className="button_sl"></span>
      <span className="button_text">{children}</span>
    </button>
  );
};

export default Button;
