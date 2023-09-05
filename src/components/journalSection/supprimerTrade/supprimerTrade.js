import React, { useState } from 'react';
import Button from '../../inputComposant/Button';
import axios from 'axios';
import '../../../css/journal/supprimerTrade.css';

const SupprimerTrade = ({ id, collection }) => {

    const [tradeStatus, setTradeStatus] = useState("cache"); // cache ou montre

    const afficherSupprimerTrade = () => {setTradeStatus("affiche");};
    const masquerSupprimerTrade = () => {setTradeStatus("cache");};

    const suppressionTrade = () => {
        masquerSupprimerTrade();
        const apiUrl = 'https://apipython2.onrender.com/supprimerTrade';
    
        const data = {
            id: id,
            collection: collection
        };
    
        const headers = {
            'Content-Type': 'application/json',
        };
        console.log(data);
        axios.delete(apiUrl, { data, headers })
            .then(response => {
                console.log('Trade supprimé avec succès', response.data);
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la suppression', error);
            });
    };

    return (
        <div>
            <Button backgroundColor="#d51f1f" label='Supprimer ce trade' onClick={afficherSupprimerTrade} />
            {tradeStatus === "affiche" ? (
                <div className="cadreSupprimerTrade">
                    <div className="contenuMontreSupprimerTrade">
                        <div className="infoSupprimerTrade">
                            <p>ID : {id}</p>
                            <p>Collection : {collection}</p>
                        </div>
                        <div className="inputSupprimerTrade">
                            <Button backgroundColor="#d51f1f" className="bouton" label='Confirmer la suppression' onClick={suppressionTrade} />
                            <Button backgroundColor="#007bff" className="bouton" label='Annuler' onClick={masquerSupprimerTrade} />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default SupprimerTrade;
