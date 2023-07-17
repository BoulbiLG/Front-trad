export const verificationFiltre = async (takeProfit, stopLoss, rrRange, AnnEco, positionSignInfl, typeOrdre) => {
    let argumentTPR = ''; // Déclarer la variable locale
    let argumentSL = ''; // Déclarer la variable locale
    let argumentBE = ''; // Déclarer la variable locale
    let argumentAnnEco = ''; // Déclarer la variable locale
    let argumentPos = ''; // Déclarer la variable locale
    let argumentTypOrd = ''; // Déclarer la variable locale
  
    //TPR
    if (takeProfit === 'Atteint') {
      argumentTPR = 'atteint';
    } else if (takeProfit === 'Dépassé') {
      argumentTPR = 'depasse';
    } else if (takeProfit === 'Non atteint') {
      argumentTPR = 'nonAtteint';
    }
  
    //SL
    if (stopLoss === 'Atteint') {
      argumentSL = 'atteint';
    } else if (stopLoss === 'Partiel') {
      argumentSL = 'partiel';
    }
  
    //RR
    if (rrRange === '-0.5RR < BE < 0.5RR') {
      argumentBE = 'true';
    }

    //Annonce économique
    if (AnnEco === 'oui') {
      argumentAnnEco = 'true';
    } else if (AnnEco === 'non') {
      argumentAnnEco = 'false';
    } 
    
    //positionSignInfl
    if (positionSignInfl === 'signal') {
      argumentPos = 'signal';
    } else if (positionSignInfl === 'influence') {
      argumentPos = 'influence';
    } 

    //type d'ordre
    if (typeOrdre === 'market') {
      argumentTypOrd = 'market';
    } else if (typeOrdre === 'conditionnel') {
      argumentTypOrd = 'conditionnel';
    } 
    return { argumentTPR, argumentSL, argumentBE, argumentAnnEco, argumentPos, argumentTypOrd };
  };