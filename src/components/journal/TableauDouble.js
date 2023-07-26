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
    console.log('Updated annonceEcoCaseValeurs:', annonceEcoCaseValeurs);
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
    console.log('Updated psychologieValues:', psychologieValues);
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
    console.log('Updated positionValues:', positionValues);
};