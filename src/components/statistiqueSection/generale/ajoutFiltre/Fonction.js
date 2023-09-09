// ======================= FILTRE DE BASE =======================




// VOLUME / VOLUME REMAIN / PROFIT
export const VolVolRemProAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { filtreDeBase: nouvelleValeur };
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
    nouveauTableauFiltreValue[index] = { symbol: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// TYPE TRANSACTION
export const typeTransactionAjoutValueFiltre = (selectedValue, index, setTypeTransaction, tableauFiltreValue, setTableauFiltreValue) => {
    index = 2;
    const nouvelleValeur = selectedValue;
    setTypeTransaction(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { typeOfTransaction: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE DEBUT
export const dateDebutAjoutValueFiltre = (date, index, setStartDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 3;
    const nouvelleValeur = date;
    setStartDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { dateAndTimeOpening: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE FIN
export const dateFinAjoutValueFiltre = (date, index, setEndDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 4;
    const nouvelleValeur = date;
    setEndDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = { dateAndTimeClosure: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};
