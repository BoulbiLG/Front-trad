// ======================= FILTRE DE BASE =======================




// VOLUME / VOLUME REMAIN / PROFIT

export const volAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { volume: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const volRemAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { volume_remain: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const proAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] =  { profit: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const pointAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { point: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const tiltAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { tilt: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const priceOpeningAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { priceOpening: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const stopLossAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { stopLoss: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const SLOpenAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { SLOpen: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const takeProfitAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { takeProfit: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const TPOpenAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { TPOpen: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const capitaleRiskAjoutValueFiltre = (event, index, setVariableValue, tableauFiltreValue, setTableauFiltreValue) => {
    const nouvelleValeur = parseFloat(event.target.value);
    index = 0;
    setVariableValue(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] =  { Capitalrisk: nouvelleValeur };
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
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] = { symbol: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// TYPE TRANSACTION
export const typeTransactionAjoutValueFiltre = (selectedValue, index, setTypeTransaction, tableauFiltreValue, setTableauFiltreValue) => {
    index = 2;
    const nouvelleValeur = selectedValue;
    setTypeTransaction(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] = { typeOfTransaction: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE DEBUT
export const dateDebutAjoutValueFiltre = (date, index, setStartDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 3;
    const nouvelleValeur = date;
    setStartDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] = { dateAndTimeOpening: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE FIN
export const dateFinAjoutValueFiltre = (date, index, setEndDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 4;
    const nouvelleValeur = date;
    setEndDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] = { dateAndTimeClosure: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const psychologieAjoutValueFiltre = (date, index, setEndDate, tableauFiltreValue, setTableauFiltreValue) => {
    index = 4;
    const nouvelleValeur = date;
    setEndDate(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[index] = {psychologie: nouvelleValeur};
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// FILTRE ANNEXE
export const generiqueAjoutValueFiltre = (event, type, index, setVariable, tableauFiltreValue, setTableauFiltreValue) => {
    index = 4;
    const nouvelleValeur = parseFloat(event.target.value);
    setVariable(nouvelleValeur);
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[nouveauTableauFiltreValue.length + 1] = { [type]: nouvelleValeur };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

export const generiqueSelectorAjoutValueFiltre = (selectedValue, type, index, setVariable, tableauFiltreValue, setTableauFiltreValue) => {
    const champExistant = tableauFiltreValue.find(champ => Object.keys(champ)[0] === type);

    if (champExistant) {
        const nouveauTableauFiltreValue = tableauFiltreValue.map(champ => {
            if (Object.keys(champ)[0] === type) {
                return { [type]: selectedValue };
            }
            return champ;
        });
        setTableauFiltreValue(nouveauTableauFiltreValue);
    } else {
        const nouveauChamp = { [type]: selectedValue };
        const nouveauTableauFiltreValue = [...tableauFiltreValue, nouveauChamp];
        setTableauFiltreValue(nouveauTableauFiltreValue);
    }
    setVariable(selectedValue);
    console.log(tableauFiltreValue);
};


// FILTRE DE BASE
export const generiqueAjoutFiltre = (type, setVariable, tableauFiltreValue, setTableauFiltreValue) => {
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[0] = { filtreDeBase: type };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// FILTRE ANNEXE
export const generiqueAjoutFiltreAnnexe = (type, tableauFiltreValue, setTableauFiltreValue) => {
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[tableauFiltreValue.length] = { [type]: "vide" };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};