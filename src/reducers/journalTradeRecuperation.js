const initialState = {
  journalDataRedux: [],
  loading: false,
  error: null,
};
  
export const journalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOURNAL_SUCCESS':
      return {
        ...state,
        journalDataRedux: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_JOURNAL_FAILURE':
      return {
        ...state,
        journalDataRedux: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const initialStateSelectedOptionTypeTradeReducer = "tout"
/*
export const selectedOptionTypeTradeReducer = (state = initialStateSelectedOptionTypeTradeReducer, action) => {
  switch (action.type) {
    case 'SET_SELECTED_OPTION_TYPE_TRADE':
      return action.payload;
    default:
      return state;
  }
};

const initialStateCollectionValuesReducer = "pierre_close";

export const collectionValuesReducer = (state = initialStateCollectionValuesReducer, action) => {
  switch (action.type) {
    case 'SET_COLLECTION_VALUES':
      return action.payload;
    default:
      return state;
  }
};*/