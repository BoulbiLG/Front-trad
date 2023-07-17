import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { format } from "date-fns";

import CaseRadio from './CaseRadio';
import Button from './Button';
import Selector from './Selector';

const ProfilCaseRadio = ({ selectedOption }) => {
  const [takeProfit, setTakeProfit] = useState(null);
  const [stopLoss, setStopLoss] = useState(null);
  const [rrRange, setRrRange] = useState(null);
  const [otherSelectedOption, setOtherSelectedOption] = useState('');
  const [secondSelectedOption, setSecondSelectedOption] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const options = [
    { value: "aujourd'hui", label: "Aujourd'hui" }, { value: 'semaineEnCours', label: 'Semaine en cours' }, { value: 'semaineGlissante', label: 'Semaine glissante' },
    { value: 'moisGlissant', label: 'Mois glissant' }, { value: 'moisEnCours', label: 'Mois en cours' }, { value: '3mois', label: '3 mois' }, { value: '6mois', label: '6 mois' }, 
    { value: '1an', label: '1 an' }, { value: '2ans', label: '2 ans' }, { value: 'tout', label: 'Tout' }, { value: 'choixLibre', label: 'Choix libre' },
  ];
  const secondOptions = [
    { value: "DowJonesIndustrialAverage", label: "Dow Jones Industrial Average" }, { value: 'NAS', label: 'Nasdaq Composite' }, { value: 'FTSE100', label: 'FTSE 100' },
    { value: 'DAX30', label: 'DAX 30' }, { value: 'CAC40', label: 'CAC 40' }, { value: 'Nikkei225', label: 'Nikkei 225' },
    { value: 'ShangaiComposite', label: 'Shangai Composite' }, { value: 'HangSengIndex', label: 'Hang Seng Index' }, { value: 'S&P/ASX200', label: 'S&P/ASX 200' },
    { value: 'Bovespa', label: 'Bovespa' }, { value: 'Nifty50', label: 'Nifty 50' }, { value: 'TAIEX', label: 'TAIEX' },
    { value: 'RTSIndex', label: 'RTS Index' }, { value: 'S&P/TSXComposite', label: 'S&P/TSX Composite' }, { value: 'ADAUSD', label: 'ADAUSD' },
  ];

  const valeurTakeProfitChange = (value) => {
    setTakeProfit(value);
  };
  const valeurStopLossChange = (value) => {
    setStopLoss(value);
  };
  const valeurRrRangeChange = (value) => {
    setRrRange(value);
  };

  const handleStartDateChange = (date) => {
    if (date) {
      setStartDate(date);
      console.log("Date de début :", date);
    }
  };
  
  const handleEndDateChange = (date) => {
    if (date) {
      setEndDate(date);
      console.log("Date de fin :", date);
    }
  };
  

  const soumissionsFormulaire = async () => {
    let argumentDate = "";
    if (otherSelectedOption === "aujourd'hui") {
      argumentDate = "aujourd'hui";
    } else if (otherSelectedOption === "semaineEnCours") {
      argumentDate = "semaineEnCours";
    } else if (otherSelectedOption === "semaineGlissante") {
      argumentDate = "semaineGlissante";
    } else if (otherSelectedOption === "moisGlissant") {
      argumentDate = "moisGlissant";
    } else if (otherSelectedOption === "moisEnCours") {
      argumentDate = "moisEnCours";
    } else if (otherSelectedOption === "choixLibre") {
      argumentDate = "choixLibre";
    }

    let argumentFiltre = "";
    if (secondSelectedOption === "DowJonesIndustrialAverage") {
      argumentFiltre = "Dow Jones Industrial Average";
    } else if (secondSelectedOption === "NAS") {
      argumentFiltre = "nas";
    } else if (secondSelectedOption === "FTSE100") {
      argumentFiltre = "FTSE 100";
    } else if (secondSelectedOption === "DAX30") {
      argumentFiltre = "DAX 30";
    } else if (secondSelectedOption === "CAC40") {
      argumentFiltre = "CAC 40";
    } else if (secondSelectedOption === "Nikkei225") {
      argumentFiltre = "Nikkei 225";
    } else if (secondSelectedOption === "ShangaiComposite") {
      argumentFiltre = "Shangai Composite";
    } else if (secondSelectedOption === "HangSengIndex") {
      argumentFiltre = "Hang Seng Index";
    } else if (secondSelectedOption === "S&P/ASX200") {
      argumentFiltre = "S&P/ASX 200";
    } else if (secondSelectedOption === "Bovespa") {
      argumentFiltre = "Bovespa";
    } else if (secondSelectedOption === "Nifty50") {
      argumentFiltre = "Nifty 50";
    } else if (secondSelectedOption === "TAIEX") {
      argumentFiltre = "TAIEX";
    } else if (secondSelectedOption === "RTSIndex") {
      argumentFiltre = "RTS Index";
    } else if (secondSelectedOption === "S&P/TSXComposite") {
      argumentFiltre = "S&P/TSX Composite";
    } else if (secondSelectedOption === "ADAUSD") {
      argumentFiltre = "ADAUSD";
    }

    if (takeProfit === 'Atteint') {
      const takeProfitRequeteAtteint = async () => {
        try {
          let response;
          if (startDate && endDate) {
            const formattedStartDate = new Date(startDate).toISOString();
            const formattedEndDate = new Date(endDate).toISOString();
            response = await axios.get(`http://127.0.0.1:5000/TPRatteint?date=${argumentDate}&debutDate=${formattedStartDate}&finDate=${formattedEndDate}&filtre=${argumentFiltre}`);
            console.log(response.data); return response.data;
          } else {
            response = await axios.get(`http://127.0.0.1:5000/TPRatteint?date=${argumentDate}&filtre=${argumentFiltre}`);
            console.log(response.data); return response.data;
          }
        } catch (error) { console.error(error); throw error;}
      };
      
      await takeProfitRequeteAtteint();
    } else if (takeProfit === 'Dépassé') {
    } else if (takeProfit === 'Non atteint') {
      const takeProfitRequeteNonAtteint = async () => {
        try {
          let response;
          if (startDate && endDate) {
            const formattedStartDate = new Date(startDate).toISOString();
            const formattedEndDate = new Date(endDate).toISOString();
            response = await axios.get(`http://127.0.0.1:5000/TPRnonAtteint?date=${argumentDate}&debutDate=${formattedStartDate}&finDate=${formattedEndDate}&filtre=${argumentFiltre}`);
            console.log(response.data); return response.data;
          } else {
            response = await axios.get(`http://127.0.0.1:5000/TPRnonAtteint?date=${argumentDate}&filtre=${argumentFiltre}`);
            console.log(response.data); return response.data;
          }
        } catch (error) { console.error(error); throw error;}
      };
      await takeProfitRequeteNonAtteint();
    }

    if (stopLoss === 'Atteint') {
      console.log('Stop loss atteint');
    } else if (stopLoss === 'Partiel') {
      console.log('Stop loss partiel');
    }

    if (rrRange === '-0.5RR < BE < 0.5RR') {
      console.log('RR range valide');
    }
  };

  return (
    <div>
      <Selector options={options} value={otherSelectedOption} onChange={(selected) => setOtherSelectedOption(selected)}/>
      {otherSelectedOption === "choixLibre" && (
        <div>
          <DatePicker selected={startDate} onChange={handleStartDateChange} />
          <DatePicker selected={endDate} onChange={handleEndDateChange} />
        </div>
      )}
      <Selector options={secondOptions} value={secondSelectedOption} onChange={(selected) => setSecondSelectedOption(selected)}/>
      <CaseRadio titre="Take profit" nomOption1="Atteint" nomOption2="Dépassé" nomOption3="Non atteint" selectedCaseOption={takeProfit} onChange={valeurTakeProfitChange}/>
      <CaseRadio titre="Stop loss" nomOption1="Atteint" nomOption2="Partiel" selectedCaseOption={stopLoss} onChange={valeurStopLossChange}/>
      <CaseRadio titre="-0.5RR < BE < 0.5RR" nomOption1=" " selectedCaseOption={rrRange} onChange={valeurRrRangeChange}/>
      <Button label="chercher" onClick={soumissionsFormulaire} />
    </div>
  );
};

export default ProfilCaseRadio;