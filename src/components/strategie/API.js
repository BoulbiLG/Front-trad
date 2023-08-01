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
