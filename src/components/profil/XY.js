export const verificationFiltre = async (sortieManuelle, takeProfit, stopLoss, rrRange, AnnEco, positionSignInfl, typeOrdre, tilt, buySell, violeStrat,
  sortie, TJS) => {
    let argumentTPR = '';
    let argumentSL = '';
    let argumentBE = '';
    let argumentAnnEco = '';
    let argumentPos = '';
    let argumentTypOrd = '';
    let argumentSortieManuelle = '';
    let argumentTilt = '';
    let argumentBuySell = '';
    let argumentVioleStrat = '';
    let argumentSortie = '';
    let argumentTJS = '';
  
    // TJS
    if (TJS === 'positif') {
      argumentTJS = 'true';
    } else if (TJS === 'négatif') {
      argumentTJS = 'false';
    }

    // sortie
    if (sortie === 'technique') {
      argumentSortie = 'Technique';
    } else if (sortie === 'émotion') {
      argumentSortie = 'Emotion';
    }

    // violeStrat
    if (violeStrat === 'oui') {
      argumentVioleStrat = 'true';
    } else if (violeStrat === 'non') {
      argumentVioleStrat = 'false';
    }

    // tilt
    if (tilt === 'oui') {
      argumentTilt = 'true';
    } else if (tilt === 'non') {
      argumentTilt = 'false';
    }

    // sortie manuelle
    if (sortieManuelle === 'succès') {
      argumentSortieManuelle = 'true';
    } else if (sortieManuelle === 'échec') {
      argumentSortieManuelle = 'false';
    }

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
      argumentPos = 'Signal';
    } else if (positionSignInfl === 'influence') {
      argumentPos = 'Influence';
    } 
    
    //type d'ordre
    if (typeOrdre === 'market') {
      argumentTypOrd = 'Market';
    } else if (typeOrdre === 'conditionnel') {
      argumentTypOrd = 'Conditional';
    } 

    // buySell
    if (buySell === 'Sell') {
      argumentBuySell = 'SELL';
    } else if (buySell === 'Buy') {
      argumentBuySell = 'BUY';
    } 
    return { argumentTPR, argumentSL, argumentBE, argumentAnnEco, argumentPos, argumentTypOrd, argumentSortieManuelle, argumentTilt, argumentBuySell,
    argumentVioleStrat, argumentSortie, argumentTJS };
  };