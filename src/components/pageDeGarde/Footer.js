import React from 'react';
import '../../css/pageDeGarde/footer.css';
import logo from '../../Assets/logo.png';
import reseauxSociaux from '../../Assets/reseauxSociaux.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerConteneur'>
        <div className="section1">
            <div className="secondConteneur">
                <div className="image">
                    <img className='logoImage' src={logo} alt="logo" />
                </div>
                <div className="page">
                    <Link className='onglet simple' to="/">Home</Link>
                    <Link className='onglet simple' to="/">Pricing</Link>
                    <Link className='onglet simple' to="/">Blog</Link>
                    <Link className='onglet simple' to="/">Support</Link>
                    <Link className='onglet simple' to="/login">Log in</Link>
                </div>
                <div className="image">
                    <img className='reseauSociaux' src={reseauxSociaux} alt="media network" />
                </div>
            </div>
        </div>
        <div className="section2">
            <p>Copyright © 2023 TradeMentis All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer