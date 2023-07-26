import React, { useEffect, useState } from 'react';
import "../../css/journal.css"
import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';
import { fetchJournalData, applyModifications } from './API';
import { updateAnnEcoCaseValeur, updatePsychologieOption, updatePositionOption } from './TableauDouble';
import { recuperationTradeOption, psychologieOptions } from './Options';

const Journal = () => {
  const [journalData, setJournalData] = useState([]);
  
  const [selectedOptionTypeTrade, setSelectedOptionTypeTrade] = useState("tout");
  const usernameSession = sessionStorage.getItem('username');
  const [detailsVisible, setDetailsVisible] = useState({});
  const [modificationStatus, setModificationStatus] = useState('');

  
  // Tableau à double entrée pour id et valeurAnnEco
  const [annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs] = useState([]);
  // Tableau à double entrée pour id et valuePsy
  const [psychologieValues, setPsychologieValues] = useState([]);
  // Tableau à double entrée pour id et valuePosition
  const [positionValues, setPositionValues] = useState([]);

  // recuperation des donnes depuis l'api
  useEffect(() => {fetchJournalData(usernameSession, selectedOptionTypeTrade).then((data) => setJournalData(data)).catch(() => setJournalData([]));}, [selectedOptionTypeTrade, usernameSession]);
  // envoie requete de modification des trade
  const appliquerModifications = async () => {
    try {
      const modificationStatus = await applyModifications(annonceEcoCaseValeurs, psychologieValues, positionValues);
      setModificationStatus(modificationStatus);
    } catch (error) {
      setModificationStatus('Une erreur est survenue lors de l\'application des modifications.');
    }
  };

  // masquer trade
  const masquerTrade = (id) => {const updatedJournalData = journalData.filter(entry => entry._id !== id);setJournalData(updatedJournalData);};
  // type de trade a afficher
  const changementSelectorChangeTypeTrade = (selectedValue) => {setSelectedOptionTypeTrade(selectedValue);};

  // ajout valeur annonce economique dans tableau double entrée
  const changementAnnEcoCaseValeur = (id, newValue) => {updateAnnEcoCaseValeur(id, newValue, annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs);};
  // ajout valeur psy dans tableau double entrée
  const changementPsychologieOption = (id, selectedValue) => {updatePsychologieOption(id, selectedValue, psychologieValues, setPsychologieValues);};
  // ajout valeur position dans tableau double entrée
  const changementPositionOption = (id, newValue) => {updatePositionOption(id, newValue, positionValues, setPositionValues);};



  // afficher tableau double entrée de annonce economique
  useEffect(() => {console.log('Valeurs modifiées (annonceEcoCaseValeurs) :', annonceEcoCaseValeurs);}, [annonceEcoCaseValeurs]);
  // afficher tableau double entrée de psychologie
  useEffect(() => {console.log('Valeurs modifiées (psychologieValues) :', psychologieValues);}, [psychologieValues]);
  // afficher tableau double entrée de position
  useEffect(() => {console.log('Valeurs modifiées (positionValues) :', positionValues);}, [positionValues]);

  const toggleDetails = (tradeId) => {setDetailsVisible(prevState => ({ ...prevState, [tradeId]: !prevState[tradeId] }));};

  return (
    <div>
      <h2>Journal</h2>
      <div className="selecteurRecuperation">
        <p>Types de trades à récupérer</p>
        <Selector options={recuperationTradeOption} defaultOption={selectedOptionTypeTrade} onChange={changementSelectorChangeTypeTrade} />
      </div>
      {journalData.map(entry => (
        <div className="tradConteneur" key={entry._id}>
          <div className='donnee'>
            <p className='valeurID valeur'>ID : {entry._id}</p><p className='valeurTicketnumber valeur'>ticket number : {entry.ticketNumber}</p>
            <p className='valeurVolume valeur'>volume : {entry.volume}</p><p className='valeurDate valeur'>date d'ouverture : {entry.dateAndTimeOpening}</p>
          </div>
          <div className="filtre">
            <div className="filtreInput">
              <CaseRadio titre={`Trade durant une annonce économique (${entry._id})`}nomOption1="oui"nomOption2="non"selectedCaseOption={(annonceEcoCaseValeurs.find(item => item.id === entry._id) || {}).valeurAnnEco || ''}onChange={(newValue) => changementAnnEcoCaseValeur(entry._id, newValue)}/>
              <CaseRadio titre={`Position ${entry._id}`} nomOption1="Signal"nomOption2="Influence" selectedCaseOption={(positionValues.find(item => item.id === entry._id) || {}).valuePosition || ''} onChange={(newValue) => changementPositionOption(entry._id, newValue)}/>
              <Selector options={psychologieOptions}value={annonceEcoCaseValeurs.find(item => item.id === entry._id)?.psychologie || ''}onChange={(selected) => changementPsychologieOption(entry._id, selected)}/>
            </div>
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
};

export default Journal;
