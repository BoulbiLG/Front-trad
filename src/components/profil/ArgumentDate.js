const getArgumentDate = (otherSelectedOption) => {
    let argumentDate = "";
    if (otherSelectedOption === "aujourd'hui") {
      argumentDate = "aujourd'hui";
    } else if (otherSelectedOption === "semaineEnCours") {
      argumentDate = "semaineEnCours";
    } else if (otherSelectedOption === "semaineGlissante") {
      argumentDate = "semaineGlissante";
    } else if (otherSelectedOption === "moisGlissant") {
      argumentDate = "moisGlissant";
    } else if (otherSelectedOption === "moisEnCours") {
      argumentDate = "moisEnCours";
    } else if (otherSelectedOption === "choixLibre") {
      argumentDate = "choixLibre";
    }
    return argumentDate;
  };
  
  export default getArgumentDate;