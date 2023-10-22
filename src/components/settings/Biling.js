import React from 'react';
import '../../css/settings/biling.css';
import Button from '../inputComposant/Button';

const Biling = () => {
  return (
    <div className='conteneurBiling'>

      {/*========== GAUCHE ========== */}

      <div className="gauche">
        <p className="titreSecond">Card info</p>
        <div className="sectionCarte">
          <div className="haut">
            <p className="titre">Cardholder Name</p>
            <p className="detail">Bojan Sandic</p>
          </div>
          <div className="milieu">
            <p className="numeroCarte">5489 **** **** ****</p>
          </div>
          <p className="suppression">Remove this card</p>
        </div>

        <Button label='Add card' />
      </div>

      {/*========== DROITE ========== */}

      <div className="droite">
        <p className="titreSecond">Payment history</p>
        <div className="listeCarte">
          <div className="carte haut"><p>#4356</p><p>19.12.2024</p><p>$144.50</p></div>
          <div className="carte"><p>#4356</p><p>19.12.2024</p><p>$144.50</p></div>
          <div className="carte"><p>#4356</p><p>19.12.2024</p><p>$144.50</p></div>
          <div className="carte"><p>#4356</p><p>19.12.2024</p><p>$144.50</p></div>
          <div className="carte bas"><p>#4356</p><p>19.12.2024</p><p>$144.50</p></div>
        </div>
      </div>
    </div>
  )
}

export default Biling