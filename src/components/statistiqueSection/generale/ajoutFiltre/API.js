import axios from 'axios';
import { format } from 'date-fns';
import { formatISO } from 'date-fns';

// http://localhost:1234
// https://apipython2.onrender.com
const apiUrl = 'http://localhost:1234';
const username = sessionStorage.getItem('username');

export const recuperationTradeParFiltreDate = async (tableauFiltreValue, collectionValues, startDate, endDate) => {

    const verificationDateValide = '1970-01-01T01:00:00.000Z';

    const dateDebutBrut = new Date(startDate);
    const dateDebut = format(dateDebutBrut, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    const dateDebutString = dateDebut.toLocaleString();
    console.log(dateDebut);

    const dateFinBrut = new Date(endDate);
    const dateFin = format(dateFinBrut, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    const dateFinString = dateFin.toLocaleString();
    console.log(dateFin);

    tableauFiltreValue = tableauFiltreValue.filter(item => item !== undefined);

    if (dateDebutString != verificationDateValide && dateFinString != verificationDateValide) {
        console.log("verification terminée");
        console.log(dateDebutString);
        console.log(dateFinString);
        console.log(verificationDateValide);
        if (collectionValues) {
            const filtreDeBase = tableauFiltreValue[0].filtreDeBase;
            tableauFiltreValue.shift();
            console.log(tableauFiltreValue);
            console.log(`${apiUrl}/${filtreDeBase}`);
            const ok = JSON.stringify(tableauFiltreValue);
            const params = {
                dateDebut: dateDebut,
                dateFin: dateFin,
                collection: collectionValues,
                username: username,
                filtreDeBase: filtreDeBase,
            }
            if (filtreDeBase) {
                if (tableauFiltreValue) {
                    console.log(params);
                    console.log(filtreDeBase);
                    try {
                        if(filtreDeBase == "Capitalrisk" || filtreDeBase == "psychologie" || filtreDeBase == "typeOrdre") {
                            console.log("vérification accomplie")
                            const response = await axios.get(`${apiUrl}/${filtreDeBase}`, { params });
                            console.log(response.data);
                            return response.data;
                        }
                        else {
                            console.log("vérification rejetée")
                            const response = await axios.get(`${apiUrl}/filtreAnnexe`, { params });
                            console.log(response.data);
                            return response.data;
                        }
                    } catch (error) {
                        console.log(params);
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
            }
        }
    }
};

export const recuperationTradeParFiltre = async (tableauFiltreValue, collectionValues) => {
    tableauFiltreValue = tableauFiltreValue.filter(item => item !== undefined);

    if (tableauFiltreValue && tableauFiltreValue.length > 0) {
        if (collectionValues) {
            const filtreDeBase = tableauFiltreValue[0].filtreDeBase;
            tableauFiltreValue.shift();
            console.log(tableauFiltreValue);
            console.log(`${apiUrl}/${filtreDeBase}`);
            const ok = JSON.stringify(tableauFiltreValue);
            const params = {
                collection: collectionValues,
                username: username,
                filtreDeBase: filtreDeBase,
                tableauFiltreValue: ok
            }
            if (filtreDeBase) {
                if (tableauFiltreValue) {
                    console.log(params);
                    console.log(filtreDeBase);
                    try {
                        if(filtreDeBase == "Capitalrisk" || filtreDeBase == "psychologie" || filtreDeBase == "orderType") {
                            console.log("vérification accomplie")
                            const response = await axios.get(`${apiUrl}/filtreAnnexe`, { params });
                            console.log(response.data);
                            return response.data;
                        }
                        else {
                            console.log("vérification rejetée")
                            const response = await axios.get(`${apiUrl}/${filtreDeBase}`, { params });
                            console.log(response.data);
                            return response.data;
                        }
                    } catch (error) {
                        console.log(params);
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
            }
        }
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

export const recuperationRemplissageFiltre = async (nomRemplissage, setFiltreOptionsDynamique, setSymboleValue, setTypeTransactionValue, 
    setStartDateValue, setEndDateValue, setVolumeValue, setVolumeRemainValue, setProfitValue) => {
    try {
        const response = await axios.get(`${apiUrl}/recuperationRemplissageFiltre?nomRemplissage=${nomRemplissage}`);
        const data = response.data;
        const dataBrut = [
            { filtre: 'filtreAnnexe', type: 'nom', value: data.nomRemplissage },
            ...data.type.map((type, index) => ({
              filtre: 'filtreDeBase',
              type,
              value: data.value[index],
            })),
        ];

        // APLLICATION DES SET

        // symbol
        const symbol = dataBrut.find(item => item.type === 'symbol');if (symbol) {setSymboleValue(symbol.value);}
        // typeOfTransaction
        const typeOfTransaction = dataBrut.find(item => item.type === 'typeOfTransaction');if (typeOfTransaction) {setTypeTransactionValue(typeOfTransaction.value);}
        // startDate
        //const startDate = dataBrut.find(item => item.type === 'dateAndTimeOpening');if (startDate) {setStartDateValue(startDate.value);}
        // startEnd
        //const startEnd = dataBrut.find(item => item.type === 'dateAndTimeClosure');if (startEnd) {setEndDateValue(startEnd.value);}
        // volume
        const volume = dataBrut.find(item => item.type === 'volume');if (volume) {setVolumeValue(volume.value);}
        // volumeRemain
        const volumeRemain = dataBrut.find(item => item.type === 'volume_remain');if (volumeRemain) {setVolumeRemainValue(volumeRemain.value);}
        // profit
        const profit = dataBrut.find(item => item.type === 'profit');if (profit) {setProfitValue(profit.value);}

        // SUPPRESSION DU NOM
        const dataNet = dataBrut.filter(item => item.type !== 'nom');
        
        // SUPPRESSION DES DATES
        const filtrageDate = dataNet.every(item => item.type !== 'dateAndTimeOpening' && item.type !== 'dateAndTimeClosure');
        const dataFormatee = dataNet.filter(item => item.type !== 'dateAndTimeOpening' && item.type !== 'dateAndTimeClosure');
        if (!filtrageDate) {dataFormatee.push({ filtre: 'filtreAnnexe', type: 'date', value: null });}

        // CORRECTION DU CHAMPS FILTRE
        for (let i = 1; i < dataFormatee.length; i++) {
            dataFormatee[i].filtre = 'filtreAnnexe';
        }

        console.log(dataFormatee);
        let filtreOptions = [
            {value: "date", label: "Date"},
            {value: "typeOfTransaction", label: "Type of transaction"},
            {value: "symbol", label: "Symbol"},
        ]
        dataFormatee.forEach(item => {
            filtreOptions = filtreOptions.filter(option => option.value !== item.type);
        });

        console.log(filtreOptions);

        if (filtreOptions == undefined) {
            filtreOptions = [];
        }

        console.log(filtreOptions);
        setFiltreOptionsDynamique(filtreOptions);
        return dataFormatee;

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
