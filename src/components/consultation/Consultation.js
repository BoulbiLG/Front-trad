//import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Selector from '../Selector';
//import Input from '../Input'
//import CaseRadio from '../CaseRadio';
import '../../css/journal/consultation.css';
import { fetchJournalData } from './API';
import { fetchCollectionOptions } from './Options';

const Consultation = () => {

    const [collectionValues, setCollectionValues] = useState([]);
    const [collectionOption, setCollectionOption] = useState([]);
    const [journalData, setJournalData] = useState([]);
    const [tradeAffichage, setTradeAffichage] = useState('cache');
    const [tradeIDpopup, setTradeIDpopup] = useState();

    const masquerTrade = () => {setTradeAffichage('cache')};
    const afficherTrade = (selectedData) => {
        setTradeAffichage('montre');
        setTradeIDpopup(selectedData);
    };

    const username = sessionStorage.getItem('username');

    const changementSelectorChangeCollection = (selectedValue) => {setCollectionValues(selectedValue);};

    useEffect(() => {
        fetchJournalData(username, collectionValues)
        .then((data) => setJournalData(data))
        .catch(() => setJournalData([]));
    }, [username, collectionValues]);

    useEffect(() => {
        const fetchCollection = async () => {
            const collectionOptions = await fetchCollectionOptions(username);
            setCollectionOption(collectionOptions);
            setCollectionValues(collectionOptions[0].value);
        };
        fetchCollection();
    }, [username]);

    return (
        <div className="consultation">
            <h3>Consultation</h3>
            <Selector options={collectionOption} value={collectionValues} onChange={changementSelectorChangeCollection} />
            <div className="carteConsultation">
                {journalData.map(entry => (
                    <div className="tradConteneurConsultation" key={entry._id} onClick={() => afficherTrade(entry)}>
                        <div className='donnee'>
                            <p className='valeurID valeur'>ID : {entry._id}</p><p className='valeurTicketnumber valeur'>ticket number : {entry.ticketNumber}</p>
                            <p className='valeurVolume valeur'>volume : {entry.volume}</p><p className='valeurDate valeur'>date d'ouverture : {entry.dateAndTimeOpening}</p>
                        </div>
                    </div>
                ))}
            </div>
            {tradeAffichage === 'montre' ? (
                <div className="cadreConsultation">
                    <div className="contenuMontreConsultation">
                        <p>ID: {tradeIDpopup._id}</p>
                        <p>Annonce Economique: {tradeIDpopup.annonceEconomique}</p>
                        <p>Balance: {tradeIDpopup.balance}</p>
                        <div className="basConsultation">
                            <Button label='Fermer' onClick={masquerTrade}/>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>           
    );
}

export default Consultation;
