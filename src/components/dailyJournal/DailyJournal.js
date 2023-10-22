import React from 'react';
import '../../css/dailyJournal/dailyJournal.css';

const DailyJournal = () => {
  return (
    <div className='conteneurDailyJournal'>
        <div className="carte carte1">
          <div className="haut">
            <p>Triangle One</p>
          </div>
          <div className="milieu">
            <p>emplacement image</p>
          </div>
          <div className="basDaily">
            <div className="totalScore">
              <p className='score'>total score</p>
              <p className='nombre'>95.5</p>
            </div>
          </div>
        </div>

        <div className="carte carte2">
          <div className="haut">
            <p>Triangle One</p>
          </div>
          <div className="milieu">
            <p>emplacement image</p>
          </div>
          <div className="basDaily">
            <div className="totalScore">
              <p className='score'>total score</p>
              <p className='nombre'>95.5</p>
            </div>
          </div>
        </div>

        <div className="carte carte3">
          <div className="haut">
            <p>Triangle One</p>
          </div>
          <div className="milieu">
            <p>emplacement image</p>
          </div>
          <div className="basDaily">
            <div className="totalScore">
              <p className='score'>total score</p>
              <p className='nombre'>95.5</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DailyJournal