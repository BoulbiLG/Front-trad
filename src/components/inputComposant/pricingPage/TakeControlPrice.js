import React from 'react';
import '../../../css/pricingPage/takeControlPrice.css';
import { Link } from 'react-router-dom';

const TakeControlPrice = () => {
  return (
    <div className='takeControlConteneurPrice'>
        <div className="secondConteneur">
            <div className="titre">
                <h3>Take Control of Your Trading Success</h3>
            </div>
            <Link className='boutonCommencer' to="/login">Start Journaling Today</Link>
        </div>
    </div>
  )
}

export default TakeControlPrice