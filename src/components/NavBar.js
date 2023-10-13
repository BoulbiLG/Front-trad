import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';
import logo from '../Assets/logo.png';
import Button from '../components/inputComposant/Button';
const NavBar = () => {
  const isAuthenticated = sessionStorage.getItem('auth') === 'true';
  const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
  const userId = userDataFromSession ? userDataFromSession._id : null;
  const [navBar2Menu, setNavBar2Menu] = useState('false');

  const affichageMenu = () => {
    if (navBar2Menu == 'true') {
      setNavBar2Menu('false');
    } else if (navBar2Menu == 'false') {
      setNavBar2Menu('true');
    }
  }

  return (
    <nav>
      <div className="navBar1">
        <Link className='simple' to="/"><img src={logo} alt="" /></Link>
        <div className="navigation">
          <Link className='onglet simple' to="/">Home</Link>
          <Link className='onglet simple' to="/pricing">Pricing</Link>
          <Link className='onglet simple' to="/">Blog</Link>
          <Link className='onglet simple' to="/">Support</Link>
          {!isAuthenticated && (
            <Link className='onglet login' to="/login">Se connecter</Link>
          )}
          {isAuthenticated && (
            <Link className='onglet login' to="profil">Mon profil</Link>
          )}
        </div>
      </div>

      {/* ========== NAV BAR 2 ========== */}

      <div className="navBar2">
        
        <div className="menuCache">
            <Link className='simple' to="/"><img src={logo} alt="" /></Link>
            <Button className='menu' onClick={() => {affichageMenu()}} />
        </div>

        {/*navBar2Menu === 'true' ? (
        <div className="boutonMenu">
          <Button className='menu' onClick={() => {setNavBar2Menu('false')}} />
        </div>
        ) : null */}

        {navBar2Menu === 'true' ? (
          <div className="navigation">
            <Link className='onglet simple' to="/">Home</Link>
            <Link className='onglet simple' to="/pricing">Pricing</Link>
            <Link className='onglet simple' to="/">Blog</Link>
            <Link className='onglet simple' to="/">Support</Link>
            {!isAuthenticated && (
              <Link className='onglet login' to="/login">Se connecter</Link>
            )}
            {isAuthenticated && (
              <Link className='onglet login' to="profil">Mon profil</Link>
            )}
          </div>
        ) : null }
        
      </div>
    </nav>
  );
};

export default NavBar;
