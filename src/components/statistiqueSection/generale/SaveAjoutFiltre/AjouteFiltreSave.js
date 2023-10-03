import React, { useEffect, useState } from 'react';
import Button from '../../../inputComposant/Button';
import Selector from '../../../inputComposant/Selector';
import Input from '../inputComposant/Input';
import { filtreEntreeOptions, filtreOptions, typeOfTransactionOptions, recuperationNomRemplissageFiltre, standardOptions, fetchCollectionOptions,
psychologieOptions, fetchStrategieOptions, orderTypeOptions } from './Options';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../css/statistique/generale/ajoutFiltre.css';
import { symbolAjoutValueFiltre, typeTransactionAjoutValueFiltre, dateDebutAjoutValueFiltre, dateFinAjoutValueFiltre,
volAjoutValueFiltre, volRemAjoutValueFiltre, proAjoutValueFiltre, pointAjoutValueFiltre,
tiltAjoutValueFiltre, priceOpeningAjoutValueFiltre, stopLossAjoutValueFiltre, SLOpenAjoutValueFiltre,
takeProfitAjoutValueFiltre, TPOpenAjoutValueFiltre, capitaleRiskAjoutValueFiltre, psychologieAjoutValueFiltre,
generiqueAjoutValueFiltre, generiqueSelectorAjoutValueFiltre } from './Fonction';
import { recuperationRemplissageFiltre, recuperationTradeParFiltre } from './API';
import { verificationStandardOption } from './Standard';

