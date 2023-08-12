import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import getArgumentDate2 from './ArgumentDate2';
import { getArgumentFiltre2 } from './ArgumentIndice2';
import getArgumentPsychologie2 from './argumentPsychologie2';
import { dateOptions2, indiceOptions2, forexOptions2, actionOptions2, psychologieOptions2, fetchStrategieOptions2, fetchIndicateurOptions2,
timeFrameOptions2 } from './Options2';
import { soumissionsFormulaire2 } from './API2';
import { verificationFiltre2 } from './XY2';

import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';

const Statistique2 = ({ selectedOption2 }) => {
  const [takeProfit2, setTakeProfit2] = useState(null);
  const [stopLoss2, setStopLoss2] = useState(null);
  const [rrRange2, setRrRange2] = useState(null);
  const [sortieManuelle2, setSortieManuelle2] = useState(null);
  const [tilt2, setTilt2] = useState(null);
  const [AnnEco2, setAnnEco2] = useState(null);
  const [buySell2, setBuySell2] = useState(null);
  const [positionSignInfl2, setpositionSignInfl2] = useState(null);
  const [typeOrdre2, settypeOrdre2] = useState(null);
  const [violeStrat2, setVioleStrat2] = useState([]);
  const [sortie2, setSortie2] = useState([]);
  const [timeEntreeValues2, setTimeEntreeValues2] = useState([]);
  const [timeSetupValues2, setTimeSetupValues2] = useState([]);
  const [TJS2, setTJSValues2] = useState([]);

  const [strategieSelectedOption2, setStrategieSelectedOption2] = useState('');
  const [strategieOptions2, setStrategieOptions2] = useState([]);
  const [indicateur1Values2, setIndicateur1Values2] = useState([]);
  const [indicateur2Values2, setIndicateur2Values2] = useState([]);
  const [indicateur3Values2, setIndicateur3Values2] = useState([]);
  const [indicateurOptions2, setIndicateurOptions2] = useState([]);

  const username2 = sessionStorage.getItem('username');

  // recuperation option dynamique de strategie et indicateur
  useEffect(() => {
    const fetchOptions2 = async () => {const options2 = await fetchStrategieOptions2(username2, setStrategieSelectedOption2);setStrategieOptions2(options2);};
    const fetchIndicateur2 = async () => {const indicOption2 = await fetchIndicateurOptions2();setIndicateurOptions2(indicOption2);};
    fetchOptions2();
    fetchIndicateur2();
  }, [username2]);

  const [dateSelectedOption2, setdateSelectedOption2] = useState('');
  const [indiceSelectedOption2, setIndiceSelectedOption2] = useState('');
  const [psychologieSelectedOption2, setPsychologieSelectedOption2] = useState('');

  const [startDate2, setStartDate2] = useState(null);
  const [endDate2, setEndDate2] = useState(null);

  useEffect(() => {
    getArgumentFiltre2(indiceSelectedOption2);
  }, [indiceSelectedOption2]);

  const valeurTakeProfitChange2 = (value) => { setTakeProfit2(value); };
  const valeurStopLossChange2 = (value) => { setStopLoss2(value); };
  const valeurRrRangeChange2 = (value) => { setRrRange2(value); };
  const valeurSortieManuelleChange2 = (value) => { setSortieManuelle2(value); };
  const valeurTiltChange2 = (value) => { setTilt2(value); };
  const valeurAnnEcoChange2 = (value) => { setAnnEco2(value); };
  const valeurBuySellChange2 = (value) => { setBuySell2(value); };
  const valeurVioleStratChange2 = (value) => { setVioleStrat2(value); };
  const valeurpositionSignInflChange2 = (value) => { setpositionSignInfl2(value); };
  const valeurtypeOrdreChange2 = (value) => { settypeOrdre2(value); };
  const valeurSortieChange2 = (value) => { setSortie2(value); };
  const timeEntreeOptionChange2 = (value) => {setTimeEntreeValues2(value);};
  const timeSetupOptionChange2 = (value) => {setTimeSetupValues2(value);};
  const TJSChange2 = (value) => {setTJSValues2(value);};

  const handleStartDateChange2 = (date) => { if (date) { setStartDate2(date); } };
  const handleEndDateChange2 = (date) => { if (date) { setEndDate2(date); } };

  const handleClick2 = async () => {
    let argumentStrategie2 = strategieSelectedOption2;
    let argumentTimeEntree2 = timeEntreeValues2;
    let argumentTimeSetup2 = timeSetupValues2;
    let argumentIndicateur12 = indicateur1Values2;
    let argumentIndicateur22 = indicateur2Values2;
    let argumentIndicateur32 = indicateur3Values2;
    if (argumentStrategie2.length !== 1) {argumentStrategie2 = null;}
    if (argumentTimeEntree2.length !== 1) {argumentTimeEntree2 = null;}
    if (argumentTimeSetup2.length !== 1) {argumentTimeSetup2 = null;}
    if (argumentIndicateur12.length !== 1) {argumentIndicateur12 = null;}
    if (argumentIndicateur22.length !== 1) {argumentIndicateur22 = null;}
    if (argumentIndicateur32.length !== 1) {argumentIndicateur32 = null;}
    const argumentDate2 = getArgumentDate2(dateSelectedOption2);
    const argumentIndice2 = getArgumentFiltre2(indiceSelectedOption2);
    const argumentPsy2 = getArgumentPsychologie2(psychologieSelectedOption2);
    const { argumentTPR2, argumentSL2, argumentBE2, argumentAnnEco2, argumentPos2, argumentTypOrd2, argumentSortieManuelle2, argumentTilt2, 
      argumentBuySell2, argumentVioleStrat2, argumentSortie2, argumentTJS2
    } = await verificationFiltre2( 
      sortieManuelle2, takeProfit2, stopLoss2, rrRange2, AnnEco2, positionSignInfl2, typeOrdre2, tilt2, buySell2, violeStrat2, sortie2, TJS2);

    soumissionsFormulaire2(argumentDate2, argumentIndice2, startDate2, endDate2, argumentTPR2, argumentSL2, argumentBE2, argumentPsy2, argumentStrategie2, 
      argumentAnnEco2, argumentPos2, argumentTypOrd2, argumentSortieManuelle2, argumentTilt2, argumentBuySell2, argumentIndicateur12, argumentIndicateur22,
      argumentIndicateur32, argumentVioleStrat2, argumentSortie2, argumentTimeEntree2, argumentTimeSetup2, argumentTJS2);
  };

  return (
    <div className='statistique2'>
      <Selector options={dateOptions2} value={dateSelectedOption2} onChange={(selected) => setdateSelectedOption2(selected)} />
      {dateSelectedOption2 === "choixLibre" && (
        <div>
          <DatePicker selected={startDate2} onChange={handleStartDateChange2} />
          <DatePicker selected={endDate2} onChange={handleEndDateChange2} />
        </div>
      )}
      <Selector options={indiceOptions2} value={indiceSelectedOption2} onChange={(selected) => setIndiceSelectedOption2(selected)} />
      <Selector options={forexOptions2} value={indiceSelectedOption2} onChange={(selected) => setIndiceSelectedOption2(selected)} />
      <Selector options={actionOptions2} value={indiceSelectedOption2} onChange={(selected) => setIndiceSelectedOption2(selected)} />
      <CaseRadio titre="Take profit 2" nomOption1="Atteint" nomOption2="Dépassé" nomOption3="Non atteint" selectedCaseOption={takeProfit2} onChange={valeurTakeProfitChange2} />
      <CaseRadio titre="Stop loss 2" nomOption1="Atteint" nomOption2="Partiel" selectedCaseOption={stopLoss2} onChange={valeurStopLossChange2} />
      <CaseRadio titre="-0.5RR < BE < 0.5RR 2" nomOption1=" " selectedCaseOption={rrRange2} onChange={valeurRrRangeChange2} />
      <CaseRadio titre="Sortie manuelle 2" nomOption1="succès" nomOption2="échec" selectedCaseOption={sortieManuelle2} onChange={valeurSortieManuelleChange2} />
      <CaseRadio titre="Journée de tilt 2" nomOption1="oui" nomOption2="non" selectedCaseOption={tilt2} onChange={valeurTiltChange2} />
      <CaseRadio titre="Type d'ordre 2" nomOption1="Sell" nomOption2="Buy" selectedCaseOption={buySell2} onChange={valeurBuySellChange2} />
      <CaseRadio titre="Viole de la strategie 2" nomOption1="oui" nomOption2="non" selectedCaseOption={violeStrat2} onChange={valeurVioleStratChange2} />
      <CaseRadio titre="Sortie sur décision 2" nomOption1="technique" nomOption2="émotion" selectedCaseOption={sortie2} onChange={valeurSortieChange2} />
      <CaseRadio titre="Trade TJS 2" nomOption1="positif" nomOption2="négatif" selectedCaseOption={TJS2} onChange={TJSChange2} />
      <div className="filtre">
        <CaseRadio titre="Trade durant une annonce économique 2" nomOption1="oui" nomOption2="non" selectedCaseOption={AnnEco2} onChange={valeurAnnEcoChange2} />
        <CaseRadio titre="Position 2" nomOption1="signal" nomOption2="influence" selectedCaseOption={positionSignInfl2} onChange={valeurpositionSignInflChange2} />
        <CaseRadio titre="Type d'ordre 2" nomOption1="market" nomOption2="conditionnel" selectedCaseOption={typeOrdre2} onChange={valeurtypeOrdreChange2} />
        <Selector options={strategieOptions2} defaultValue="" value={strategieSelectedOption2} onChange={(selected) => setStrategieSelectedOption2(selected)} />
        <Selector options={psychologieOptions2} value={psychologieSelectedOption2} onChange={(selected) => setPsychologieSelectedOption2(selected)} />
        <Selector options={indicateurOptions2} value={indicateur1Values2} onChange={(selected) => setIndicateur1Values2(selected)} />
        <Selector options={indicateurOptions2} value={indicateur2Values2} onChange={(selected) => setIndicateur2Values2(selected)} />
        <Selector options={indicateurOptions2} value={indicateur3Values2} onChange={(selected) => setIndicateur3Values2(selected)} />
        <Selector options={timeFrameOptions2} value={timeEntreeValues2} onChange={(selected) => timeEntreeOptionChange2(selected)}/>
        <Selector options={timeFrameOptions2} value={timeSetupValues2} onChange={(selected) => timeSetupOptionChange2(selected)}/>
      </div>
      <Button label="chercher" onClick={handleClick2} />
    </div>
  );
};

export default Statistique2;
