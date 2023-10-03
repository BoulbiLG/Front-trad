import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const TailleLotVerificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // PSYCHOLOGIE
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "psychologie", tableauFiltreValue, setTableauFiltreValue);

    // SYMBOL
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "symbol", tableauFiltreValue, setTableauFiltreValue);

    // DATE
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreDate("Capitalrisk", tableauFiltreValue, setTableauFiltreValue);
        console.log(tableauFiltreValue);

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "limit", tableauFiltreValue, setTableauFiltreValue);

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "strategie", tableauFiltreValue, setTableauFiltreValue);

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "duration", tableauFiltreValue, setTableauFiltreValue);
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
    
    // ORDERTYPE
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "orderType", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "orderType", tableauFiltreValue, setTableauFiltreValue);

    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "session", tableauFiltreValue, setTableauFiltreValue);

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "Multi", tableauFiltreValue, setTableauFiltreValue);
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "Capitalrisk", value: null},
        ]
        generiqueAjoutFiltreFusion("Capitalrisk", "tradecount", tableauFiltreValue, setTableauFiltreValue);
    }
    setTableauFiltre(tableauFiltre);
};
