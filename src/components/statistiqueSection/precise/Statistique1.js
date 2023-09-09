import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../css/statistique.css"

import getArgumentDate from './ArgumentDate';
import { getArgumentFiltre } from './ArgumentIndice';
import getArgumentPsychologie from './argumentPsychologie';
import { dateOptions, indiceOptions, forexOptions, actionOptions, psychologieOptions, fetchStrategieOptions, fetchIndicateurOptions,
timeFrameOptions, fetchCollectionOptions, forexIndiceActionOptions } from './Options';
import { soumissionsFormulaire } from './API';
import { verificationFiltre } from './XY';

import CaseRadio from '../../inputComposant/CaseRadio';
import Button from '../../inputComposant/Button';
import Selector from '../../inputComposant/Selector';
import Meilleur from './meilleur';

const Statistique1 = ({ selectedOption }) => {

  // changement de selecteur forex / action / indice
  const [forexActionIndiceValues, setForexActionIndiceValues] = useState('indice');

  const [collectionValues, setCollectionValues] = useState([]);
  const [collectionOption, setCollectionOption] = useState([]);

  const [takeProfit, setTakeProfit] = useState(null);

  const [stopLoss, setStopLoss] = useState(null);
  const [rrRange, setRrRange] = useState(null);
  const [sortieManuelle, setSortieManuelle] = useState(null);
  const [tilt, setTilt] = useState(null);
  const [AnnEco, setAnnEco] = useState(null);
  const [buySell, setBuySell] = useState(null);
  const [positionSignInfl, setpositionSignInfl] = useState(null);
  const [typeOrdre, settypeOrdre] = useState(null);
  const [violeStrat, setVioleStrat] = useState([]);
  const [sortie, setSortie] = useState([]);
  const [TJS, setTJS] = useState([]);
  const [timeEntreeValues, setTimeEntreeValues] = useState([]);
  const [timeSetupValues, setTimeSetupValues] = useState([]);

  const [strategieSelectedOption, setStrategieSelectedOption] = useState('');
  const [strategieOptions, setStrategieOptions] = useState([]);
  const [indicateur1Values, setIndicateur1Values] = useState([]);
  const [indicateur2Values, setIndicateur2Values] = useState([]);
  const [indicateur3Values, setIndicateur3Values] = useState([]);
  const [indicateurOptions, setIndicateurOptions] = useState([]);

  const username = sessionStorage.getItem('username');

  // recuperation option dynamique de strategie et indicateur
  useEffect(() => {
    const fetchOptions = async () => {const options = await fetchStrategieOptions(username, setStrategieSelectedOption);setStrategieOptions(options);};
    const fetchIndicateur = async () => {const indicOption = await fetchIndicateurOptions();setIndicateurOptions(indicOption);};
    const fetchCollection = async () => {
      const username = sessionStorage.getItem('username');
      const collectionOptions = await fetchCollectionOptions(username);
      console.log(collectionValues);
      setCollectionOption(collectionOptions);}
    fetchOptions();
    fetchIndicateur();
    fetchCollection();
  }, [username]);

  const [dateSelectedOption, setdateSelectedOption] = useState('');
  const [indiceSelectedOption, setIndiceSelectedOption] = useState('');
  const [psychologieSelectedOption, setPsychologieSelectedOption] = useState('');

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getArgumentFiltre(indiceSelectedOption);
  }, [indiceSelectedOption]);

  const valeurTakeProfitChange = (value) => { setTakeProfit(value); };

  const valeurStopLossChange = (value) => { setStopLoss(value); };
  const valeurRrRangeChange = (value) => { setRrRange(value); };
  const valeurSortieManuelleChange = (value) => { setSortieManuelle(value); };
  const valeurTiltChange = (value) => { setTilt(value); };
  const valeurAnnEcoChange = (value) => { setAnnEco(value); };
  const valeurBuySellChange = (value) => { setBuySell(value); };
  const valeurVioleStratChange = (value) => { setVioleStrat(value); };
  const valeurpositionSignInflChange = (value) => { setpositionSignInfl(value); };
  const valeurtypeOrdreChange = (value) => { settypeOrdre(value); };
  const valeurSortieChange = (value) => { setSortie(value); };
  const timeEntreeOptionChange = (value) => {setTimeEntreeValues(value);};
  const timeSetupOptionChange = (value) => {setTimeSetupValues(value);};
  const TJSChange = (value) => {setTJS(value);};

  const handleStartDateChange = (date) => { if (date) { setStartDate(date); } };
  const handleEndDateChange = (date) => { if (date) { setEndDate(date); } };

  const changementSelectorChangeCollection = (selectedValue) => {setCollectionValues(selectedValue);};

    const handleClick = async () => {
      let argumentStrategie = strategieSelectedOption;
      let argumentTimeEntree = timeEntreeValues;
      let argumentTimeSetup = timeSetupValues;
      let argumentIndicateur1 = indicateur1Values;
      let argumentIndicateur2 = indicateur2Values;
      let argumentIndicateur3 = indicateur3Values;
      if (argumentStrategie.length !== 1) {argumentStrategie = null;}
      if (argumentTimeEntree.length !== 1) {argumentTimeEntree = null;}
      if (argumentTimeSetup.length !== 1) {argumentTimeSetup = null;}
      if (argumentIndicateur1.length !== 1) {argumentIndicateur1 = null;}
      if (argumentIndicateur2.length !== 1) {argumentIndicateur2 = null;}
      if (argumentIndicateur3.length !== 1) {argumentIndicateur3 = null;}
      const argumentCollection = collectionValues;
      const argumentDate = getArgumentDate(dateSelectedOption);
      const argumentIndice = getArgumentFiltre(indiceSelectedOption);
      const argumentPsy = getArgumentPsychologie(psychologieSelectedOption);
      const { argumentTPR, argumentSL, argumentBE, argumentAnnEco, argumentPos, argumentTypOrd, argumentSortieManuelle, argumentTilt, 
        argumentBuySell, argumentVioleStrat, argumentSortie, argumentTJS
      } = await verificationFiltre( 
        sortieManuelle, takeProfit, stopLoss, rrRange, AnnEco, positionSignInfl, typeOrdre, tilt, buySell, violeStrat, sortie, TJS);

        soumissionsFormulaire(argumentDate, argumentIndice, startDate, endDate, argumentTPR, argumentSL, argumentBE, argumentPsy, argumentStrategie, 
        argumentAnnEco, argumentPos, argumentTypOrd, argumentSortieManuelle, argumentTilt, argumentBuySell, argumentIndicateur1, argumentIndicateur2,
        argumentIndicateur3, argumentVioleStrat, argumentSortie, argumentTimeEntree, argumentTimeSetup, argumentTJS, argumentCollection);
    };

  return (
    <div className='statistique1'>
      <div className="">
      <div className="inputFiltreXY"><p>Collection dans laquelle chercher</p><Selector options={collectionOption} value={collectionValues} onChange={changementSelectorChangeCollection} /></div>
      </div>
      <p>Date</p>
      <Selector options={dateOptions} value={dateSelectedOption} onChange={(selected) => setdateSelectedOption(selected)} />
      {dateSelectedOption === "choixLibre" && (
        <div>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </div>
      )}
      <p>Indice / forex / action</p>
      <Selector optionDefaut="faux" options={forexIndiceActionOptions} value={forexActionIndiceValues} onChange={(selected) => setForexActionIndiceValues(selected)} />
      {forexActionIndiceValues === "indice" ? (
        <div>
          <p>Indice</p>
          <Selector options={indiceOptions} value={indiceSelectedOption} onChange={(selected) => setIndiceSelectedOption(selected)} />
        </div>
      ) : null }
      {forexActionIndiceValues === "forex" ? (
        <div>
          <p>Forex</p>
          <Selector options={forexOptions} value={indiceSelectedOption} onChange={(selected) => setIndiceSelectedOption(selected)} />
        </div>
      ) : null }
      {forexActionIndiceValues === "action" ? (
        <div>
          <p>Action</p>
          <Selector options={actionOptions} value={indiceSelectedOption} onChange={(selected) => setIndiceSelectedOption(selected)} />
        </div>
      ) : null }
      <div className="inputFiltreXY"><p>take profit</p><CaseRadio titre="Take profit" nomOption1="Atteint" nomOption2="Dépassé" nomOption3="Non atteint" selectedCaseOption={takeProfit} onChange={valeurTakeProfitChange} /></div>
      <div className="inputFiltreXY"><p>stop loss</p><CaseRadio titre="Stop loss" nomOption1="Atteint" nomOption2="Partiel" selectedCaseOption={stopLoss} onChange={valeurStopLossChange} /></div>
      <div className="inputFiltreXY"><p>BE</p><CaseRadio titre="-0.5RR < BE < 0.5RR" nomOption1=" " selectedCaseOption={rrRange} onChange={valeurRrRangeChange} /></div>
      <div className="inputFiltreXY"><p>sortie manuelle</p><CaseRadio titre="Sortie manuelle" nomOption1="succès" nomOption2="échec" selectedCaseOption={sortieManuelle} onChange={valeurSortieManuelleChange} /></div>
      <div className="inputFiltreXY"><p>journée de tilt</p><CaseRadio titre="Journée de tilt" nomOption1="oui" nomOption2="non" selectedCaseOption={tilt} onChange={valeurTiltChange} /></div>
      <div className="inputFiltreXY"><p>type d'ordre</p><CaseRadio titre="Type d'ordre" nomOption1="Sell" nomOption2="Buy" selectedCaseOption={buySell} onChange={valeurBuySellChange} /></div>
      <div className="inputFiltreXY"><p>viole de la strategie</p><CaseRadio titre="Viole de la strategie" nomOption1="oui" nomOption2="non" selectedCaseOption={violeStrat} onChange={valeurVioleStratChange} /></div>
      <div className="inputFiltreXY"><p>sortie sur décision</p><CaseRadio titre="Sortie sur décision" nomOption1="technique" nomOption2="émotion" selectedCaseOption={sortie} onChange={valeurSortieChange} /></div>
      <div className="inputFiltreXY"><p>trade TJS</p><CaseRadio titre="Trade TJS" nomOption1="positif" nomOption2="négatif" selectedCaseOption={TJS} onChange={TJSChange} /></div>
      <div className="filtre">
        <div className="inputFiltreXY"><p>trade durant une annonce economique</p><CaseRadio titre="Trade durant une annonce économique" nomOption1="oui" nomOption2="non" selectedCaseOption={AnnEco} onChange={valeurAnnEcoChange} /></div>
        <div className="inputFiltreXY"><p>position</p><CaseRadio titre="Position" nomOption1="signal" nomOption2="influence" selectedCaseOption={positionSignInfl} onChange={valeurpositionSignInflChange} /></div>
        <div className="inputFiltreXY"><p>type d'ordre</p><CaseRadio titre="Type d'ordre" nomOption1="market" nomOption2="conditionnel" selectedCaseOption={typeOrdre} onChange={valeurtypeOrdreChange} /></div>
        <div className="inputFiltreXY"><p>strategie</p><Selector options={strategieOptions} defaultValue="" value={strategieSelectedOption} onChange={(selected) => setStrategieSelectedOption(selected)} /></div>
        <div className="inputFiltreXY"><p>etat psychologique</p><Selector options={psychologieOptions} value={psychologieSelectedOption} onChange={(selected) => setPsychologieSelectedOption(selected)} /></div>
        <div className="inputFiltreXY"><p>indicateur 1</p><Selector options={indicateurOptions} value={indicateur1Values} onChange={(selected) => setIndicateur1Values(selected)} /></div>
        <div className="inputFiltreXY"><p>indicateur 2</p><Selector options={indicateurOptions} value={indicateur2Values} onChange={(selected) => setIndicateur2Values(selected)} /></div>
        <div className="inputFiltreXY"><p>indicateur 3</p><Selector options={indicateurOptions} value={indicateur3Values} onChange={(selected) => setIndicateur3Values(selected)} /></div>
        <div className="inputFiltreXY"><p>time frame entrée</p><Selector options={timeFrameOptions} value={timeEntreeValues} onChange={(selected) => timeEntreeOptionChange(selected)}/></div>
        <div className="inputFiltreXY"><p>time frame setup</p><Selector options={timeFrameOptions} value={timeSetupValues} onChange={(selected) => timeSetupOptionChange(selected)}/></div>
      </div>
      <Button label="chercher" onClick={handleClick} />
      <Meilleur collection={collectionValues}/>
    </div>
  );
};

export default Statistique1;
