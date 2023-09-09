import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';
const headers = { 'Content-Type': 'application/json' };
const username = sessionStorage.getItem('username');

export const suppressionRemplissageFiltre = async (nomRemplissage) => {
    try {
      const response = await axios.delete(`${apiUrl}/suppressionRemplissage?nomRemplissage=${nomRemplissage}`);
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const recuperationNomRemplissageFiltre = async () => {
    try {
        const response = await axios.get(`${apiUrl}/recuperationNomRemplissageFiltre?username=${username}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("Réponse d'erreur de l'API:", error.response.data);
        } else if (error.request) {
            console.error("Erreur de requête:", error.request);
        } else {
            console.error("Erreur lors de la requête:", error.message);
        }
        throw error;
    }
};

export const creationRemplissageFiltre = async (username, nomRemplissage, tableauFiltreValue) => {
    console.log("tableauFiltreValue");
    console.log(tableauFiltreValue);

    const tableauFormatee = tableauFiltreValue.filter(item => item !== null && item !== undefined);

    try {
        await axios.post(`${apiUrl}/creationRemplissageFiltre?username=${username}&nomRemplissage=${nomRemplissage}`, tableauFormatee, { headers });
        return 'Creation du filtre appliquées avec succès.';
    } catch (error) {
        if (error.response) {
            console.error("Réponse d'erreur de l'API:", error.response.data);
        } else if (error.request) {
            console.error("Erreur de requête:", error.request);
        } else {
            console.error("Erreur lors de la requête:", error.message);
        }
        throw error;
    }
};
