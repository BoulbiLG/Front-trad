import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from '../../../inputComposant/Button';
import Selector from '../../../inputComposant/Selector';
import Input from '../inputComposant/Input';

import '../../../../css/statistique/generale/ajoutFiltre.css';

import Winrate from '../graphique/Winrate';

import { filtreOptions, recuperationNomRemplissageFiltre, winrateOptions, fetchCollectionOptions, fetchStrategieOptions, typeCalculOptions,
riskRewardOptions, SLROptions, TPROptions, DDOptions, psychologieOptions, capitaleRiskOptions, typeOrdreOptions } from './Options';
import { dateDebutAjoutValueFiltre, dateFinAjoutValueFiltre} from './Fonction';
import { recuperationRemplissageFiltre, recuperationTradeParFiltre, recuperationTradeParFiltreDate } from './API';

import { verificationStandardOption } from './standard/Winrate';
import { RRverificationStandardOption } from './standard/RR';
import { SLRverificationStandardOption } from './standard/SLR';
import { TPRverificationStandardOption } from './standard/TPR';
import { DDverificationStandardOption } from './standard/DD';
import { TailleLotVerificationStandardOption } from './standard/TailleLot';
import { PsychologieVerificationStandardOption } from './standard/Psychologie';
import { TypeOrdreVerificationStandardOption } from './standard/TypeOrdre';

