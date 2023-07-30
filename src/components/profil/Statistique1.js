import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../css/statistique.css"

import getArgumentDate from './ArgumentDate';
import { getArgumentFiltre } from './ArgumentIndice';
import getArgumentPsychologie from './argumentPsychologie';
import { dateOptions, indiceOptions, forexOptions, actionOptions, psychologieOptions, fetchStrategieOptions, fetchIndicateurOptions,
timeFrameOptions } from './Options';
import { soumissionsFormulaire } from './API';
import { verificationFiltre } from './XY';

import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';

const Statistique1 = ({ selectedOption }) => {
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
    fetchOptions();
    fetchIndicateur();
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
      const argumentDate = getArgumentDate(dateSelectedOption);
      const argumentIndice = getArgumentFiltre(indiceSelectedOption);
      const argumentPsy = getArgumentPsychologie(psychologieSelectedOption);
      const { argumentTPR, argumentSL, argumentBE, argumentAnnEco, argumentPos, argumentTypOrd, argumentSortieManuelle, argumentTilt, 
        argumentBuySell, argumentVioleStrat, argumentSortie, argumentTJS
      } = await verificationFiltre( 
        sortieManuelle, takeProfit, stopLoss, rrRange, AnnEco, positionSignInfl, typeOrdre, tilt, buySell, violeStrat, sortie, TJS);

        soumissionsFormulaire(argumentDate, argumentIndice, startDate, endDate, argumentTPR, argumentSL, argumentBE, argumentPsy, argumentStrategie, 
        argumentAnnEco, argumentPos, argumentTypOrd, argumentSortieManuelle, argumentTilt, argumentBuySell, argumentIndicateur1, argumentIndicateur2,
        argumentIndicateur3, argumentVioleStrat, argumentSortie, argumentTimeEntree, argumentTimeSetup, argumentTJS);
    };

  return (
    <div className='statistique1'>
      <Selector options={dateOptions} value={dateSelectedOption} onChange={(selected) => setdateSelectedOption(selected)} />
      {dateSelectedOption === "choixLibre" && (
        <div>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </div>
      )}
      <Selector options={indiceOptions} value={indiceSelectedOption} onChange={(selected) => setIndiceSelectedOption(selected)} />
      <Selector options={forexOptions} value={indiceSelectedOption} onChange={(selected) => setIndiceSelectedOption(selected)} />
      <Selector options={actionOptions} value={indiceSelectedOption} onChange={(selected) => setIndiceSelectedOption(selected)} />
      <CaseRadio titre="Take profit" nomOption1="Atteint" nomOption2="Dépassé" nomOption3="Non atteint" selectedCaseOption={takeProfit} onChange={valeurTakeProfitChange} />
      <CaseRadio titre="Stop loss" nomOption1="Atteint" nomOption2="Partiel" selectedCaseOption={stopLoss} onChange={valeurStopLossChange} />
      <CaseRadio titre="-0.5RR < BE < 0.5RR" nomOption1=" " selectedCaseOption={rrRange} onChange={valeurRrRangeChange} />
      <CaseRadio titre="Sortie manuelle" nomOption1="succès" nomOption2="échec" selectedCaseOption={sortieManuelle} onChange={valeurSortieManuelleChange} />
      <CaseRadio titre="Journée de tilt" nomOption1="oui" nomOption2="non" selectedCaseOption={tilt} onChange={valeurTiltChange} />
      <CaseRadio titre="Type d'ordre" nomOption1="Sell" nomOption2="Buy" selectedCaseOption={buySell} onChange={valeurBuySellChange} />
      <CaseRadio titre="Viole de la strategie" nomOption1="oui" nomOption2="non" selectedCaseOption={violeStrat} onChange={valeurVioleStratChange} />
      <CaseRadio titre="Sortie sur décision" nomOption1="technique" nomOption2="émotion" selectedCaseOption={sortie} onChange={valeurSortieChange} />
      <CaseRadio titre="Trade TJS" nomOption1="positif" nomOption2="négatif" selectedCaseOption={TJS} onChange={TJSChange} />
      <div className="filtre">
        <CaseRadio titre="Trade durant une annonce économique" nomOption1="oui" nomOption2="non" selectedCaseOption={AnnEco} onChange={valeurAnnEcoChange} />
        <CaseRadio titre="Position" nomOption1="signal" nomOption2="influence" selectedCaseOption={positionSignInfl} onChange={valeurpositionSignInflChange} />
        <CaseRadio titre="Type d'ordre" nomOption1="market" nomOption2="conditionnel" selectedCaseOption={typeOrdre} onChange={valeurtypeOrdreChange} />
        <Selector options={strategieOptions} defaultValue="" value={strategieSelectedOption} onChange={(selected) => setStrategieSelectedOption(selected)} />
        <Selector options={psychologieOptions} value={psychologieSelectedOption} onChange={(selected) => setPsychologieSelectedOption(selected)} />
        <Selector options={indicateurOptions} value={indicateur1Values} onChange={(selected) => setIndicateur1Values(selected)} />
        <Selector options={indicateurOptions} value={indicateur2Values} onChange={(selected) => setIndicateur2Values(selected)} />
        <Selector options={indicateurOptions} value={indicateur3Values} onChange={(selected) => setIndicateur3Values(selected)} />
        <Selector options={timeFrameOptions} value={timeEntreeValues} onChange={(selected) => timeEntreeOptionChange(selected)}/>
        <Selector options={timeFrameOptions} value={timeSetupValues} onChange={(selected) => timeSetupOptionChange(selected)}/>
      </div>
      <Button label="chercher" onClick={handleClick} />
    </div>
  );
};

export default Statistique1;
