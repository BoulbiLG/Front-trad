import axios from 'axios';

// strategie
export const fetchStrategie = async (username, setStrategies) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationStrategie?username=${username}`);
    const data = response.data;
    setStrategies(data);
  } catch (error) {
    console.error(error);
  }
};

export const createStrategie = async (username, nomStrategie, fetchStrategie) => {
  try {
    await axios.post('https://apipython2.onrender.com/createStrategie', { username, nomStrategie });
    fetchStrategie(username);
  } catch (error) {
    console.error(error);
  }
};

export const deleteStrategie = async (username, nomStrategie, fetchStrategie) => {
  try {
    await axios.delete(`https://apipython2.onrender.com/suppressionStrategie?username=${username}&nomStrategie=${nomStrategie}`);
    fetchStrategie(username);
  } catch (error) {
    console.error(error);
  }
};

// indicateur
export const fetchIndicateur = async (username, setIndicateur) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationIndicateur?username=${username}`);
    const data = response.data;
    setIndicateur(data);
  } catch (error) {
    console.error(error);
  }
};

export const createIndicateur = async (username, nomIndicateur, fetchIndicateur) => {
  try {
    await axios.post('https://apipython2.onrender.com/createIndicateur', { username, nomIndicateur });
    fetchIndicateur(username);
  } catch (error) {
    console.error(error);
  }
};

export const deleteIndicateur = async (username, nomIndicateur, fetchIndicateur) => {
  try {
    await axios.delete(`https://apipython2.onrender.com/suppressionIndicateur?username=${username}&nomIndicateur=${nomIndicateur}`);
    fetchIndicateur(username);
  } catch (error) {
    console.error(error);
  }
};

// portefeuille
export const fetchPorteFeuille = async (username, setPorteFeuille) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationPorteFeuille?username=${username}`);
    const data = response.data;
    setPorteFeuille(data);
  } catch (error) {
    console.error(error);
  }
};

export const createPorteFeuille = async (username, nomPorteFeuille, fetchPorteFeuille) => {
  try {
    await axios.post('https://apipython2.onrender.com/createPorteFeuille', { username, nomPorteFeuille });
    fetchPorteFeuille(username);
  } catch (error) {
    console.error(error);
  }
};

export const deletePorteFeuille = async (username, nomPorteFeuille, fetchPorteFeuille) => {
  try {
    await axios.delete(`https://apipython2.onrender.com/suppressionPorteFeuille?username=${username}&nomPorteFeuille=${nomPorteFeuille}`);
    fetchPorteFeuille(username);
  } catch (error) {
    console.error(error);
  }
};

// remplissage profil automatique

const apiUrl = 'https://apipython2.onrender.com';

export const applyModifications = async (annonceEcoCaseValeurs, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues, indicateur1Values, 
  indicateur2Values, indicateur3Values, strategieSelectedOption, timeEntreeValues, timeSetupValues, nomRemplissageDefaut,
  username
  ) => {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const data = { 
      annonceEco: annonceEcoCaseValeurs,
      psychologie: psychologieValues,
      position: positionValues,
      typeOrdre: typeOrdreValues,
      violeStrategie: violeStrategieValues,
      sortie: sortieValues,
      indicateur1: indicateur1Values,
      indicateur2: indicateur2Values,
      indicateur3: indicateur3Values,
      strategie: strategieSelectedOption,
      timeEntree: timeEntreeValues,
      timeSetup: timeSetupValues,
      nomRemplissageDefaut: nomRemplissageDefaut,
      username: username
    };
    console.log(data);
    await axios.post(`${apiUrl}/enregistrementRemplissageDefaut`, data, { headers });
    return 'Remplissage par défaut enregistré avec succès';
  } catch (error) {
    console.log('Erreur lors de l\'enregistrement du remplissage par defaut :', error);
    return 'Erreur lors de l\'enregistrement du remplissage par defaut';
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

export const recuperationRemplissage = async (username) => {
  try {  
    const response = await axios.get(`${apiUrl}/recuperationRemplissageDefaut?username=${username}`);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la récupération des remplissage :', error);
    return [];
  }
};

export const suppressionRemplissage = async (username, nomRemplissageDefaut) => {
  try {
    const response = await axios.delete(`https://apipython2.onrender.com/suppressionIndicateur?username=${username}&nomRemplissageDefaut=${nomRemplissageDefaut}`);
    return response.data;
  } catch (error) {
    console.log('Erreur lors de la suppression du remplissage :', error);
    return [];
  }
};