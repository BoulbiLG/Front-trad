import axios from "axios";

export const typeOfTransactionOptions = [
    {value: "Buy", label: "Buy"},
    {value: "Sell", label: "Sell"},
]

export const orderTypeOptions = [
    {value: "BUY", label: "Buy"},
    {value: "SELL", label: "Sell"},
]

export const closurePositionOptions = [
    {value: "Close", label: "Close"},
    {value: "Open", label: "Open"},
]

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