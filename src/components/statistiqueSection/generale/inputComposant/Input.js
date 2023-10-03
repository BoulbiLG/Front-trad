import React, { useState } from 'react';
import '../../../../css/component/input.css';

const Input = ({ type, placeholder, value, onChange, bord }) => {
  const [inputValue, setInputValue] = useState(value !== null ? value : '');

  const isValidCharacter = char => {
    if (type === 'number') {
      return /^[0-9.]$/.test(char);
    }
    return true;
  };

  const handleInputChange = event => {
    const newInputValue = event.target.value;
    if (newInputValue === '' || isValidCharacter(newInputValue.slice(-1))) {
      setInputValue(newInputValue);
      onChange(event);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      // Si la touche "Entrée" est pressée, déclencher l'événement onChange
      onChange(event);
    }
  };

  const style = {
    border: bord === 'non' ? 'none' : '1px solid black',
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown} // Ajoutez cet événement
      style={style}
    />
  );
};

export default Input;
