import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../../../css/statistique/generale/winrate.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const options = {
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 100,
        }
    }
};

let data = {}

const DD = ({ reponseAPI, filtreDeBase, filtreAnnexe }) => {

    // ==================== CONVERSION STRING DATA ==================== //

    const reponseAPIStringKeys = {};
    for (const key in reponseAPI) {
        if (typeof key !== 'string') {
            const stringKey = key.toString();
            reponseAPIStringKeys[stringKey] = reponseAPI[key];
        } else {
            reponseAPIStringKeys[key] = reponseAPI[key];
        }
    }

    console.log("reponseAPIStringKeys : ", reponseAPIStringKeys);

    const [chartData, setChartData] = useState(null);

    const [aucuneDonnee, setAucuneDonnee] = useState('false');
    
    console.log(filtreAnnexe);

    useEffect(() => {
        if (reponseAPIStringKeys && reponseAPIStringKeys != null && Object.keys(reponseAPIStringKeys).length > 0) {

            const reponseAPIArray = Object.entries(reponseAPIStringKeys).map(([cle, value]) => ({
                cle,
                value
            }));

            const reponseSansTest = reponseAPIArray.filter(({ cle }) => cle !== 'typeEnregistrement');

            // ==================== AFFINAGE LABEL ==================== //

            let modifiedCounts = {};

            for (const key in reponseAPI) {
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
                modifiedCounts[newKey] = reponseAPI[key];
            }

            console.log(modifiedCounts);

            const labels = Object.keys(reponseAPI);

            let datasets;
            if (Object.keys(reponseAPI[labels[0]]) !== undefined && Object.keys(reponseAPI[labels[0]]) !== null) {
                datasets = Object.keys(reponseAPI[labels[0]]);
            } else {
                datasets = ''
            }

            const labelColors = ['aqua', 'lightgreen', 'lightblue', 'red'];

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

export default DD;