const AjouteFiltre = () => {

    const username = sessionStorage.getItem('username');

    const [tableauFiltre, setTableauFiltre] = useState([]);
    const [tableauFiltreValue, setTableauFiltreValue] = useState([]);
    const [filtreData, setFiltreData] = useState([]);
    const [collectionValues, setCollectionValues] = useState('');
    const [collectionOption, setCollectionOption] = useState([]);
    const [strategieOption, setStrategieOption] = useState([]);

    const [filtreOptionsDynamique, setFiltreOptionsDynamique] = useState(filtreOptions);
    const [filtreTemporaireValue, setFiltreTemporaireValue] = useState();

    const [typeCalculValue, setTypeCalculValue] = useState('');
    const [standardValue, setStandardValue] = useState('');
    //const [standardOptions, setStandardOptions] = useState([]);

    const [nomRemplissageValue, setNomRemplissageValue] = useState('');
    const [nomRemplissageOptions, setNomRemplissageOptions] = useState([]);

    // VARIABLES DES FILTRE DE BASE
    const [volumeValue, setVolumeValue] = useState(null);
    const [volumeRemainValue, setVolumeRemainValue] = useState(null);
    const [profitValue, setProfitValue] = useState(null);
    const [psychologieValue, setPsychologieValue] = useState(null);
    const [winrateValue, setWinrateValue] = useState(null);

    // VARIABLES DES FILTRE ANNEXE
    const [symboleValue, setSymboleValue] = useState('');
    const [typeTransactionValue, setTypeTransactionValue] = useState('');
    const [startDateValue, setStartDateValue] = useState(null);
    const [endDateValue, setEndDateValue] = useState(null);

    useEffect(() => {
        // RECUPERATION COLLECTION
        const fetchCollection = async () => {
            const collectionOptions = await fetchCollectionOptions(username);
            setCollectionOption(collectionOptions);
        }
        // STRATEGIE OPTIONS
      const fetchOptions = async () => {
        const strategieOption = await fetchStrategieOptions(username, setStrategieOption);
        setStrategieOption(strategieOption);
      };
        fetchCollection();
        fetchOptions();
    }, [username]);

    // RECUPERATION TRADE PAR FILTRE
    useEffect(() => {
        const fetchFiltreData = async () => {
            console.log(tableauFiltreValue);
            if (tableauFiltreValue.length > 1) {
                console.log('brisé');
                const recuperationData = await recuperationTradeParFiltre(tableauFiltreValue, collectionValues);
                setFiltreData(recuperationData);
            }
        };
        fetchFiltreData();
    }, [symboleValue, typeTransactionValue, volumeValue, volumeRemainValue, profitValue, collectionValues, psychologieValue,
    tableauFiltreValue, startDateValue, endDateValue]);

    // RECUPERATION TRADE PAR FILTRE AVEC DATE
    useEffect(() => {
        const fetchFiltreDataDate = async () => {
            console.log(tableauFiltreValue);
            const recuperationData = await recuperationTradeParFiltreDate(tableauFiltreValue, collectionValues, startDateValue, endDateValue);
            setFiltreData(recuperationData);
        };
        fetchFiltreDataDate();
    }, [collectionValues, tableauFiltreValue, startDateValue, endDateValue]);

    // REMPLISSAGE
    useEffect(() => {
        const fetchRemplissageData = async () => {
            if (nomRemplissageValue !== null && nomRemplissageValue !== undefined && nomRemplissageValue !== '' && nomRemplissageValue !== 'aucun') {
                const remplissageData = await recuperationRemplissageFiltre(nomRemplissageValue, setFiltreOptionsDynamique, setSymboleValue, 
                setTypeTransactionValue, setStartDateValue, setEndDateValue, setVolumeValue, setVolumeRemainValue, setProfitValue);
                setTableauFiltre(remplissageData);
                console.log(tableauFiltre);
                console.log(typeTransactionValue);
                setTypeTransactionValue(typeTransactionValue);
            } else {
                setTableauFiltre([]);
                setFiltreOptionsDynamique(filtreOptions);
            }
        };
        fetchRemplissageData();
    }, [nomRemplissageValue]);

    // REMPLISSAGE NOM OPTIONS
    useEffect(() => {
        const fetchNomRemplissage = async () => {
            const nomRemplissageData = await recuperationNomRemplissageFiltre();
            setNomRemplissageOptions(nomRemplissageData);
        };
        fetchNomRemplissage();
    }, [username]);

    const ajouterUnFitre = (filtreTemporaireValue) => {
        const nouveauFiltre = {type: filtreTemporaireValue, value: null};
        setTableauFiltre([...tableauFiltre, nouveauFiltre]);
        setFiltreTemporaireValue('');

        const nouveaufiltreOptionsDynamique = filtreOptionsDynamique.filter((filtre) => filtre.value !== filtreTemporaireValue);
        setFiltreOptionsDynamique(nouveaufiltreOptionsDynamique);
        console.log(nouveaufiltreOptionsDynamique);
        console.log(tableauFiltre);
    }

    const ajouterUnFitreDepart = (filtreTemporaireValue) => {
        const indexFiltreDeBase = tableauFiltre.findIndex(filtre => filtre.filtre === "filtreDeBase");
    
        if (indexFiltreDeBase !== -1) {
            const nouveauFiltre = { filtre: "filtreDeBase", type: filtreTemporaireValue, value: null };
            const nouveauTableauFiltre = [...tableauFiltre];
            nouveauTableauFiltre[indexFiltreDeBase] = nouveauFiltre;
            setTableauFiltre(nouveauTableauFiltre);
        } else {
            const nouveauFiltre = { filtre: "filtreDeBase", type: filtreTemporaireValue, value: null };
            setTableauFiltre([...tableauFiltre, nouveauFiltre]);
        }
        setFiltreTemporaireValue('');
    }

    const supprimerUnFiltre = (type) => {
        console.log(type);
        const nouveauTableauFiltre = tableauFiltre.filter((filtre) => filtre.type !== type);
        setTableauFiltre(nouveauTableauFiltre);

        const nouveauLabel = filtreOptions.filter((filtre) => filtre.value == type);
        const labelFormatee = nouveauLabel[0].label;
        const nouveaufiltreOptionsDynamique = {value: type, label: labelFormatee};
        const nouveaufiltreOptionsDynamiqueFormatee = [
            ...filtreOptionsDynamique,
            { value: type, label: labelFormatee }
        ];
        setFiltreOptionsDynamique(nouveaufiltreOptionsDynamiqueFormatee);
    }

    return (
        <div className='ajoutFiltreConteneur'>
            <h3>statistiques générales</h3>
            <div className="filtreConteneurGlobal">
                <div className="filtreConteneur">
                    <div className="ajouterFiltre">
                        <div className='collectionOptions'> riskRewardOptions
                            <p>portefeuille</p>
                            <Selector options={collectionOption} value={collectionValues} onChange={(selectedValue) => {setCollectionValues(selectedValue)}}/>
                        </div>
                        <div className='standardOptions'>
                            <p>filtre</p>
                            <Selector options={typeCalculOptions} value={typeCalculValue} onChange={(selectedValue) => {setTypeCalculValue(selectedValue)}}/>
                            { typeCalculValue == 'winrate' ? (
                                <><p>par</p>
                                <Selector options={winrateOptions} value={standardValue} onChange={(selectedValue) => {verificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'riskReward' ? (
                                <><p>par</p>
                                <Selector options={riskRewardOptions} value={standardValue} onChange={(selectedValue) => {RRverificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'TPR' ? (
                                <><p>par</p>
                                <Selector options={TPROptions} value={standardValue} onChange={(selectedValue) => {TPRverificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'SLR' ? (
                                <><p>par</p>
                                <Selector options={SLROptions} value={standardValue} onChange={(selectedValue) => {SLRverificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'DD' ? (
                                <><p>par</p>
                                <Selector options={DDOptions} value={standardValue} onChange={(selectedValue) => {DDverificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'psychologie' ? (
                                <><p>par</p>
                                <Selector options={psychologieOptions} value={standardValue} onChange={(selectedValue) => {PsychologieVerificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'capitalRisk' ? (
                                <><p>par</p>
                                <Selector options={capitaleRiskOptions} value={standardValue} onChange={(selectedValue) => {TailleLotVerificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                            { typeCalculValue == 'typeOrdre' ? (
                                <><p>par</p>
                                <Selector options={typeOrdreOptions} value={standardValue} onChange={(selectedValue) => {TypeOrdreVerificationStandardOption(
                                    selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue
                                )}}/></>
                            ) : null }
                        </div>
                    </div>
                    <div className="filtre">
                        <div className="tableauFiltre">
                            <div className="fitlreDeBase">
                                {tableauFiltre.map((filtre, index) => (
                                    <div>
                                        {filtre.type === "winrate" ? (
                                            <div className='carteFiltre'>
                                                <p>Winrate</p>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                            {tableauFiltre.map((filtre, index) => (
                                <div className='autreFiltre' key={index}>
                                    {filtre.type === "typeOfTransaction" ? (
                                        <div className='carteFiltre'>
                                            <p>Type of transaction</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === "symbol" ? (
                                        <div className='carteFiltre'>
                                            <p>Symbol</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === "psychologie" ? (
                                        <div className='carteFiltre'>
                                            <p>Psychologie</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === "balance" ? (
                                        <div className='carteFiltre'>
                                            <p>Draw down</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === "RR" ? (
                                        <div className='carteFiltre'>
                                            <p>Risk reward</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === "strategie" ? (
                                        <div className='carteFiltre'>
                                            <p>Strategie</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === 'capitalrisk' ? (
                                        <div className='carteFiltre'>
                                            <p>Capital risk</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === 'orderType' ? (
                                        <div className='carteFiltre'>
                                            <p>Order type</p>
                                        </div>
                                    ) : null}
                                    {filtre.type === 'date' ? (
                                        <div className='filtreDate carteFiltre'>
                                            <div className="datePicker">
                                                <div className="dateDebut">
                                                    <p>Date du début</p>
                                                    <DatePicker selected={startDateValue} onChange={(selectedValue) => {setStartDateValue(selectedValue)}} />
                                                </div>
                                                <div className="dateFin">
                                                    <p>Date de fin</p>
                                                    <DatePicker selected={endDateValue} onChange={(selectedValue) => {setEndDateValue(selectedValue)}} />
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="graphique">
                <div className="winrate">
                    <Winrate reponseAPI={filtreData}/>
                </div>
                <div className="reste"></div>
            </div>
        </div>
    )
}

export default AjouteFiltre