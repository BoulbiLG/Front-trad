import React, { useState } from 'react';
import '../../../css/pageDeGarde/carteQuestion.css';
import plus from '../../../Assets/plus.svg';

const CarteQuestion = ({question, reponse}) => {

    const [affichageReponse, setAffichageReponse] = useState('cache');
        
    return (
        <div className='conteneurCarteQuestion' onClick={() => {setAffichageReponse('montre')}}>
            <div className="question">
                <div className="paragraphe">
                    <p>{question}</p>
                </div>
                <div className="image">
                    <img src={plus} alt="" />
                </div>
            </div>
            {affichageReponse === 'montre' ? (
                <div className="reponse">
                    <p>{reponse}</p>
                </div>
            ) : null }
        </div>
    )
}

export default CarteQuestion