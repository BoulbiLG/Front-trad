import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';
import Input from '../Input';
import TextArea from '../TextArea'
import RecuperationImageJournal from './RecuperationImageJournal';
import AjouteTradeComponent from '../AjoutTrade/AjoutTrade';
import SupprimerTrade from '../supprimerTrade/supprimerTrade';
import ModifierTrade from '../modifierTrade.js/ModifierTrade';
import CSV from '../csv/CSV';
import ImageUploader from '../image/ImageUploader';
import "../../css/journal.css"
import Consultation from '../consultation/Consultation';
import TexteZone from '../TexteZone';

// fetch recuperation options ./API.js
import { fetchJournalData, applyModifications, fetchStrategieOptions, fetchPorteFeuilleOptions, recuperationSeulRemplissage, recuperationNomRemplissage } from './API';

// mise a jour des tableaux ./TableauDouble.js
import { updateAnnEcoCaseValeur, updatePsychologieOption, updatePositionOption, updateTypeOrdreOption, updateVioleStrategieOption, 
updateSortieOption, updateIndicateur1Option, updateIndicateur2Option, updateIndicateur3Option, updateStrategieOption, updateTimeEntreeOption, 
updateTimeSetupOption, updatePorteFeuilleOption, updateTagOption, updateNoteOption } from './TableauDouble';

// recuperation options de ./Options.js
import { recuperationTradeOption, psychologieOptions, fetchIndicateurOptions, timeFrameOptions, fetchCollectionOptions } from './Options';




//======================================= INITIALISATION DES VARIABLES ========================================




