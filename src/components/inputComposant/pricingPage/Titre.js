import React from 'react';
import '../../../css/pricingPage/titre.css';
import { Link } from 'react-router-dom';

const Titre = () => {
  return (
    <div className='ConteneurPricing'>
        <div className="secondConteneur">
            <h1>Pricing</h1>
            <div className="paragraphe">
                <p>Lorem ipsum dolor sit amet, consecteur adipliscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <Link className='boutonCommencer' to="/login">Start Journaling</Link>
        </div>
    </div>
  )
}

export default Titre