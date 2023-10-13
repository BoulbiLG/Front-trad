import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const SLRverificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, 
    setTableauFiltreValue, tableauFiltreValue, setWinrateValue, filtreDeBase, filtreAnnexe, setFiltreDeBase, setFiltreAnnexe) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // PSYCHOLOGIE
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "psychologie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'psychologie';

    // SYMBOL
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "symbol", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'symbol';

    // DATE
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreDate("SLR", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'date';

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "limit", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'limit';

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "strategie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'strategie';

    // PERCENT
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Percent", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "Percent", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'Percent';

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "duration", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'duration';
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'annonceEconomique';
    
    // ORDERTYPE
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "orderType", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "orderType", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'orderType';

    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "session", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'session';

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "Multi", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'Multi';
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "SLR", value: null},
        ]
        generiqueAjoutFiltreFusion("SLR", "tradecount", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'SLR';
        filtreAnnexe = 'tradecount';
    }
    setFiltreDeBase(filtreDeBase);
    setFiltreAnnexe(filtreAnnexe);
    setTableauFiltre(tableauFiltre);
};
