import axios from 'axios';

export async function fetchDataFromAPI() {
  const api_url = 'https://eodhd.com/api/economic-events?api_token=6530da188309e6.66620223';

  try {
    const response = await axios.get(api_url);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return null;
  }
}
