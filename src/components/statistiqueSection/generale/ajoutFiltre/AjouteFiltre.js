import React, { useEffect, useState } from 'react';
import Button from '../../../inputComposant/Button';
import Selector from '../../../inputComposant/Selector';
import Input from '../../../inputComposant/Input';
import { filtreEntreeOptions, filtreOptions, typeOfTransactionOptions, recuperationNomRemplissageFiltre, standardOptions, fetchCollectionOptions } from './Options';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../css/statistique/generale/ajoutFiltre.css';
import { symbolAjoutValueFiltre, typeTransactionAjoutValueFiltre, dateDebutAjoutValueFiltre, dateFinAjoutValueFiltre,
volAjoutValueFiltre, volRemAjoutValueFiltre, proAjoutValueFiltre } from './Fonction';
import { recuperationRemplissageFiltre, recuperationTradeParFiltre } from './API';
import { verificationStandardOption } from './Standard';

const AjouteFiltre = () => {

    const username = sessionStorage.getItem('username');

    const [tableauFiltre, setTableauFiltre] = useState([]);
    const [tableauFiltreValue, setTableauFiltreValue] = useState([]);
    const [filtreData, setFiltreData] = useState([]);
    const [collectionValues, setCollectionValues] = useState('');
    const [collectionOption, setCollectionOption] = useState([]);

    const [filtreOptionsDynamique, setFiltreOptionsDynamique] = useState(filtreOptions);
    const [filtreEntreeValue, setFiltreEntreeValue] = useState();
    const [filtreTemporaireValue, setFiltreTemporaireValue] = useState();

    const [standardValue, setStandardValue] = useState('');
    //const [standardOptions, setStandardOptions] = useState([]);

    const [nomRemplissageValue, setNomRemplissageValue] = useState('');
    const [nomRemplissageOptions, setNomRemplissageOptions] = useState([]);

    // VARIABLES DES INPUTS
    const [symboleValue, setSymboleValue] = useState('');
    const [typeTransactionValue, setTypeTransactionValue] = useState('');
    const [startDateValue, setStartDateValue] = useState(null);
    const [endDateValue, setEndDateValue] = useState(null);
    const [volumeValue, setVolumeValue] = useState(null);
    const [volumeRemainValue, setVolumeRemainValue] = useState(null);
    const [profitValue, setProfitValue] = useState(null);

    // RECUPERATION COLLECTION
    useEffect(() => {
        const fetchCollection = async () => {
            const collectionOptions = await fetchCollectionOptions(username);
            setCollectionOption(collectionOptions);
        }
        fetchCollection();
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
                            <Selector options={standardOptions} value={standardValue} onChange={(selectedValue) => {verificationStandardOption(selectedValue, setStandardValue, setTableauFiltre)}}/>
                        </div>
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