import React, { useEffect, useState } from 'react';
//import CaseRadio from '../CaseRadio';
import Button from '../Button';
//import Selector from '../Selector';
//import Input from '../Input';
import axios from 'axios';
import '../../css/strategie/recuperationRemplissageDefaut.css';
import { recuperationRemplissage } from './API';

const RecuperationRemplissageDefaut = ({raffraichissementRecuperation}) => {

    const username = sessionStorage.getItem('username');

    const [journalData, setJournalData] = useState([]);
    const [remplissageIDpopup, setRemplissageIDpopup] = useState();

    const [recuperationRemplissageDefautAffichage, setRecuperationRemplissageDefautAffichage] = useState('');
    const masquerRemplissageDefaut = () => {setRecuperationRemplissageDefautAffichage('cache')};

    const affichageRemplissageDefaut = (selectedData) => {
        setRecuperationRemplissageDefautAffichage('montre');
        setRemplissageIDpopup(selectedData);
    };

    const suppressionRemplissageDefaut = async (nomRemplissageDefaut) => {
        try {
            await axios.delete('https://apipython2.onrender.com/suppressionRemplissage', {
                data: { username: username, nomRemplissageDefaut: nomRemplissageDefaut }
            });
            recuperationRemplissage(username)
            .then((data) => setJournalData(data))
            .catch(() => setJournalData([]));
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        recuperationRemplissage(username)
        .then((data) => setJournalData(data))
        .catch(() => setJournalData([]));
    }, [username, raffraichissementRecuperation]);

    return (
        <div className="contenuRecuperationRemplissage">
            <div className="carteRecuperationRemplissage">
                {journalData.map(entry => (
                    <div className="enveloppe">
                        <div className="RecuperationRemplissage" key={entry._id} onClick={() => affichageRemplissageDefaut(entry)}>
                            <div className='donnee'>
                                <p className='valeurID valeur'>Nom du remplissage : {entry.nomRemplissageDefaut}</p>
                            </div>
                        </div>
                        <Button label='Supprimer ce remplissage' onClick={() => suppressionRemplissageDefaut(entry.nomRemplissageDefaut)}/>
                    </div>
                ))}
            </div>
            {recuperationRemplissageDefautAffichage === 'montre' ? (
                <div className="cadreRecuperationRemplissage">
                    <div className="contenuMontreRecuperationRemplissage">
                        <div className="info">
                            <div className="InputRecuperationRemplissage">
                                <div className="IT"><p>Etat psychologique : </p><p>{remplissageIDpopup.psychologie}</p></div>
                                <div className="IT"><p>Position : </p><p>{remplissageIDpopup.position}</p></div>
                                <div className="IT"><p>TypeOrdre : </p><p>{remplissageIDpopup.typeOrdre}</p></div>
                                <div className="IT"><p>VioleStrategie : </p><p>{remplissageIDpopup.violeStrategie}</p></div>
                                <div className="IT"><p>Sortie : </p><p>{remplissageIDpopup.sortie}</p></div>
                                <div className="IT"><p>Indicateur 1 : </p><p>{remplissageIDpopup.indicateur1}</p></div>
                                <div className="IT"><p>Indicateur 2 : </p><p>{remplissageIDpopup.indicateur2}</p></div>
                                <div className="IT"><p>Indicateur 3 : </p><p>{remplissageIDpopup.indicateur3}</p></div>
                                <div className="IT"><p>Strategie : </p><p>{remplissageIDpopup.strategie}</p></div>
                                <div className="IT"><p>Time d'entrée : </p><p>{remplissageIDpopup.timeEntree}</p></div>
                                <div className="IT"><p>Time de setup : </p><p>{remplissageIDpopup.timeSetup}</p></div>
                                <div className="IT"><p>Nom du remplissage : </p><p>{remplissageIDpopup.nomRemplissageDefaut}</p></div>
                            </div>
                        </div>
                        <div className="basRecuperationRemplissage">
                            <Button label='Fermer' onClick={masquerRemplissageDefaut}/>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default RecuperationRemplissageDefaut