import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../../css/statistique/generale/winrate.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

let options = {};

const TPR = ({ reponseAPI, filtreDeBase, filtreAnnexe }) => {

    const [aucuneDonnee, setAucuneDonnee] = useState('false');

    console.log(filtreAnnexe);

    const [chartData, setChartData] = useState(null);
    let data = {};

    useEffect(() => {
        if (reponseAPI && reponseAPI != null && Object.keys(reponseAPI).length > 0) {

            let counts = {};

            // ==================== LABEL ==================== //

            for (const key in reponseAPI) {
                if (reponseAPI[key] === true || reponseAPI[key] === false || reponseAPI[key] === 'credit') {
                    if (!counts[key]) {
                        counts[key] = { true: 0, false: 0, credit: 0 };
                    }
                    if (reponseAPI[key] === true) {
                        counts[key].true++;
                    } else if (reponseAPI[key] === false) {
                        counts[key].false++;
                    } else if (reponseAPI[key] === 'credit') {
                        counts[key].credit++;
                    }
                }
            }

            const labels = Object.keys(counts);

            // ==================== ECHELLE ==================== //
            
            const maxValues = {};
            for (const key in counts) {
                maxValues[key] = Math.max(counts[key].true, counts[key].false, counts[key].credit);
            }

            // ==================== AFFINAGE LABEL ==================== //

            let modifiedCounts = {};

            for (const key in counts) {
                let newKey = key;
                if (filtreAnnexe === 'limit') {
                    if (key === "False") {
                        newKey = "Market";
                    } else if (key === "True") {
                        newKey = "Limit";
                    }
                } else if (filtreAnnexe === 'annonceEconomique') {
                    if (key === "False") {
                        newKey = "Sans annonce économique";
                    } else if (key === "True") {
                        newKey = "Lors d'une annonce économique";
                    }
                } else if (filtreAnnexe == "orderType") {
                    if (key === "BUY") {
                        newKey = "Achat";
                    } else if (key === "SELL") {
                        newKey = "Vente";
                    }
                } else if (filtreAnnexe == "session") {
                    if (key === "AS") {newKey = "Asie";} 
                    else if (key === "EURSD") {newKey = "";}
                    else if (key === "NY") {newKey = "New York";}
                    else if (key === "LD") {newKey = "London";}
                    else if (key === "EURSD") {newKey = "Europe";}
                    else if (key === "ND") {newKey = "Hors session";}
                } else if (filtreAnnexe == "Multi") {
                    if (key === "True") {newKey = "Oui";} 
                    else if (key === "False") {newKey = "Non";} 
                }
                modifiedCounts[newKey] = counts[key];
            }

            console.log(modifiedCounts);

            let datasets;
            if (Object.keys(counts[labels[0]]) !== undefined && Object.keys(counts[labels[0]]) !== null) {
                datasets = Object.keys(counts[labels[0]]);
            } else {
                datasets = ''
            }

            let maxOverall = Math.max(...Object.values(maxValues));

            if (maxOverall < 10) {
                maxOverall = 10;
            }

            console.log("maxOverall : ", maxOverall);

            const labelColors = ['aqua', 'lightgreen', 'lightblue'];

            options = {
                animation: {
                    duration: 0,
                },
                scales: {
                y: {
                    beginAtZero: true,
                    max: maxOverall,
                },
                },
            };

            data = {
                labels: Object.keys(modifiedCounts),
                datasets: datasets.map((dataset, index) => ({
                    label: dataset,
                    data: Object.keys(modifiedCounts).map((label) => modifiedCounts[label][dataset]),
                    backgroundColor: labelColors[index % labelColors.length],
                    borderWidth: 0,
                    borderRadius: 0,
                })),
            };

            setAucuneDonnee('false');
            setChartData(data);
        } else {
            setAucuneDonnee('true');
        }
    }, [reponseAPI, filtreAnnexe]);

    return (
        <div className='ConteneurWinrate'>
        {data !== undefined && data !== null ? (
            <>
            {chartData && <Bar data={chartData} options={options}></Bar>}
            </>
        ) : null}
        {aucuneDonnee === "true" ? (
            <p>Aucun graphique disponible</p>
        ) : null }
        </div>
    );
};

export default TPR;