import React from 'react';
import Label from '../atoms/Label';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';
import './FormGroup.css';

const FormGroup = ({ label, inputType, value, onChange }) => {
  return (
    <div className="form-group">
      <Label text={label} />
      {inputType === 'textarea' ? (
        <TextArea value={value} onChange={onChange} />
      ) : (
        <InputField type={inputType} value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default FormGroup;
