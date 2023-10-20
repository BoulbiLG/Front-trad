import axios from "axios";

// http://localhost:1234
// https://apipython2.onrender.com
const apiUrlLocal = 'http://localhost:1234';
const apiUrl = 'https://apipython2.onrender.com';
const username = sessionStorage.getItem('username');

export const enregistrerNote = async (titreValue, texteValue) => {
    try {
        if(titreValue != "" && titreValue != null && titreValue != undefined) {
            if(texteValue != "" && texteValue != null && texteValue != undefined) {
                const response = await axios.post(`${apiUrl}/enregistrerNote?username=${username}&titreValue=${titreValue}&texteValue=${texteValue}`);
                console.log(response.data);
                return response.data;
            }
        }
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
}

export const recuperationNote = async (rechercheNoteValue) => {
    try {
       
        const response = await axios.get(`${apiUrl}/recuperationNote?username=${username}&rechercheNoteValue=${rechercheNoteValue}`);
        console.log(response.data);
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
}

export const suppressionNote = async (id) => {
    try {
       
        const response = await axios.delete(`${apiUrl}/suppressionNote?id=${id}`);
        console.log(response.data);
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
}