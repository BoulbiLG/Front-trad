import axios from 'axios';

export const soumissionsFormulaire2 = async (argumentDate2, argumentIndice2, startDate2, endDate2, argumentTPR2, argumentSL2, argumentBE2, argumentPsy2, 
    argumentStrategie2, argumentAnnEco2, argumentPos2, argumentTypOrd2, argumentSortieManuelle2, argumentTilt2, argumentBuySell2, argumentIndicateur12,
    argumentIndicateur22, argumentIndicateur32, argumentVioleStrat2, argumentSortie2, argumentTimeEntree2, argumentTimeSetup2, argumentTJS2 ) => {
    const usernameSession = sessionStorage.getItem('username');

    let argStrat2 = argumentStrategie2 || "";
    let argD2 = argumentDate2 || "";
    let argI2 = argumentIndice2 || "";
    let argTPR2 = argumentTPR2 || "";
    let argSL2 = argumentSL2 || "";
    let argBE2 = argumentBE2 || "";
    let argPsy2 = argumentPsy2 || "";
    let argAnnEco2 = argumentAnnEco2 || "";
    let argPos2 = argumentPos2 || "";
    let argTypOrd2 = argumentTypOrd2 || "";
    let argSortManu2 = argumentSortieManuelle2 || "";
    let argTilt2 = argumentTilt2 || "";
    let argBuySell2 = argumentBuySell2 || "";
    let argIndicateur12 = argumentIndicateur12 || "";
    let argIndicateur22 = argumentIndicateur22 || "";
    let argIndicateur32 = argumentIndicateur32 || "";
    let argVioleStrat2 = argumentVioleStrat2 || "";
    let argSortie2 = argumentSortie2 || "";
    let argTimeEntree2 = argumentTimeEntree2 || "";
    let argTimeSetup2 = argumentTimeSetup2 || "";
    let argTJS2 = argumentTJS2 || "";

    const baseURL2 = "https://apipython2.onrender.com/envoie";
    let parametres2 = {
        "username": usernameSession
    };
    if (startDate2 !== null && endDate2 !== null && startDate2 !== "" && endDate2 !== ""){
        const formattedStartDate2 = startDate2 ? new Date(startDate2).toISOString() : '';
        const formattedEndDate2 = endDate2 ? new Date(endDate2).toISOString() : '';
        parametres2["argSD"] = formattedStartDate2 !== 'undefined' ? formattedStartDate2 : '';
        parametres2["argED"] = formattedEndDate2 !== 'undefined' ? formattedEndDate2 : '';
    }

    if (argTJS2 !== null && argTJS2 !== "") {parametres2["argTJS"] = argTJS2;}
    if (argTimeEntree2 !== null && argTimeEntree2 !== "") {parametres2["argTimeEntree"] = argTimeEntree2;}
    if (argTimeSetup2 !== null && argTimeSetup2 !== "") {parametres2["argTimeSetup"] = argTimeSetup2;}
    if (argSortie2 !== null && argSortie2 !== "") {parametres2["argSortie"] = argSortie2;}
    if (argVioleStrat2 !== null && argVioleStrat2 !== "") {parametres2["argVioleStrat"] = argVioleStrat2;}
    if (argIndicateur12 !== null && argIndicateur12 !== "") {parametres2["argIndicateur1"] = argIndicateur12;}
    if (argIndicateur22 !== null && argIndicateur22 !== "") {parametres2["argIndicateur2"] = argIndicateur22;}
    if (argIndicateur32 !== null && argIndicateur32 !== "") {parametres2["argIndicateur3"] = argIndicateur32;}
    if (argBuySell2 !== null && argBuySell2 !== "") {parametres2["argBuySell"] = argBuySell2;}
    if (argStrat2 !== null && argStrat2 !== "") {parametres2["argStrat"] = argStrat2;}
    if (argD2 !== null && argD2 !== "") {parametres2["argD"] = argD2;}
    if (argI2 !== null && argI2 !== "") {parametres2["argI"] = argI2;}
    if (argTPR2 !== null && argTPR2 !== "") {parametres2["argTPR"] = argTPR2;}
    if (argSL2 !== null && argSL2 !== "") {parametres2["argSL"] = argSL2;}
    if (argBE2 !== null && argBE2 !== "") {parametres2["argBE"] = argBE2;}
    if (argPsy2 !== null && argPsy2 !== "") {parametres2["argPsy"] = argPsy2;}
    if (argAnnEco2 !== null && argAnnEco2 !== "") {parametres2["argAnnEco"] = argAnnEco2;}
    if (argPos2 !== null && argPos2 !== "") {parametres2["argPos"] = argPos2;}
    if (argTypOrd2 !== null && argTypOrd2 !== "") {parametres2["argTypOrd"] = argTypOrd2;}
    if (argSortManu2 !== null && argSortManu2 !== "") {parametres2["argSortManu"] = argSortManu2;}
    if (argTilt2 !== null && argTilt2 !== "") {parametres2["argTilt"] = argTilt2;}
    if (argBE2 !== null && argBE2 !== "") {parametres2[""] = argBE2;}

    console.log(parametres2);

    let queryString2 = "";
    for (const [key2, value2] of Object.entries(parametres2)) {
        queryString2 += `&${encodeURIComponent(key2)}=${encodeURIComponent(value2)}`;
    }
    const url2 = `${baseURL2}?${queryString2.slice(1)}`;
    try {
        let response2;
        response2 = await axios.get(url2);
        console.log(response2.data);
        return response2.data;
    } catch (error) {
        console.error(error);throw error;
    }
};
