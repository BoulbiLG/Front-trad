/*
import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';

const fetchData = async (username, selectedOptionTypeTrade, collectionValues) => {
  try {
    const response = await axios.get(`${apiUrl}/recuperationTrade?username=${username}&typeTrade=${selectedOptionTypeTrade}&collection=${collectionValues}`);
    
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};

const initialStateSelectedOptionTypeTradeReducer = "tout";

export const setSelectedOptionTypeTrade = (state = initialStateSelectedOptionTypeTradeReducer, action) => {
  switch (action.type) {
    case 'SET_SELECTED_OPTION_TYPE_TRADE':
      return action.payload;
    default:
      return state;
  }
};

const initialStateCollectionValuesReducer = "pierre_close";

export const setCollectionValues = (state = initialStateCollectionValuesReducer, action) => {
  switch (action.type) {
    case 'SET_COLLECTION_VALUES':
      return action.payload;
    default:
      return state;
  }
};

export const fetchJournalData = (username, selectedOptionTypeTrade, collectionValues) => {
  return async (dispatch) => {
    try {
      const data = await fetchData(username, selectedOptionTypeTrade, collectionValues);
      dispatch({ type: 'FETCH_JOURNAL_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_JOURNAL_FAILURE', error });
    }
  };
};*/