import axios from 'axios';

export const forexIndiceActionOptions = [
  { value: "indice", label: "Indice" },
  { value: 'forex', label: 'Forex' },
  { value: 'action', label: 'Actions' }
];

export const dateOptions = [
  { value: "aujourd'hui", label: "Aujourd'hui" },
  { value: 'semaineEnCours', label: 'Semaine en cours' },
  { value: 'semaineGlissante', label: 'Semaine glissante' },
  { value: 'moisGlissant', label: 'Mois glissant' },
  { value: 'moisEnCours', label: 'Mois en cours' },
  { value: '3mois', label: '3 mois' },
  { value: '6mois', label: '6 mois' },
  { value: '1an', label: '1 an' },
  { value: '2ans', label: '2 ans' },
  { value: 'tout', label: 'Tout' },
  { value: 'choixLibre', label: 'Choix libre' },
];

export const indiceOptions = [
  { value: "DowJonesIndustrialAverage", label: "Dow Jones Industrial Average" },
  { value: 'NAS', label: 'Nasdaq Composite' },
  { value: 'FTSE100', label: 'FTSE 100' },
  { value: 'DAX30', label: 'DAX 30' },
  { value: 'CAC40', label: 'CAC 40' },
  { value: 'Nikkei225', label: 'Nikkei 225' },
  { value: 'ShangaiComposite', label: 'Shangai Composite' },
  { value: 'HangSengIndex', label: 'Hang Seng Index' },
  { value: 'S&P/ASX200', label: 'S&P/ASX 200' },
  { value: 'Bovespa', label: 'Bovespa' },
  { value: 'Nifty50', label: 'Nifty 50' },
  { value: 'TAIEX', label: 'TAIEX' },
  { value: 'RTSIndex', label: 'RTS Index' },
  { value: 'S&P/TSXComposite', label: 'S&P/TSX Composite' },
  { value: 'ADAUSD', label: 'ADAUSD' },
];

export const forexOptions = [
  { value: "EUR/USD", label: "EUR/USD (Euro / Dollar américain" },
  { value: "USD/JPY", label: "Dollar américain / Yen japonnais" },
  { value: "GBP/USD", label: "Livre sterling / Dollar américain" },
  { value: "USD/CHF", label: "Dollar américain / Franc suiss" },
  { value: "USD/CAD", label: "Dollar américain / Dollar canadien" },
  { value: "AUD/USD", label: "Dollar australien / Dollar américain" },
  { value: "NZD/USD", label: "Dollar néo-zélandais / Dollar américain" },
  { value: "NZD/USD", label: "Dollar néo-zélandais / Dollar américain" },
  { value: "EUR/GBP", label: "Euro / Livre sterling" },
  { value: "EUR/JPY", label: "Euro / Yen japonais" },
  { value: "GBP/JPY", label: "Livre sterling / Yen japonnais" },
  { value: "AUD/JPY", label: "Dollar australien / Yen japonnais" },
  { value: "NZD/JPY", label: "Dollar néo-zélandais / Yen japonais" },
  { value: "GBP/CHF", label: "Livre sterling / Franc suisse" },
  { value: "EUR/CHF", label: "Euro / Franc suisse" },
  { value: "CAD/JPY", label: "Dollar canadien / Yen japonais" },
  { value: "AUD/CAD", label: "Dollar australien / Dollar canadien" },
  { value: "NZD/CAD", label: "Dollar néo-zélandais / Dollar canadien" },
];

export const actionOptions = [
  { value: "Apple", label: "Apple Inc. (AAPL)" },
  { value: "Amazon", label: "Amazon.com Inc. (AMZN)" },
  { value: "Microsoft", label: "Microsoft Corporation (MSFT)" },
  { value: "Alphabet", label: "Alphabet Inc. (GOOGL, GOOG)" },
  { value: "Facebook", label: "Facebook, Inc. (FB)" },
  { value: "Tesla", label: "Tesla, Inc. (TSLA)" },
  { value: "Alibaba", label: "Alibaba Group Holding Limited (BABA)" },
  { value: "Berkshire", label: "Berkshire Hathaway Inc. (BRK.A, BRK.B)" },
  { value: "JPMorgan", label: "JPMorgan Chase & Co. (JPM)" },
  { value: "Visa", label: "Visa Inc. (V)" },
  { value: "Johnson", label: "Johnson & Johnson (JNJ)" },
  { value: "Samsung", label: "Samsung Electronics Co., Ltd. (005930.KS)" },
  { value: "Toyota", label: "Toyota Motor Corporation (TM)" },
  { value: "Tencent", label: " Tencent Holdings Limited (0700.HK)" },
  { value: "Exxon", label: "Exxon Mobil Corporation (XOM)" },
  { value: "Procter", label: "Procter & Gamble Company (PG)" },
  { value: "Walmart", label: "Walmart Inc. (WMT)" },
  { value: "CocaCola", label: "Coca-Cola Company (KO)" },
  { value: "PepsiCo", label: "PepsiCo, Inc. (PEP)" },
  { value: "Intel", label: "Intel Corporation (INTC)" },
];

