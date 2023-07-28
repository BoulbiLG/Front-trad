import axios from "axios";

const username = sessionStorage.getItem('username');

export const recuperationTradeOption = [
    { value: "tout", label: "Tout" },
    { value: "nonrenseigne", label: "Non renseigné" },
    { value: "renseigne", label: "Renseigné" },
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

export const fetchIndicateurOptions = async () => {
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

  export const timeFrameOptions = [
    {value: "1 minutes", label: "1 minutes"},
    {value: "5 minutes", label: "5 minutes"},
    {value: "15 minutes", label: "15 minutes"},
    {value: "30 minutes", label: "30 minutes"},
    {value: "1 heure", label: "1 heure"},
    {value: "Daily", label: "Daily"},
    {value: "Weekly", label: "Weekly"}
  ]