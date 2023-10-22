import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/profil.css';
import NavBar from '../components/NavBar';
import Button from '../components/inputComposant/Button';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

import Statistique1 from '../components/statistiqueSection/precise/Statistique1';
import Strategie from '../components/strategie/Strategie';
import Journal from '../components/journalSection/journal/Journal';
import Consultation from '../components/journalSection/consultation/Consultation';
import AjouteFiltre from '../components/statistiqueSection/generale/ajoutFiltre/AjouteFiltre';
import TimeWorld from '../components/timeWorld/TimeWorld';
import Note from '../components/note/Note';
import DailyJournal from '../components/dailyJournal/DailyJournal';
import Portfolio from '../components/portfolio/Portfolio';
import CopyTrading from '../components/CopyTrading/CopyTrading';
import Settings from '../components/settings/Settings';

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
        <div className="secondConteneur">
          <div className="gauche">

            {/* ==================== Barre GAUCHE ==================== */}

            <div className="barreLateral">
              <div className="toutButton">
                <Link className='' to="/"><img src={logo} alt="" /></Link>
                <div className="hautButton">
                  <Button label="Morning meeting" onClick={() => handleButtonClick('timeWorld')} className={getButtonClass('timeWorld')} />
                </div>
                <div className="interieurButton">
                  <Button label="Daily journal" onClick={() => handleButtonClick('dailyJournal')} className={getButtonClass('dailyJournal')} />
                  <Button label="Journal" onClick={() => handleButtonClick('journal')} className={getButtonClass('journal')} />
                  <Button label="Statistiques" onClick={() => handleButtonClick('stat')} className={getButtonClass('stat')} />
                  <Button label="Portfolio" onClick={() => handleButtonClick('portfolio')} className={getButtonClass('portfolio')} />
                  <Button label="Copy trading" onClick={() => handleButtonClick('copyTrading')} className={getButtonClass('copyTrading')} />
                  <Button label="Settings" onClick={() => handleButtonClick('settings')} className={getButtonClass('settings')} />
                </div>
                <div className="basButton">
                  <Button label="Note" onClick={() => handleButtonClick('note')} className={getButtonClass('note')} />
                </div>
              </div>

              {/* ==================== DECONNEXION ==================== */}

              <div className="deconnexionDiv">
                <p>{username}</p>
                <Button  className='deconnexion' label='Logout' onClick={deconnexion} />
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
                </div>
              ) : null}
              {affichageFenetre === "note" ? (
                <div className="note">
                  <Note />
                </div>
              ) : null}
              {affichageFenetre === "dailyJournal" ? (
                <div className="dailyJournal">
                  <DailyJournal />
                </div>
              ) : null}
              {affichageFenetre === "settings" ? (
                <div className="settings">
                  <Settings />
                </div>
              ) : null}
              {affichageFenetre === "portfolio" ? (
                <div className="portfolio">
                  <Portfolio />
                </div>
              ) : null}
              {affichageFenetre === "copyTrading" ? (
                <div className="copyTrading">
                  <CopyTrading />
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
