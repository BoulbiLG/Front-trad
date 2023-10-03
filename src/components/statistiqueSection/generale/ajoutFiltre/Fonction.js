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
export const generiqueAjoutFiltre = (type, tableauFiltreValue, setTableauFiltreValue) => {
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[0] = { filtreDeBase: type };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// FILTRE ANNEXE
export const generiqueAjoutFiltreAnnexe = (type, tableauFiltreValue, setTableauFiltreValue) => {
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[1] = { [type]: "vide" };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// FILTRE FUSION
export const generiqueAjoutFiltreFusion = (valeur1, valeur2, tableauFiltreValue, setTableauFiltreValue) => {
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[0] = { filtreDeBase: valeur1 };
    nouveauTableauFiltreValue[1] = { [valeur2]: "vide" };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};

// DATE
export const generiqueAjoutFiltreDate = (valeur1, tableauFiltreValue, setTableauFiltreValue) => {
    const nouveauTableauFiltreValue = [...tableauFiltreValue];
    nouveauTableauFiltreValue[0] = { filtreDeBase: valeur1 };
    setTableauFiltreValue(nouveauTableauFiltreValue);
    console.log(tableauFiltreValue);
};