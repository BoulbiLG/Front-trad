import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/timeWorld/timeWorld.css';
import { fetchDataFromAPI } from './RecuperationAnnonce';
import { citation } from './tableauCitation';
import PositionCourante from './PositionCourante';
import MorningRoutine from './MorningRoutine';
import AnnonceEconomique from './AnnonceEconomique';

const TimeWorld = () => {
    const [londonTime, setLondonTime] = useState('');
    const [newYorkTime, setNewYorkTime] = useState('');
    const [tokyoTime, setTokyoTime] = useState('');

    const [randomCitation, setRandomCitation] = useState('');

    useEffect(() => {
        const chooseRandomCitation = () => {
        const randomIndex = Math.floor(Math.random() * citation.length);
        setRandomCitation(citation[randomIndex]);
        };

        chooseRandomCitation();

        const intervalId = setInterval(chooseRandomCitation, 24 * 60 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    /*
    useEffect(() => {
        const apiKey = 'CVSEHWQ4JVGJM60U '; // Remplacez par votre propre clé API Alpha Vantage
        const symbol = 'IBM';
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    
        axios
          .get(apiUrl)
          .then((response) => {
            // Vérifiez si la réponse est réussie (statut 200)
            if (response.status === 200) {
              const data = response.data;
              console.log(data); // Vous pouvez traiter les données ici
            } else {
              console.log('Erreur de réponse:', response.status);
            }
          })
          .catch((error) => {
            console.error('Erreur lors de la requête:', error);
          });
    }, []);
    */
  
    const extractTime = (datetime) => {
        const [datePart, timePart] = datetime.split('T');
        const [hourPart, minutePart, secondPart] = timePart.split(':');
        return {
            hour: hourPart,
            minute: minutePart,
            second: secondPart.slice(0, 2),
        };
    };
  
    useEffect(() => {
        const fetchTimeData = async (timezone, setter) => {
            try {
                const response = await axios.get(`https://worldtimeapi.org/api/timezone/${timezone}`);
                if (response.status === 200) {
                    const datetime = response.data.datetime;
                    const { hour, minute, second } = extractTime(datetime);
                    setter({ hour, minute, second });
                } else {
                    console.error(`Failed to fetch ${timezone} time data.`);
                }
                } catch (error) {
                console.error(`Error while fetching ${timezone} time:`, error);
            }
        };
    
        const londonIntervalId = setInterval(() => fetchTimeData('Europe/London', setLondonTime), 1000);
        const newYorkIntervalId = setInterval(() => fetchTimeData('America/New_York', setNewYorkTime), 1000);
        const tokyoIntervalId = setInterval(() => fetchTimeData('Asia/Tokyo', setTokyoTime), 1000);
    
        return () => {
            clearInterval(londonIntervalId);
            clearInterval(newYorkIntervalId);
            clearInterval(tokyoIntervalId);
        };
    }, []);

    return (
        <div className='conteneurTimeWorld'>

            {/*
            <iframe
            src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=110,17,25,34,32,6,37,26,5,22,39,93,14,48,10,35,105,43,38,4,36,12,72&calType=week&timeZone=58&lang=5"
            width="650"
            height="467"
            frameborder="0"
            allowtransparency="true"
            marginwidth="0"
            marginheight="0"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            ></iframe>
            <div className="poweredBy">
            <span style={{ fontSize: '11px', color: '#333333', textDecoration: 'none' }}>
                Calendrier économique fourni par{' '}
                <a
                href="https://fr.investing.com/"
                rel="nofollow"
                target="_blank"
                style={{ fontSize: '11px', color: '#06529D', fontWeight: 'bold' }}
                className="underline_link"
                >
                Investing.com France
                </a>
                , portail leader de la bourse.
            </span>
            </div>
            */}

            {/* ==================== LONDON ==================== */}
            <div className="secondConteneur">

                <div className="london ville">
                    <div className="titre">
                        <p>London</p>
                    </div>
                    <div className="imageDiv">
                        <p>emplacement image</p>
                    </div>
                    <div className="time">
                        <div className="heure timeDonnee"><p>{londonTime.hour}</p></div>
                        <p>:</p>
                        <div className="minute timeDonnee"><p>{londonTime.minute}</p></div>
                        <p>:</p>
                        <div className="seconde timeDonnee"><p>{londonTime.second}</p></div>
                    </div>
                </div>

                {/* ==================== NEW YORK ==================== */}

                <div className="NY ville">
                    <div className="titre">
                        <p>New York</p>
                    </div>
                    <div className="imageDiv">
                        <p>emplacement image</p>
                    </div>
                    <div className="time">
                        <div className="heure timeDonnee"><p>{newYorkTime.hour}</p></div>
                        <p>:</p>
                        <div className="minute timeDonnee"><p>{newYorkTime.minute}</p></div>
                        <p>:</p>
                        <div className="seconde timeDonnee"><p>{newYorkTime.second}</p></div>
                    </div>
                </div>

                {/* ==================== TOKYO ==================== */}

                <div className="tokyo ville">
                    <div className="titre">
                        <p>Tokyo</p>
                    </div>
                    <div className="imageDiv">
                        <p>emplacement image</p>
                    </div>
                    <div className="time">
                        <div className="heure timeDonnee"><p>{tokyoTime.hour}</p></div>
                        <p>:</p>
                        <div className="minute timeDonnee"><p>{tokyoTime.minute}</p></div>
                        <p>:</p>
                        <div className="seconde timeDonnee"><p>{tokyoTime.second}</p></div>
                    </div>
                </div>
            
            </div>

            <div className="section3">
                <div className="sectionPositionCourante">
                    <PositionCourante />
                </div>
                <div className='conteneurCitation'>
                    <div className="haut">
                        <p>Phrase du jour</p>
                    </div>
                    <div className="bas">
                        <div className="phrase">
                            <p>{randomCitation}</p>
                        </div>
                        <div className="imageDiv">
                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="sectionMorningRoutine">
                    <MorningRoutine />
                </div>
                <div className='sectionAnnonceEconomique'>
                    <AnnonceEconomique />
                </div>
            </div>
        </div>
    );
}

export default TimeWorld;
