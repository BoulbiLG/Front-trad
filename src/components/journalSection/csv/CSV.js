import React, { useState } from 'react';
import Button from '../../inputComposant/Button';
import '../../../css/journal/ajouterCSV.css';
import { envoieCSV } from './API';

const CSV = () => {

    const [envoieTradCSVStatus, setEnvoieTradCSVStatus] = useState('');
    const [CSVaffichage, setCSVaffichage] = useState("cache"); // cache ou affiche
    const afficherCSVAjout = () => {setCSVaffichage("affiche");};const masquerCSVAjout = () => {setCSVaffichage("cache");};
    const [selectedFile, setSelectedFile] = useState(null);
    const changementCSVFichier = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const appelAPIenvoieCSV = async () => {
        try {
            const envoieTradCSVStatus = await envoieCSV(selectedFile);
            setEnvoieTradCSVStatus(envoieTradCSVStatus);
        } catch (error) {
            setEnvoieTradCSVStatus('Une erreur est survenue lors de l\'enregistrement du fichier CSV.')
        }
    }

  return (
    <div className='contenuCSV'>
        <Button label='Ajouter un trade avec un fichier CSV' onClick={afficherCSVAjout}/>
        {CSVaffichage === "affiche" ? (
            <div className="cadreCSV">
                <div className="contenuMontreCSV">
                    <div className="basCSV">
                        <input type="file" accept=".csv" onChange={changementCSVFichier} />
                        <Button label='Envoyer ce fichier CSV' onClick={appelAPIenvoieCSV}/>
                        <Button label='Annuler' onClick={masquerCSVAjout}/>
                        <p>{envoieTradCSVStatus}</p>
                    </div>
                </div>
            </div>
        ) : null }
    </div>
  )
}

export default CSV