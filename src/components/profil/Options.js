import axios from 'axios';

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