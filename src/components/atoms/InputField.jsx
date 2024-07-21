import React from 'react';
import './InputField.css';

const InputField = ({ label, ...props }) => {
  return (
    <div className="form-group">
      <label className="label">{label}</label>
      <input className="input" {...props} />
    </div>
  );
};

export default InputField;
