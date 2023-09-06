import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';

// RECUPERATION TRADE
export const fetchJournalData = async (username, selectedOption, collectionTradeValues) => {
  try {
    if (username != "" && username != undefined && username != null) {
      if (selectedOption != "" && selectedOption != undefined && selectedOption != null) {
        if (collectionTradeValues != "" && collectionTradeValues != undefined && collectionTradeValues != null) {
          const response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&typeTrade=${selectedOption}&collection=${collectionTradeValues}`);
          response.data.forEach(item => {

            //  ANNONCE ECONOMIQUE
            const annonceEconomique = item.annonceEconomique;
            let annonceEconomiqueFormatee;
            if (annonceEconomique == true || annonceEconomique == "true") {annonceEconomiqueFormatee = "Oui"}
            else if (annonceEconomique == false || annonceEconomique == "false") {annonceEconomiqueFormatee = "Non"}
            else if (annonceEconomique == null || annonceEconomique == "null" || annonceEconomique == undefined ) {annonceEconomiqueFormatee = "Non défini"};
            item.annonceEconomiqueFormatee = annonceEconomiqueFormatee;

            //  KILL ZONE
            const killzone = item.killzone;
            let killzoneFormatee;
            if (killzone == true || killzone == "true") {killzoneFormatee = "Oui"}
            else if (killzone == false || killzone == "false") {killzoneFormatee = "Non"}
            else if (killzone == null || killzone == "null" || killzone == undefined ) {killzoneFormatee = "Non défini"};
            item.killzoneFormatee = killzoneFormatee;

            //  LIMIT
            const limit = item.killzone;
            let limitFormatee;
            if (limit == true || limit == "true") {limitFormatee = "Oui"}
            else if (limit == false || limit == "false") {limitFormatee = "Non"}
            else if (limit == null || limit == "null" || limit == undefined ) {limitFormatee = "Non défini"};
            item.limitFormatee = limitFormatee;

            //  MULTI
            const multi = item.killzone;
            let multiFormatee;
            if (multi == true || multi == "true") {multiFormatee = "Oui"}
            else if (multi == false || multi == "false") {multiFormatee = "Non"}
            else if (multi == null || multi == "null" || multi == undefined ) {multiFormatee = "Non défini"};
            item.multiFormatee = multiFormatee;

            //  TPR
            const TPR = item.killzone;
            let TPRFormatee;
            if (TPR == true || TPR == "true") {TPRFormatee = "Oui"}
            else if (TPR == false || TPR == "false") {TPRFormatee = "Non"}
            else if (TPR == null || TPR == "null" || TPR == undefined ) {TPRFormatee = "Non défini"};
            item.TPRFormatee = TPRFormatee;

            //  SLR
            const SLR = item.killzone;
            let SLRFormatee;
            if (SLR == true || SLR == "true") {SLRFormatee = "Oui"}
            else if (SLR == false || SLR == "false") {SLRFormatee = "Non"}
            else if (SLR == null || SLR == "null" || SLR == undefined ) {SLRFormatee = "Non défini"};
            item.SLRFormatee = SLRFormatee;

            //  OVER TRADING
            const overTrading = item.overtrading;
            let overTradingFormatee;
            if (overTrading == true || overTrading == "true") {overTradingFormatee = "Oui"}
            else if (overTrading == false || overTrading == "false") {overTradingFormatee = "Non"}
            else if (overTrading == null || overTrading == "null" || overTrading == undefined ) {overTradingFormatee = "Non défini"};
            item.overTradingFormatee = overTradingFormatee;

            //  SORTIE MANUELLE
            const sortieManuelle = item.overtrading;
            let sortieManuelleFormatee;
            if (sortieManuelle == true || sortieManuelle == "true") {sortieManuelleFormatee = "Oui"}
            else if (sortieManuelle == false || sortieManuelle == "false") {sortieManuelleFormatee = "Non"}
            else if (sortieManuelle == null || sortieManuelle == "null" || sortieManuelle == undefined ) {sortieManuelleFormatee = "Non défini"};
            item.sortieManuelleFormatee = sortieManuelleFormatee;

            //  DATE OPENING
            const dateFromApi = item.dateAndTimeOpening;
            const dateObj = new Date(dateFromApi);
            const mois = [
              "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
              "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ][dateObj.getMonth()];
          
            const annee = dateObj.getFullYear();
            const jour = dateObj.getDate();
            const heure = dateObj.getHours();
            const minute = dateObj.getMinutes();
            
            const periode = heure < 12 ? "am" : "pm";
            const heureFormattee = heure % 12 === 0 ? 12 : heure % 12;
            const dateFormatee = `${jour} ${mois} ${annee} ${heureFormattee}:${minute} ${periode}`;
            item.dateOpeningFormatee = dateFormatee;

            //  DATE CLOSURE
            const dateFromApiClosure = item.dateAndTimeClosure;
            const dateObjClosure = new Date(dateFromApiClosure);
            const moisClosure = [
              "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
              "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
            ][dateObjClosure.getMonth()];
          
            const anneeClosure = dateObjClosure.getFullYear();
            const jourClosure = dateObjClosure.getDate();
            const heureClosure = dateObjClosure.getHours();
            const minuteClosure = dateObjClosure.getMinutes();
            
            const periodeClosure = heureClosure < 12 ? "am" : "pm";
            const heureFormatteeClosure = heureClosure % 12 === 0 ? 12 : heureClosure % 12;
            const dateFormateeClosure = `${jourClosure} ${moisClosure} ${anneeClosure} ${heureFormatteeClosure}:${minuteClosure} ${periodeClosure}`;
            item.dateClosureFormatee = dateFormateeClosure;
          });
          return response.data;
        }
      }
    }
  } catch (error) {
    console.log('Erreur lors de la récupération des données du journal :', error);
    return [];
  }
  return [];
};

// APPLIQUER LES MODIFICATIONS
export const applyModifications = async (annonceEcoCaseValeurs, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues,
  indicateur1Values, indicateur2Values, indicateur3Values, strategieValues, timeEntreeValues, timeSetupValues, porteFeuilleSelectedOption, collectionValues,
  tag, note
  ) => {
  try {
    console.log(tag);
    const headers = { 'Content-Type': 'application/json' };
    const data = { 
      trades: annonceEcoCaseValeurs.map(item => ({ id: item.id, valeurAnnEco: item.valeurAnnEco })),
      position: positionValues.map(item => ({ id: item.id, valuePosition: item.valuePosition })),
      violeStrategie: violeStrategieValues.map(item => ({ id: item.id, valueVioleStrategie: item.valueVioleStrategie })),
      sortie: sortieValues.map(item => ({ id: item.id, valueSortie: item.valueSortie })),
      psychologie: psychologieValues.map(item => ({ id: item.id, valuePsy: item.valuePsy })),
      indicateur1: indicateur1Values.map(item => ({ id: item.id, valueIndicateur1: item.valueIndicateur1 })),
      indicateur2: indicateur2Values.map(item => ({ id: item.id, valueIndicateur2: item.valueIndicateur2 })),
      indicateur3: indicateur3Values.map(item => ({ id: item.id, valueIndicateur3: item.valueIndicateur3 })),
      strategie: strategieValues.map(item => ({ id: item.id, valueStrategie: item.strategieValues })),
      timeEntree: timeEntreeValues.map(item => ({ id: item.id, valueTimeEntree: item.valueTimeEntree })),
      timeSetup: timeSetupValues.map(item => ({ id: item.id, valueTimeSetup: item.valueTimeSetup })),
      porteFeuille: porteFeuilleSelectedOption.map(item => ({ id: item.id, valuePorteFeuille: item.valuePorteFeuille })),
      tag: tag.map(item => ({ id: item.id, valueTag: item.valueTag })),
      note: note.map(item => ({ id: item.id, valueNote: item.valueNote })),
      //typeOrdre: typeOrdreValues.map(item => ({ id: item.id, valueTypeOrdre: item.valueTypeOrdre })),
      collection: collectionValues
    };
    console.log(data);
    await axios.post(`${apiUrl}/modificationTrade`, data, { headers });
    return 'Modifications appliquées avec succès.';
  } catch (error) {
    console.log('Erreur lors de l\'application des modifications :', error);
    return 'Une erreur est survenue lors de l\'application des modifications.';
  }
};

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

export const fetchPorteFeuilleOptions = async (username, setPorteFeuille) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationPorteFeuille?username=${username}`);
    const data = response.data;
    setPorteFeuille(data);
    if (data) {
      return data.map((porteFeuille) => ({
        value: porteFeuille.nomComplet,
        label: porteFeuille.nomSeul,
        nomComplet: porteFeuille.nomComplet
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const recuperationNomRemplissage = async (username, setRemplissageOption) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationRemplissageDefaut?username=${username}`);
    const data = response.data;
    setRemplissageOption(data);
    if (data) {
      return data.map((remplissage) => ({
        value: remplissage.nomRemplissageDefaut,
        label: remplissage.nomRemplissageDefaut
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const recuperationSeulRemplissage = async (usernameSession, remplissageValeur) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationSeulRemplissage?username=${usernameSession}&nomRemplissageDefaut=${remplissageValeur}`);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return 'Une erreur est survenue lors de la recuperation du remplissages.';
  }
};