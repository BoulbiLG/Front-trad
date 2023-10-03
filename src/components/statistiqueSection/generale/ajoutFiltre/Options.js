import axios from 'axios';

const username = sessionStorage.getItem('username');
const apiUrl = 'https://apipython2.onrender.com';



// ==================== OPTIONS CALCUL GRAPHIQUE ==================== //


// type de calcul
export const typeCalculOptions = [
    {value: "winrate", label: "Winrate"},
    {value: "riskReward", label: "Risk reward"},
    {value: "SLR", label: "SLR"},
    {value: "TPR", label: "TPR"},
    {value: "DD", label: "Drawdown"},
    {value: "psychologie", label: "Psychologie"},
    {value: "capitalRisk", label: "Taille de lot"},
    {value: "typeOrdre", label: "Type d'ordre"},
]

// taille de lot
export const capitaleRiskOptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// Psychologie
export const psychologieOptions = [
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// type d'ordre
export const typeOrdreOptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// draw down
export const DDOptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// winrate
export const winrateOptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// risk reward
export const riskRewardOptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// SLR
export const SLROptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]

// TPR
export const TPROptions = [
    {value: "option1", label: "psychologie"},
    {value: "option2", label: "actifs"},
    {value: "option3", label: "horaires"},
    {value: "option4", label: "type de trade"},
    {value: "option5", label: "stratégie"},
    {value: "option6", label: "taille de lot"},
    {value: "option7", label: "durée de garde de position"},
    {value: "option8", label: "moment d'annonce économique"},
    {value: "option9", label: "type d'ordre"},
    {value: "option10", label: "session"},
    {value: "option11", label: "multi"},
    {value: "option12", label: "tradecount"},
]



// ==================== OPTIONS INPUT ==================== //


/*
// psychologie
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
*/

// filtre d'entrée
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

// filtre annexe
export const filtreOptions = [
    {value: "date", label: "Date"},
    {value: "typeOfTransaction", label: "Type of transaction"},
    {value: "symbol", label: "Symbol"},
    {value: "orderType", label: "Order type"},
    {value: "orderType", label: "Order type"},
]

// type of transaction
export const typeOfTransactionOptions = [
    {value: "Sell", label: "Sell"},
    {value: "Buy", label: "Buy"},
]

// order type
export const orderTypeOptions = [
    {value: "SELL", label: "Sell"},
    {value: "BUY", label: "Buy"},
]

// remplissage automatique
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

// collection
let recuperationCollectionOption = [{value: "tous", label: "Tous"}];

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

// strategie
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