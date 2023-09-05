import React, { useEffect, useState } from 'react';
import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';
import Input from '../Input';
import TextArea from '../TextArea'
import AjouteTradeComponent from '../AjoutTrade/AjoutTrade';
import SupprimerTrade from '../supprimerTrade/supprimerTrade';
import ModifierTrade from '../modifierTrade.js/ModifierTrade';
import CSV from '../csv/CSV';
import ImageUploader from '../image/ImageUploader';
import "../../css/journal.css"

// fetch recuperation options ./API.js
import { fetchJournalData, applyModifications, fetchStrategieOptions, fetchPorteFeuilleOptions, recuperationSeulRemplissage, recuperationNomRemplissage } from './API';

// mise a jour des tableaux ./TableauDouble.js
import { updateAnnEcoCaseValeur, updatePsychologieOption, updatePositionOption, updateTypeOrdreOption, updateVioleStrategieOption, 
updateSortieOption, updateIndicateur1Option, updateIndicateur2Option, updateIndicateur3Option, updateStrategieOption, updateTimeEntreeOption, 
updateTimeSetupOption, updatePorteFeuilleOption, updateTagOption, updateNoteOption, updateGeneriqueOption } from './TableauDouble';

// recuperation options de ./Options.js
import { recuperationTradeOption, psychologieOptions, fetchIndicateurOptions, timeFrameOptions, fetchCollectionOptions } from './Options';




//======================================= IMPORTATION TERMINE ========================================




