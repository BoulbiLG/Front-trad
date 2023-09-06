import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';

export const fetchJournalData = async (username, collectionTradeValues, rechercheDonnee) => {
  try {
    let response;
    if (rechercheDonnee === null || rechercheDonnee === '') {
      response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&collection=${collectionTradeValues}`);
    } else {
      response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&collection=${collectionTradeValues}&rechercheDonnee=${rechercheDonnee}`);
    }
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
  } catch (error) {
    //console.log('Erreur lors de la récupération des données du journal :', error);
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

export const requeteSuppressoinTag = async (idTrade, collection, tagNom) => {
  try {
    const response = await axios.delete('https://apipython2.onrender.com/suppressionTag', {
      data: {
        idTrade: idTrade,
        collection: collection,
        tagNom: tagNom
      }
    });
    return response.data.message;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};