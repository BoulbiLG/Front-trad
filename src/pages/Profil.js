import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profil.css';
import NavBar from '../components/NavBar';
import Button from '../components/inputComposant/Button';

import Statistique1 from '../components/statistiqueSection/precise/Statistique1';
import Strategie from '../components/strategie/Strategie';
import Journal from '../components/journalSection/journal/Journal';
import Consultation from '../components/journalSection/consultation/Consultation';
import AjouteFiltre from '../components/statistiqueSection/generale/ajoutFiltre/AjouteFiltre';
import TimeWorld from '../components/timeWorld/TimeWorld';
import Citation from '../components/timeWorld/Citation';
import Note from '../components/note/Note';

const Profil = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [affichageFenetre, setAffichageFenetre] = useState('dashboard');
  const [affichageFenetreJournal, setAffichageFenetreJournal] = useState('consultation');
  const [affichageFenetreStatistique, setAffichageFenetreStatistique] = useState('precise');

  useEffect(() => {
    const usernameFromSession = sessionStorage.getItem('username');
    const emailFromSession = sessionStorage.getItem('email');

    if (usernameFromSession && emailFromSession) {
      setUsername(usernameFromSession);
      setEmail(emailFromSession);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const deconnexion = () => {
    sessionStorage.setItem('auth', 'false');
    sessionStorage.removeItem('userData');
    navigate('/login');
  };

  const handleButtonClick = (fenetre) => {
    setAffichageFenetre(fenetre);
  };

  const getButtonClass = (fenetre) => {
    console.log(affichageFenetre === fenetre ? 'selected-button' : 'normal-button');
    return affichageFenetre === fenetre ? 'selected-button' : 'normal-button';
  };

  return (
      <div className='conteneurProfil'>
        <NavBar />
        <div className="secondConteneur">
          <div className="gauche">

            {/* ==================== Barre GAUCHE ==================== */}

            <div className="barreLateral">
              <div className="toutButton">
                <div className="hautButton">
                  <Button label="Morning meeting" onClick={() => handleButtonClick('timeWorld')} className={getButtonClass('timeWorld')} />
                </div>
                <div className="interieurButton">
                  <Button label="Dashboard" onClick={() => handleButtonClick('dashboard')} className={getButtonClass('dashboard')} />
                  <Button label="Journal" onClick={() => handleButtonClick('journal')} className={getButtonClass('journal')} />
                  <Button label="Statistiques" onClick={() => handleButtonClick('stat')} className={getButtonClass('stat')} />
                </div>
                <div className="basButton">
                  <Button label="Note" onClick={() => handleButtonClick('note')} className={getButtonClass('note')} />
                </div>
              </div>

              {/* ==================== DECONNEXION ==================== */}

              <div className="deconnexionDiv">
                <h1>{username}</h1>
                <p>{email}</p>
                <Button backgroundColor="#d51f1f" className='deconnexion' label='deconnexion' onClick={deconnexion} />
              </div>

            </div>
          </div>

            {/* ==================== Contenu ==================== */}

          <div className="droite">
              {affichageFenetre === "stat" ? (
                <div className="">
                  <div className="">
                  <div className="journalStatistique">
                    <Button label="Statistiques précises" onClick={() => {setAffichageFenetreStatistique('precise')}} />
                    <Button label="Statistiques générales" onClick={() => {setAffichageFenetreStatistique('generale')}} />
                  </div>
                    {affichageFenetreStatistique === "precise" ? (
                      <Statistique1 />
                    ) : null}
                    {affichageFenetreStatistique === "generale" ? (
                      <div className="statistiqueGeneral">
                        <AjouteFiltre />
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {affichageFenetre === "timeWorld" ? (
                <div className="timeWorld">
                  <TimeWorld />
                  <Citation />
                </div>
              ) : null}
              {affichageFenetre === "note" ? (
                <div className="note">
                  <Note />
                </div>
              ) : null}
              {affichageFenetre === "dashboard" ? (
                <div className="dashboard">
                  <h3>Dashboard</h3>
                  <p>Rien pour le moment</p>
                </div>
              ) : null}
              {affichageFenetre === "journal" ? (
                <div>
                  <div className="journalSection">
                    <Button label="Consultation" onClick={() => {setAffichageFenetreJournal('consultation')}} />
                    <Button label="Edition" onClick={() => {setAffichageFenetreJournal('edition')}} />
                    <Button label="Creation" onClick={() => {setAffichageFenetreJournal('creation')}} />
                  </div>
                  {affichageFenetreJournal === "consultation" ? (
                    <Consultation/>
                  ) : null}
                  {affichageFenetreJournal === "edition" ? (
                    <Journal />
                  ) : null}
                  {affichageFenetreJournal === "creation" ? (
                    <Strategie />
                  ) : null}
                </div>
              ) : null}
            </div>

          </div>
        </div>
  );
};

export default Profil;
