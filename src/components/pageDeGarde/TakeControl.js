import React from 'react';
import '../../css/pageDeGarde/takeControl.css';
import { Link } from 'react-router-dom';

const TakeControl = () => {
  return (
    <div className='takeControlConteneur'>
        <div className="secondConteneur">
            <div className="titre">
                <h3>Take Control of Your Trading Success</h3>
            </div>
            <Link className='boutonCommencer' to="/login">Start Journaling Today</Link>
        </div>
    </div>
  )
}

export default TakeControl