import React, { useState } from 'react'
import Button from './Button';

const Alerte = (message, valeurDefaut) => {

    const [affichageAlerte, setAffichageAlerte] = useState(valeurDefaut);
    const masquerAlerte = () => {
        setAffichageAlerte("cache");
    }
    

    return (
        <div className="cadreAlerte">
            { affichageAlerte === "montre" ? (
                <div className='contenuAlerte'>
                    <p>{message}</p>
                    <Button label="x" onClick={masquerAlerte}/>
                </div>
            ) : null}
        </div>
    )
}

export default Alerte