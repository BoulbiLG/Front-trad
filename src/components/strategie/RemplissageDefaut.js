import React, { useEffect, useState } from 'react';
import CaseRadio from '../CaseRadio';
import Button from '../Button';
import Selector from '../Selector';
import Input from '../Input';
import RecuperationRemplissageDefaut from './RecuperationRemplissageDefaut';
import '../../css/strategie/remplissageDefaut.css';

import { applyModifications, fetchStrategieOptions } from './API';
import { psychologieOptions, timeFrameOptions, fetchIndicateurOptions } from './Options';

const RemplissageDefaut = () => {

    const [remplissageDefautAffichage, setRemplissageDefautAffichage] = useState('');
    const masquerRemplissageDefaut = () => {setRemplissageDefautAffichage('cache')};
    const affichageRemplissageDefaut = () => {setRemplissageDefautAffichage('montre')};

    const [modificationStatus, setModificationStatus] = useState('');

    const [nomRemplissageDefaut, setNomRemplissageDefaut] = useState('');

    const [raffraichissementRecuperation, setRaffraichissementRecuperation] = useState();
    const genererNombreAleatoire = () => {
        const nombreAleatoire = Math.floor(Math.random() * 1000) + 1;
        setRaffraichissementRecuperation(nombreAleatoire);
    };

    const [annonceEcoCaseValeurs, setAnnonceEcoCaseValeurs] = useState([]);
    const [positionValues, setPositionValues] = useState([]);
    const [typeOrdreValues, setTypeOrdreValues] = useState([]);
    const [violeStrategieValues, setVioleStrategieValues] = useState([]);
    const [sortieValues, setSortieValues] = useState([]);
    const [psychologieValues, setPsychologieValues] = useState([]);
    const [indicateur1Values, setIndicateur1Values] = useState([]);
    const [indicateur2Values, setIndicateur2Values] = useState([]);
    const [indicateur3Values, setIndicateur3Values] = useState([]);
    const [strategieSelectedOption, setStrategieSelectedOption] = useState([]);
    const [strategieValues, setStrategieValues] = useState([]);
    const [timeEntreeValues, setTimeEntreeValues] = useState([]);
    const [timeSetupValues, setTimeSetupValues] = useState([]);

    const [indicateurOptions, setIndicateurOptions] = useState([]);

    const username = sessionStorage.getItem('username');

    useEffect(() => {
        const fetchOptions = async () => {const options = await fetchStrategieOptions(username, setStrategieValues);setStrategieValues(options);};
        const fetchIndicateur = async () => {const indicateurOptions = await fetchIndicateurOptions();setIndicateurOptions(indicateurOptions);};
    fetchOptions();fetchIndicateur();}, [username]);

    const appliquerModifications = async () => {try {const modificationStatus = await applyModifications(
        annonceEcoCaseValeurs, psychologieValues, positionValues, typeOrdreValues, violeStrategieValues, sortieValues, indicateur1Values, 
        indicateur2Values, indicateur3Values, strategieSelectedOption, timeEntreeValues, timeSetupValues, nomRemplissageDefaut,
        username
      );setModificationStatus(modificationStatus); genererNombreAleatoire();
    } catch (error) {setModificationStatus('Une erreur est survenue lors de l\'application des modifications.');}};

    return (
        <div className="contenuRemplissage">
            <Button label='Créer un nouveau remplissage' onClick={affichageRemplissageDefaut} />
            { remplissageDefautAffichage === 'montre' ? (
                <div className='cadreRemplissage'>
                    <div className="contenuMontreRemplissage">
                        <div className="input">
                            <div className="IT"><p>Entrez le nom du remplissage par défaut</p><Input placeholder='Entrez un nom' value={nomRemplissageDefaut} onChange={(event) => {setNomRemplissageDefaut(event.target.value)}} /></div>
                            <div className="IT"><p>Trade durant une annonce économique</p><CaseRadio titre={`Trade durant une annonce économique`}nomOption1="oui"nomOption2="non"selectedCaseOption={annonceEcoCaseValeurs}onChange={(seleted) => {setAnnonceEcoCaseValeurs(seleted)}}/></div>
                            <div className="IT"><p>Position</p><CaseRadio titre={`position`}nomOption1="Signal"nomOption2="Influence"selectedCaseOption={positionValues}onChange={(seleted) => {setPositionValues(seleted)}}/></div>
                            <div className="IT"><p>Type d'ordre</p><CaseRadio titre={`Type d'ordre`}nomOption1="Market"nomOption2="Conditional"selectedCaseOption={typeOrdreValues}onChange={(seleted) => {setTypeOrdreValues(seleted)}}/></div>
                            <div className="IT"><p>Violation de la stratégie</p><CaseRadio titre={`Violation de la stratégie`}nomOption1="oui"nomOption2="non"selectedCaseOption={violeStrategieValues}onChange={(seleted) => {setVioleStrategieValues(seleted)}}/></div>
                            <div className="IT"><p>Type de sortie</p><CaseRadio titre={`Type de sortie`}nomOption1="Technique"nomOption2="Emotion"selectedCaseOption={sortieValues}onChange={(seleted) => {setSortieValues(seleted)}}/></div>
                            <div className="IT"><p>Etat psychologique</p><Selector options={psychologieOptions}value={psychologieValues}onChange={(selected) => {setPsychologieValues(selected)}}/></div>
                            <div className="IT"><p>Time frame d'entrée</p><Selector options={timeFrameOptions}value={timeEntreeValues}onChange={(selected) => {setTimeEntreeValues(selected)}}/></div>
                            <div className="IT"><p>Time frame setup</p><Selector options={timeFrameOptions}value={timeSetupValues}onChange={(selected) => {setTimeSetupValues(selected)}}/></div>
                            <div className="IT"><p>indicateur 1</p><Selector options={indicateurOptions}value={indicateur1Values}onChange={(selected) => {setIndicateur1Values(selected)}}/></div>
                            <div className="IT"><p>indicateur 2</p><Selector options={indicateurOptions}value={indicateur2Values}onChange={(selected) => {setIndicateur2Values(selected)}}/></div>
                            <div className="IT"><p>indicateur 3</p><Selector options={indicateurOptions}value={indicateur3Values}onChange={(selected) => {setIndicateur3Values(selected)}}/></div>
                            <div className="IT"><p>Strategie</p><Selector options={strategieValues}value={strategieSelectedOption}onChange={(selected) => {setStrategieSelectedOption(selected)}}/></div>
                        </div>
                        <div className="basRemplissage">
                            <Button label='Enregistrer' onClick={appliquerModifications} />
                            <Button label='Annuler' onClick={masquerRemplissageDefaut} />
                            <p>{modificationStatus}</p>
                        </div>
                    </div>
                </div>
            ) : null }
            <RecuperationRemplissageDefaut raffraichissementRecuperation={raffraichissementRecuperation}/>
        </div>
    )
}

export default RemplissageDefaut