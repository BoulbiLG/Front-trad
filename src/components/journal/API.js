import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';

export const fetchJournalData = async (username, selectedOption) => {
  try {
    const response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&typeTrade=${selectedOption}`);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données du journal :', error);
    return [];
  }
};

export const applyModifications = async (annonceEcoCaseValeurs, psychologieValues, positionValues) => {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const data = { 
      trades: annonceEcoCaseValeurs.map(item => ({ id: item.id, valeurAnnEco: item.valeurAnnEco })),
      psychologie: psychologieValues.map(item => ({ id: item.id, valuePsy: item.valuePsy })),
      position: positionValues.map(item => ({ id: item.id, valuePosition: item.valuePosition }))
    };

    await axios.post(`${apiUrl}/modificationTrade`, data, { headers });
    return 'Modifications appliquées avec succès.';
  } catch (error) {
    console.log('Erreur lors de l\'application des modifications :', error);
    return 'Une erreur est survenue lors de l\'application des modifications.';
  }
};
