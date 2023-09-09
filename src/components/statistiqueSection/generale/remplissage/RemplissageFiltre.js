import React, { useState, useEffect } from 'react';
import Button from '../../../inputComposant/Button';
import Selector from '../../../inputComposant/Selector';
import Input from '../../../inputComposant/Input';
import { filtreEntreeOptions, filtreOptions, typeOfTransactionOptions } from './Options';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../css/statistique/generale/remplissage.css';

import { symbolAjoutValueFiltre, typeTransactionAjoutValueFiltre, dateDebutAjoutValueFiltre, dateFinAjoutValueFiltre,
volAjoutValueFiltre, volRemAjoutValueFiltre, proAjoutValueFiltre, nomRemplissageAjout} from './Fonction';

import { creationRemplissageFiltre, recuperationNomRemplissageFiltre, suppressionRemplissageFiltre } from './API';

const RemplissageFiltre = () => {

    const username = sessionStorage.getItem('username');

    const [remplissageAffichage, setRemplissageAffichage] = useState('cache');
    const [creationRemplissageStatus, setCreationRemplissageStatus] = useState('');
    const [nomRemplissageOptions, setNomRemplissageOptions] = useState([]);

    const [tableauFiltre, setTableauFiltre] = useState([]);
    const [tableauFiltreValue, setTableauFiltreValue] = useState([]);

    const [filtreOptionsDynamique, setFiltreOptionsDynamique] = useState(filtreOptions);
    const [filtreEntreeValue, setFiltreEntreeValue] = useState();
    const [filtreTemporaireValue, setFiltreTemporaireValue] = useState();

    // VARIABLES DES INPUTS
    const [nomRemplissage, setNomRemplissage] = useState('');
    const [symboleValue, setSymboleValue] = useState('');
    const [typeTransactionValue, setTypeTransactionValue] = useState('');
    const [startDateValue, setStartDateValue] = useState(null);
    const [endDateValue, setEndDateValue] = useState(null);
    const [volumeValue, setVolumeValue] = useState(null);
    const [volumeRemainValue, setVolumeRemainValue] = useState(null);
    const [profitValue, setProfitValue] = useState(null);



    //===================================== SYSTEME FILTRE =====================================//



    // AJOUTER FILTRE
    const ajouterUnFitre = (filtreTemporaireValue) => {
        const nouveauFiltre = {type: filtreTemporaireValue, value: null};
        setTableauFiltre([...tableauFiltre, nouveauFiltre]);
        setFiltreTemporaireValue('');

        const nouveaufiltreOptionsDynamique = filtreOptionsDynamique.filter((filtre) => filtre.value !== filtreTemporaireValue);
        setFiltreOptionsDynamique(nouveaufiltreOptionsDynamique);
        console.log(nouveaufiltreOptionsDynamique);
        console.log(tableauFiltre);
    }

    // AJOUTER FILTRE DEPART
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
    
    // SUPPRIMER FILTRE
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
    };

    //===================================== API REMPLISSAGE =====================================//

    // RECUPERATION NOM REMPLISSAGE
    const fetchNomRemplissage = async () => {
        const nomRemplissageData = await recuperationNomRemplissageFiltre();
        setNomRemplissageOptions(nomRemplissageData);
    };

    useEffect(() => {
        fetchNomRemplissage();
    }, [username]);

    //  CREATION REMPLISSAGE
    const creationRemplissage = async () => {  
        try {
            const reponse = await creationRemplissageFiltre(username, nomRemplissage, tableauFiltreValue);
            setCreationRemplissageStatus('Creation du filtre appliquées avec succès.');
            fetchNomRemplissage();
        } catch (error) {setCreationRemplissageStatus('erreur');
        }
    };

    // SUPPRESSION REMPLISSAGE
    const supprimerRemplissage = async (nomRemplissage) => {
        try {
            const response = await suppressionRemplissageFiltre(nomRemplissage);
            fetchNomRemplissage();
            console.log(response.message);
        } catch (error) {
            console.log(`Erreur : ${error.message}`);
        }
    };

    return (
        <div className='ajoutRemplisseurFiltreConteneur'>
            <h3>Remplissage automatique des filtres</h3>
            <Button label='Creer un nouveau remplissage' onClick={() => {setRemplissageAffichage('montre')}}/>
            <div className="remplissageListe">
                {nomRemplissageOptions.map((nomRemplissage, index) => (
                    <div className='carteRemplissageListe'>
                        <div className="carteRemplissage">
                            <p>{nomRemplissage}</p>
                        </div>
                        <Button label='supprimer' onClick={() => {supprimerRemplissage(nomRemplissage)}} />
                    </div>
                ))}
            </div>
            { remplissageAffichage === 'montre' ? (
                <div className="cadreFiltreConteneurGlobal">
                    <div className="filtreConteneurGlobal">
                        <div className="filtreConteneur">
                            <div className="nomRemplissage">
                                <p>Nom du remplissage</p>
                                <Input type="text" value={nomRemplissage} placeholder={"Entrez un nom pour le remplissage"} onChange={(event) => { setNomRemplissage(event.target.value) }}/>
                            </div>
                            <div className="ajouterFiltre">
                                <p>Filtre de base</p>
                                <Selector options={filtreEntreeOptions} value={filtreEntreeValue} onChange={(selectedValue) => {ajouterUnFitreDepart(selectedValue)}}/>
                                <p>Filtre annexes</p>
                                <Selector options={filtreOptionsDynamique} value={filtreTemporaireValue} onChange={(selectedValue) => {setFiltreTemporaireValue(selectedValue)}}/>
                                <Button label="+" onClick={() => {ajouterUnFitre(filtreTemporaireValue)}} />
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
                                        <div key={index}>
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
                        <div className="bas">
                            <Button label='Fermer' onClick={() => {setRemplissageAffichage('cache')}}/>
                            <Button label='Creer le remplissage' onClick={() => {creationRemplissage()}}/>
                            <p>{creationRemplissageStatus}</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default RemplissageFiltre