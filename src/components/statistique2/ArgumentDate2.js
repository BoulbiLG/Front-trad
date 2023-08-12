const getArgumentDate2 = (otherSelectedOption2) => {
    let argumentDate2 = "";
    if (otherSelectedOption2 === "aujourd'hui") {
      argumentDate2 = "aujourd'hui";
    } else if (otherSelectedOption2 === "semaineEnCours") {
      argumentDate2 = "semaineEnCours";
    } else if (otherSelectedOption2 === "semaineGlissante") {
      argumentDate2 = "semaineGlissante";
    } else if (otherSelectedOption2 === "moisGlissant") {
      argumentDate2 = "moisGlissant";
    } else if (otherSelectedOption2 === "moisEnCours") {
      argumentDate2 = "moisEnCours";
    } else if (otherSelectedOption2 === "choixLibre") {
      argumentDate2 = "choixLibre";
    }
    return argumentDate2;
  };
  
  export default getArgumentDate2;