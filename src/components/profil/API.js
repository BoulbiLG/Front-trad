import axios from 'axios';

export const soumissionsFormulaire = async (argumentDate, argumentIndice, startDate, endDate, argumentTPR, argumentSL, argumentBE, argumentPsy, argumentStrategie, argumentAnnEco, argumentPos, argumentTypOrd) => {
    let argD = argumentDate;
    let argI = argumentIndice;
    let argTPR = argumentTPR;
    let argSL = argumentSL;
    let argBE = argumentBE;
    let argPsy =argumentPsy;
    let argStrat = argumentStrategie;
    let argAnnEco= argumentAnnEco;
    let argPos= argumentPos;
    let argTypOrd= argumentTypOrd;
    try {
        let response;
        if (startDate && endDate) {
          const formattedStartDate = new Date(startDate).toISOString();
          const formattedEndDate = new Date(endDate).toISOString();
          let argSD = formattedStartDate;
          let argED = formattedEndDate;
          response = await axios.get(`http://127.0.0.1:5000/envoie?argD=${argD}&argSD=${argSD}&argED=${argED}&argI=${argI}&argTPR=${argTPR}&argSL=${argSL}&argBE=${argBE}&argPsy=${argPsy}&argStrat=${argStrat}&argAnnEco=${argAnnEco}&argPos=${argPos}&argTypOrd=${argTypOrd}`);
          console.log(response.data);
          return response.data;
        } else {
          response = await axios.get(`http://127.0.0.1:5000/envoie?argD=${argD}&argI=${argI}&argTPR=${argTPR}&argSL=${argSL}&argBE=${argBE}&argPsy=${argPsy}&argStrat=${argStrat}&argAnnEco=${argAnnEco}&argPos=${argPos}&argTypOrd=${argTypOrd}`);
          console.log(response.data);
          return response.data;
        }
      } catch (error) {
        console.error(error);
        throw error;
    }
};