const AjouteFiltre = () => {

    const username = sessionStorage.getItem('username');

    const [tableauFiltre, setTableauFiltre] = useState([]);
    const [tableauFiltreValue, setTableauFiltreValue] = useState([]);
    const [filtreData, setFiltreData] = useState([]);
    const [collectionValues, setCollectionValues] = useState('');
    const [collectionOption, setCollectionOption] = useState([]);
    const [strategieOption, setStrategieOption] = useState([]);

    const [filtreOptionsDynamique, setFiltreOptionsDynamique] = useState(filtreOptions);
    const [filtreEntreeValue, setFiltreEntreeValue] = useState();
    const [filtreTemporaireValue, setFiltreTemporaireValue] = useState();

    const [standardValue, setStandardValue] = useState('');
    //const [standardOptions, setStandardOptions] = useState([]);

    const [nomRemplissageValue, setNomRemplissageValue] = useState('');
    const [nomRemplissageOptions, setNomRemplissageOptions] = useState([]);

    // VARIABLES DES FILTRE DE BASE
    const [volumeValue, setVolumeValue] = useState(null);
    const [volumeRemainValue, setVolumeRemainValue] = useState(null);
    const [profitValue, setProfitValue] = useState(null);
    const [pointValue, setPointValue] = useState(null);
    const [tiltValue, setTiltValue] = useState(null);
    const [priceOpeningValue, setPriceOpeningValue] = useState(null);
    const [stopLossValue, setStopLossValue] = useState(null);
    const [SLOpenValue, setSLOpenValue] = useState(null);
    const [takeProfitValue, setTakeProfitValue] = useState(null);
    const [TPOpenValue, setTPOpenValue] = useState(null);
    const [capitalRiskValue, setCapitalRiskValue] = useState(null);
    const [psychologieValue, setPsychologieValue] = useState(null);
    const [winrateValue, setWinrateValue] = useState(null);
    const [drawDownValue, setDrawDownValue] = useState(null);
    const [riskRewardValue, setRiskRewardValue] = useState(null);
    const [strategieValue, setStrategieValue] = useState(null);
    const [orderTypeValue, setOrderTypeValue] = useState(null);
    const [Value, setValue] = useState(null);

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
            const recuperationData = await recuperationTradeParFiltre(tableauFiltreValue, collectionValues);
            setFiltreData(recuperationData);
        };
        fetchFiltreData();
    }, [symboleValue, typeTransactionValue, startDateValue, endDateValue, volumeValue, volumeRemainValue, profitValue, collectionValues]);

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
                    <div className='collectionOptions'>
                            <p>Collection</p>
                            <Selector options={collectionOption} value={collectionValues} onChange={(selectedValue) => {setCollectionValues(selectedValue)}}/>
                        </div>
                        <div className='standardOptions'>
                            <p>Standard</p>
                            <Selector options={standardOptions} value={standardValue} onChange={(selectedValue) => {verificationStandardOption(selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue)}}/>
                        </div>
                        {/*
                        <div className='remplissageOptions'>
                            <p>Remplissage automatique</p>
                            <Selector options={nomRemplissageOptions} value={nomRemplissageValue} onChange={(selectedValue) => {setNomRemplissageValue(selectedValue)}}/>
                        </div>
                        <div className='filtreOptionsDynamique'>
                            <p>Ajouter un filtre</p>
                            <div className='action'>
                                <Selector options={filtreOptionsDynamique} value={filtreTemporaireValue} onChange={(selectedValue) => {setFiltreTemporaireValue(selectedValue)}}/>
                                <Button label="+" onClick={() => {ajouterUnFitre(filtreTemporaireValue)}} />
                            </div>
                        </div>
                        <div className="filtreDeBaseGlobal">
                            <p>Ajouter un filtre de base</p>
                            <div className="action">
                                <Selector options={filtreEntreeOptions} value={filtreEntreeValue} onChange={(selectedValue) => {ajouterUnFitreDepart(selectedValue)}}/>
                            </div>
                        </div>
                        */}
                    </div>
                    <div className="filtre">
                        <div className="tableauFiltre">
                            <div className="fitlreDeBase">
                                {tableauFiltre.map((filtre, index) => (
                                    <div>
                                        {filtre.filtre === 'filtreDeBase' ? (
                                            <div>
                                                {filtre.type === 'volume' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Volume</p>
                                                        <Input type="number" value={volumeValue} placeholder={"Entrez un volume"} onChange={(event) => { volAjoutValueFiltre(event, index, setVolumeValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'volume_remain' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Volume remain</p>
                                                        <Input type="number" value={volumeRemainValue} placeholder={"Entrez un volume remain"} onChange={(event) => { volRemAjoutValueFiltre(event, index, setVolumeRemainValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'profit' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Profit</p>
                                                        <Input type="number" value={profitValue} placeholder={"Entrez un profit"} onChange={(event) => { proAjoutValueFiltre(event, index, setProfitValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'point' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Point</p>
                                                        <Input type="number" value={pointValue} placeholder={"Entrez un point"} onChange={(event) => { pointAjoutValueFiltre(event, index, setPointValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'tilt' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Tilt</p>
                                                        <Input type="number" value={tiltValue} placeholder={"Entrez un tilt"} onChange={(event) => { tiltAjoutValueFiltre(event, index, setTiltValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'priceOpening' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Price opening</p>
                                                        <Input type="number" value={priceOpeningValue} placeholder={"Entrez un price opening"} onChange={(event) => { priceOpeningAjoutValueFiltre(event, index, setPriceOpeningValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'stopLoss' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Stop loss</p>
                                                        <Input type="number" value={stopLossValue} placeholder={"Entrez un price stop loss"} onChange={(event) => { stopLossAjoutValueFiltre(event, index, setStopLossValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'SLOpen' ? (
                                                    <div className='carteFiltre'>
                                                        <p>SL open</p>
                                                        <Input type="number" value={SLOpenValue} placeholder={"Entrez un price SL open"} onChange={(event) => { SLOpenAjoutValueFiltre(event, index, setSLOpenValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'takeProfit' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Take profit</p>
                                                        <Input type="number" value={takeProfitValue} placeholder={"Entrez un price take profit"} onChange={(event) => { takeProfitAjoutValueFiltre(event, index, setTakeProfitValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'TPOpen' ? (
                                                    <div className='carteFiltre'>
                                                        <p>TP open</p>
                                                        <Input type="number" value={TPOpenValue} placeholder={"Entrez un price TP open"} onChange={(event) => { TPOpenAjoutValueFiltre(event, index, setTPOpenValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                                {filtre.type === 'Capitalrisk' ? (
                                                    <div className='carteFiltre'>
                                                        <p>Capital risk</p>
                                                        <Input type="number" value={capitalRiskValue} placeholder={"Entrez un price capital risk"} onChange={(event) => { capitaleRiskAjoutValueFiltre(event, index, setCapitalRiskValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                                    </div>
                                                ) : null}
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                            {tableauFiltre.map((filtre, index) => (
                                <div className='autreFiltre' key={index}>
                                    {filtre.type === 'date' ? (
                                        <div className='filtreDate carteFiltre'>
                                            <div className="datePicker">
                                                <div className="dateDebut">
                                                    <p>Date du début</p>
                                                    <DatePicker selected={startDateValue} onChange={(date) => {dateDebutAjoutValueFiltre(date, index, setStartDateValue, tableauFiltreValue, setTableauFiltreValue)}} />
                                                </div>
                                                <div className="dateFin">
                                                    <p>Date de fin</p>
                                                    <DatePicker selected={endDateValue} onChange={(date) => {dateFinAjoutValueFiltre(date, index, setEndDateValue, tableauFiltreValue, setTableauFiltreValue)}} />
                                                </div>
                                            </div>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === "typeOfTransaction" ? (
                                        <div className='carteFiltre'>
                                            <p>Type of transaction</p>
                                            <Selector options={typeOfTransactionOptions} value={typeTransactionValue} onChange={(selectedValue) => { typeTransactionAjoutValueFiltre(selectedValue, index, setTypeTransactionValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}}/>
                                        </div>
                                    ) : null}
                                    {filtre.type === "symbol" ? (
                                        <div className='carteFiltre'>
                                            <p>Symbol</p>
                                            <Input type="text" value={symboleValue} placeholder={"Entrez un symbol"} onChange={(event) => { symbolAjoutValueFiltre(event, index, setSymboleValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === "psychologie" ? (
                                        <div className='carteFiltre'>
                                            <p>Psychologie</p>
                                            <Selector options={psychologieOptions} value={psychologieValue} onChange={(selectedValue) => { generiqueSelectorAjoutValueFiltre(selectedValue, filtre.type, index, setPsychologieValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === "winrate" ? (
                                        <div className='carteFiltre'>
                                            <p>Winrate</p>
                                            <Input type="number" value={winrateValue} placeholder={"Entrez un winrate"} onChange={(event) => { generiqueAjoutValueFiltre(event, filtre.type, index, setWinrateValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === "balance" ? (
                                        <div className='carteFiltre'>
                                            <p>Draw down</p>
                                            <Input type="number" value={drawDownValue} placeholder={"Entrez un drawDown"} onChange={(event) => { generiqueAjoutValueFiltre(event, filtre.type, index, setDrawDownValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === "RR" ? (
                                        <div className='carteFiltre'>
                                            <p>Risk reward</p>
                                            <Input type="number" value={riskRewardValue} placeholder={"Entrez un riskReward"} onChange={(event) => { generiqueAjoutValueFiltre(event, filtre.type, index, setRiskRewardValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === "strategie" ? (
                                        <div className='carteFiltre'>
                                            <p>Strategie</p>
                                            <Selector options={strategieOption} value={strategieValue} onChange={(selectedValue) => { generiqueSelectorAjoutValueFiltre(selectedValue, filtre.type, index, setStrategieValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                            <Button label='Supprimer ce filtre' onClick={() => {supprimerUnFiltre(filtre.type)}} />
                                        </div>
                                    ) : null}
                                    {filtre.type === 'capitalrisk' ? (
                                        <div className='carteFiltre'>
                                            <p>Capital risk</p>
                                            <Input type="number" value={capitalRiskValue} placeholder={"Entrez un price capital risk"} onChange={(event) => { capitaleRiskAjoutValueFiltre(event, index, setCapitalRiskValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                        </div>
                                    ) : null}
                                    {filtre.type === 'orderType' ? (
                                        <div className='carteFiltre'>
                                            <p>Order type</p>
                                            <Selector options={orderTypeOptions} value={orderTypeValue} onChange={(selectedValue) => { generiqueSelectorAjoutValueFiltre(selectedValue, filtre.type, index, setOrderTypeValue, tableauFiltreValue, setTableauFiltreValue); }}/>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AjouteFiltre