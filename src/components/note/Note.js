import React, { useEffect, useState } from 'react';
import '../../css/note/note.css';
import Input from '../inputComposant/Input';
import Button from '../inputComposant/Button';

import { enregistrerNote, recuperationNote, suppressionNote } from './API';

const Note = () => {

    const [affichageZoneTexte, setAffichageZoneTexte] = useState('false');
    const [enregistrementNoteStatus, setEnregistrementNoteStatus] = useState('false');

    const [titreValue, setTitreValue] = useState('');
    const [texteValue, setTexteValue] = useState('');
    const [rechercheNoteValue, setRechercheNoteValue] = useState('');
    const [noteData, setNoteData] = useState([]);

    // ========== ENREGISTRER NOTE ========== //

    const enregistrerNoteEnvoie = async () => {
        try {
            const enregistrementNoteResponse = await enregistrerNote(titreValue, texteValue);
            setEnregistrementNoteStatus(enregistrementNoteResponse);
            console.log('Note enregistrée avec succès');
            recuperationNoteEnvoie();
            setAffichageZoneTexte('false')
        } catch (error) {
            console.log('Note non enregistrée');
        }
    };

    const recuperationNoteEnvoie = async () => {
        const recuperationNoteVar = await recuperationNote(rechercheNoteValue);
        setNoteData(recuperationNoteVar);
    };

    // ========== RECUPERATION NOTE ========== //
        
    useEffect(() => {
        recuperationNoteEnvoie();
    }, [rechercheNoteValue]);

    // ========== SUPPRESSION NOTE ========== //

    async function suppressionNoteENvoie(id) {
        try {
            const result = await suppressionNote(id);
            console.log('Note supprimée avec succès');
            recuperationNoteEnvoie();
        } catch (error) {
            console.error('Erreur lors de la suppression de la note', error);
        }
    }

    return (
        <div className='noteConteneur'>
            <div className="haut">
                <div className="coteGauche">
                    <div className="titreh1">
                        <h1>NoteBook</h1>
                    </div>
                    <Input className='rechercheBarre' typeValeur="text" placeholder={"recherchez"} value={rechercheNoteValue} onChange={(event) => {setRechercheNoteValue(event.target.value)}} />
                </div>
                <button className="ajouterNote" onClick={() => {setAffichageZoneTexte('true')}}>Ajouter une note  +</button>
            </div>
            <div className="listeNotes">
                {noteData.map((note) => (
                    <div key={note.id} className="noteItem">
                        <div className="haut">
                            <div className="gauche">
                                <h2>{note.titreValue}</h2>
                            </div>
                            <div className="coteDroite">
                                <p className='date'>{note.date}</p>
                                <Button className="suppression" label='supprimer la note' onClick={() => {suppressionNoteENvoie(note.id)}}/>
                            </div>
                        </div>
                        <hr />
                        <div className="bas">
                            <p>{note.texteValue}</p>
                        </div>
                    </div>
                ))}
            </div>
            {affichageZoneTexte === 'true' ? (
                <div className="affichageZoneConteneur">
                    <div className="secondConteneur">
                        <div className="titreZone">
                            <Input className='input' typeValeur="text" placeholder={"Titre"} value={titreValue} onChange={(event) => {setTitreValue(event.target.value)}} />
                        </div>
                        <div className="texteZone">
                            <Input className='input' typeValeur="text" placeholder={"Texte"} value={texteValue} onChange={(event) => {setTexteValue(event.target.value)}} />
                        </div>
                        <div className="bas">
                        <Button className="" label='Annuler' onClick={() => {setAffichageZoneTexte('false')}}/>
                        <Button className="" label='Ajouter la note' onClick={() => {enregistrerNoteEnvoie()}}/>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default Note