import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../Button';
import Input from '../Input';
import Selector from '../Selector';
import '../../css/journal/modifierTrade.css';
import { recuperationUnTrade, correctionTradeSeul } from './API';
import { typeOfTransactionOptions, orderTypeOptions, closurePositionOptions } from './Options';

const ModifierTrade = ({ id, collection }) => {

    const [modifierTradeAffichage, setModifierTradeAffichage] = useState("cache"); // cache ou montre

    const afficherModifierTrade = () => {setModifierTradeAffichage("affiche");};
    const masquerModifierTrade = () => {setModifierTradeAffichage("cache");};

    /*const changementDateDebut = (event) => {
        const formattedDateDebut = format(new Date(event.target.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        setDateDebut(formattedDateDebut);
        console.log("Formatted Date Debut:", formattedDateDebut);
    };
    const changementDateFin = (event) => {const formattedDateFin = format(new Date(event.target.value), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");setDateFin(formattedDateFin);};
*/
    const [correctionTradeStatus, setCorrectionTradeStatus] = useState('');
    const [orderType, setOrderType] = useState('BUY');
    const [closurePosition, setClosurePosition] = useState('Close');
    //const [dateDebut, setDateDebut] = useState('');
    //const [dateFin, setDateFin] = useState('');

    const [magicNumber, setMagicNumber] = useState(null);
    const [volume, setVolume] = useState();
    const [symbole, setSymbole] = useState(null);
    const [priceOpening, setPriceOpening] = useState(null);
    const [stopLoss, setStopLoss] = useState(null);
    const [takeProfit, setTakeProfit] = useState(null);
    const [priceClosure, setPriceClosure] = useState(null);
    const [swap, setSwap] = useState(null);
    const [profit, setProfit] = useState(null);
    const [commission, setCommission] = useState(null);
    const [balance, setBalance] = useState(null);
    const [identifier, setIdentifier] = useState(null);
    const [typeTransaction, setTypeTransaction] = useState(null); 
    const [ticketNumber, setTicketNumber] = useState(null);

    // recuperation du trade unique
    useEffect(() => {
        const recuperationUnTradebrut = async (id, collection) => {
            try {
                const response = await recuperationUnTrade(id, collection);
                setMagicNumber(response[0].magicNumber);
                setVolume(response[0].volume);
                setSymbole(response[0].symbol);
                setPriceOpening(response[0].priceOpening);
                setStopLoss(response[0].stopLoss);
                setTakeProfit(response[0].takeProfit);
                setPriceClosure(response[0].priceClosure);
                setSwap(response[0].swap);
                setProfit(response[0].profit);
                setCommission(response[0].commision);
                setBalance(response[0].balance);
                setIdentifier(response[0].identifier);
                setTypeTransaction(response[0].typeOfTransaction);
                setTicketNumber(response[0].ticketNumber);
                //setDateDebut(response[0].dateAndTimeOpening);
                //setDateFin(response[0].dateAndTimeClosure);
            } catch (error) {
                console.log('Erreur lors de la récupération des données du journal :', error);
            }
        };

        recuperationUnTradebrut(id, collection);
    }, [id, collection]);

    const correctionTrade = async () => {
        try {
            // Convertissez le champ volume en nombre si nécessaire
            const numericVolume = parseFloat(volume);
            
            // Vérifiez si la valeur est proche de zéro (en dessous d'un certain seuil)
            const epsilon = 0.0001; // Seuil pour considérer la valeur comme zéro
            const correctedVolume = Math.abs(numericVolume) < epsilon ? 0.0 : numericVolume;
            
            const correctionTradeStatus = await correctionTradeSeul(
                collection, id, magicNumber, correctedVolume, symbole, priceOpening,
                stopLoss, takeProfit, priceClosure, swap, profit, commission, balance, typeTransaction, orderType, identifier, closurePosition, ticketNumber,
            );
            
            setCorrectionTradeStatus(correctionTradeStatus);
            toast.success(correctionTradeStatus, { /* ... */ });
        } catch (error) {
            setCorrectionTradeStatus('Une erreur est survenue lors de l\'application des modifications.');
            toast.error(correctionTradeStatus, { /* ... */ });
        }
    };

    return (
        <div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            <ToastContainer />
            <Button backgroundColor="#007bff" color="white" label='Editer ce trade' onClick={afficherModifierTrade} />
            {modifierTradeAffichage === "affiche" ? (
                <div className="cadreModifierTrade">
                    <div className="contenuMontreModifierTrade">
                        <div className="infoModifierTrade">
                            <div className="ITmodification"><p>Magic number</p><Input type="number" typeValeur="number" placeholder={"Magic Number"} value={magicNumber} onChange={(event) => {setMagicNumber(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Volume</p><Input type="number" typeValeur="number" placeholder={"Volume"} value={volume} onChange={(event) => {setVolume(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Symbole</p><Input type="text" placeholder={"Symbole"} value={symbole} onChange={(event) => {setSymbole(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Price opening</p><Input type="number" typeValeur="number" placeholder={"Price opening"} value={priceOpening} onChange={(event) => {setPriceOpening(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Stop loss</p><Input type="number" typeValeur="number" placeholder={"Stop loss"} value={stopLoss} onChange={(event) => {setStopLoss(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Take profit</p><Input type="number" typeValeur="number" placeholder={"Take profit"} value={takeProfit} onChange={(event) => {setTakeProfit(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Price closure</p><Input type="number" typeValeur="number" placeholder={"Price closure"} value={priceClosure} onChange={(event) => {setPriceClosure(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Swap</p><Input type="number" typeValeur="number" placeholder={"Swap"} value={swap} onChange={(event) => {setSwap(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Profit</p><Input type="number" typeValeur="number" placeholder={"Profit"} value={profit} onChange={(event) => {setProfit(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Commision</p><Input type="number" typeValeur="number" placeholder={"Commision"} value={commission} onChange={(event) => {setCommission(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Balance</p><Input type="number" typeValeur="number" placeholder={"Balance"} value={balance} onChange={(event) => {setBalance(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Identifier</p><Input type="number" typeValeur="number" placeholder={"Identifier"} value={identifier} onChange={(event) => {setIdentifier(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Ticket number</p><Input type="number" typeValeur="number" placeholder={"Ticket number"} value={ticketNumber} onChange={(event) => {setTicketNumber(event.target.value)}}/></div>
                            <div className="ITmodification"><p>Type of transaction</p><Selector options={typeOfTransactionOptions} value={typeTransaction} onChange={(selected) => {setTypeTransaction(selected);}} /></div>
                            <div className="ITmodification"><p>Order type</p><Selector options={orderTypeOptions} value={orderType} onChange={(selected) => {setOrderType(selected);}} /></div>
                            <div className="ITmodification"><p>Closure position</p><Selector options={closurePositionOptions} value={closurePosition} onChange={(selected) => {setClosurePosition(selected);}} /></div>
                            
                        </div>
                        <div className="inputModifierTrade">
                            <Button backgroundColor="#007bff" color="white" className="bouton" label='Confirmer la modification' onClick={correctionTrade} />
                            <Button className="bouton" label='Annuler' onClick={masquerModifierTrade} />
                            {/*<p>{correctionTradeStatus}</p>*/}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ModifierTrade;
