function getArgumentFiltre(indiceSelectedOption) {
    let argumentFiltre = "";
  
    if (indiceSelectedOption === "DowJonesIndustrialAverage") {argumentFiltre = "Dow Jones Industrial Average";}
    else if (indiceSelectedOption === "NAS") {argumentFiltre = "NAS";}
    else if (indiceSelectedOption === "FTSE100") {argumentFiltre = "FTSE100";}
    else if (indiceSelectedOption === "DAX30") {argumentFiltre = "DAX30";}
    else if (indiceSelectedOption === "CAC40") {argumentFiltre = "CAC40";}
    else if (indiceSelectedOption === "Nikkei225") {argumentFiltre = "Nikkei225";}
    else if (indiceSelectedOption === "ShangaiComposite") {argumentFiltre = "ShangaiComposite";}
    else if (indiceSelectedOption === "HangSengIndex") {argumentFiltre = "HangSengIndex";}
    else if (indiceSelectedOption === "S&P/ASX200") {argumentFiltre = "S&P/ASX200";}
    else if (indiceSelectedOption === "Bovespa") {argumentFiltre = "Bovespa";}
    else if (indiceSelectedOption === "Nifty50") {argumentFiltre = "Nifty50";}
    else if (indiceSelectedOption === "TAIEX") {argumentFiltre = "TAIEX";}
    else if (indiceSelectedOption === "RTSIndex") {argumentFiltre = "RTSIndex";}
    else if (indiceSelectedOption === "S&P/TSXComposite") {argumentFiltre = "S&P/TSXComposite";}
    else if (indiceSelectedOption === "ADAUSD") {argumentFiltre = "ADAUSD";} 
    //FOREX
    else if (indiceSelectedOption === "EUR/USD") {argumentFiltre = "EUR/USD";}
    else if (indiceSelectedOption === "USD/JPY") {argumentFiltre = "USD/JPY";}
    else if (indiceSelectedOption === "GBP/USD") {argumentFiltre = "GBP/USD";}
    else if (indiceSelectedOption === "USD/CHF") {argumentFiltre = "USD/CHF";}
    else if (indiceSelectedOption === "USD/CAD") {argumentFiltre = "USD/CAD";}
    else if (indiceSelectedOption === "AUD/USD") {argumentFiltre = "AUD/USD";}
    else if (indiceSelectedOption === "NZD/USD") {argumentFiltre = "NZD/USD";}
    else if (indiceSelectedOption === "EUR/GBP") {argumentFiltre = "EUR/GBP";}
    else if (indiceSelectedOption === "EUR/JPY") {argumentFiltre = "EUR/JPY";}
    else if (indiceSelectedOption === "GBP/JPY") {argumentFiltre = "GBP/JPY";}
    else if (indiceSelectedOption === "AUD/JPY") {argumentFiltre = "AUD/JPY";}
    else if (indiceSelectedOption === "NZD/JPY") {argumentFiltre = "NZD/JPY";}
    else if (indiceSelectedOption === "GBP/CHF") {argumentFiltre = "GBP/CHF";}
    else if (indiceSelectedOption === "EUR/CHF") {argumentFiltre = "EUR/CHF";}
    else if (indiceSelectedOption === "CAD/JPY") {argumentFiltre = "CAD/JPY";}
    else if (indiceSelectedOption === "AUD/CAD") {argumentFiltre = "AUD/CAD";}
    else if (indiceSelectedOption === "NZD/CAD") {argumentFiltre = "NZD/CAD";}
    //ACTIONS
    else if (indiceSelectedOption === "Apple") {argumentFiltre = "Apple";}
    else if (indiceSelectedOption === "Amazon") {argumentFiltre = "Amazon";}
    else if (indiceSelectedOption === "Microsoft") {argumentFiltre = "Microsoft";}
    else if (indiceSelectedOption === "Alphabet") {argumentFiltre = "Alphabet";}
    else if (indiceSelectedOption === "Facebook") {argumentFiltre = "Facebook";}
    else if (indiceSelectedOption === "Tesla") {argumentFiltre = "Tesla";}
    else if (indiceSelectedOption === "Alibaba") {argumentFiltre = "Alibaba";}
    else if (indiceSelectedOption === "Berkshire") {argumentFiltre = "Berkshire";}
    else if (indiceSelectedOption === "JPMorgan") {argumentFiltre = "JPMorgan";}
    else if (indiceSelectedOption === "Visa") {argumentFiltre = "Visa";}
    else if (indiceSelectedOption === "Johnson") {argumentFiltre = "Johnson";}
    else if (indiceSelectedOption === "Samsung") {argumentFiltre = "Samsung";}
    else if (indiceSelectedOption === "Toyota") {argumentFiltre = "Toyota";}
    else if (indiceSelectedOption === "Tencent") {argumentFiltre = "Tencent";}
    else if (indiceSelectedOption === "Exxon") {argumentFiltre = "Exxon";}
    else if (indiceSelectedOption === "Procter") {argumentFiltre = "Procter";}
    else if (indiceSelectedOption === "Walmart") {argumentFiltre = "Walmart";}
    else if (indiceSelectedOption === "CocaCola") {argumentFiltre = "CocaCola";}
    else if (indiceSelectedOption === "PepsiCo") {argumentFiltre = "PepsiCo";}
    else if (indiceSelectedOption === "Intel") {argumentFiltre = "Intel";}
    return argumentFiltre;
}
  
module.exports = {
    getArgumentFiltre,
};