// annonce économique
export const updateAnnEcoCaseValeur = (id, newValue, annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs) => {
    const updatedValues = [...annonceEcoCaseValeurs];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valeurAnnEco = newValue;
    } else {
      updatedValues.push({ id, valeurAnnEco: newValue });
    }
    setAnnonceEcoCaseValeurs(updatedValues);
    console.log('Updated annonceEcoCaseValeurs:', updatedValues);
};
  
// psychologie
export const updatePsychologieOption = (id, selectedValue, psychologieValues, setPsychologieValues) => {
    const updatedValues = [...psychologieValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valuePsy = selectedValue;
    } else {
      updatedValues.push({ id, valuePsy: selectedValue });
    }
    setPsychologieValues(updatedValues);
    console.log('Updated psychologieValues:', updatedValues);
};
  
// position
export const updatePositionOption = (id, selectedValue, positionValues, setPositionValues) => {
    const updatedValues = [...positionValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valuePosition = selectedValue;
    } else {
      updatedValues.push({ id, valuePosition: selectedValue });
    }
    setPositionValues(updatedValues);
    console.log('Updated positionValues:', updatedValues);
  };
  
//  type d'ordre
export const updateTypeOrdreOption = (id, selectedValue, typeOrdreValues, setTypeOrdreValues) => {
    const updatedValues = [...typeOrdreValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueTypeOrdre = selectedValue;
    } else {
      updatedValues.push({ id, valueTypeOrdre: selectedValue });
    }
    setTypeOrdreValues(updatedValues);
    console.log('Updated typeOrdreValues:', updatedValues);
};

// viole strategie
export const updateVioleStrategieOption = (id, selectedValue, violeStrategieValues, setVioleStrategieValues) => {
    const updatedValues = [...violeStrategieValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueVioleStrategie = selectedValue;
    } else {
      updatedValues.push({ id, valueVioleStrategie: selectedValue });
    }
    setVioleStrategieValues(updatedValues);
    console.log('Updated violeStrategieValues:', updatedValues);
};

// sortie
export const updateSortieOption = (id, selectedValue, sortieValues, setSortieValues) => {
    const updatedValues = [...sortieValues];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueSortie = selectedValue;
    } else {
      updatedValues.push({ id, valueSortie: selectedValue });
    }
    setSortieValues(updatedValues);
    console.log('Updated sortieValues:', updatedValues);
};

// indicateur 1
export const updateIndicateur1Option = (id, selectedValue, indicateur1Values, setIndicateur1Values) => {
    const updatedValues = [...indicateur1Values];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueIndicateur1 = selectedValue;
    } else {
      updatedValues.push({ id, valueIndicateur1: selectedValue });
    }
    setIndicateur1Values(updatedValues);
    console.log('Updated indicateur1Values:', updatedValues);
};

// indicateur 2
export const updateIndicateur2Option = (id, selectedValue, indicateur2Values, setIndicateur2Values) => {
    const updatedValues = [...indicateur2Values];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueIndicateur2 = selectedValue;
    } else {
      updatedValues.push({ id, valueIndicateur2: selectedValue });
    }
    setIndicateur2Values(updatedValues);
    console.log('Updated indicateur2Values:', updatedValues);
};

// indicateur 3
export const updateIndicateur3Option = (id, selectedValue, indicateur3Values, setIndicateur3Values) => {
    const updatedValues = [...indicateur3Values];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valueIndicateur3 = selectedValue;
    } else {
      updatedValues.push({ id, valueIndicateur3: selectedValue });
    }
    setIndicateur3Values(updatedValues);
    console.log('Updated indicateur3Values:', updatedValues);
};

// strategie
export const updateStrategieOption = (id, selectedValue, strategieValues, setStrategieValues) => {
  const updatedValues = [...strategieValues];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].strategieValues = selectedValue;
  } else {
    updatedValues.push({ id, strategieValues: selectedValue });
  }
  setStrategieValues(updatedValues);
  console.log('Updated strategieValues:', updatedValues);
};

// time entree
export const updateTimeEntreeOption = (id, selectedValue, timeEntreeValues, setTimeEntreeValues) => {
  const updatedValues = [...timeEntreeValues];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].valueTimeEntree = selectedValue;
  } else {
    updatedValues.push({ id, valueTimeEntree: selectedValue });
  }
  setTimeEntreeValues(updatedValues);
  console.log('Updated timeEntreeValues:', updatedValues);
};

// time entree
export const updateTimeSetupOption = (id, selectedValue, timeSetupValues, setTimeSetupValues) => {
  const updatedValues = [...timeSetupValues];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].valueTimeSetup = selectedValue;
  } else {
    updatedValues.push({ id, valueTimeSetup: selectedValue });
  }
  setTimeSetupValues(updatedValues);
  console.log('Updated timeSetupValues:', updatedValues);
};

// portefeuille
export const updatePorteFeuilleOption = (id, selectedValue, porteFeuilleValues, setPorteFeuilleValues) => {
  const updatedValues = [...porteFeuilleValues];
  const entryIndex = updatedValues.findIndex(item => item.id === id);
  if (entryIndex !== -1) {
    updatedValues[entryIndex].valuePorteFeuille = selectedValue;
  } else {
    updatedValues.push({ id, valuePorteFeuille: selectedValue });
  }
  setPorteFeuilleValues(updatedValues);
  console.log('Updated porteFeuilleValues:', updatedValues);
};

