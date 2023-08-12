import React from 'react';
import '../css/component/input.css';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input type="text" placeholder={placeholder} value={value !== null ? value : ''} onChange={onChange} />
  );
};

export default Input;
