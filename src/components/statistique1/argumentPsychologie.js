const getArgumentPsychologie = (psychologieSelectedOption) => {
    let argumentPsy = "";
    if (psychologieSelectedOption === "frustration") {argumentPsy = "frustration";}
    else if (psychologieSelectedOption === "colère") {argumentPsy = "colère";}
    else if (psychologieSelectedOption === "impatience") {argumentPsy = "impatience";}
    else if (psychologieSelectedOption === "peur") {argumentPsy = "peur";}
    else if (psychologieSelectedOption === "doute") {argumentPsy = "doute";} 
    else if (psychologieSelectedOption === "revanche") {argumentPsy = "revanche";} 
    else if (psychologieSelectedOption === "jeu") {argumentPsy = "jeu";} 
    else if (psychologieSelectedOption === "rattrapage") {argumentPsy = "rattrapage";}
    return argumentPsy;
  };
  
  export default getArgumentPsychologie;