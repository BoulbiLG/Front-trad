import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';

export const fetchJournalData = async (username, collectionTradeValues, rechercheDonnee) => {
  try {
    let response;
    if (rechercheDonnee === null || rechercheDonnee === '') {
      response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&collection=${collectionTradeValues}`);
    } else {
      response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&collection=${collectionTradeValues}&rechercheDonnee=${rechercheDonnee}`);
    }
      return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération des données du journal :', error);
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