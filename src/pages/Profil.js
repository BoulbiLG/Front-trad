import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profil.css';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

import Statistique1 from '../components/statistique1/Statistique1';
//import Statistique2 from '../components/Statistique2/Statistique2';
import Strategie from '../components/strategie/Strategie';
import Journal from '../components/journal/Journal';

const Profil = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [affichageFenetre, setAffichageFenetre] = useState('journal');

  const statAffichage = () => {
    setAffichageFenetre('stat');
  };

  const strategieAffichage = () => {
    setAffichageFenetre('strategie');
  };

  const journalAffichage = () => {
    setAffichageFenetre('journal');
  };

  useEffect(() => {
    const usernameFromSession = sessionStorage.getItem('username');
    const emailFromSession = sessionStorage.getItem('email');

    if (usernameFromSession && emailFromSession) {
      setUsername(usernameFromSession);
      setEmail(emailFromSession);
    } else {
      // Rediriger vers la page d'accueil si les sessions n'existent pas
      navigate('/');
    }
  }, [navigate]);

  const deconnexion = () => {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.removeItem('userData');
    navigate('/login');
  };  

  return (
    <>
      <div className='toutProfil'>
        <NavBar />
        <div className="contenu-global">
          <div className="cadre-infos">
            <h1>{username}</h1>
            <p>{email}</p>
            <div className="section">
              <Button backgroundColor="#d51f1f" className='deconnexion' label='deconnexion' onClick={deconnexion} />
              <Button label="Statistiques" onClick={statAffichage} />
              <Button label="Stratégie" onClick={strategieAffichage} />
              <Button label="Journal" onClick={journalAffichage} />
            </div>
            <div className="selecteur">
              <div className='toutesLesCoches'>
                {affichageFenetre === "stat" ? (
                  <div className="">
                    <div className="">
                      <Statistique1 />
                    </div>
                  </div>
                ) : null}
                {affichageFenetre === "strategie" ? (
                  <Strategie />
                ) : null}
                {affichageFenetre === "journal" ? (
                  <div>
                    
                    <Journal />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
