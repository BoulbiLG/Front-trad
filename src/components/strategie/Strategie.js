import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Button from '../inputComposant/Button';
import Input from '../inputComposant/Input';
import '../../css/strategie.css';
import RemplissageDefaut from './RemplissageDefaut';
import RemplissageFiltre from '../statistiqueSection/generale/remplissage/RemplissageFiltre';

const Strategie = () => {
  const [nomStrategie, setNomStrategie] = useState('');
  const [strategies, setStrategies] = useState([]);
  const [nomIndicateur, setNomIndicateur] = useState('');
  const [indicateur, setIndicateur] = useState([]);
  const [nomPorteFeuille, setNomPorteFeuille] = useState('');
  const [porteFeuille, setPorteFeuille] = useState([]);

  const usernameSession = sessionStorage.getItem('username');

  // Strategie
  const fetchStrategie = useCallback(async () => {
    try {
      const response = await axios.get(`https://apipython2.onrender.com/recuperationStrategie?username=${usernameSession}`);
      const data = response.data;
      setStrategies(data);
    } catch (error) {
      console.error(error);
    }
  }, [usernameSession]);

  useEffect(() => {
    fetchStrategie();
  }, [fetchStrategie]);

  const createStrategie = async () => {
    try {
      console.log(nomStrategie);
      await axios.post('https://apipython2.onrender.com/createStrategie', { username: usernameSession, nomStrategie: nomStrategie });
      fetchStrategie();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStrategie = async (nomStrategie) => {
    try {
      console.log(nomStrategie);
      await axios.delete('https://apipython2.onrender.com/suppressionStrategie', {
        data: { username: usernameSession, nomStrategie: nomStrategie }
      });
      fetchStrategie();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNomStrategieChange = (event) => {
    setNomStrategie(event.target.value);
  };

  // Indicateur
  const fetchIndicateur = useCallback(async () => {
    try {
      const response = await axios.get(`https://apipython2.onrender.com/recuperationIndicateur?username=${usernameSession}`);
      const data = response.data;
      const indicateurs = data.map(item => ({ _id: item._id, nomIndicateur: item.nomIndicateur }));
      setIndicateur(indicateurs);
    } catch (error) {
      console.error(error);
    }
  }, [usernameSession, setIndicateur]);
  

  useEffect(() => {
    fetchIndicateur();
  }, [fetchIndicateur]);

  const createIndicateur = async () => {
    try {
      console.log(nomIndicateur);
      await axios.post('https://apipython2.onrender.com/createIndicateur', { username: usernameSession, nomIndicateur: nomIndicateur });
      fetchIndicateur();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIndicateur = async (nomIndicateur) => {
    try {
      console.log(nomIndicateur);
      await axios.delete('https://apipython2.onrender.com/suppressionIndicateur', {
        data: { username: usernameSession, nomIndicateur: nomIndicateur }
      });
      fetchIndicateur();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNomIndicateurChange = (event) => {
    setNomIndicateur(event.target.value);
  };

  // portefeuille
  const fetchPorteFeuille = useCallback(async () => {
    try {
      const response = await axios.get(`https://apipython2.onrender.com/recuperationPorteFeuille?username=${usernameSession}`);
      const data = response.data;
      setPorteFeuille(data);
    } catch (error) {
      console.error(error);
    }
  }, [usernameSession]);

  useEffect(() => {
    fetchPorteFeuille();
  }, [fetchPorteFeuille]);

  const createPorteFeuille = async () => {
    try {
      await axios.post('https://apipython2.onrender.com/createPorteFeuille', { username: usernameSession, nomPorteFeuille: nomPorteFeuille });
      fetchPorteFeuille();
    } catch (error) {
      console.error(error);
    }
  };

  const deletePorteFeuille = async (nomPorteFeuille) => {
    try {
      await axios.delete('https://apipython2.onrender.com/suppressionPorteFeuille', {
        data: { username: usernameSession, nomPorteFeuille: nomPorteFeuille }
      });
      fetchPorteFeuille();
    } catch (error) {
      console.error(error);
    }
  };

const handleNomPorteFeuilleChange = (event) => {
  setNomPorteFeuille(event.target.value);
};

  return (
    <div className='contenuStratIndic'>
      <div className="principal">
        <div className="strategie">
          <h3>Stratégie</h3>
          <Input type="text" placeholder="Nom de la stratégie" value={nomStrategie} onChange={handleNomStrategieChange} />
          <Button label="Créer une nouvelle stratégie" onClick={createStrategie} />
          {strategies.map((strategie) => (
            <div key={strategie._id}>
              <p>{strategie.nomStrategie}</p>
              <Button label="Supprimer" onClick={() => deleteStrategie(strategie.nomStrategie)} />
            </div>
          ))}
        </div>
        <div className="indicateur">
          <h3>Indicateur</h3>
          <Input type="text" placeholder="Nom de l'indicateur" value={nomIndicateur} onChange={handleNomIndicateurChange} />
          <Button label="Créer un nouvel indicateur" onClick={createIndicateur} />
          {indicateur.map((indicateur) => (
            <div key={indicateur._id}>
              <p>{indicateur.nomIndicateur}</p>
              <Button label="Supprimer" onClick={() => deleteIndicateur(indicateur.nomIndicateur)} />
            </div>
          ))}
        </div>
        <div className="porteFeuille">
          <h3>Porte feuille</h3>
          <Input type="text" placeholder="Nom du portefeuille" value={nomPorteFeuille} onChange={handleNomPorteFeuilleChange} />
          <Button label="Créer un nouveau porte feuille" onClick={createPorteFeuille} />
          {porteFeuille.map((porteFeuille) => (
            <div key={porteFeuille._id}>
              <p>{porteFeuille.nomSeul}</p>
              <Button label="Supprimer" onClick={() => deletePorteFeuille(porteFeuille.nomComplet)} />
            </div>
          ))}
        </div>
      </div>
      <div className="annexe">
        <RemplissageDefaut />
        <RemplissageFiltre />
      </div>
    </div>
  );
};

export default Strategie;
