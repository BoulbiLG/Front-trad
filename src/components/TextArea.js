import React from 'react';
import '../css/component/textArea.css';

const Input = ({ placeholder, value, onChange, cols, rows }) => {
  return (
    <textarea cols={cols} rows={rows} placeholder={placeholder} value={value} onChange={onChange}/>
  );
};

export default Input;
