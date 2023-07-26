import axios from 'axios';

export const fetchStrategie = async (username, setStrategies) => {
    try {
      const response = await axios.get(`https://apipython2.onrender.com/recuperationStrategie?username=${username}`);
      const data = response.data;
      setStrategies(data);
    } catch (error) {
      console.error(error);
    }
  };
  

export const createStrategie = async (username, nomStrategie, fetchStrategie) => {
  try {
    await axios.post('https://https://apipython2.onrender.com/createStrategie', { username, nomStrategie });
    fetchStrategie(username);
  } catch (error) {
    console.error(error);
  }
};

export const deleteStrategie = async (username, nomStrategie, fetchStrategie) => {
  try {
    await axios.delete(`https://apipython2.onrender.com/suppressionStrategie?username=${username}&nomStrategie=${nomStrategie}`);
    fetchStrategie(username);
  } catch (error) {
    console.error(error);
  }
};
