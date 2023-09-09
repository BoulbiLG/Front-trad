import React, { useState } from 'react';
import '../../css/component/input.css';

const Date = ({ type, placeholder, value, onChange, bord }) => {

  return (
    <input type="text"placeholder={placeholder}value={inputValue}onChange={handleInputChange}style={style}/>
  );
};

export default Date;




