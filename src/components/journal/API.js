import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';

export const fetchJournalData = async (username, selectedOption, collectionTradeValues) => {
  try {
    const response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&typeTrade=${selectedOption}&collection=${collectionTradeValues}`);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données du journal :', error);
    return [];
  }
};

export const applyModifications = async (annonceEcoCaseValeurs, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues,
  indicateur1Values, indicateur2Values, indicateur3Values, strategieValues, timeEntreeValues, timeSetupValues, porteFeuilleSelectedOption, collectionValues,
  tag, note
  ) => {
  try {
    //console.log(porteFeuilleSelectedOption);
    console.log(tag);
    const headers = { 'Content-Type': 'application/json' };
    const data = { 
      trades: annonceEcoCaseValeurs.map(item => ({ id: item.id, valeurAnnEco: item.valeurAnnEco })),
      position: positionValues.map(item => ({ id: item.id, valuePosition: item.valuePosition })),
      typeOrdre: typeOrdreValues.map(item => ({ id: item.id, valueTypeOrdre: item.valueTypeOrdre })),
      violeStrategie: violeStrategieValues.map(item => ({ id: item.id, valueVioleStrategie: item.valueVioleStrategie })),
      sortie: sortieValues.map(item => ({ id: item.id, valueSortie: item.valueSortie })),
      psychologie: psychologieValues.map(item => ({ id: item.id, valuePsy: item.valuePsy })),
      indicateur1: indicateur1Values.map(item => ({ id: item.id, valueIndicateur1: item.valueIndicateur1 })),
      indicateur2: indicateur2Values.map(item => ({ id: item.id, valueIndicateur2: item.valueIndicateur2 })),
      indicateur3: indicateur3Values.map(item => ({ id: item.id, valueIndicateur3: item.valueIndicateur3 })),
      strategie: strategieValues.map(item => ({ id: item.id, valueStrategie: item.strategieValues })),
      timeEntree: timeEntreeValues.map(item => ({ id: item.id, valueTimeEntree: item.valueTimeEntree })),
      timeSetup: timeSetupValues.map(item => ({ id: item.id, valueTimeSetup: item.valueTimeSetup })),
      porteFeuille: porteFeuilleSelectedOption.map(item => ({ id: item.id, valuePorteFeuille: item.valuePorteFeuille })),
      tag: tag.map(item => ({ id: item.id, valueTag: item.valueTag })),
      note: note.map(item => ({ id: item.id, valueNote: item.valueNote })),
      collection: collectionValues
    };
    console.log(data);
    await axios.post(`${apiUrl}/modificationTrade`, data, { headers });
    return 'Modifications appliquées avec succès.';
  } catch (error) {
    console.log('Erreur lors de l\'application des modifications :', error);
    return 'Une erreur est survenue lors de l\'application des modifications.';
  }
};

export const fetchStrategieOptions = async (username, setStrategies) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationStrategie?username=${username}`);
    const data = response.data;
    setStrategies(data);
    if (data) {
      return data.map((strategie) => ({
        value: strategie.nomStrategie,
        label: strategie.nomStrategie
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPorteFeuilleOptions = async (username, setPorteFeuille) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationPorteFeuille?username=${username}`);
    const data = response.data;
    setPorteFeuille(data);
    if (data) {
      return data.map((porteFeuille) => ({
        value: porteFeuille.nomComplet,
        label: porteFeuille.nomSeul,
        nomComplet: porteFeuille.nomComplet
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const recuperationNomRemplissage = async (username, setRemplissageOption) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationRemplissageDefaut?username=${username}`);
    const data = response.data;
    setRemplissageOption(data);
    if (data) {
      return data.map((remplissage) => ({
        value: remplissage.nomRemplissageDefaut,
        label: remplissage.nomRemplissageDefaut
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const recuperationSeulRemplissage = async (usernameSession, remplissageValeur) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationSeulRemplissage?username=${usernameSession}&nomRemplissageDefaut=${remplissageValeur}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Une erreur est survenue lors de la recuperation du remplissages.';
  }
};