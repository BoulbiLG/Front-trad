import React, { useState } from 'react';
import '../css/component/input.css';

const Input = ({ type, placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value !== null ? value : '');

  const isValidCharacter = char => {
    if (type === 'number') {
      // Vérifier si le caractère est un chiffre ou un point décimal
      return /^[0-9.]$/.test(char);
    }
    return true; // Par défaut, tous les caractères sont valides pour le type 'text'
  };

  const handleInputChange = event => {
    const newInputValue = event.target.value;
    if (newInputValue === '' || isValidCharacter(newInputValue.slice(-1))) {
      setInputValue(newInputValue);
      onChange(event); // Appeler la fonction de rappel onChange
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default Input;
