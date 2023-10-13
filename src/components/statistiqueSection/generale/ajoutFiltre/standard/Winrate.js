import { generiqueAjoutFiltre, generiqueAjoutFiltreAnnexe, generiqueAjoutFiltreFusion, generiqueAjoutFiltreDate } from "../Fonction";

// VERIFICATION STANDARD OPTION
export const verificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, 
    setTableauFiltreValue, tableauFiltreValue, setWinrateValue, filtreDeBase, filtreAnnexe, setFiltreDeBase, setFiltreAnnexe) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];

    // PSYCHOLOGIE
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "psychologie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'psychologie';

    // SYMBOL
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "symbol", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "symbol", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'symbol';

    // DATE
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "date", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreDate("winrate", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'date';
        console.log(tableauFiltreValue);

    // LIMIT
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "limit", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "limit", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'limit';

    // STRATEGIE
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "strategie", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "strategie", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'strategie';

    // PERCENT
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Percent", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "Percent", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'Percent';

    // DURATION
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "duration", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "duration", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'duration';
    
    // ANNONCE ECONOMIQUE
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "annonceEconomique", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "annonceEconomique", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'annonceEconomique';
    
    // ORDERTYPE
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "orderType", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "orderType", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'orderType';

    // SESSION
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "session", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "session", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'session';

    // MULTI
    } else if (optionChoisi === "option11") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "Multi", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "Multi", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'Multi';
    }

    // TRADECOUNT
    else if (optionChoisi === "option12") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "tradecount", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltreFusion("winrate", "tradecount", tableauFiltreValue, setTableauFiltreValue);
        filtreDeBase = 'winrate';
        filtreAnnexe = 'tradecount';
    }
    setFiltreDeBase(filtreDeBase);
    setFiltreAnnexe(filtreAnnexe);
    setTableauFiltre(tableauFiltre);
};
