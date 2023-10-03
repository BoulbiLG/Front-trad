import axios from 'axios';

const username = sessionStorage.getItem('username');
const apiUrl = 'https://apipython2.onrender.com';

export const psychologieOptions = [
    { value: "frustration", label: "frustration" },
    { value: "colère", label: "colère" },
    { value: "impatience", label: "impatience" },
    { value: "peur", label: "peur" },
    { value: "doute", label: "doute" },
    { value: "revanche", label: "revanche" },
    { value: "jeu", label: "jeu" },
    { value: "rattrapage", label: "rattrapage" },
];

export const filtreEntreeOptions = [
    {value: "volume", label: "Volume"},
    {value: "volume_remain", label: "Volume remain"},
    {value: "profit", label: "Profit"},
    {value: "point", label: "Point"},
    {value: "tilt", label: "Tilt"},
    {value: "priceOpening", label: "Price opening"},
    {value: "stopLoss", label: "Stop loss"},
    {value: "SLOpen", label: "SL open"},
    {value: "takeProfit", label: "Take profit"},
    {value: "TPOpen", label: "TP open"},
    {value: "Capitalrisk", label: "Capital risk"},
]

export const filtreOptions = [
    {value: "date", label: "Date"},
    {value: "typeOfTransaction", label: "Type of transaction"},
    {value: "symbol", label: "Symbol"},
    {value: "orderType", label: "Order type"},
    {value: "orderType", label: "Order type"},
]

export const standardOptions = [
    {value: "option1", label: "Option1"},
    {value: "option2", label: "Option2"},
    {value: "option3", label: "Option3"},
    {value: "option4", label: "Option4"},
    {value: "option5", label: "Option5"},
    {value: "option6", label: "Option6"},
    {value: "option7", label: "Option7"},
    {value: "option8", label: "Option8"},
    {value: "option9", label: "Option9"},
    {value: "option10", label: "Option10"},
    {value: "option11", label: "Option11"},
]

export const typeOfTransactionOptions = [
    {value: "Sell", label: "Sell"},
    {value: "Buy", label: "Buy"},
]

export const orderTypeOptions = [
    {value: "SELL", label: "Sell"},
    {value: "BUY", label: "Buy"},
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

// STRATEGIE
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