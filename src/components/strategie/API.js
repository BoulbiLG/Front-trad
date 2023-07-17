import axios from 'axios';

export const fetchStrategie = async (username, setStrategies) => {
    try {
      const response = await axios.get(`https://trad-back.onrender.com/api/strategie/recuperationStrategie?username=${username}`);
      const data = response.data;
      setStrategies(data);
    } catch (error) {
      console.error(error);
    }
  };
  

export const createStrategie = async (username, nomStrategie, fetchStrategie) => {
  try {
    await axios.post('https://trad-back.onrender.com/api/strategie/createStrategie', { username, nomStrategie });
    fetchStrategie(username);
  } catch (error) {
    console.error(error);
  }
};

export const deleteStrategie = async (username, nomStrategie, fetchStrategie) => {
  try {
    await axios.delete(`https://trad-back.onrender.com/api/strategie/suppressionStrategie?username=${username}&nomStrategie=${nomStrategie}`);
    fetchStrategie(username);
  } catch (error) {
    console.error(error);
  }
};
