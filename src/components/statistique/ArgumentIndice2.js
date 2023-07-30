function getArgumentFiltre2(indiceSelectedOption2) {
    let argumentFiltre2 = "";
  
    if (indiceSelectedOption2 === "DowJonesIndustrialAverage") {argumentFiltre2 = "Dow Jones Industrial Average";}
    else if (indiceSelectedOption2 === "NAS") {argumentFiltre2 = "NAS";}
    else if (indiceSelectedOption2 === "FTSE100") {argumentFiltre2 = "FTSE100";}
    else if (indiceSelectedOption2 === "DAX30") {argumentFiltre2 = "DAX30";}
    else if (indiceSelectedOption2 === "CAC40") {argumentFiltre2 = "CAC40";}
    else if (indiceSelectedOption2 === "Nikkei225") {argumentFiltre2 = "Nikkei225";}
    else if (indiceSelectedOption2 === "ShangaiComposite") {argumentFiltre2 = "ShangaiComposite";}
    else if (indiceSelectedOption2 === "HangSengIndex") {argumentFiltre2 = "HangSengIndex";}
    else if (indiceSelectedOption2 === "S&P/ASX200") {argumentFiltre2 = "S&P/ASX200";}
    else if (indiceSelectedOption2 === "Bovespa") {argumentFiltre2 = "Bovespa";}
    else if (indiceSelectedOption2 === "Nifty50") {argumentFiltre2 = "Nifty50";}
    else if (indiceSelectedOption2 === "TAIEX") {argumentFiltre2 = "TAIEX";}
    else if (indiceSelectedOption2 === "RTSIndex") {argumentFiltre2 = "RTSIndex";}
    else if (indiceSelectedOption2 === "S&P/TSXComposite") {argumentFiltre2 = "S&P/TSXComposite";}
    else if (indiceSelectedOption2 === "ADAUSD") {argumentFiltre2 = "ADAUSD";} 
    //FOREX
    else if (indiceSelectedOption2 === "EUR/USD") {argumentFiltre2 = "EUR/USD";}
    else if (indiceSelectedOption2 === "USD/JPY") {argumentFiltre2 = "USD/JPY";}
    else if (indiceSelectedOption2 === "GBP/USD") {argumentFiltre2 = "GBP/USD";}
    else if (indiceSelectedOption2 === "USD/CHF") {argumentFiltre2 = "USD/CHF";}
    else if (indiceSelectedOption2 === "USD/CAD") {argumentFiltre2 = "USD/CAD";}
    else if (indiceSelectedOption2 === "AUD/USD") {argumentFiltre2 = "AUD/USD";}
    else if (indiceSelectedOption2 === "NZD/USD") {argumentFiltre2 = "NZD/USD";}
    else if (indiceSelectedOption2 === "EUR/GBP") {argumentFiltre2 = "EUR/GBP";}
    else if (indiceSelectedOption2 === "EUR/JPY") {argumentFiltre2 = "EUR/JPY";}
    else if (indiceSelectedOption2 === "GBP/JPY") {argumentFiltre2 = "GBP/JPY";}
    else if (indiceSelectedOption2 === "AUD/JPY") {argumentFiltre2 = "AUD/JPY";}
    else if (indiceSelectedOption2 === "NZD/JPY") {argumentFiltre2 = "NZD/JPY";}
    else if (indiceSelectedOption2 === "GBP/CHF") {argumentFiltre2 = "GBP/CHF";}
    else if (indiceSelectedOption2 === "EUR/CHF") {argumentFiltre2 = "EUR/CHF";}
    else if (indiceSelectedOption2 === "CAD/JPY") {argumentFiltre2 = "CAD/JPY";}
    else if (indiceSelectedOption2 === "AUD/CAD") {argumentFiltre2 = "AUD/CAD";}
    else if (indiceSelectedOption2 === "NZD/CAD") {argumentFiltre2 = "NZD/CAD";}
    //ACTIONS
    else if (indiceSelectedOption2 === "Apple") {argumentFiltre2 = "Apple";}
    else if (indiceSelectedOption2 === "Amazon") {argumentFiltre2 = "Amazon";}
    else if (indiceSelectedOption2 === "Microsoft") {argumentFiltre2 = "Microsoft";}
    else if (indiceSelectedOption2 === "Alphabet") {argumentFiltre2 = "Alphabet";}
    else if (indiceSelectedOption2 === "Facebook") {argumentFiltre2 = "Facebook";}
    else if (indiceSelectedOption2 === "Tesla") {argumentFiltre2 = "Tesla";}
    else if (indiceSelectedOption2 === "Alibaba") {argumentFiltre2 = "Alibaba";}
    else if (indiceSelectedOption2 === "Berkshire") {argumentFiltre2 = "Berkshire";}
    else if (indiceSelectedOption2 === "JPMorgan") {argumentFiltre2 = "JPMorgan";}
    else if (indiceSelectedOption2 === "Visa") {argumentFiltre2 = "Visa";}
    else if (indiceSelectedOption2 === "Johnson") {argumentFiltre2 = "Johnson";}
    else if (indiceSelectedOption2 === "Samsung") {argumentFiltre2 = "Samsung";}
    else if (indiceSelectedOption2 === "Toyota") {argumentFiltre2 = "Toyota";}
    else if (indiceSelectedOption2 === "Tencent") {argumentFiltre2 = "Tencent";}
    else if (indiceSelectedOption2 === "Exxon") {argumentFiltre2 = "Exxon";}
    else if (indiceSelectedOption2 === "Procter") {argumentFiltre2 = "Procter";}
    else if (indiceSelectedOption2 === "Walmart") {argumentFiltre2 = "Walmart";}
    else if (indiceSelectedOption2 === "CocaCola") {argumentFiltre2 = "CocaCola";}
    else if (indiceSelectedOption2 === "PepsiCo") {argumentFiltre2 = "PepsiCo";}
    else if (indiceSelectedOption2 === "Intel") {argumentFiltre2 = "Intel";}
    return argumentFiltre2;
}
  
module.exports = {
    getArgumentFiltre2,
};