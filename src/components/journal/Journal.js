import React, { useEffect, useState } from 'react';
import "../../css/journal.css"
import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';


// fetch recuperation options ./API.js
import { fetchJournalData, applyModifications, fetchStrategieOptions, fetchPorteFeuilleOptions } from './API';

// mise a jour des tableaux ./TableauDouble.js
import { updateAnnEcoCaseValeur, updatePsychologieOption, updatePositionOption, updateTypeOrdreOption, updateVioleStrategieOption, 
updateSortieOption, updateIndicateur1Option, updateIndicateur2Option, updateIndicateur3Option, updateStrategieOption, updateTimeEntreeOption, 
updateTimeSetupOption, updatePorteFeuilleOption } from './TableauDouble';

// recuperation options de ./Options.js
import { recuperationTradeOption, psychologieOptions, fetchIndicateurOptions, timeFrameOptions, fetchCollectionOptions } from './Options';
import Image from './Image';

const Journal = () => {
  const [journalData, setJournalData] = useState([]);

  //composant image  
  const [selectedOptionTypeTrade, setSelectedOptionTypeTrade] = useState("tout");
  const [collectionValues, setCollectionValues] = useState([]);
  const [collectionOption, setCollectionOption] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState({});
  const [modificationStatus, setModificationStatus] = useState('');
  const usernameSession = sessionStorage.getItem('username');
  
  // Creation des tableaux à double entrées
  const [annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs] = useState([]);const [positionValues, setPositionValues] = useState([]);
  const [typeOrdreValues, setTypeOrdreValues] = useState([]);const [violeStrategieValues, setVioleStrategieValues] = useState([]);
  const [sortieValues, setSortieValues] = useState([]);const [psychologieValues, setPsychologieValues] = useState([]);
  const [indicateur1Values, setIndicateur1Values] = useState([]);const [indicateur2Values, setIndicateur2Values] = useState([]);const [indicateur3Values, setIndicateur3Values] = useState([]);
  const [strategieSelectedOption, setStrategieSelectedOption] = useState([]);const [strategieValues, setStrategieValues] = useState([]);
  const [porteFeuilleSelectedOption, setPorteFeuilleSelectedOption] = useState([]);const [porteFeuilleValues, setPorteFeuilleValues] = useState([]);
  const [timeEntreeValues, setTimeEntreeValues] = useState([]);const [timeSetupValues, setTimeSetupValues] = useState([]);

  const [indicateurOptions, setIndicateurOptions] = useState([]);

  const username = sessionStorage.getItem('username');

  // recuperation option dynamique strategie et indicateur
  useEffect(() => {
  const fetchOptions = async () => {const options = await fetchStrategieOptions(username, setStrategieValues);setStrategieValues(options);};
  const fetchIndicateur = async () => {const indicateurOptions = await fetchIndicateurOptions();setIndicateurOptions(indicateurOptions);};
  const fetchPorteFeuille = async () => {const porteFeuilleOptions = await fetchPorteFeuilleOptions(username, setPorteFeuilleValues);setPorteFeuilleValues(porteFeuilleOptions);};
  const fetchCollection = async () => {
    const username = sessionStorage.getItem('username');
    const collectionOptions = await fetchCollectionOptions(username);
    setCollectionOption(collectionOptions);
  };
  fetchOptions();fetchIndicateur();fetchPorteFeuille();fetchCollection();}, [username]);

  // rechercher donnée
  useEffect(() => {fetchJournalData(usernameSession, selectedOptionTypeTrade, collectionValues).then((data) => setJournalData(data)).catch(() => setJournalData([]));}, [selectedOptionTypeTrade, usernameSession, collectionValues]);
  
  // appliquer les modifications
  const appliquerModifications = async () => {try {const modificationStatus = await applyModifications(
    annonceEcoCaseValeurs, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues, indicateur1Values, 
    indicateur2Values, indicateur3Values, strategieSelectedOption, timeEntreeValues, timeSetupValues, porteFeuilleSelectedOption, collectionValues
  );setModificationStatus(modificationStatus);} catch (error) {setModificationStatus('Une erreur est survenue lors de l\'application des modifications.');}};

  // fonction pour masquer trade et changement le filtrage des trade qui arrive
  const masquerTrade = (id) => {const updatedJournalData = journalData.filter(entry => entry._id !== id);setJournalData(updatedJournalData);};
  const changementSelectorChangeTypeTrade = (selectedValue) => {setSelectedOptionTypeTrade(selectedValue);};
  const changementSelectorChangeCollection = (selectedValue) => {setCollectionValues(selectedValue);};

  // ajout valeur dans les tableaux à double entrées
  const changementAnnEcoCaseValeur = (id, newValue) => {updateAnnEcoCaseValeur(id, newValue, annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs);};
  const changementPsychologieOption = (id, selectedValue) => {updatePsychologieOption(id, selectedValue, psychologieValues, setPsychologieValues);};
  const changementPositionOption = (id, newValue) => {updatePositionOption(id, newValue, positionValues, setPositionValues);};
  const changementTypeOrdreOption = (id, newValue) => {updateTypeOrdreOption(id, newValue, typeOrdreValues, setTypeOrdreValues);};
  const changementVioleStrategieOption = (id, newValue) => {updateVioleStrategieOption(id, newValue, violeStrategieValues, setVioleStrategieValues);};
  const changementSortieOption = (id, newValue) => {updateSortieOption(id, newValue, sortieValues, setSortieValues);};
  const changementIndicateur1Option = (id, newValue) => {updateIndicateur1Option(id, newValue, indicateur1Values, setIndicateur1Values);};
  const changementIndicateur2Option = (id, newValue) => {updateIndicateur2Option(id, newValue, indicateur2Values, setIndicateur2Values);};
  const changementIndicateur3Option = (id, newValue) => {updateIndicateur3Option(id, newValue, indicateur3Values, setIndicateur3Values);};
  const changementStrategieOption = (id, newValue) => {updateStrategieOption(id, newValue, strategieSelectedOption, setStrategieSelectedOption);};
  const changementPorteFeuilleOption = (id, newValue) => {updatePorteFeuilleOption(id, newValue, porteFeuilleSelectedOption, setPorteFeuilleSelectedOption);};
  const changementTimeEntreeOption = (id, newValue) => {updateTimeEntreeOption(id, newValue, timeEntreeValues, setTimeEntreeValues);};
  const changementTimeSetupOption = (id, newValue) => {updateTimeSetupOption(id, newValue, timeSetupValues, setTimeSetupValues);};

  const toggleDetails = (tradeId) => {setDetailsVisible(prevState => ({ ...prevState, [tradeId]: !prevState[tradeId] }));};
  
  return (
    <div>
      <h2>Journal</h2>
      <div className="selecteurRecuperation">
        <p>Types de trades à récupérer</p>
        <Selector options={recuperationTradeOption} defaultOption={selectedOptionTypeTrade} onChange={changementSelectorChangeTypeTrade} />
        <Selector options={collectionOption} value={collectionValues} onChange={changementSelectorChangeCollection} />
      </div>
      {journalData.map(entry => (
        
        <div className="tradConteneur" key={entry._id}>
          <div className='donnee'>
            <p className='valeurID valeur'>ID : {entry._id}</p><p className='valeurTicketnumber valeur'>ticket number : {entry.ticketNumber}</p>
            <p className='valeurVolume valeur'>volume : {entry.volume}</p><p className='valeurDate valeur'>date d'ouverture : {entry.dateAndTimeOpening}</p>
          </div>
          <div className="filtre">
            <div className="filtreInput">
              <p>Trade durant une annonce économique</p><CaseRadio titre={`Trade durant une annonce économique ${entry._id}`}nomOption1="oui"nomOption2="non"selectedCaseOption={(annonceEcoCaseValeurs.find(item => item.id === entry._id) || {}).valeurAnnEco || ''}onChange={(newValue) => changementAnnEcoCaseValeur(entry._id, newValue)}/>
              <p>Position</p><CaseRadio titre={`Position ${entry._id}`} nomOption1="Signal"nomOption2="Influence" selectedCaseOption={(positionValues.find(item => item.id === entry._id) || {}).valuePosition || ''} onChange={(newValue) => changementPositionOption(entry._id, newValue)}/>
              <p>Type d'ordre</p><CaseRadio titre={`Type d'ordre ${entry._id}`} nomOption1="Market"nomOption2="Conditional" selectedCaseOption={(typeOrdreValues.find(item => item.id === entry._id) || {}).valueTypeOrdre || ''} onChange={(newValue) => changementTypeOrdreOption(entry._id, newValue)}/>
              <p>Violation de la stratégie</p><CaseRadio titre={`Violation de la stratégie ${entry._id}`} nomOption1="oui"nomOption2="non" selectedCaseOption={(violeStrategieValues.find(item => item.id === entry._id) || {}).valueVioleStrategie || ''} onChange={(newValue) => changementVioleStrategieOption(entry._id, newValue)}/>
              <p>Type de sortie</p><CaseRadio titre={`Type de sortie ${entry._id}`} nomOption1="Technique"nomOption2="Emotion" selectedCaseOption={(sortieValues.find(item => item.id === entry._id) || {}).valueSortie || ''} onChange={(newValue) => changementSortieOption(entry._id, newValue)}/>
              <p>Etat psychologique</p><Selector options={psychologieOptions}value={psychologieValues.find(item => item.id === entry._id)?.psychologie || ''}onChange={(selected) => changementPsychologieOption(entry._id, selected)}/>
              
              <p>Time frame d'entrée</p><Selector options={timeFrameOptions}value={timeEntreeValues.find(item => item.id === entry._id)?.timeEntree || ''}onChange={(selected) => changementTimeEntreeOption(entry._id, selected)}/>
              <p>Time frame setup</p><Selector options={timeFrameOptions}value={timeSetupValues.find(item => item.id === entry._id)?.timeSetup || ''}onChange={(selected) => changementTimeSetupOption(entry._id, selected)}/>
              
              <p>indicateur 1</p><Selector options={indicateurOptions}value={(indicateur1Values.find(item => item.id === entry._id) || {}).valueIndicateur1 || ''}onChange={(selected) => changementIndicateur1Option(entry._id, selected)}/>
              <p>indicateur 2</p><Selector options={indicateurOptions}value={(indicateur2Values.find(item => item.id === entry._id) || {}).valueIndicateur2 || ''}onChange={(selected) => changementIndicateur2Option(entry._id, selected)}/>
              <p>indicateur 3</p><Selector options={indicateurOptions}value={(indicateur3Values.find(item => item.id === entry._id) || {}).valueIndicateur3 || ''}onChange={(selected) => changementIndicateur3Option(entry._id, selected)}/>
              <p>Strategie</p><Selector options={strategieValues}value={strategieSelectedOption.find(item => item.id === entry._id)?.valueStrategie || ''}onChange={(selected) => changementStrategieOption(entry._id, selected)}/>
              <p>Porte feuille</p><Selector options={porteFeuilleValues}value={porteFeuilleSelectedOption.find(item => item.id === entry._id)?.valuePorteFeuille || ''}onChange={(selected) => changementPorteFeuilleOption(entry._id, selected)}/>
            </div>
            <Image />
            <Button label="Ne pas renseigner ce trade" onClick={() => masquerTrade(entry._id)} />
            {detailsVisible[entry._id] ? (
              <div>
                <p className='valeurUsername valeur'>Username : {entry.username}</p>
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
