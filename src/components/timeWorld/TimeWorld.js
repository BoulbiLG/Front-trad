import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/timeWorld/timeWorld.css';

const TimeWorld = () => {
    const [londonTime, setLondonTime] = useState('');
    const [newYorkTime, setNewYorkTime] = useState('');
    const [tokyoTime, setTokyoTime] = useState('');
  
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

            {/* ==================== LONDON ==================== */}

            <div className="london">
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

            <div className="london">
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

            <div className="london">
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
    );
}

export default TimeWorld;