export const psychologieOptions = [
  { value: "frustration", label: "frustration" },
  { value: "colère", label: "colère" },
  { value: "impatience", label: "impatience" },
  { value: "peur", label: "peur" },
  { value: "doute", label: "doute" },
  { value: "revanche", label: "revanche" },
  { value: "jeu", label: "jeu" },
  { value: "rattrapage", label: "rattrapage" },
];

export const fetchStrategieOptions = async (username, setStrategies) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationStrategie?username=${username}`);
    const data = response.data;
    setStrategies(data);
    if (data) {
      return data.map((strategie) => ({
        value: strategie.nomStrategie,
        label: strategie.nomStrategie
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

// indicateur
export let indicateurOptions = [
  {value: "Moving Average", label: "Moyenne mobile (Moving Average)"},
  {value: "Bandes de Bollinger", label: "Bandes de Bollinger (Bollinger Bands)"},
  {value: "Relative Strength Index", label: "Relative Strength Index (RSI)"},
  {value: "Stochastique", label: "Stochastique (Stochastic)"},
  {value: "MACD", label: "MACD (Moving Average Convergence Divergence)"},
  {value: "Volume moyen pondéré", label: "Volume moyen pondéré (Volume Weighted Average Price, VWAP)"},
  {value: "Niveaux de support et de résistance", label: "Niveaux de support et de résistance (Support and Resistance levels)"},
  {value: "Oscillateur de Chaikin", label: "Oscillateur de Chaikin (Chaikin Oscillator)"},
  {value: "Indice de force relative", label: "Indice de force relative (Relative Strength Index, RSI)"},
  {value: "Momentum", label: "Momentum"},
  {value: "Average True Range", label: "Average True Range (ATR)"},
  {value: "Ichimoku Kinko Hyo", label: "Ichimoku Kinko Hyo"},
  {value: "Parabolic SAR", label: "Parabolic SAR (Stop and Reverse)"},
  {value: "Moyenne mobile exponentielle", label: "Moyenne mobile exponentielle (Exponential Moving Average, EMA)"},
  {value: "Fibonacci retracement et extensions", label: "Fibonacci retracement et extensions"},
  {value: "Indice de vigueur relative", label: "Indice de vigueur relative (Relative Vigor Index, RVI)"},
  {value: "Indice de masse", label: "Indice de masse (Mass Index)"},
  {value: "Moyenne mobile pondérée", label: "Moyenne mobile pondérée (Weighted Moving Average, WMA)"},
  {value: "Indice de direction positive", label: "Indice de direction positive"},
  {value: "Oscillateur de force relative", label: "Oscillateur de force relative (Relative Strength Oscillator, RSO)"},
  {value: "SuperTrend", label: "SuperTrend"},
  {value: "Indice de flux monétaire", label: "Indice de flux monétaire (Money Flow Index, MFI)"},
  {value: "Indicateur de divergence de convergence de moyenne mobile", label: "Indicateur de divergence de convergence de moyenne mobile"},
  {value: "Indice de facilité de mouvement", label: "Indice de facilité de mouvement (Ease of Movement, EOM)"},
  {value: "Indicateur de volume", label: "Indicateur de volume (Volume Indicator)"},
  {value: "Indice de la ligne d'équilibre", label: "Indice de la ligne d'équilibre (Equilibrium Line, EL)"},
  {value: "Indicateur de volatilité", label: "Indicateur de volatilité (Volatility Indicator)"},
  {value: "Indicateur de tendance", label: "Indicateur de tendance (Trend Indicator)"},
  {value: "Indicateur de cycle", label: "Indicateur de cycle (Cycle Indicator)"},
  {value: "Indicateur de sentiment", label: "Indicateur de sentiment (Sentiment Indicator)"}
];

export const fetchIndicateurOptions = async (username) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationIndicateur?username=${username}`);
    const data = response.data;
    
    const cleanOptions = data.map(item => ({ value: item.nomIndicateur, label: item.nomIndicateur }));
    
    const options = indicateurOptions.concat(cleanOptions);
    return options;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const timeFrameOptions = [
  {value: "1 minutes", label: "1 minutes"},
  {value: "5 minutes", label: "5 minutes"},
  {value: "15 minutes", label: "15 minutes"},
  {value: "30 minutes", label: "30 minutes"},
  {value: "1 heure", label: "1 heure"},
  {value: "Daily", label: "Daily"},
  {value: "Weekly", label: "Weekly"}
]

let recuperationCollectionOption = [];

export const fetchCollectionOptions = async (username) => {
  try {
    const response = await axios.get(`https://apipython2.onrender.com/recuperationPorteFeuille?username=${username}`);
    const data = response.data;

    const cleanOptions = data.map(item => ({ value: item.nomComplet, label: item.nomSeul }));
    const options = recuperationCollectionOption.concat(cleanOptions);
    return options;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const meilleurOptions = [
  {value: "RR", label: "RR"},
  {value: "TPR", label: "TP"},
  {value: "SLR", label: "SL"},
  {value: "strategie", label: "Strategie"},
  {value: "profit", label: "Profit"}
]