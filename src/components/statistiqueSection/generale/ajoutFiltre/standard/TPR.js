import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const TPRverificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, 
    setTableauFiltreValue, tableauFiltreValue, setWinrateValue, filtreDeBase, filtreAnnexe, setFiltreDeBase, setFiltreAnnexe) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // PSYCHOLOGIE
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "psychologie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'psychologie';

    // SYMBOL
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "symbol", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'symbol';

    // DATE
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreDate("TPR", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'date';
        console.log(tableauFiltreValue);

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "limit", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'limit';

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "strategie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'strategie';

    // PERCENT
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Percent", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "Percent", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'Percent';

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "duration", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'duration';
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'annonceEconomique';
    
    // ORDERTYPE
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "orderType", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "orderType", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'orderType';

    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "session", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'session';

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "Multi", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'Multi';
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "TPR", value: null},
        ]
        generiqueAjoutFiltreFusion("TPR", "tradecount", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'TPR';
        filtreAnnexe = 'tradecount';
    }
    setFiltreDeBase(filtreDeBase);
    setFiltreAnnexe(filtreAnnexe);
    setTableauFiltre(tableauFiltre);
};
