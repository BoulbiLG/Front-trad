import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../css/journal.css"
import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';

const Journal = () => {
  const [journalData, setJournalData] = useState([]);
  const recuperationTradeOption = [
    { value: "tout", label: "Tout" },
    { value: "nonrenseigne", label: "Non renseigné" },
    { value: "renseigne", label: "Renseigné" },
  ];
  const [selectedOptionTypeTrade, setSelectedOptionTypeTrade] = useState("tout");
  const [annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs] = useState([]);
  const usernameSession = sessionStorage.getItem('username');
  const [detailsVisible, setDetailsVisible] = useState({});
  const [modificationStatus, setModificationStatus] = useState('');


  const appliquerModifications = async () => {
    try {
      const apiUrl = 'https://apipython2.onrender.com/updateTrade';
      const headers = { 'Content-Type': 'application/json' };
      const data = { trades: annonceEcoCaseValeurs.map(item => ({ id: item.id, valeurAnnEco: item.valeurAnnEco })) };
  
      await axios.post(apiUrl, data, { headers });
      setModificationStatus('Modifications appliquées avec succès.');
    } catch (error) {
      console.log('Erreur lors de l\'application des modifications :', error);
      setModificationStatus('Une erreur est survenue lors de l\'application des modifications.');
    }
  };                       

  useEffect(() => {
    const fetchJournalData = async (selectedOption) => {
      const apiUrl = `https://apipython2.onrender.com/recuperationTrade?username=${usernameSession}&typeTrade=${selectedOption}`;
      try {
        const response = await axios.get(apiUrl);
        setJournalData(response.data);
      } catch (error) {
        console.log('Erreur lors de la récupération des données du journal :', error);
      }
    };
    fetchJournalData(selectedOptionTypeTrade);
  }, [selectedOptionTypeTrade, usernameSession]);

  const masquerTrade = (id) => {
    const updatedJournalData = journalData.filter(entry => entry._id !== id);
    setJournalData(updatedJournalData);
  };

  const changementSelectorChangeTypeTrade = (selectedValue) => {
    setSelectedOptionTypeTrade(selectedValue);
  };

  const changementAnnEcoCaseValeur = (id, newValue) => {
    const updatedValues = [...annonceEcoCaseValeurs];
    const entryIndex = updatedValues.findIndex(item => item.id === id);
    if (entryIndex !== -1) {
      updatedValues[entryIndex].valeurAnnEco = newValue;
    } else {
      updatedValues.push({ id, valeurAnnEco: newValue });
    }
    setAnnonceEcoCaseValeurs(updatedValues);
  };

  // Affichage du tableau des valeurs modifiées dans la console
  useEffect(() => {
    console.log('Valeurs modifiées :', annonceEcoCaseValeurs);
  }, [annonceEcoCaseValeurs]);

  const toggleDetails = (tradeId) => {
    setDetailsVisible(prevState => ({ ...prevState, [tradeId]: !prevState[tradeId] }));
        };

  return (
    <div>
      <h2>Journal</h2>
      <div className="selecteurRecuperation">
        <p>Types de trades à récuperer</p>
        <Selector options={recuperationTradeOption} defaultOption={selectedOptionTypeTrade} onChange={changementSelectorChangeTypeTrade} />
      </div>
      {journalData.map(entry => (
        <div className="tradConteneur" key={entry._id}>
          <div className='donnee'>
            <p className='valeurID valeur'>ID : {entry._id}</p>
            <p className='valeurTicketnumber valeur'>ticket number : {entry.ticketNumber}</p>
            <p className='valeurVolume valeur'>volume : {entry.volume}</p>
            <p className='valeurDate valeur'>date d'ouverture : {entry.dateAndTimeOpening}</p>
          </div>
          <div className="filtre">
            <CaseRadio
              titre={`Trade durant une annonce économique ${entry._id}`}
              nomOption1="oui"
              nomOption2="non"
              selectedCaseOption={(annonceEcoCaseValeurs.find(item => item.id === entry._id) || {}).valeurAnnEco || ''}
              onChange={(newValue) => changementAnnEcoCaseValeur(entry._id, newValue)}
            />
            <Button label="Ne pas renseigner ce trade" onClick={() => masquerTrade(entry._id)} />
            {detailsVisible[entry._id] ? (
              <div>
                <p className='valeurMagicNumber valeur'>Magic number : {entry.magicNumber}</p>
                <p className='valeurTypeOfTransaction valeur'>Type of transaction : {entry.typeOfTransaction}</p>
                <p className='valeurTypeSymbole valeur'>Symbole : {entry.symbole}</p>
                <p className='valeurPriceOpening valeur'>Price opening : {entry.priceOpening}</p>
                <p className='valeurStopLoss valeur'>Stop loss : {entry.stopLoss}</p>
                <p className='valeurTakeProfit valeur'>Take profit : {entry.takeProfit}</p>
                <p className='valeurDateClosure valeur'>Date and Time closure : {entry.dateAndTimeClosure}</p>
                <p className='valeurPriceClosure valeur'>Price closure : {entry.priceClosure}</p>
                <p className='valeurSwap valeur'>Swap : {entry.swap}</p>
                <p className='valeurProfit valeur'>Profit : {entry.profit}</p>
                <p className='valeurCommission valeur'>Commission : {entry.commission}</p>
                <p className='valeurClosurePosition valeur'>Closure position : {entry.closurePosition}</p>
                <p className='valeurBalance valeur'>Balance : {entry.balance}</p>
                <Button label="Fermer les détails de ce trade" onClick={() => toggleDetails(entry._id)} />
              </div>
            ) : (
              <Button label="Voir les détails de ce trade" onClick={() => toggleDetails(entry._id)} />
            )}
          </div>
          
        </div>
      ))}
      <Button label="Appliquer les modifications" onClick={appliquerModifications} />
      {modificationStatus && <p>{modificationStatus}</p>}
    </div>
  );
}

export default Journal;
