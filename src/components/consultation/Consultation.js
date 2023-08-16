//import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Selector from '../Selector';
import Input from '../Input'
//import CaseRadio from '../CaseRadio';
import '../../css/journal/consultation.css';
import { fetchJournalData } from './API';
import { fetchCollectionOptions } from './Options';
import RecuperationImage from './RecuperationImage';

const Consultation = () => {

    const [collectionValues, setCollectionValues] = useState([]);
    const [collectionOption, setCollectionOption] = useState([]);
    const [journalData, setJournalData] = useState([]);
    const [tradeAffichage, setTradeAffichage] = useState('cache');
    const [tradeIDpopup, setTradeIDpopup] = useState();
    const [rechercheDonnee, setRechercheDonnee] = useState('');

    const masquerTrade = () => {setTradeAffichage('cache')};
    const afficherTrade = (selectedData) => {
        setTradeAffichage('montre');
        setTradeIDpopup(selectedData);
    };

    const username = sessionStorage.getItem('username');

    const changementSelectorChangeCollection = (selectedValue) => {setCollectionValues(selectedValue);};

    useEffect(() => {
        fetchJournalData(username, collectionValues, rechercheDonnee)
        .then((data) => setJournalData(data))
        .catch(() => setJournalData([]));
    }, [username, collectionValues, rechercheDonnee]);

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
            <Input placeholder='Recherchez un trade avec un tag' value={rechercheDonnee} onChange={(event) => {setRechercheDonnee(event.target.value)}} />
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
                        <div className="info">
                            <div className="texte">
                                <p>ID: {tradeIDpopup._id}</p>
                                <p>ticketNumber: {tradeIDpopup.ticketNumber}</p>
                                <p>identifier: {tradeIDpopup.identifier}</p>
                                <p>magicNumber: {tradeIDpopup.magicNumber}</p>
                                <p>dateAndTimeOpening: {tradeIDpopup.dateAndTimeOpening}</p>
                                <p>typeOfTransaction: {tradeIDpopup.typeOfTransaction}</p>
                                <p>orderType: {tradeIDpopup.orderType}</p>
                                <p>volume: {tradeIDpopup.volume}</p>
                                <p>volume_remain: {tradeIDpopup.volume_remain}</p>
                                <p>symbol: {tradeIDpopup.symbol}</p>
                                <p>priceOpening: {tradeIDpopup.priceOpening}</p>
                                <p>stopLoss: {tradeIDpopup.stopLoss}</p>
                                <p>takeProfit: {tradeIDpopup.takeProfit}</p>
                                <p>dateAndTimeClosure: {tradeIDpopup.dateAndTimeClosure}</p>
                                <p>priceClosure: {tradeIDpopup.priceClosure}</p>
                                <p>swap: {tradeIDpopup.swap}</p>
                                <p>profit: {tradeIDpopup.profit}</p>
                                <p>commision: {tradeIDpopup.commision}</p>
                                <p>closurePosition: {tradeIDpopup.closurePosition}</p>
                                <p>Balance: {tradeIDpopup.balance}</p>
                                <p>broker: {tradeIDpopup.broker}</p>
                                <p>TPR: {tradeIDpopup.TPR}</p>
                                <p>psychologie: {tradeIDpopup.psychologie}</p>
                                <p>annonceEconomique: {tradeIDpopup.annonceEconomique}</p>
                                <p>position: {tradeIDpopup.position}</p>
                                <p>durée: {tradeIDpopup.durée}</p>
                                <p>typeOrdre: {tradeIDpopup.typeOrdre}</p>
                                <p>violeStrategie: {tradeIDpopup.violeStrategie}</p>
                                <p>sortie: {tradeIDpopup.sortie}</p>
                                <p>indicateur1: {tradeIDpopup.indicateur1}</p>
                                <p>indicateur2: {tradeIDpopup.indicateur2}</p>
                                <p>indicateur3: {tradeIDpopup.indicateur3}</p>
                                <p>strategie: {tradeIDpopup.strategie}</p>
                                <p>timeEntree: {tradeIDpopup.timeEntree}</p>
                                <p>timeSetup: {tradeIDpopup.timeSetup}</p>
                                <p>journeeDeTilt: {tradeIDpopup.journeeDeTilt}</p>
                                <p>sortieManuelle: {tradeIDpopup.sortieManuelle}</p>
                                <p>tag: {tradeIDpopup.tag}</p>
                                <p>note: {tradeIDpopup.note}</p>
                            </div>
                            <div className="photo">
                                <RecuperationImage imageId={tradeIDpopup._id}/>
                            </div>
                        </div>
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
