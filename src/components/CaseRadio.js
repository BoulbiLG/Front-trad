import React from 'react';

const CaseRadio = ({ titre, nomOption1, nomOption2, nomOption3, selectedCaseOption, onChange }) => {
  const cocheStyle = {
    display: 'flex',
    justifyContent: 'start'
  };

  const h1Style = {
    padding: '5px'
  };

  const espaceCoche = {
    margin: '5px'
  };

  const cocheTout = {
    padding: '5px',
    border: '1px solid black',
    display: 'flex'
  };

  const changementValeurCase = (event) => {
    onChange(event.target.value);
  };

  return (
    <div style={cocheTout}>
      <h2 style={h1Style}>{titre}</h2>
      <div style={cocheStyle}>
        {nomOption1 && (
          <div>
            <label>
              <input
                type="radio"
                name={`option-${titre}`}
                value={nomOption1}
                checked={selectedCaseOption === nomOption1}
                style={espaceCoche}
                onChange={changementValeurCase}
              />
              {nomOption1}
            </label>
          </div>
        )}
        {nomOption2 && (
          <div>
            <label>
              <input
                type="radio"
                name={`option-${titre}`}
                value={nomOption2}
                checked={selectedCaseOption === nomOption2}
                style={espaceCoche}
                onChange={changementValeurCase}
              />
              {nomOption2}
            </label>
          </div>
        )}
        {nomOption3 && (
          <div>
            <label>
              <input
                type="radio"
                name={`option-${titre}`}
                value={nomOption3}
                checked={selectedCaseOption === nomOption3}
                style={espaceCoche}
                onChange={changementValeurCase}
              />
              {nomOption3}
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseRadio;
