import axios from 'axios';

export const soumissionsFormulaire = async (argumentDate, argumentIndice, startDate, endDate, argumentTPR, argumentSL, argumentBE, argumentPsy, 
    argumentStrategie, argumentAnnEco, argumentPos, argumentTypOrd, argumentSortieManuelle, argumentTilt, argumentBuySell, argumentIndicateur1,
    argumentIndicateur2, argumentIndicateur3, argumentVioleStrat, argumentSortie, argumentTimeEntree, argumentTimeSetup, argumentTJS ) => {
    const usernameSession = sessionStorage.getItem('username');

    let argStrat = argumentStrategie || "";
    let argD = argumentDate || "";
    let argI = argumentIndice || "";
    let argTPR = argumentTPR || "";
    let argSL = argumentSL || "";
    let argBE = argumentBE || "";
    let argPsy = argumentPsy || "";
    let argAnnEco = argumentAnnEco || "";
    let argPos = argumentPos || "";
    let argTypOrd = argumentTypOrd || "";
    let argSortManu = argumentSortieManuelle || "";
    let argTilt = argumentTilt || "";
    let argBuySell = argumentBuySell || "";
    let argIndicateur1 = argumentIndicateur1 || "";
    let argIndicateur2 = argumentIndicateur2 || "";
    let argIndicateur3 = argumentIndicateur3 || "";
    let argVioleStrat = argumentVioleStrat || "";
    let argSortie = argumentSortie || "";
    let argTimeEntree = argumentTimeEntree || "";
    let argTimeSetup = argumentTimeSetup || "";
    let argTJS = argumentTJS || "";

    const baseURL = "https://apipython2.onrender.com/envoie";
    let parametres = {
        "username": usernameSession
    };
    if (startDate !== null && endDate !== null && startDate !== "" && endDate !== ""){
        const formattedStartDate = startDate ? new Date(startDate).toISOString() : '';
        const formattedEndDate = endDate ? new Date(endDate).toISOString() : '';
        parametres["argSD"] = formattedStartDate !== 'undefined' ? formattedStartDate : '';
        parametres["argED"] = formattedEndDate !== 'undefined' ? formattedEndDate : '';
    }

    if (argTJS !== null && argTJS !== "") {parametres["argTJS"] = argTJS;}
    if (argTimeEntree !== null && argTimeEntree !== "") {parametres["argTimeEntree"] = argTimeEntree;}
    if (argTimeSetup !== null && argTimeSetup !== "") {parametres["argTimeSetup"] = argTimeSetup;}
    if (argSortie !== null && argSortie !== "") {parametres["argSortie"] = argSortie;}
    if (argVioleStrat !== null && argVioleStrat !== "") {parametres["argVioleStrat"] = argVioleStrat;}
    if (argIndicateur1 !== null && argIndicateur1 !== "") {parametres["argIndicateur1"] = argIndicateur1;}
    if (argIndicateur2 !== null && argIndicateur2 !== "") {parametres["argIndicateur2"] = argIndicateur2;}
    if (argIndicateur3 !== null && argIndicateur3 !== "") {parametres["argIndicateur3"] = argIndicateur3;}
    if (argBuySell !== null && argBuySell !== "") {parametres["argBuySell"] = argBuySell;}
    if (argStrat !== null && argStrat !== "") {parametres["argStrat"] = argStrat;}
    if (argD !== null && argD !== "") {parametres["argD"] = argD;}
    if (argI !== null && argI !== "") {parametres["argI"] = argI;}
    if (argTPR !== null && argTPR !== "") {parametres["argTPR"] = argTPR;}
    if (argSL !== null && argSL !== "") {parametres["argSL"] = argSL;}
    if (argBE !== null && argBE !== "") {parametres["argBE"] = argBE;}
    if (argPsy !== null && argPsy !== "") {parametres["argPsy"] = argPsy;}
    if (argAnnEco !== null && argAnnEco !== "") {parametres["argAnnEco"] = argAnnEco;}
    if (argPos !== null && argPos !== "") {parametres["argPos"] = argPos;}
    if (argTypOrd !== null && argTypOrd !== "") {parametres["argTypOrd"] = argTypOrd;}
    if (argSortManu !== null && argSortManu !== "") {parametres["argSortManu"] = argSortManu;}
    if (argTilt !== null && argTilt !== "") {parametres["argTilt"] = argTilt;}
    if (argBE !== null && argBE !== "") {parametres[""] = argBE;}

    console.log(parametres);

    let queryString = "";
    for (const [key, value] of Object.entries(parametres)) {
        queryString += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }
    const url = `${baseURL}?${queryString.slice(1)}`;
    try {
        let response;
        response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);throw error;
    }
};
