const getArgumentPsychologie2 = (psychologieSelectedOption2) => {
    let argumentPsy2 = "";
    if (psychologieSelectedOption2 === "frustration") {argumentPsy2 = "frustration";}
    else if (psychologieSelectedOption2 === "colère") {argumentPsy2 = "colère";}
    else if (psychologieSelectedOption2 === "impatience") {argumentPsy2 = "impatience";}
    else if (psychologieSelectedOption2 === "peur") {argumentPsy2 = "peur";}
    else if (psychologieSelectedOption2 === "doute") {argumentPsy2 = "doute";} 
    else if (psychologieSelectedOption2 === "revanche") {argumentPsy2 = "revanche";} 
    else if (psychologieSelectedOption2 === "jeu") {argumentPsy2 = "jeu";} 
    else if (psychologieSelectedOption2 === "rattrapage") {argumentPsy2 = "rattrapage";}
    return argumentPsy2;
  };
  
  export default getArgumentPsychologie2;