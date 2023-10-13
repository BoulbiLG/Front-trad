import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const TypeOrdreVerificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, 
    setTableauFiltreValue, tableauFiltreValue, setWinrateValue, filtreDeBase, filtreAnnexe, setFiltreDeBase, setFiltreAnnexe) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // PSYCHOLOGIE
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "psychologie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'psychologie';

    // SYMBOL
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "symbol", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'symbol';

    // DATE
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreDate("orderType", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'date';
        console.log(tableauFiltreValue);

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "limit", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'limit';

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "strategie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'strategie';

    // PERCENT
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Percent", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "Percent", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'Percent';

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "duration", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'duration';
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'annonceEconomique';
    
    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "session", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'session';

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "Multi", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'Multi';
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
        generiqueAjoutFiltreFusion("orderType", "tradecount", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'orderType';
        filtreAnnexe = 'tradecount';
    }
    setFiltreDeBase(filtreDeBase);
    setFiltreAnnexe(filtreAnnexe);
    setTableauFiltre(tableauFiltre);
};
