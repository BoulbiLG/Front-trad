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

const Winrate = ({ reponseAPI }) => {

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (reponseAPI) {
        const reponseAPIArray = Object.entries(reponseAPI).map(([cle, value]) => ({
            cle,
            value
        }));

        const reponseSansTest = reponseAPIArray.filter(({ cle }) => cle !== 'typeEnregistrement');

        const cleBrut = reponseSansTest.map(({ cle }) => cle);

        const cle = cleBrut.map((cle) => {
            if (cle === "True") {
              return "Oui";
            } else if (cle === "False") {
              return "Non";
            } else {
              return cle;
            }
          });

        const valeur = reponseSansTest.map(({ value }) => parseInt(value, 10));

        data = {
            labels: cle,
            datasets: [
                {
                    label: 'Winrate',
                    data: valeur,
                    backgroundColor: 'aqua',
                    borderWidth: 0,
                    borderRadius: 20
                }
            ]
        }
        }

        setChartData(data);
    }, [reponseAPI]);

    return (
        <div className='ConteneurWinrate' >
            { data !== undefined && data !== null ? (
                <>
                    {chartData && <Bar data={chartData} options={options}></Bar>}
                </>
            ) : null}
        </div>
    )
}

export default Winrate;
