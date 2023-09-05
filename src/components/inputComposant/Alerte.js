import React, { useState } from 'react'
import Button from './Button';
import '../../css/component/alerte.css';

const Alerte = ({ message, valeur }) => {

    const [affichageAlerte, setAffichageAlerte] = useState(valeur);
    console.log(valeur);
    const masquerAlerte = () => {
        setAffichageAlerte("cache");
    }
    
    return (
        <div>
            { affichageAlerte === "montre" ? (
                <div className="cadreAlerte">
                        <div className='contenuAlerte'>
                            <p>{message}</p>
                            <Button label="x" onClick={masquerAlerte}/>
                        </div>
                </div>
            ) : null}
        </div>
    )
}

export default Alerte