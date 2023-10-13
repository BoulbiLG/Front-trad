import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../../css/statistique/generale/winrate.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

let options = {};

let data = {}

const RR = ({ reponseAPI, filtreDeBase, filtreAnnexe }) => {

    const [aucuneDonnee, setAucuneDonnee] = useState('false');

    const [chartData, setChartData] = useState(null);

    console.log(filtreAnnexe);

    useEffect(() => {
        if (reponseAPI && reponseAPI != null && Object.keys(reponseAPI).length > 0) {
            const reponseAPIArray = Object.entries(reponseAPI).map(([cle, value]) => ({
                cle,
                value
            }));

            const reponseSansTest = reponseAPIArray.filter(({ cle }) => cle !== 'typeEnregistrement');

            let cleBrut = reponseSansTest.map(({ cle }) => cle);

            const valeur = reponseSansTest.map(({ value }) => parseInt(value, 10));

            let cleArrondies;

            let cle;

            cle = cleBrut;

            // ==================== CREATION ECHELLE + ==================== //

            let maxNumericValue = -Infinity;
            let foundNumericValue = false;

            for (const key in reponseAPI) {
                if (typeof reponseAPI[key] === "number") {
                    if (!foundNumericValue || reponseAPI[key] > maxNumericValue) {
                        maxNumericValue = reponseAPI[key];
                        foundNumericValue = true;
                    }
                }
            }

            if (maxNumericValue < 5) {
                maxNumericValue = 5;
            }

            if (foundNumericValue) {
                console.log("La valeur numérique la plus élevée est : " + maxNumericValue);
            } else {
                console.log("Aucune valeur numérique trouvée dans l'objet reponseAPI.");
            }

            // ==================== CREATION ECHELLE - ==================== //

            let minNumericValue = Infinity;

            for (const key in reponseAPI) {
                if (typeof reponseAPI[key] === "number") {
                    if (!foundNumericValue || reponseAPI[key] < minNumericValue) {
                        minNumericValue = reponseAPI[key];
                        foundNumericValue = true;
                    }
                }
            }

            if (minNumericValue > -5) {
                minNumericValue = -5;
            }

            if (foundNumericValue) {
                console.log("La valeur numérique la plus basse est : " + minNumericValue);
            } else {
                console.log("Aucune valeur numérique trouvée dans l'objet reponseAPI.");
            }

            // ==================== CONVERSION TEXTE ==================== //

            if (filtreAnnexe == "limit") {
                cle = cleBrut.map((cle) => {if (cle === "True") {return "Limit";} else if (cle === "False") {return "Market";} else {return cle;}});
            }
            if (filtreAnnexe == "Percent") {
                cleArrondies = cleBrut.map((valeur) => {
                    const nombre = parseFloat(valeur);
                    if (!isNaN(nombre) && isFinite(nombre)) { return parseFloat(nombre.toFixed(3));} return valeur;
                });
                cle = cleArrondies;
                console.log("cleArrondies : ", cleArrondies)
            }
            if (filtreAnnexe == "annonceEconomique") {
                cle = cleBrut.map((cle) => {if (cle === "True") {return "Lors d'une annonce économique";} else if (cle === "False") {return "Sans annonce économique";} else {return cle;}});
            }
            if (filtreAnnexe == "orderType") {
                cle = cleBrut.map((cle) => {if (cle === "BUY") {return "Achat";} else if (cle === "SELL") {return "Vente";} else {return cle;}});
            }
            if (filtreAnnexe == "session") {
                cle = cleBrut.map((cle) => {
                    if (cle === "AS") {return "Asie";} 
                    else if (cle === "EURSD") {return "";}
                    else if (cle === "NY") {return "New York";}
                    else if (cle === "LD") {return "London";}
                    else if (cle === "EURSD") {return "Europe";}
                    else if (cle === "ND") {return "Hors session";}
                    else {return cle;}
                });
            }
            if (filtreAnnexe == "Multi") {
                cle = cleBrut.map((cle) => {
                    if (cle === "True") {return "Oui";} 
                    else if (cle === "False") {return "Non";} 
                    else {return cle;}
                });
            }

            // ==================== OPTION DATA ==================== //

            options = {
                animation: {
                    duration: 0
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        min: minNumericValue,
                        max: maxNumericValue,
                    }
                }
            };

            data = {
                labels: cle,
                datasets: [
                    {
                        label: 'RR',
                        data: valeur,
                        backgroundColor: 'aqua',
                        borderWidth: 0,
                        borderRadius: 0
                    }
                ]
            }
            setAucuneDonnee('false');
            setChartData(data);
        } else {
            setAucuneDonnee('true');
        }
    }, [reponseAPI]);

    return (
        <div className='ConteneurWinrate' >
            { data !== undefined && data !== null ? (
                <>
                    {chartData && <Bar data={chartData} options={options}></Bar>}
                </>
            ) : null}
            {aucuneDonnee === "true" ? (
                <p>Aucun graphique disponible</p>
            ) : null }
        </div>
    )
}

export default RR;
