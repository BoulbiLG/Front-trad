import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const RRverificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, 
    setTableauFiltreValue, tableauFiltreValue, setWinrateValue, filtreDeBase, filtreAnnexe, setFiltreDeBase, setFiltreAnnexe
    ) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // PSYCHOLOGIE
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "psychologie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'psychologie';

    // SYMBOL
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "symbol", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'symbol';

    // DATE
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreDate("RR", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'date';
        console.log(tableauFiltreValue);

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "limit", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'limit';

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "strategie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'strategie';

    // PERCENT
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Percent", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "Percent", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'Percent';

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "duration", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'duration';
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'annonceEconomique';
    
    // ORDERTYPE
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "orderType", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "orderType", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'orderType';

    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "session", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'session';

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "Multi", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'Multi';
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
        generiqueAjoutFiltreFusion("RR", "tradecount", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'RR';
        filtreAnnexe = 'tradecount';
    }
    setFiltreDeBase(filtreDeBase);
    setFiltreAnnexe(filtreAnnexe);
    setTableauFiltre(tableauFiltre);
};
