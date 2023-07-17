import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profil.css';
import NavBar from '../components/NavBar';
import ProfilCaseRadio from '../components/profil/test';
import Button from '../components/Button';
import Strategie from '../components/strategie/Strategie';

const Profil = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [affichageFenetre, setAffichageFenetre] = useState('journal');

  const journalAffichage = () => {
    setAffichageFenetre('journal');
  };

  const strategieAffichage = () => {
    setAffichageFenetre('strategie');
  };

  useEffect(() => {
    try {
      const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));

      if (userDataFromSession && userDataFromSession.username && userDataFromSession.email) {
        setUsername(userDataFromSession.username);
        setEmail(userDataFromSession.email);
      } else {
        setUsername('Username non trouvé');
        setEmail('Email non trouvé');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }, []);

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
            <Button label="Journal" onClick={journalAffichage} />
            <Button label="Stratégie" onClick={strategieAffichage} />
            <div className="selecteur">
              <div className='toutesLesCoches'>
                {affichageFenetre === "journal" ? (
                  <ProfilCaseRadio />
                ) : null}
                {affichageFenetre === "strategie" ? (
                  <Strategie />
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
