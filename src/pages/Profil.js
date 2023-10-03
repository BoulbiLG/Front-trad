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
import Test from '../components/statistiqueSection/generale/graphique/Test';

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

  return (
    <>
      <div className='toutProfil'>
        <NavBar />
        <div className="contenu-global">
          <div className="cadre-infos">
            <h1>{username}</h1>
            <p>{email}</p>
            <div className="sectionProfil">
              <Button backgroundColor="#d51f1f" className='deconnexion' label='deconnexion' onClick={deconnexion} />
              <Button label="Dashboard" onClick={() => {setAffichageFenetre('dashboard')}} />
              <Button label="Journal" onClick={() => {setAffichageFenetre('journal')}} />
              <Button label="Statistiques" onClick={() => {setAffichageFenetre('stat')}} />
            </div>
            <div className="selecteur">
              <div className='toutesLesCoches'>
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
        </div>
      </div>
    </>
  );
};

export default Profil;
