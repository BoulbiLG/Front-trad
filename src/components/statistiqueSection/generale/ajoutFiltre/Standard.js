
// VERIFICATION STANDARD OPTION
export const verificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    let tableauFiltre = [];
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "nom", value: null},
            {filtre: "filtreDeBase", type: "volume", value: null},
            {filtre: "filtreAnnexe", type: "symbole", value: null},
            {filtre: "filtreAnnexe", type: "typeOfTransaction", value: null},
            {filtre: "filtreAnnexe", type: "date", value: null},
        ]
    }
    if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "nom", value: null},
            {filtre: "filtreDeBase", type: "volume", value: null},
        ]
    }
    if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "typeOfTransaction", value: null},
            {filtre: "filtreAnnexe", type: "date", value: null},
        ]
    }
    setTableauFiltre(tableauFiltre);
};
