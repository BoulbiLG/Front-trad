import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import Button from '../../inputComposant/Button';
import Selector from '../../inputComposant/Selector';
import Input from '../../inputComposant/Input'
import '../../../css/journal/ajouteTrade.css';
import { typeOfTransactionOptions, orderTypeOptions, closurePositionOptions, fetchCollectionOptions } from './Options'
// recuperation options de ./Options.js
import { ajoutManuelTrade } from './API';
import { useGlobalTrade } from '../../../variableGlobal/variableTrade';

const AjouteTradeComponent = () => {

    // RAFFRAICHISSEMENT AUTO
    const { globalTrade, setGlobalTrade } = useGlobalTrade();

    const usernameSession = sessionStorage.getItem('username');

    const [ajoutTradeStatus, setAjoueTradeStatus] = useState('');
    const [tradeStatus, setTradeStatus] = useState("cache"); // cache ou montre
    const afficherAjouteTrade = () => {setTradeStatus("affiche");};const masquerAjouteTrade = () => {setTradeStatus("cache");};

    const [orderType, setOrderType] = useState('BUY');
    const [closurePosition, setClosurePosition] = useState('Close');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');

    const changementDateDebut = (event) => {
        const formattedDateDebut = format(new Date(event.target.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        setDateDebut(formattedDateDebut);
    };
      
      const changementDateFin = (event) => {
        const formattedDateFin = format(new Date(event.target.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        setDateFin(formattedDateFin);
    };

    const [collectionValues, setCollectionValues] = useState('');
    const [collectionOption, setCollectionOption] = useState('');
    const [magicNumber, setMagicNumber] = useState('');
    const [volume, setVolume] = useState('');
    const [symbole, setSymbole] = useState('');
    const [priceOpening, setPriceOpening] = useState('');
    const [stopLoss, setStopLoss] = useState('');
    const [takeProfit, setTakeProfit] = useState('');
    const [priceClosure, setPriceClosure] = useState('');
    const [swap, setSwap] = useState('');
    const [profit, setProfit] = useState('');
    const [commission, setCommission] = useState('');
    const [balance, setBalance] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [typeTransaction, setTypeTransaction] = useState('Buy');
    const [ticketNumber, setTicketNumber] = useState('');

    useEffect(() => {
        const fetchCollection = async () => {
            const collectionOptions = await fetchCollectionOptions(usernameSession);
            setCollectionOption(collectionOptions);
            
            if (collectionOptions.length > 0) {
                setCollectionValues(collectionOptions[0].value);
            }
        };
        fetchCollection();
    }, [usernameSession]);

    const ajouterTrade = async () => {
        try {
            const ajoutTradeStatus = await ajoutManuelTrade( collectionValues, magicNumber, volume, symbole, priceOpening,
            stopLoss, takeProfit, priceClosure, swap, profit, commission, balance, typeTransaction, orderType, identifier, closurePosition, ticketNumber, 
            dateDebut, dateFin
            );
            setAjoueTradeStatus(ajoutTradeStatus);
            console.log(usernameSession)
            const randomVariable = Math.random();
            setGlobalTrade(randomVariable);
            console.log(setGlobalTrade);
            toast.success(ajoutTradeStatus, { position: "top-left", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});
        } catch (error) {
            toast.error('Une erreur est survenue lors de l\'application des modifications.', { position: "top-left", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});
        }
    };
    
    return (
        <div className="ajouteTrade">
            {tradeStatus === "cache" ? (
                <Button label='Ajouter manuellement un trade' onClick={afficherAjouteTrade}/>
            ) : null }
            {tradeStatus === "affiche" ? (
                    <div className="cadre">
                        <div className="contenuMontre">
                            <div className="IT"><p>Collection</p><Selector options={collectionOption} value={collectionValues} onChange={(selected) => {setCollectionValues(selected)}} /></div>
                            <div className="IT"><p>Magic number</p><Input type="number" typeValeur="number" placeholder={"Magic Number"} value={magicNumber} onChange={(event) => {setMagicNumber(event.target.value)}}/></div>
                            <div className="IT"><p>Volume</p><Input type="number" typeValeur="number" placeholder={"Volume"} value={volume} onChange={(event) => {setVolume(event.target.value)}}/></div>
                            <div className="IT"><p>Symbole</p><Input type="text" placeholder={"Symbole"} value={symbole} onChange={(event) => {setSymbole(event.target.value)}}/></div>
                            <div className="IT"><p>Price opening</p><Input type="number" typeValeur="number" placeholder={"Price opening"} value={priceOpening} onChange={(event) => {setPriceOpening(event.target.value)}}/></div>
                            <div className="IT"><p>Stop loss</p><Input type="number" typeValeur="number" placeholder={"Stop loss"} value={stopLoss} onChange={(event) => {setStopLoss(event.target.value)}}/></div>
                            <div className="IT"><p>Take profit</p><Input type="number" typeValeur="number" placeholder={"Take profit"} value={takeProfit} onChange={(event) => {setTakeProfit(event.target.value)}}/></div>
                            <div className="IT"><p>Price closure</p><Input type="number" typeValeur="number" placeholder={"Price closure"} value={priceClosure} onChange={(event) => {setPriceClosure(event.target.value)}}/></div>
                            <div className="IT"><p>Swap</p><Input type="number" typeValeur="number" placeholder={"Swap"} value={swap} onChange={(event) => {setSwap(event.target.value)}}/></div>
                            <div className="IT"><p>Profit</p><Input type="number" typeValeur="number" placeholder={"Profit"} value={profit} onChange={(event) => {setProfit(event.target.value)}}/></div>
                            <div className="IT"><p>Commission</p><Input type="number" typeValeur="number" placeholder={"Commission"} value={commission} onChange={(event) => {setCommission(event.target.value)}}/></div>
                            <div className="IT"><p>Balance</p><Input type="number" typeValeur="number" placeholder={"Balance"} value={balance} onChange={(event) => {setBalance(event.target.value)}}/></div>
                            <div className="IT"><p>Identifier</p><Input type="number" typeValeur="number" placeholder={"Identifier"} value={identifier} onChange={(event) => {setIdentifier(event.target.value)}}/></div>
                            <div className="IT"><p>Ticket number</p><Input type="number" typeValeur="number" placeholder={"Ticket number"} value={ticketNumber} onChange={(event) => {setTicketNumber(event.target.value)}}/></div>
                            <div className="IT"><p>Type of transaction</p><Selector options={typeOfTransactionOptions} value={typeTransaction} onChange={(selected) => {setTypeTransaction(selected);}} /></div>
                            <div className="IT"><p>Order type</p><Selector options={orderTypeOptions} value={orderType} onChange={(selected) => {setOrderType(selected);}} /></div>
                            <div className="IT"><p>Closure position</p><Selector options={closurePositionOptions} value={closurePosition} onChange={(selected) => {setClosurePosition(selected);}} /></div>
                            <input type="datetime-local"id="datetime"name="datetime"value={dateDebut}onChange={(event) => changementDateDebut(event)}/>
                            <input type="datetime-local"id="datetime2"name="datetime2"value={dateFin}onChange={(event) => changementDateFin(event)}/>
                            <div className="bas">
                                <Button className="bouton" label='Ajouter ce trade' onClick={ajouterTrade}/>
                                <Button className="bouton" label='Annuler' onClick={masquerAjouteTrade}/>
                            </div>
                            <p>{ajoutTradeStatus}</p>
                        </div>
                    </div>
            ) : null }
        </div>
    );
}

export default AjouteTradeComponent;
