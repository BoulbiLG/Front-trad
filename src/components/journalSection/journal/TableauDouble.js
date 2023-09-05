// annonce économique
export const updateAnnEcoCaseValeur = (id, newValue, annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs) => {
  setAnnonceEcoCaseValeurs(prevAnnonceEcoCaseValues => {
    const updatedValues = [...prevAnnonceEcoCaseValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valeurAnnEco = newValue;
    } else {
      updatedValues.push({ id, valeurAnnEco: newValue });
    }
    //console.log('Updated annonceEcoCaseValeurs:', updatedValues);
    return updatedValues;
  });
};
  
// position
export const updatePositionOption = (id, selectedValue, positionValues, setPositionValues) => {
  setPositionValues( prevPositionValues => {
    const updatedValues = [...prevPositionValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valuePosition = selectedValue;
    } else {
      updatedValues.push({ id, valuePosition: selectedValue });
    }
    //console.log('Updated positionValues:', updatedValues);
    return updatedValues;
  });
};
  
//  type d'ordre
export const updateTypeOrdreOption = (id, selectedValue, typeOrdreValues, setTypeOrdreValues) => {
  setTypeOrdreValues( prevTypeOrdreValues => {
    const updatedValues = [...prevTypeOrdreValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueTypeOrdre = selectedValue;
    } else {
      updatedValues.push({ id, valueTypeOrdre: selectedValue });
    }
    //console.log('Updated typeOrdreValues:', updatedValues);
    return updatedValues;
  });
};

// viole strategie
export const updateVioleStrategieOption = (id, selectedValue, violeStrategieValues, setVioleStrategieValues) => {
  setVioleStrategieValues( prevVioleValues => {
    const updatedValues = [...prevVioleValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueVioleStrategie = selectedValue;
    } else {
      updatedValues.push({ id, valueVioleStrategie: selectedValue });
    }
    //console.log('Updated violeStrategieValues:', updatedValues);
    return updatedValues;
  });
};

// sortie
export const updateSortieOption = (id, selectedValue, sortieValues, setSortieValues) => {
  setSortieValues( prevSortieValues => {
    const updatedValues = [...prevSortieValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueSortie = selectedValue;
    } else {
      updatedValues.push({ id, valueSortie: selectedValue });
    }
    //console.log('Updated sortieValues:', updatedValues);
    return updatedValues;
  });
};

// psychologie
export const updatePsychologieOption = (id, selectedValue, psychologieValues, setPsychologieValues) => {
  setPsychologieValues(prevPsychologieValues => {
      const updatedValues = [...prevPsychologieValues];
      const entryIndex = updatedValues.findIndex(item => item.id === id);
      if (entryIndex !== -1) {
          updatedValues[entryIndex].valuePsy = selectedValue;
      } else {
          updatedValues.push({ id, valuePsy: selectedValue });
      }
      //console.log('Updated psychologieValues:', updatedValues);
      return updatedValues;
  });
};

// indicateur 1
export const updateIndicateur1Option = (id, selectedValue, indicateur1Values, setIndicateur1Values) => {
  setIndicateur1Values( prevIndicateur1Values => {
    const updatedValues = [...prevIndicateur1Values];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueIndicateur1 = selectedValue;
    } else {
      updatedValues.push({ id, valueIndicateur1: selectedValue });
    }
    //console.log('Updated indicateur1Values:', updatedValues);
    return updatedValues;
  });
};

// indicateur 2
export const updateIndicateur2Option = (id, selectedValue, indicateur2Values, setIndicateur2Values) => {
  setIndicateur2Values( prevIndicateur2Values => {
    const updatedValues = [...prevIndicateur2Values];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueIndicateur2 = selectedValue;
    } else {
      updatedValues.push({ id, valueIndicateur2: selectedValue });
    }
    //console.log('Updated indicateur2Values:', updatedValues);
    return updatedValues;
  });
};

// indicateur 3
export const updateIndicateur3Option = (id, selectedValue, indicateur3Values, setIndicateur3Values) => {
  setIndicateur3Values( prevIndicateur3Values => {
    const updatedValues = [...prevIndicateur3Values];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueIndicateur3 = selectedValue;
    } else {
      updatedValues.push({ id, valueIndicateur3: selectedValue });
    }
    //console.log('Updated indicateur3Values:', updatedValues);
    return updatedValues;
  });
};

// strategie
export const updateStrategieOption = (id, selectedValue, strategieValues, setStrategieValues) => {
  setStrategieValues( prevStrategieValues => {
    const updatedValues = [...prevStrategieValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueStrategie = selectedValue;
    } else {
      updatedValues.push({ id, valueStrategie: selectedValue });
    }
    //console.log('Updated strategieValues:', updatedValues);
    return updatedValues;
  });
};

// time entree
export const updateTimeEntreeOption = (id, selectedValue, timeEntreeValues, setTimeEntreeValues) => {
  setTimeEntreeValues( prevTimeEntreeValues => {
    const updatedValues = [...prevTimeEntreeValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueTimeEntree = selectedValue;
    } else {
      updatedValues.push({ id, valueTimeEntree: selectedValue });
    }
    //console.log('Updated timeEntreeValues:', updatedValues);
    return updatedValues;
  });
};

// time setup
export const updateTimeSetupOption = (id, selectedValue, timeSetupValues, setTimeSetupValues) => {
  setTimeSetupValues( prevTimeSetupValues => {
    const updatedValues = [...prevTimeSetupValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueTimeSetup = selectedValue;
    } else {
      updatedValues.push({ id, valueTimeSetup: selectedValue });
    }
    //console.log('Updated timeSetupValues:', updatedValues);
    return updatedValues;
  });
};



//========================================================================================================================



// portefeuille
export const updatePorteFeuilleOption = (id, selectedValue, porteFeuilleSelectedOption, setPorteFeuilleSelectedOption) => {
  const updatedValues = [...porteFeuilleSelectedOption];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].valuePorteFeuille = selectedValue;
    //console.log(updatedValues);
  } else {
    updatedValues.push({ id, valuePorteFeuille: selectedValue });
    //console.log(updatedValues);
  }
  setPorteFeuilleSelectedOption(updatedValues);
  //console.log('Updated porteFeuilleSelectedOption:', updatedValues);
};

// tag
export const updateTagOption = (id, selectedValue, tagSelectedOption, setTagSelectedOption) => {
  const updatedValues = [...tagSelectedOption];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].valueTag = selectedValue;
    //console.log(updatedValues);
  } else {
    updatedValues.push({ id, valueTag: selectedValue });
    //console.log(updatedValues);
  }
  setTagSelectedOption(updatedValues);
  //console.log('Updated tagSelectedOption:', updatedValues);
};

// note
export const updateNoteOption = (id, selectedValue, noteSelectedOption, setNoteSelectedOption) => {
  const updatedValues = [...noteSelectedOption];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].valueNote = selectedValue;
    //console.log(updatedValues);
  } else {
    updatedValues.push({ id, valueNote: selectedValue });
    //console.log(updatedValues);
  }
  setNoteSelectedOption(updatedValues);
  //console.log('Updated noteSelectedOption:', updatedValues);
};