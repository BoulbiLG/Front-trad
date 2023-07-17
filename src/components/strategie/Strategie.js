import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { getUserDataFromSession } from '../../pages/Login';
import Button from '../Button';
import Input from '../Input';

const Strategie = ({ selectedOption }) => {
  const [nomStrategie, setNomStrategie] = useState('');
  const [strategies, setStrategies] = useState([]);
  const userData = getUserDataFromSession();
  const username = userData?.username;

  const fetchStrategie = useCallback(async () => {
    try {
      const response = await axios.get(`https://trad-back.onrender.com/api/strategie/recuperationStrategie?username=${username}`);
      const data = response.data;
      setStrategies(data);
    } catch (error) {
      console.error(error);
    }
  }, [username]);

  useEffect(() => {
    fetchStrategie();
  }, [fetchStrategie]);

  const createStrategie = async () => {
    try {
      console.log(nomStrategie);
      await axios.post('https://trad-back.onrender.com/api/strategie/createStrategie', { username: username, nomStrategie: nomStrategie });
      fetchStrategie();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStrategie = async (nomStrategie) => {
    try {
      console.log(nomStrategie);
      console.log(username);
      await axios.delete(`https://trad-back.onrender.com/api/strategie/suppressionStrategie?username=${username}&nomStrategie=${nomStrategie}`);
      fetchStrategie();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNomStrategieChange = (event) => {
    setNomStrategie(event.target.value);
    console.log(event.target.value);
    console.log("nom strategie : " + nomStrategie);
  };

  return (
    <div>
      <Input type="text" placeholder="Nom de la stratégie" value={nomStrategie} onChange={handleNomStrategieChange} />
      <Button label="Créer une nouvelle stratégie" onClick={createStrategie} />
      {strategies.map((strategie) => (
        <div key={strategie._id}>
          <p>{strategie.nomStrategie}</p>
          <Button label="Supprimer" onClick={() => deleteStrategie(strategie.nomStrategie)} />
        </div>
      ))}
    </div>
  );
};

export default Strategie;
