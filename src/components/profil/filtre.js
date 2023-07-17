export const verificationFiltre = async (takeProfit, stopLoss, rrRange) => {
    let argumentTPR = ''; // Déclarer la variable locale
    let argumentSL = ''; // Déclarer la variable locale
    let argumentBE = ''; // Déclarer la variable locale
  
    if (takeProfit === 'Atteint') {
      argumentTPR = 'atteint';
    } else if (takeProfit === 'Dépassé') {
      argumentTPR = 'depasse';
    } else if (takeProfit === 'Non atteint') {
      argumentTPR = 'nonAtteint';
    }
  
    if (stopLoss === 'Atteint') {
      argumentSL = 'atteint';
    } else if (stopLoss === 'Partiel') {
      argumentSL = 'partiel';
    }
  
    if (rrRange === '-0.5RR < BE < 0.5RR') {
      argumentBE = 'true';
    }
    
    return { argumentTPR, argumentSL, argumentBE };
  };