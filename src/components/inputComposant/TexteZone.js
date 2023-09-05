import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      ['bold', 'italic'],
      [{ 'color': [] }],
    ],
  };

  const formats = [
    'header', 'font', 'bold', 'italic', 'underline', 'color'
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
    />
  );
};

const TexteZone = ({ placeholder, value, onChange }) => {
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const handleTextChange = (newValue) => {
    setTextValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <TextEditor value={textValue} onChange={handleTextChange} />
    </div>
  );
};

export default TexteZone;
