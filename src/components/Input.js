import React from 'react';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
