import { generiqueAjoutFiltre, generiqueSelectorAjoutValueFiltre } from "./Fonction";

// VERIFICATION STANDARD OPTION
export const verificationStandardOption = (selectedValue, setStandardValue, setTableauFiltre, setTableauFiltreValue, tableauFiltreValue, setWinrateValue) => {
    const optionChoisi = selectedValue;
    setStandardValue(optionChoisi);
    setTableauFiltreValue([]);
    let tableauFiltre = [];
    if (optionChoisi === "option1") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "winrate", value: null},
        ]
        generiqueAjoutFiltre("winrate", setWinrateValue, tableauFiltreValue, setTableauFiltreValue);
        generiqueSelectorAjoutValueFiltre("psychologie", tableauFiltreValue, setTableauFiltreValue);
    } else if (optionChoisi === "option2") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "balance", value: null},
        ]
    } else if (optionChoisi === "option3") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "RR", value: null},
        ]
    } else if (optionChoisi === "option4") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
            {filtre: "filtreAnnexe", type: "strategie", value: null},
        ]
    } else if (optionChoisi === "option5") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "RR", value: null},
            {filtre: "filtreAnnexe", type: "date", value: null},
        ]
    } else if (optionChoisi === "option6") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "RR", value: null},
            {filtre: "filtreAnnexe", type: "symbol", value: null},
        ]
    } else if (optionChoisi === "option7") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "RR", value: null},
            {filtre: "filtreAnnexe", type: "strategie", value: null},
        ]
    } else if (optionChoisi === "option8") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "RR", value: null},
            {filtre: "filtreAnnexe", type: "psychologie", value: null},
        ]
    } else if (optionChoisi === "option9") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "RR", value: null},
            {filtre: "filtreAnnexe", type: "orderType", value: null},
        ]
    } else if (optionChoisi === "option10") {
        tableauFiltre = [
            {filtre: "filtreAnnexe", type: "RR", value: null},
            {filtre: "filtreAnnexe", type: "capitalrisk", value: null},
        ]
    }
    setTableauFiltre(tableauFiltre);
};
