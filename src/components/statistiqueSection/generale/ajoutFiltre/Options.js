import axios from 'axios';

const username = sessionStorage.getItem('username');
const apiUrl = 'https://apipython2.onrender.com';

export const filtreEntreeOptions = [
    {value: "volume", label: "Volume"},
    {value: "volume_remain", label: "Volume remain"},
    {value: "profit", label: "Profit"},
]

export const standardOptions = [
    {value: "option1", label: "Option1"},
    {value: "option2", label: "Option2"},
    {value: "option3", label: "Option3"},
]

export const filtreOptions = [
    {value: "date", label: "Date"},
    {value: "typeOfTransaction", label: "Type of transaction"},
    {value: "symbol", label: "Symbol"},
]

export const typeOfTransactionOptions = [
    {value: "Sell", label: "Sell"},
    {value: "Buy", label: "Buy"},
]

export let nomRemplissageOptions = [
    {value: "aucun", label: "Aucun"},
]

export const recuperationNomRemplissageFiltre = async () => {
    try {
        const response = await axios.get(`${apiUrl}/recuperationNomRemplissageFiltre?username=${username}`);
        const data = response.data;

        if (Array.isArray(data) && data !== null && data !== undefined) {
            const cleanOptions = data.map(item => ({ value: item, label: item }));
            const options = nomRemplissageOptions.concat(cleanOptions);
            return options;
        } else {
            console.warn("Les données récupérées sont nulles ou non définies.");
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

// COLLECTION

let recuperationCollectionOption = [];

export const fetchCollectionOptions = async (username) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationPorteFeuille?username=${username}`);
    const data = response.data;

    const cleanOptions = data.map(item => ({ value: item.nomComplet, label: item.nomSeul }));
    const options = recuperationCollectionOption.concat(cleanOptions);
    return options;
  } catch (error) {
    console.error(error);
    return [];
  }
};