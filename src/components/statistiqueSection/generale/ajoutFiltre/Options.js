import axios from 'axios';

const username = sessionStorage.getItem('username');
const apiUrl = 'https://apipython2.onrender.com';

export const filtreEntreeOptions = [
    {value: "volume", label: "Volume"},
    {value: "volume_remain", label: "Volume remain"},
    {value: "profit", label: "Profit"},
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
        console.log("gfbbgfbgbf");
        const response = await axios.get(`${apiUrl}/recuperationNomRemplissageFiltre?username=${username}`);
        const data = response.data;
        console.log(data);

        if (Array.isArray(data) && data !== null && data !== undefined) {
            const cleanOptions = data.map(item => ({ value: item, label: item }));
            console.log(cleanOptions);
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