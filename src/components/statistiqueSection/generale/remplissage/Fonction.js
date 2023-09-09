// NOM
export const nomRemplissageAjout = (event, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = event.target.value;
    const index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { nomRemplissage: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};



// ======================= FILTRE DE BASE =======================




// VOLUME
export const volAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { filtre: 'filtreDeBase', type: 'volume', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// VOLUME REMAIN
export const volRemAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { filtre: 'filtreDeBase', type: 'volume_remain', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// PROFIT
export const proAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { filtre: 'filtreDeBase', type: 'profit', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};



// ======================= FILTRE A AJOUTER =======================



// SYMBOLE
export const symbolAjoutValueFiltre = (event, index, setSymboleValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = event.target.value;
    index = 1;
    setSymboleValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { type: 'symbol', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// TYPE TRANSACTION
export const typeTransactionAjoutValueFiltre = (selectedValue, index, setTypeTransaction, tableauFiltreValue, setTableauFiltreValue) => {
    index = 2;
    const nouvelleValeur = selectedValue;
    setTypeTransaction(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { type: 'typeOfTransaction', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE DEBUT
export const dateDebutAjoutValueFiltre = (date, index, setStartDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 3;
    const nouvelleValeur = date;
    setStartDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { type: 'dateAndTimeOpening', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE FIN
export const dateFinAjoutValueFiltre = (date, index, setEndDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 4;
    const nouvelleValeur = date;
    setEndDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { type: 'dateAndTimeClosure', value: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};
