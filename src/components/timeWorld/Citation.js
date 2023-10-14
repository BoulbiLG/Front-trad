import React, { useState, useEffect } from 'react';
import '../../css/timeWorld/citation.css';
import { citation } from './tableauCitation';

const Citation = () => {
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

  return (
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
  );
}

export default Citation;