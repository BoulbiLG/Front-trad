import axios from 'axios';

const apiUrl = 'https://apipython2.onrender.com';
const username = sessionStorage.getItem('username');

export const ajoutManuelTrade = async (collectionValues, magicNumber, volume, symbole, priceOpening, stopLoss, takeProfit, priceClosure, swap, 
  profit, commission, balance, typeTransaction, orderType, identifier, closurePosition, ticketNumber, dateDebut, dateFin
  ) => {
    try {

      const headers = { 'Content-Type': 'application/json' };

      let data = {"username": username}

      if (dateFin !== null || dateFin !== '') {data['dateAndTimeClosure'] = dateFin}
      if (dateDebut !== null || dateDebut !== '') {data['dateAndTimeOpening'] = dateDebut}
      if (ticketNumber !== null || ticketNumber !== '') {data['ticketNumber'] = parseFloat(ticketNumber)}
      if (closurePosition !== null || closurePosition !== '') {data['closurePosition'] = closurePosition}
      if (identifier !== null || identifier !== '') {data['identifier'] = parseFloat(identifier)}
      if (collectionValues !== null || collectionValues !== '') {data['collectionValues'] = collectionValues}
      if (magicNumber !== null || magicNumber !== '') {data['magicNumber'] = parseFloat(magicNumber)}
      if (volume !== null || volume !== '') {data['volume'] = parseFloat(volume)}
      if (symbole !== null || symbole !== '') {data['symbole'] = parseFloat(symbole)}
      if (priceOpening !== null || priceOpening !== '') {data['priceOpening'] = parseFloat(priceOpening)}
      if (stopLoss !== null || stopLoss !== '') {data['stopLoss'] = parseFloat(stopLoss)}
      if (takeProfit !== null || takeProfit !== '') {data['takeProfit'] = parseFloat(takeProfit)}
      if (priceClosure !== null || priceClosure !== '') {data['priceClosure'] = parseFloat(priceClosure)}
      if (swap !== null || swap !== '') {data['swap'] = parseFloat(swap)}
      if (profit !== null || profit !== '') {data['profit'] = parseFloat(profit)}
      if (commission !== null || commission !== '') {data['commision'] = parseFloat(commission)}
      if (balance !== null || balance !== '') {data['balance'] = parseFloat(balance)}
      if (typeTransaction !== null || typeTransaction !== '') {data['typeOfTransaction'] = typeTransaction}
      if (orderType !== null || orderType !== '') {data['orderType'] = orderType}

      console.log(data);
      await axios.post(`${apiUrl}/savetraderequestManuel`, data, { headers });
      return 'Modifications appliquées avec succès.';
    } catch (error) {
      console.log('Erreur lors de l\'application des modifications :', error);
      return 'Une erreur est survenue lors de l\'application des modifications.';
    }
}