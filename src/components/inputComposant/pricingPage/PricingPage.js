import React from 'react';
import Titre from './Titre';
import NavBar from '../../NavBar';
import FooterPrice from './FooterPrice';
import TakeControlPrice from './TakeControlPrice';
import Carte from './Carte';
import '../../../css/pricingPage/pricingPage.css';

const PricingPage = () => {
  return (
    <div className='pricingGlobal'>
        <NavBar />
        <Titre />
        <Carte />
        <TakeControlPrice />
        <FooterPrice />
    </div>
  )
}

export default PricingPage