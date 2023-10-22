import React from 'react';
import '../../css/timeWorld/annonceEconomique.css';

const AnnonceEconomique = () => {
  return (
    <div className='conteneurAnnonceEconomique'>
        <div className="haut">
            <p className="heure">08:30</p>
            <p className="detail">03:42 Untill Event</p>
        </div>
        <hr />
        <div className="milieu">
            <p>Fed Marker Speach</p>
        </div>
        <hr />
        <div className="bas">
            <p>Rev: 5.42%</p>
        </div>
    </div>
  )
}

export default AnnonceEconomique