import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import getArgumentDate from './ArgumentDate';
import { getArgumentFiltre } from './ArgumentIndice';
import getArgumentPsychologie from './argumentPsychologie';
import { dateOptions, indiceOptions, forexOptions, actionOptions, psychologieOptions, fetchStrategieOptions } from './Options';
import { soumissionsFormulaire } from './API';
import { verificationFiltre } from './XY';
import { getUserDataFromSession } from '../../pages/Login';

import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';

const ProfilCaseRadio = ({ selectedOption }) => {
  const [takeProfit, setTakeProfit] = useState(null);
  const [stopLoss, setStopLoss] = useState(null);
  const [rrRange, setRrRange] = useState(null);
  const [AnnEco, setAnnEco] = useState(null);
  const [positionSignInfl, setpositionSignInfl] = useState(null);
  const [typeOrdre, settypeOrdre] = useState(null);
  const [strategieSelectedOption, setStrategieSelectedOption] = useState([]);
  const [strategieOptions, setStrategieOptions] = useState([]);
  //const [argumentStrategie, setArgumentStrategie] = useState(null);

  const userData = getUserDataFromSession();
  const username = userData?.username;
  useEffect(() => {
    const fetchOptions = async () => {
      const options = await fetchStrategieOptions(username, setStrategieSelectedOption);
      setStrategieOptions(options);
      console.log(options);
    };

    fetchOptions();
  }, [username]);

  const [dateSelectedOption, setdateSelectedOption] = useState('');
  const [indiceSelectedOption, setIndiceSelectedOption] = useState('');
  const [psychologieSelectedOption, setPsychologieSelectedOption] = useState('');

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const argumentIndice = getArgumentFiltre(indiceSelectedOption);
    console.log("Nouvelle valeur de argumentIndice pour indiceSelectedOption :", argumentIndice);
  }, [indiceSelectedOption]);

  const valeurTakeProfitChange = (value) => { setTakeProfit(value); };
  const valeurStopLossChange = (value) => { setStopLoss(value); };
  const valeurRrRangeChange = (value) => { setRrRange(value); };
  const valeurAnnEcoChange = (value) => { setAnnEco(value); };
  const valeurpositionSignInflChange = (value) => { setpositionSignInfl(value); };
  const valeurtypeOrdreChange = (value) => { settypeOrdre(value); };

  const handleStartDateChange = (date) => { if (date) { setStartDate(date); } };
  const handleEndDateChange = (date) => { if (date) { setEndDate(date); } };

  const handleClick = async () => {
    const argumentStrategie = strategieSelectedOption;
    console.log(argumentStrategie);
    const argumentDate = getArgumentDate(dateSelectedOption);
    const argumentIndice = getArgumentFiltre(indiceSelectedOption);
    const argumentPsy = getArgumentPsychologie(psychologieSelectedOption);
    const { argumentTPR, argumentSL, argumentBE, argumentAnnEco, argumentPos, argumentTypOrd } = await verificationFiltre(takeProfit, stopLoss, rrRange, AnnEco, positionSignInfl, typeOrdre);
    soumissionsFormulaire(argumentDate, argumentIndice, startDate, endDate, argumentTPR, argumentSL, argumentBE, argumentPsy, argumentStrategie, argumentAnnEco, argumentPos, argumentTypOrd);
  };

  return (
    <div>
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
      <div className="filtre">
        <CaseRadio titre="Trade durant une annonce économique" nomOption1="oui" nomOption2="non" selectedCaseOption={AnnEco} onChange={valeurAnnEcoChange} />
        <CaseRadio titre="Position" nomOption1="signal" nomOption2="influence" selectedCaseOption={positionSignInfl} onChange={valeurpositionSignInflChange} />
        <CaseRadio titre="Type d'ordre" nomOption1="market" nomOption2="conditionnel" selectedCaseOption={typeOrdre} onChange={valeurtypeOrdreChange} />
        <Selector options={strategieOptions} value={strategieSelectedOption} onChange={(selected) => setStrategieSelectedOption(selected)} />
        <Selector options={psychologieOptions} value={psychologieSelectedOption} onChange={(selected) => setPsychologieSelectedOption(selected)} />
      </div>
      <Button label="chercher" onClick={handleClick} />
    </div>
  );
};

export default ProfilCaseRadio;
