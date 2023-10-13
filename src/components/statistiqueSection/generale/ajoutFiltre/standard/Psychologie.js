import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const PsychologieVerificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, 
    tableauFiltreValue, setWinrateValue, filtreDeBase, filtreAnnexe, setFiltreDeBase, setFiltreAnnexe
    ) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // SYMBOL
    if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "symbol", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'symbol';

    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreDate("psychologie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'date';

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "limit", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'limit';

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "strategie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'strategie';

    // PERCENT
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Percent", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "Percent", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'Percent';

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "duration", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'duration';
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'annonceEconomique';
    
    // ORDERTYPE
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "orderType", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "orderType", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'orderType';

    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "session", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'session';

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "Multi", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'Multi';
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
        generiqueAjoutFiltreFusion("psychologie", "tradecount", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'psychologie';
        filtreAnnexe = 'tradecount';
    }
    setFiltreDeBase(filtreDeBase);
    setFiltreAnnexe(filtreAnnexe);
    setTableauFiltre(tableauFiltre);
};