const Journal = () => {

    // VARIABLES IMPORTANTES

    const username = sessionStorage.getItem('username');

    const [journalData, setJournalData] = useState([]);
    const [selectedOptionTypeTrade, setSelectedOptionTypeTrade] = useState("tout");
    const [collectionValues, setCollectionValues] = useState([]);
    const [collectionOption, setCollectionOption] = useState([]);
    const [filtreOuvert, setFiltreOuvert] = useState({}); // OUVERTURE FERMETURE TRADE (div filtre)

    const [tagBlocks, setTagBlocks] = useState([]);

    const [modificationStatus, setModificationStatus] = useState('');
    const [miseAjourDonne, setMiseAjourDonne] = useState(0);

    const [remplissageOption, setRemplissageOption] = useState([]);
    const [remplissageValeur, setRemplissageValeur] = useState('');

    // VARIABLE DES FILTRES ET TABLEAU
    const [annonceEcoCaseValues, setAnnonceEcoCaseValues] = useState([]);
    const [positionValues, setPositionValues] = useState([]);
    const [typeOrdreValues, setTypeOrdreValues] = useState([]);
    const [violeStrategieValues, setVioleStrategieValues] = useState([]);
    const [sortieValues, setSortieValues] = useState([]);
    const [psychologieValues, setPsychologieValues] = useState([]);

    const [indicateur1Values, setIndicateur1Values] = useState([]);
    const [indicateur2Values, setIndicateur2Values] = useState([]);
    const [indicateur3Values, setIndicateur3Values] = useState([]);
    const [indicateurOptions, setIndicateurOptions] = useState([]);

    const [strategieValues, setStrategieValues] = useState([]);
    const [strategieOption, setStrategieOption] = useState([]);

    const [porteFeuilleSelectedOption, setPorteFeuilleSelectedOption] = useState([]);
    const [porteFeuilleValues, setPorteFeuilleValues] = useState([]);

    const [timeEntreeValues, setTimeEntreeValues] = useState([]);
    const [timeSetupValues, setTimeSetupValues] = useState([]);

    const [tag, setTag] = useState([]);
    const [note, setNote] = useState([]);



  //======================================= RECUPERATION AUTOMATIQUE DES OPTIONS ========================================



    useEffect(() => {

      // STRATEGIE OPTIONS
      const fetchImages = async () => {
        const strategieOption = await fetchStrategieOptions(username, setStrategieOption);
        setStrategieOption(strategieOption);
      };

      // STRATEGIE OPTIONS
      const fetchOptions = async () => {
        const strategieOption = await fetchStrategieOptions(username, setStrategieOption);
        setStrategieOption(strategieOption);
      };

      // INDICATEUR OPTIONS
      const fetchIndicateur = async () => {
        const indicateurOptions = await fetchIndicateurOptions();
        setIndicateurOptions(indicateurOptions);
      };

      // PORTEGEUILLE OPTIONS
      const fetchPorteFeuille = async () => {
        const porteFeuilleOptions = await fetchPorteFeuilleOptions(username, setPorteFeuilleValues);
        setPorteFeuilleValues(porteFeuilleOptions);
      };

      // REMPLISSEUR AUTOMATIQUE OPTIONS
      const fetchRemplissage = async () => {
        const remplissageOptions = await recuperationNomRemplissage(username, setRemplissageOption);
        if (remplissageOptions.length > 0) {
          setRemplissageOption(remplissageOptions);setRemplissageValeur(remplissageOptions[0].value);
        } else {
          console.log("Aucune option de remplissage n'a été trouvée.");
        }
      };

      // COLLECTION OPTIONS
      const fetchCollection = async () => {
        const collectionOptions = await fetchCollectionOptions(username);
        setCollectionOption(collectionOptions);
        setCollectionValues(collectionOptions[0].value);
      };
    fetchOptions();fetchIndicateur();fetchPorteFeuille();fetchCollection();fetchRemplissage();
  }, [username]);



  //======================================= RECUPERATION AUTOMATIQUE DES TRADES ========================================



  useEffect(() => {
    fetchJournalData(username, selectedOptionTypeTrade, collectionValues)
    .then((data) => setJournalData(data))
    .catch(() => setJournalData([]));
  }, [selectedOptionTypeTrade, username, collectionValues]);



  //======================================= APPLICATION AUTOMATIQUE DES REMPLISSEURS ========================================


  
  useEffect(() => {
    recuperationSeulRemplissage(username, remplissageValeur)
    .then((data) => {
      if (data != null) {
        const updatedPsychologieValues = [...psychologieValues];
        const updatedPositionValues = [...positionValues];
        const updatedAnnEcoValues = [...annonceEcoCaseValues];
        const updatedStrategieValues = [...strategieValues];
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
          const annonceEcoValueForId = data[0].annonceEconomique;updateAnnEcoCaseValeur(id, annonceEcoValueForId, updatedAnnEcoValues, setAnnonceEcoCaseValues);
          const strategieValueForId = data[0].strategie;updateStrategieOption(id, strategieValueForId, updatedStrategieValues, setStrategieValues);
          const violeValueForId = data[0].violeStrategie;updateVioleStrategieOption(id, violeValueForId, updatedVioleValues, setVioleStrategieValues);
          const indicateur1ValueForId = data[0].indicateur1;updateIndicateur1Option(id, indicateur1ValueForId, updatedIndicateur1Values, setIndicateur1Values);
          const indicateur2ValueForId = data[0].indicateur2;updateIndicateur2Option(id, indicateur2ValueForId, updatedIndicateur2Values, setIndicateur2Values);
          const indicateur3ValueForId = data[0].indicateur3;updateIndicateur3Option(id, indicateur3ValueForId, updatedIndicateur3Values, setIndicateur3Values);
          const timeEntreeValueForId = data[0].timeEntree;updateTimeEntreeOption(id, timeEntreeValueForId, updatedTimeEntreeValues, setTimeEntreeValues);
          const timeSetupValueForId = data[0].timeSetup;updateTimeSetupOption(id, timeSetupValueForId, updatedTimeSetupValues, setTimeSetupValues);
          const typeOrdreValueForId = data[0].typeOrdre;updateTypeOrdreOption(id, typeOrdreValueForId, updatedTypeOrdreValues, setTypeOrdreValues);
          const sortieValueForId = data[0].sortie;updateSortieOption(id, sortieValueForId, updatedSortieValues, setSortieValues);
          console.log(timeEntreeValues);
          console.log(timeSetupValues);
        }
      }
    })
    .catch();
  }, [username, journalData, setPsychologieValues, remplissageValeur]);

  /*
  , annonceEcoCaseValues, indicateur1Values, indicateur2Values, indicateur3Values, positionValues, psychologieValues
    , remplissageValeur, sortieValues, strategieValues, timeEntreeValues, timeSetupValues, typeOrdreValues, violeStrategieValues
  */



  //======================================= APPLICATION DES MODIFICATIONS ========================================


  
  const appliquerModifications = async () => {try {const modificationStatus = await applyModifications(
    annonceEcoCaseValues, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues, indicateur1Values, 
    indicateur2Values, indicateur3Values, strategieValues, timeEntreeValues, timeSetupValues, porteFeuilleSelectedOption, collectionValues, tagData,
    note
  );
  setModificationStatus(modificationStatus);
  fetchJournalData(username, selectedOptionTypeTrade, collectionValues)
  .then((data) => {
    setJournalData(data);
    setTag([]);
    setTagBlocks([]);
    genererNombreAleatoire();
    toast.success(modificationStatus, { position: "top-left", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});
  })
  .catch(() => setJournalData([]));
  } catch (error) {setModificationStatus('Une erreur est survenue lors de l\'application des modifications');}};



  //======================================= FONCTIONS ANNEXES ========================================



  //  GENERER NOMBRE ALEATOIRE DE RAFRAICHISSEMENT
  const genererNombreAleatoire = () => {
    const miseAjourDonne = Math.floor(Math.random() * 1000) + 1;
    setMiseAjourDonne(miseAjourDonne);
  };

  // BLOCK TAG
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (event, id) => {
    const { value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [id]: value,
    }));
  };

  const handleInputKeyDown = (event, id) => {
    if (event.key === 'Enter' && inputValues[id].trim() !== '') {
      setTagBlocks((prevTagBlocks) => ({
        ...prevTagBlocks,
        [id]: [...(prevTagBlocks[id] || []), inputValues[id].trim()],
      }));
      setTag((prevTagBlocks) => ({
        ...prevTagBlocks,
        [id]: [...(prevTagBlocks[id] || []), inputValues[id].trim()],
      }));
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [id]: '',
      }));
    }
  };

  const tagData = Object.keys(tag).map(id => ({
    id,
    valueTag: tag[id]
  }));

  const removeTagBlock = (id, index) => {
    setTagBlocks((prevTagBlocks) => ({
      ...prevTagBlocks,
      [id]: prevTagBlocks[id].filter((_, i) => i !== index),
    }));
  };

  // FONCTION POUR OUVERTURE FERMAGE TRADE
  const toggleFiltre = (entryId) => {
    setFiltreOuvert((prevState) => ({
      ...prevState,
      [entryId]: !prevState[entryId]
    }));
  };

  // PAGINATION DES TRADE DU JOURNAL
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //======================================= CODE JSX ========================================

  // CODE OUVERTURE FERMAGE TRADE
  const renderToggleButton = (entryId) => {
    if (filtreOuvert[entryId]) {
      return (
        <Button label="Fermer" onClick={() => toggleFiltre(entryId)} />
      );
    } else {
      return (
        <Button label="Voir plus" onClick={() => toggleFiltre(entryId)} />
      );
    }
  };

  return (

    <div>
      <Consultation miseAjourDonne={miseAjourDonne}/>
      <h3>Edition</h3>

      {/*======================================= FILTRE RECUPERATION TRADE / ACTIONS TRADE ========================================*/}

      <div className="selecteurRecuperation">
        <p>Type de trade</p><Selector options={recuperationTradeOption} defaultOption={selectedOptionTypeTrade} onChange={(selectedValue) => {setSelectedOptionTypeTrade(selectedValue);}} />
        <p>Dans quelle collection</p><Selector options={collectionOption} value={collectionValues} onChange={(selectedValue) => {setCollectionValues(selectedValue);}} />
        <p>Quel remplisseur automatique</p><Selector options={remplissageOption} value={remplissageValeur} onChange={(selected) => {setRemplissageValeur(selected)}} />
      </div>

      <div className="actionsTrade">
        <Button label="Appliquer les modifications" onClick={appliquerModifications} />
        <CSV />
        <AjouteTradeComponent />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/><ToastContainer />
      </div>

      {/*======================================= TRADE ========================================*/}
      <table className="donnee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Ticket number</th>
          <th>Symbol</th>
          <th>Order type</th>
          <th>Date opening</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
      {journalData.map((entry) => {
      if (startIndex <= journalData.indexOf(entry) && journalData.indexOf(entry) < endIndex) {
        return (
          <React.Fragment key={entry._id}>
            <tr key={entry._id} className='ligneTrade'>
              <td onClick={() => toggleFiltre(entry._id)}><p className='valeurVolume valeur'>{entry._id}</p></td>
              <td onClick={() => toggleFiltre(entry._id)}><p className='valeurDate valeur'>{entry.ticketNumber}</p></td>
              <td onClick={() => toggleFiltre(entry._id)}><p className='valeurDate valeur'>{entry.symbol}</p></td>
              <td onClick={() => toggleFiltre(entry._id)}><p className='valeurDate valeur'>{entry.typeOrdre}</p></td>
              <td onClick={() => toggleFiltre(entry._id)}><p className='valeurDate valeur'>{entry.dateAndTimeOpening}</p></td>
              <td onClick={() => toggleFiltre(entry._id)}><p className='valeurDate valeur'>{entry.profit}</p></td>
            </tr>
            </React.Fragment>
        );
          } else {
            return null;
          }
        })}
        </tbody>
        </table>
        {journalData.map((entry) => (
            <div className="tradConteneur" key={entry._id} style={{ display: filtreOuvert[entry._id] ? 'flex' : 'none' }}>
              <div className="filtreConteneur">
                <div className="section">
                  <div className="section2">
                    <div className="filtre">
                      <div className="IT"><p>Trade durant une annonce économique</p><CaseRadio titre={`Trade durant une annonce économique ${entry._id}`}nomOption1="oui"nomOption2="non"selectedCaseOption={(annonceEcoCaseValues.find(item => item.id === entry._id) || {}).valeurAnnEco || ''} onChange={(newValue) => updateAnnEcoCaseValeur(entry._id, newValue, annonceEcoCaseValues, setAnnonceEcoCaseValues)}/></div>
                      <div className="IT"><p>Position</p><CaseRadio titre={`Position ${entry._id}`} nomOption1="Signal"nomOption2="Influence" selectedCaseOption={(positionValues.find(item => item.id === entry._id) || {}).valuePosition || ''} onChange={(newValue) => updatePositionOption(entry._id, newValue, positionValues, setPositionValues)}/></div>
                      {/*<div className="IT"><p>Type d'ordre</p><CaseRadio titre={`Type d'ordre ${entry._id}`} nomOption1="Market"nomOption2="Conditional" selectedCaseOption={(typeOrdreValues.find(item => item.id === entry._id) || {}).valueTypeOrdre || ''} onChange={(newValue) => updateTypeOrdreOption(entry._id, newValue, typeOrdreValues, setTypeOrdreValues)}/></div>*/}
                      <div className="IT"><p>Violation de la stratégie</p><CaseRadio titre={`Violation de la stratégie ${entry._id}`} nomOption1="oui"nomOption2="non" selectedCaseOption={(violeStrategieValues.find(item => item.id === entry._id) || {}).valueVioleStrategie || ''} onChange={(newValue) => updateVioleStrategieOption(entry._id, newValue, violeStrategieValues, setVioleStrategieValues)}/></div>
                      <div className="IT"><p>Type de sortie</p><CaseRadio titre={`Type de sortie ${entry._id}`} nomOption1="Technique"nomOption2="Emotion" selectedCaseOption={(sortieValues.find(item => item.id === entry._id) || {}).valueSortie || ''} onChange={(newValue) => updateSortieOption(entry._id, newValue, sortieValues, setSortieValues)}/></div>
                      <div className="IT"><p>Etat psychologique</p><Selector options={psychologieOptions}value={(psychologieValues.find(item => item.id === entry._id) || {}).valuePsy || ''} onChange={(selected) => updatePsychologieOption(entry._id, selected, psychologieValues, setPsychologieValues)}/></div>
                      <div className="IT"><p>Time frame d'entrée</p><Selector options={timeFrameOptions}value={(timeEntreeValues.find(item => item.id === entry._id) || {}).valueTimeEntree || ''} onChange={(selected) => updateTimeEntreeOption(entry._id, selected, timeEntreeValues, setTimeEntreeValues)}/></div>
                      <div className="IT"><p>Time frame setup</p><Selector options={timeFrameOptions}value={(timeSetupValues.find(item => item.id === entry._id) || {}).valueTimeSetup || ''} onChange={(selected) => updateTimeSetupOption(entry._id, selected, timeSetupValues, setTimeSetupValues)}/></div>
                      <div className="IT"><p>indicateur 1</p><Selector options={indicateurOptions}value={(indicateur1Values.find(item => item.id === entry._id) || {}).valueIndicateur1 || ''}onChange={(selected) => updateIndicateur1Option(entry._id, selected, indicateur1Values, setIndicateur1Values)}/></div>
                      <div className="IT"><p>indicateur 2</p><Selector options={indicateurOptions}value={(indicateur2Values.find(item => item.id === entry._id) || {}).valueIndicateur2 || ''}onChange={(selected) => updateIndicateur2Option(entry._id, selected, indicateur2Values, setIndicateur2Values)}/></div>
                      <div className="IT"><p>indicateur 3</p><Selector options={indicateurOptions}value={(indicateur3Values.find(item => item.id === entry._id) || {}).valueIndicateur3 || ''}onChange={(selected) => updateIndicateur3Option(entry._id, selected, indicateur3Values, setIndicateur3Values)}/></div>
                      <div className="IT"><p>Strategie</p><Selector options={strategieOption}value={(strategieValues.find(item => item.id === entry._id) || {}).valueStrategie || ''} onChange={(selected) =>updateStrategieOption(entry._id, selected, strategieValues, setStrategieValues)}/></div>
                      <div className="IT"><p>Déplacer ce trade dans un autre porte feuille</p><Selector options={porteFeuilleValues}value={(porteFeuilleSelectedOption.find(item => item.id === entry._id) || {}).valuePorteFeuille || ''} onChange={(selected) =>updatePorteFeuilleOption(entry._id, selected, porteFeuilleSelectedOption, setPorteFeuilleSelectedOption)}/></div>
                    </div>
                    <div className="info">
                      <p>ID: {entry._id}</p><hr />
                      <p>ticketNumber: {entry.ticketNumber}</p>
                      <p>identifier: {entry.identifier}</p>
                      <p>magicNumber: {entry.magicNumber}</p>
                      <p>dateAndTimeOpening: {entry.dateAndTimeOpening}</p>
                      <p>typeOfTransaction: {entry.typeOfTransaction}</p>
                      <p>orderType: {entry.orderType}</p>
                      <p>volume: {entry.volume}</p>
                      <p>symbol: {entry.symbol}</p>
                      <p>priceOpening: {entry.priceOpening}</p>
                      <p>stopLoss: {entry.stopLoss}</p>
                      <p>takeProfit: {entry.takeProfit}</p>
                      <p>dateAndTimeClosure: {entry.dateAndTimeClosure}</p>
                      <p>priceClosure: {entry.priceClosure}</p>
                      <p>swap: {entry.swap}</p>
                      <p>profit: {entry.profit}</p>
                      <p>commision: {entry.commision}</p>
                      <p>closurePosition: {entry.closurePosition}</p>
                      <p>Balance: {entry.balance}</p>
                      <p>broker: {entry.broker}</p>
                      <p>position: {entry.position}</p>
                      <p>sortieManuelle: {entry.sortieManuelle}</p>
                    </div>
                    <div className="noteZone">
                      <div className="description">
                        <div className="tagBlocks">
                          {tagBlocks[entry._id]?.map((block, index) => (
                            <div key={index} className="tagBlock">
                              {block}
                              <button className="tagBlockRemoveButton" onClick={() => removeTagBlock(entry._id, index)}>x</button>
                            </div>
                          ))}
                          <input style={{ border: 'none', width: '100%' }} type="text"placeholder="Entrez du texte" value={inputValues[entry._id] || ''}
                          onChange={(event) => handleInputChange(event, entry._id)} onKeyDown={(event) => handleInputKeyDown(event, entry._id)} className="tagInput"/>
                        </div>
                      </div>
                      <TexteZone placeholder="Entrez du texte" value={entry.note} onChange={(newValue) =>updateNoteOption(entry._id, newValue, note, setNote)}/>
                    </div>
                  </div>
                  <div className="image">
                    <RecuperationImageJournal imageIds={[entry._id]} />
                  </div>
                  <div className="boutonAction">
                    <div className="edition">
                      <SupprimerTrade id={entry._id} collection={collectionValues} />
                      <ModifierTrade id={entry._id} collection={collectionValues} />
                      <ImageUploader id={entry._id} collection={collectionValues} />
                    </div>
                    {renderToggleButton(entry._id)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="pagination">
          <Button label="<"onClick={() => setCurrentPage(currentPage - 1)}disabled={currentPage === 1}/>
          <span>Page {currentPage}</span>
          <Button label=">"onClick={() => setCurrentPage(currentPage + 1)}disabled={endIndex >= journalData.length}/>
        </div>
    </div>
    
  );
};

export default Journal;
