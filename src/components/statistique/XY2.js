export const verificationFiltre2 = async (sortieManuelle2, takeProfit2, stopLoss2, rrRange2, AnnEco2, positionSignInfl2, typeOrdre2, tilt2, buySell2, 
  violeStrat2, sortie2, TJS2) => {
    let argumentTPR2 = '';
    let argumentSL2 = '';
    let argumentBE2 = '';
    let argumentAnnEco2 = '';
    let argumentPos2 = '';
    let argumentTypOrd2 = '';
    let argumentSortieManuelle2 = '';
    let argumentTilt2 = '';
    let argumentBuySell2 = '';
    let argumentVioleStrat2 = '';
    let argumentSortie2 = '';
    let argumentTJS2 = '';
  
    // TJS
    if (TJS2 === 'positif') {
      argumentTJS2 = 'true';
    } else if (TJS2 === 'négatif') {
      argumentTJS2 = 'false';
    }

    // sortie
    if (sortie2 === 'technique') {
      argumentSortie2 = 'Technique';
    } else if (sortie2 === 'émotion') {
      argumentSortie2 = 'Emotion';
    }

    // violeStrat
    if (violeStrat2 === 'oui') {
      argumentVioleStrat2 = 'true';
    } else if (violeStrat2 === 'non') {
      argumentVioleStrat2 = 'false';
    }

    // tilt
    if (tilt2 === 'oui') {
      argumentTilt2 = 'true';
    } else if (tilt2 === 'non') {
      argumentTilt2 = 'false';
    }

    // sortie manuelle
    if (sortieManuelle2 === 'succès') {
      argumentSortieManuelle2 = 'true';
    } else if (sortieManuelle2 === 'échec') {
      argumentSortieManuelle2 = 'false';
    }

    //TPR
    if (takeProfit2 === 'Atteint') {
      argumentTPR2 = 'atteint';
    } else if (takeProfit2 === 'Dépassé') {
      argumentTPR2 = 'depasse';
    } else if (takeProfit2 === 'Non atteint') {
      argumentTPR2 = 'nonAtteint';
    }
  
    //SL
    if (stopLoss2 === 'Atteint') {
      argumentSL2 = 'atteint';
    } else if (stopLoss2 === 'Partiel') {
      argumentSL2 = 'partiel';
    }
  
    //RR
    if (rrRange2 === '-0.5RR < BE < 0.5RR') {
      argumentBE2 = 'true';
    }

    //Annonce économique
    if (AnnEco2 === 'oui') {
      argumentAnnEco2 = 'true';
    } else if (AnnEco2 === 'non') {
      argumentAnnEco2 = 'false';
    } 
    
    //positionSignInfl
    if (positionSignInfl2 === 'signal') {
      argumentPos2 = 'Signal';
    } else if (positionSignInfl2 === 'influence') {
      argumentPos2 = 'Influence';
    } 
    
    //type d'ordre
    if (typeOrdre2 === 'market') {
      argumentTypOrd2 = 'Market';
    } else if (typeOrdre2 === 'conditionnel') {
      argumentTypOrd2 = 'Conditional';
    } 

    // buySell
    if (buySell2 === 'Sell') {
      argumentBuySell2 = 'SELL';
    } else if (buySell2 === 'Buy') {
      argumentBuySell2 = 'BUY';
    } 
    return { argumentTPR2, argumentSL2, argumentBE2, argumentAnnEco2, argumentPos2, argumentTypOrd2, argumentSortieManuelle2, argumentTilt2, 
      argumentBuySell2, argumentVioleStrat2, argumentSortie2, argumentTJS2 };
  };