import React from 'react';

const CaseRadio = ({ titre, affichage, nomOption1, nomOption2, nomOption3, selectedCaseOption, onChange, onButtonClick  }) => {
  const cocheStyle = {display: 'flex', justifyContent: 'start', alignItems: 'center'};
  const h1Style = {padding: '5px'};
  const espaceCoche = {margin: '5px'};
  const cocheTout = {padding: '5px', display: 'flex'};

  const changementValeurCase = (event) => {onChange(event.target.value);};

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div style={cocheTout}>
      <h2 style={h1Style}>{affichage}</h2>
      <div style={cocheStyle}>
        {nomOption1 && (
          <div>
            <label>
              <input type="radio" name={`option-${titre}`} value={nomOption1} checked={selectedCaseOption === nomOption1} style={espaceCoche} onChange={changementValeurCase} />
              {nomOption1}
            </label>
          </div>
        )}
        {nomOption2 && (
          <div>
            <label>
              <input type="radio" name={`option-${titre}`} value={nomOption2} checked={selectedCaseOption === nomOption2} style={espaceCoche} onChange={changementValeurCase} />
              {nomOption2}
            </label>
          </div>
        )}
        {nomOption3 && (
          <div>
            <label>
              <input type="radio" name={`option-${titre}`} value={nomOption3} checked={selectedCaseOption === nomOption3} style={espaceCoche} onChange={changementValeurCase} />
              {nomOption3}
            </label>
          </div>
        )}
        <button onClick={handleButtonClick}>Vider</button>
      </div>
    </div>
  );
};

export default CaseRadio;