const Journal = () => {
 
  const usernameSession = sessionStorage.getItem('username');

  const [journalData, setJournalData] = useState([]);
  const [selectedOptionTypeTrade, setSelectedOptionTypeTrade] = useState("tout");
  const [collectionValues, setCollectionValues] = useState([]);
  const [collectionOption, setCollectionOption] = useState([]);

  const [modificationStatus, setModificationStatus] = useState('');

  const [remplissageOption, setRemplissageOption] = useState([]);
  const [remplissageValeur, setRemplissageValeur] = useState('');
  const [remplissageData, setRemplissageData] = useState('');
  
  // Creation des tableaux à double entrées
  const [annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs] = useState([]);
  const [positionValues, setPositionValues] = useState([]);
  const [typeOrdreValues, setTypeOrdreValues] = useState([]);
  const [violeStrategieValues, setVioleStrategieValues] = useState([]);
  const [sortieValues, setSortieValues] = useState([]);
  const [psychologieValues, setPsychologieValues] = useState([]);
  const [indicateur1Values, setIndicateur1Values] = useState([]);
  const [indicateur2Values, setIndicateur2Values] = useState([]);
  const [indicateur3Values, setIndicateur3Values] = useState([]);
  const [strategieSelectedOption, setStrategieSelectedOption] = useState([]);
  const [strategieValues, setStrategieValues] = useState([]);
  const [porteFeuilleSelectedOption, setPorteFeuilleSelectedOption] = useState([]);
  const [porteFeuilleValues, setPorteFeuilleValues] = useState([]);
  const [timeEntreeValues, setTimeEntreeValues] = useState([]);
  const [timeSetupValues, setTimeSetupValues] = useState([]);
  const [tag, setTag] = useState([]);
  const [note, setNote] = useState([]);

  const [indicateurOptions, setIndicateurOptions] = useState([]);

  const username = sessionStorage.getItem('username');

  // recuperation option dynamique strategie et indicateur
  useEffect(() => {
  const fetchOptions = async () => {const options = await fetchStrategieOptions(username, setStrategieValues);setStrategieValues(options);};
  const fetchIndicateur = async () => {const indicateurOptions = await fetchIndicateurOptions();setIndicateurOptions(indicateurOptions);};
  const fetchPorteFeuille = async () => {const porteFeuilleOptions = await fetchPorteFeuilleOptions(username, setPorteFeuilleValues);setPorteFeuilleValues(porteFeuilleOptions);};
  const fetchRemplissage = async () => {const remplissageOptions = await recuperationNomRemplissage(username, setRemplissageOption);if (remplissageOptions.length > 0) {setRemplissageOption(remplissageOptions);setRemplissageValeur(remplissageOptions[0].value);} else {console.log("Aucune option de remplissage n'a été trouvée.");}};
  const fetchCollection = async () => {const username = sessionStorage.getItem('username');const collectionOptions = await fetchCollectionOptions(username);setCollectionOption(collectionOptions);setCollectionValues(collectionOptions[0].value);};
  fetchOptions();fetchIndicateur();fetchPorteFeuille();fetchCollection();fetchRemplissage();}, [username]);

  // rechercher donnée
  useEffect(() => {fetchJournalData(usernameSession, selectedOptionTypeTrade, collectionValues).then((data) => setJournalData(data)).catch(() => setJournalData([]));}, [selectedOptionTypeTrade, usernameSession, collectionValues]);
  useEffect(() => {
    recuperationSeulRemplissage(
      usernameSession, remplissageValeur, setAnnonceEcoCaseValeurs, setPsychologieValues, setPositionValues, setTypeOrdreValues, setVioleStrategieValues,
      setSortieValues, setIndicateur1Values, setIndicateur2Values, setIndicateur3Values, setStrategieSelectedOption, setTimeEntreeValues, 
      setTimeSetupValues, journalData
    )
    .then((data) => {
      setRemplissageData(data);
      if (data != null) {
        const updatedPsychologieValues = [...psychologieValues];
        const updatedPositionValues = [...positionValues];
        const updatedAnnEcoValues = [...annonceEcoCaseValeurs];
        const updatedStrategieValues = [...strategieSelectedOption];
        const updatedVioleValues = [...violeStrategieValues];
        const updatedIndicateur1Values = [...indicateur1Values];
        const updatedIndicateur2Values = [...indicateur2Values];
        const updatedIndicateur3Values = [...indicateur3Values];
        const updatedTimeEntreeValues = [...timeEntreeValues];
        const updatedTimeSetupValues = [...timeSetupValues];
        const updatedTypeOrdreValues = [...typeOrdreValues];
        const updatedSortieValues = [...sortieValues];
        for (const journalItem of journalData) {
          const id = journalItem._id;
          const psychologieValueForId = data[0].psychologie;updatePsychologieOption(id, psychologieValueForId, updatedPsychologieValues, setPsychologieValues);
          const positionValueForId = data[0].position;updatePositionOption(id, positionValueForId, updatedPositionValues, setPositionValues);
          const annonceEcoValueForId = data[0].annonceEconomique;updateAnnEcoCaseValeur(id, annonceEcoValueForId, updatedAnnEcoValues, setAnnonceEcoCaseValeurs);
          const strategieValueForId = data[0].strategie;updateStrategieOption(id, strategieValueForId, updatedStrategieValues, setStrategieSelectedOption);
          const violeValueForId = data[0].violeStrategie;updateVioleStrategieOption(id, violeValueForId, updatedVioleValues, setVioleStrategieValues);
          const indicateur1ValueForId = data[0].indicateur1;updateIndicateur1Option(id, indicateur1ValueForId, updatedIndicateur1Values, setIndicateur1Values);
          const indicateur2ValueForId = data[0].indicateur2;updateIndicateur2Option(id, indicateur2ValueForId, updatedIndicateur2Values, setIndicateur2Values);
          const indicateur3ValueForId = data[0].indicateur3;updateIndicateur3Option(id, indicateur3ValueForId, updatedIndicateur3Values, setIndicateur3Values);
          const timeEntreeValueForId = data[0].timeEntree;updateTimeEntreeOption(id, timeEntreeValueForId, updatedTimeEntreeValues, setTimeEntreeValues);
          const timeSetupValueForId = data[0].timeSetup;updateTimeSetupOption(id, timeSetupValueForId, updatedTimeSetupValues, setTimeSetupValues);
          const typeOrdreValueForId = data[0].typeOrdre;updateTypeOrdreOption(id, typeOrdreValueForId, updatedTypeOrdreValues, setTypeOrdreValues);
          const sortieValueForId = data[0].sortie;updateSortieOption(id, sortieValueForId, updatedSortieValues, setSortieValues);
        }
      }
    })
    .catch(() => setRemplissageData([]));
  }, [usernameSession, remplissageValeur, journalData, setPsychologieValues]);
  
  // appliquer les modifications
  const appliquerModifications = async () => {try {const modificationStatus = await applyModifications(
    annonceEcoCaseValeurs, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues, indicateur1Values, 
    indicateur2Values, indicateur3Values, strategieSelectedOption, timeEntreeValues, timeSetupValues, porteFeuilleSelectedOption, collectionValues, tag,
    note, tag, note
  );
  setModificationStatus(modificationStatus);
  fetchJournalData(usernameSession, selectedOptionTypeTrade, collectionValues)
  .then((data) =>setJournalData(data))
  .catch(() => setJournalData([]));
} catch (error) {setModificationStatus('Une erreur est survenue lors de l\'application des modifications.');}};

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
  const changementTagOption = (id, newValue) => {updateTagOption(id, newValue, tag, setTag);};
  const changementNoteOption = (id, newValue) => {updateNoteOption(id, newValue, note, setNote);};
  
  return (
    <div>
      <h2>Journal</h2>
      <div className="selecteurRecuperation">
        <p>Type de trade</p><Selector options={recuperationTradeOption} defaultOption={selectedOptionTypeTrade} onChange={changementSelectorChangeTypeTrade} />
        <p>Dans quelle collection</p><Selector options={collectionOption} value={collectionValues} onChange={changementSelectorChangeCollection} />
        <p>Quel remplisseur automatique</p><Selector options={remplissageOption} value={remplissageValeur} onChange={(selected) => {setRemplissageValeur(selected)}} />
      </div>
      {journalData.map(entry => (
        
        <div className="tradConteneur" key={entry._id}>
          <div className='donnee'>
            <p className='valeurVolume valeur'>volume : {entry.volume}</p><p className='valeurDate valeur'>date d'ouverture : {entry.dateAndTimeOpening}</p>
          </div>
          <div className="filtre">
            <div className="filtreInput">
              <div className="IT"><p>Trade durant une annonce économique</p>
              <CaseRadio titre={`Trade durant une annonce économique ${entry._id}`}nomOption1="oui"nomOption2="non"selectedCaseOption={(annonceEcoCaseValeurs.find(item => item.id === entry._id) || {}).valeurAnnEco || ''} onChange={(newValue) => updateAnnEcoCaseValeur(entry._id, newValue, annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs)}/></div>
              <div className="IT"><p>Position</p><CaseRadio titre={`Position ${entry._id}`} nomOption1="Signal"nomOption2="Influence" selectedCaseOption={(positionValues.find(item => item.id === entry._id) || {}).valuePosition || ''} onChange={(newValue) => updatePositionOption(entry._id, newValue, positionValues, setPositionValues)}/></div>
              <div className="IT"><p>Type d'ordre</p><CaseRadio titre={`Type d'ordre ${entry._id}`} nomOption1="Market"nomOption2="Conditional" selectedCaseOption={(typeOrdreValues.find(item => item.id === entry._id) || {}).valueTypeOrdre || ''} onChange={(newValue) => updateTypeOrdreOption(entry._id, newValue, typeOrdreValues, setTypeOrdreValues)}/></div>
              <div className="IT"><p>Violation de la stratégie</p><CaseRadio titre={`Violation de la stratégie ${entry._id}`} nomOption1="oui"nomOption2="non" selectedCaseOption={(violeStrategieValues.find(item => item.id === entry._id) || {}).valueVioleStrategie || ''} onChange={(newValue) => updateVioleStrategieOption(entry._id, newValue, violeStrategieValues, setVioleStrategieValues)}/></div>
              <div className="IT"><p>Type de sortie</p><CaseRadio titre={`Type de sortie ${entry._id}`} nomOption1="Technique"nomOption2="Emotion" selectedCaseOption={(sortieValues.find(item => item.id === entry._id) || {}).valueSortie || ''} onChange={(newValue) => updateSortieOption(entry._id, newValue, sortieValues, setSortieValues)}/></div>
              <div className="IT"><p>Etat psychologique</p><Selector options={psychologieOptions}value={psychologieValues.find(item => item.id === entry._id)?.psychologie || ''} onChange={(selected) => updatePsychologieOption(entry._id, selected, psychologieValues, setPsychologieValues)}/></div>
              <div className="timeFrame">
                <div className="IT"><p>Time frame d'entrée</p><Selector options={timeFrameOptions}value={timeEntreeValues.find(item => item.id === entry._id)?.timeEntree || ''} onChange={(selected) => updateTimeEntreeOption(entry._id, selected, timeEntreeValues, setTimeEntreeValues)}/></div>
                <div className="IT"><p>Time frame setup</p><Selector options={timeFrameOptions}value={timeSetupValues.find(item => item.id === entry._id)?.timeSetup || ''} onChange={(selected) => updateTimeSetupOption(entry._id, selected, timeSetupValues, setTimeSetupValues)}/></div>
              </div>
              <div className="indicateur">
                <div className="IT"><p>indicateur 1</p><Selector options={indicateurOptions}value={(indicateur1Values.find(item => item.id === entry._id) || {}).valueIndicateur1 || ''}onChange={(selected) => updateIndicateur1Option(entry._id, selected, indicateur1Values, setIndicateur1Values)}/></div>
                <div className="IT"><p>indicateur 2</p><Selector options={indicateurOptions}value={(indicateur2Values.find(item => item.id === entry._id) || {}).valueIndicateur2 || ''}onChange={(selected) => updateIndicateur2Option(entry._id, selected, indicateur2Values, setIndicateur2Values)}/></div>
                <div className="IT"><p>indicateur 3</p><Selector options={indicateurOptions}value={(indicateur3Values.find(item => item.id === entry._id) || {}).valueIndicateur3 || ''}onChange={(selected) => updateIndicateur3Option(entry._id, selected, indicateur3Values, setIndicateur3Values)}/></div>
              </div>
              <div className="IT"><p>Strategie</p><Selector options={strategieValues}value={strategieSelectedOption.find(item => item.id === entry._id)?.valueStrategie || ''} onChange={(selected) =>updateStrategieOption(entry._id, selected, strategieSelectedOption, setStrategieSelectedOption)}/></div>
              <div className="IT"><p>Porte feuille</p><Selector options={porteFeuilleValues}value={porteFeuilleSelectedOption.find(item => item.id === entry._id)?.valuePorteFeuille || ''} onChange={(selected) =>updatePorteFeuilleOption(entry._id, selected, porteFeuilleSelectedOption, setPorteFeuilleSelectedOption)}/></div>
            </div>
            <div className="description">
              <p>Entrez un tag</p>
              <Input type="text" placeholder="Entrez du texte" onChange={(event) =>updateTagOption(entry._id, event.target.value, tag, setTag)}/>
              <p>Entrez des notes</p>
              <TextArea cols="100" rows="5" placeholder="Entrez du texte" onChange={(event) =>updateNoteOption(entry._id, event.target.value, note, setNote)} />
            </div>
            <div className="actionTradeIndividuel">
              <SupprimerTrade id={entry._id} collection={collectionValues} />
              <ModifierTrade id={entry._id} collection={collectionValues} />
              <Button label="Ne pas renseigner ce trade" onClick={() => masquerTrade(entry._id)} />
              <ImageUploader id={entry._id} collection={collectionValues} />
            </div>
          </div>
        </div>
      ))}
      <Button label="Appliquer les modifications" onClick={appliquerModifications} />
      <CSV />
      {modificationStatus && <p>{modificationStatus}</p>}
      <AjouteTradeComponent />
    </div>
  );
};

export default Journal;
