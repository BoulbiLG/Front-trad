import React from 'react';
import '../../css/settings/detail.css';

const Details = () => {
  return (
    <div className='conteneurDetail'>

      {/*========= GAUCHE ========= */}

      <div className="gauche">
        <p className="titreSecond">General Details</p>
        <div className="carte">
          <p className="titre">First name</p>
          <p className="detail">Bojan</p>
        </div>

        <div className="carte">
          <p className="titre">Last name</p>
          <p className="detail">Sandic</p>
        </div>

        <div className="carte">
          <p className="titre">Email</p>
          <p className="detail">hello@email.com</p>
        </div>
      </div>

      {/*========= DROITE ========= */}

      <div className="droite">
        <p className="titreSecond">Location</p>
        <div className="carte">
          <p className="titre">Country</p>
          <p className="detail">United States</p>
        </div>

        <div className="carte">
          <p className="titre">City</p>
          <p className="detail">New York</p>
        </div>

        <div className="carte">
          <p className="titre">Location</p>
          <p className="detail">72 avenue block 33</p>
        </div>
      </div>
    </div>
  )
}

export default Details