import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profil.css';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

import ProfilCaseRadio from '../components/profil/test';
import Strategie from '../components/strategie/Strategie';
import Journal from '../components/journal/test2';

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
      <div className='tout'>
        <NavBar />
        <div className="contenu-global">
          <div className="cadre-infos">
            <h1>{username}</h1>
            <p>{email}</p>
            <button className='deconnexion' onClick={deconnexion}>Se déconnecter</button>
            <Button label="Statistiques" onClick={statAffichage} />
            <Button label="Stratégie" onClick={strategieAffichage} />
            <Button label="Journal" onClick={journalAffichage} />
            <div className="selecteur">
              <div className='toutesLesCoches'>
                {affichageFenetre === "stat" ? (
                  <ProfilCaseRadio />
                ) : null}
                {affichageFenetre === "strategie" ? (
                  <Strategie />
                ) : null}
                {affichageFenetre === "journal" ? (
                  <Journal />
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
